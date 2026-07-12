// src/middlewares/security.middleware.ts

import helmet from 'helmet';

/**
 * Global HTTP security middleware.
 *
 * Helmet automatically enables many security headers:
 *
 * - X-DNS-Prefetch-Control
 * - X-Frame-Options
 * - X-Content-Type-Options
 * - Referrer-Policy
 * - Origin-Agent-Cluster
 * - Cross-Origin-Opener-Policy
 * - Strict-Transport-Security
 * - X-Download-Options
 * - X-Permitted-Cross-Domain-Policies
 *
 * Compatible with:
 * - Express 5
 * - Helmet 8
 * - Render
 * - Swagger UI
 * - Cloudinary
 */
const securityMiddleware = helmet({
  /**
   * Disable Content Security Policy.
   *
   * Swagger UI injects inline scripts/styles.
   * Your frontend is hosted separately, so CSP
   * should be configured there instead.
   */
  contentSecurityPolicy: false,

  /**
   * Disable COEP.
   *
   * Prevents issues with Swagger UI and
   * third-party resources.
   */
  crossOriginEmbedderPolicy: false,

  /**
   * Prevent other origins from loading
   * protected resources unless explicitly allowed.
   */
  crossOriginResourcePolicy: {
    policy: 'cross-origin',
  },

  /**
   * Protect against cross-origin window attacks.
   */
  crossOriginOpenerPolicy: {
    policy: 'same-origin',
  },

  /**
   * Enable Origin-Agent-Cluster.
   */
  originAgentCluster: true,

  /**
   * Prevent clickjacking.
   */
  frameguard: {
    action: 'deny',
  },

  /**
   * Restrict Referer header.
   */
  referrerPolicy: {
    policy: 'strict-origin-when-cross-origin',
  },

  /**
   * HTTP Strict Transport Security.
   *
   * Browsers will only use HTTPS.
   */
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },

  /**
   * Prevent Adobe cross-domain policies.
   */
  permittedCrossDomainPolicies: {
    permittedPolicies: 'none',
  },
});

export default securityMiddleware;

export { securityMiddleware };
