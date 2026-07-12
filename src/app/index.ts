// src/app/index.ts

/**
 * Application module exports.
 *
 * This file serves as the public entry point for the application layer.
 * It re-exports the configured Express application and related types
 * without triggering server startup.
 */

export { default as app } from './app.js';
export { default } from './app.js';

export type { Express } from 'express';
