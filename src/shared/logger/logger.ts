/**
 * =============================================================================
 * File: src/shared/logger/logger.ts
 * Description:
 * Centralized application logger.
 * =============================================================================
 */

import os from 'node:os';
import process from 'node:process';

import pino, {
  stdSerializers,
  type Bindings,
  type ChildLoggerOptions,
  type Logger,
  type LoggerOptions,
} from 'pino';

import { env } from '../../configs/env.js';

/* -------------------------------------------------------------------------- */
/*                              Application Info                              */
/* -------------------------------------------------------------------------- */

const SERVICE_NAME = 'portfolio-backend';

const SERVICE_VERSION = '1.0.0';

/* -------------------------------------------------------------------------- */
/*                              Environment                                   */
/* -------------------------------------------------------------------------- */

const isDevelopment = env.NODE_ENV === 'development';

const isProduction = env.NODE_ENV === 'production';

const isTest = env.NODE_ENV === 'test';

/* -------------------------------------------------------------------------- */
/*                               Base Bindings                                */
/* -------------------------------------------------------------------------- */

const baseBindings = Object.freeze({
  service: SERVICE_NAME,

  version: SERVICE_VERSION,

  environment: env.NODE_ENV,

  hostname: os.hostname(),

  pid: process.pid,

  node: process.version,
});

/* -------------------------------------------------------------------------- */
/*                             Sensitive Fields                               */
/* -------------------------------------------------------------------------- */

const redactPaths: string[] = [
  'req.headers.authorization',
  'req.headers.cookie',
  "req.headers['set-cookie']",

  'authorization',
  'cookie',

  'password',
  'confirmPassword',

  'accessToken',
  'refreshToken',

  'token',
  'jwt',
  'secret',

  'apiKey',
  'apiSecret',

  'creditCard',
  'cvv',
];

/* -------------------------------------------------------------------------- */
/*                               Serializers                                  */
/* -------------------------------------------------------------------------- */

const serializers: LoggerOptions['serializers'] = {
  err: stdSerializers.err,

  req: stdSerializers.req,

  res: stdSerializers.res,
};

/* -------------------------------------------------------------------------- */
/*                               Logger Options                               */
/* -------------------------------------------------------------------------- */

const loggerOptions: LoggerOptions = {
  level: isProduction ? 'info' : isTest ? 'silent' : 'debug',

  base: baseBindings,

  timestamp: pino.stdTimeFunctions.isoTime,

  serializers,

  redact: {
    paths: redactPaths,

    censor: '[Redacted]',
  },

  messageKey: 'message',

  errorKey: 'error',

  formatters: {
    level(label) {
      return {
        level: label.toUpperCase(),
      };
    },

    bindings(bindings: Bindings) {
      return {
        pid: bindings.pid,

        hostname: bindings.hostname,
      };
    },
  },

  mixin() {
    return {
      environment: env.NODE_ENV,
    };
  },
};
/* -------------------------------------------------------------------------- */
/*                         Development Transport                              */
/* -------------------------------------------------------------------------- */

if (isDevelopment) {
  loggerOptions.transport = {
    target: 'pino-pretty',

    options: {
      colorize: true,

      singleLine: false,

      translateTime: 'SYS:yyyy-mm-dd HH:MM:ss.l',

      ignore: 'pid,hostname',

      levelFirst: true,

      messageFormat: '{message}',

      errorLikeObjectKeys: ['err', 'error'],

      hideObject: false,

      sync: false,
    },
  };
}

/* -------------------------------------------------------------------------- */
/*                           Production Configuration                         */
/* -------------------------------------------------------------------------- */

/**
 * Production should always emit structured JSON logs.
 */
if (isProduction) {
  delete loggerOptions.transport;
}

/* -------------------------------------------------------------------------- */
/*                               Logger Instance                              */
/* -------------------------------------------------------------------------- */

export const logger: Logger = pino(loggerOptions);

/* -------------------------------------------------------------------------- */
/*                           Child Logger Factory                             */
/* -------------------------------------------------------------------------- */

export const createChildLogger = (bindings: Bindings, options?: ChildLoggerOptions): Logger =>
  logger.child(bindings, options);

/* -------------------------------------------------------------------------- */
/*                           Request Logger Factory                           */
/* -------------------------------------------------------------------------- */

export const createRequestLogger = (requestId: string): Logger =>
  logger.child({
    requestId,
  });

/* -------------------------------------------------------------------------- */
/*                            Module Logger Factory                           */
/* -------------------------------------------------------------------------- */

export const createModuleLogger = (module: string): Logger =>
  logger.child({
    module,
  });

/* -------------------------------------------------------------------------- */
/*                             Default Export                                 */
/* -------------------------------------------------------------------------- */

export default logger;
