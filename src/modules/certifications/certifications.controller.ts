/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

// Express
import type { Request, Response } from 'express';

// Third-party
import httpStatus from 'http-status';

// Constants
import { MESSAGE } from '../../constants/index.js';

// Shared
import { catchAsync, sendResponse } from '../../shared/utils/index.js';

// Module
import { CertificationService } from './certifications.service.js';

// Types
import type {
  TCreateCertificationPayload,
  TUpdateCertificationPayload,
} from './certifications.types.js';

/* -------------------------------------------------------------------------- */
/*                              Helper Functions                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                Helper Types                                */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

const createCertification = catchAsync(async (req: Request, res: Response) => {
  const payload: TCreateCertificationPayload = req.body;

  const result = await CertificationService.createCertification(payload);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,

    success: true,

    message: MESSAGE.CREATED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                  Get All                                   */
/* -------------------------------------------------------------------------- */

const getCertifications = catchAsync(async (req: Request, res: Response) => {
  const result = await CertificationService.getCertifications(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    meta: result.meta,

    data: result.result,
  });
});
/* -------------------------------------------------------------------------- */
/*                                  Get One                                   */
/* -------------------------------------------------------------------------- */

const getCertificationById = catchAsync(async (req: Request, res: Response) => {
  const id = String(req.params.id);

  const result = await CertificationService.getCertificationById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getCertificationBySlug = catchAsync(async (req: Request, res: Response) => {
  const slug = String(req.params.slug);

  const result = await CertificationService.getCertificationBySlug(slug);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                   Update                                   */
/* -------------------------------------------------------------------------- */

const updateCertification = catchAsync(async (req: Request, res: Response) => {
  const id = String(req.params.id);

  const payload: TUpdateCertificationPayload = req.body;

  const result = await CertificationService.updateCertification(id, payload);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.UPDATED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                                   Delete                                   */
/* -------------------------------------------------------------------------- */

const deleteCertification = catchAsync(async (req: Request, res: Response) => {
  const id = String(req.params.id);

  const result = await CertificationService.deleteCertification(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.DELETED,

    data: result,
  });
});
/* -------------------------------------------------------------------------- */
/*                               Custom Queries                               */
/* -------------------------------------------------------------------------- */

const getActiveCertifications = catchAsync(async (_req: Request, res: Response) => {
  const result = await CertificationService.getActiveCertifications();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getCertificationsBySkill = catchAsync(async (req: Request, res: Response) => {
  const skill = String(req.params.skill);

  const result = await CertificationService.getCertificationsBySkill(skill);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getExpiredCertifications = catchAsync(async (_req: Request, res: Response) => {
  const result = await CertificationService.getExpiredCertifications();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getValidCertifications = catchAsync(async (_req: Request, res: Response) => {
  const result = await CertificationService.getValidCertifications();

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

const getCertificationsByIssuer = catchAsync(async (req: Request, res: Response) => {
  const issuer = String(req.params.issuer);

  const result = await CertificationService.getCertificationsByIssuer(issuer);

  sendResponse(res, {
    statusCode: httpStatus.OK,

    success: true,

    message: MESSAGE.RETRIEVED,

    data: result,
  });
});

/* -------------------------------------------------------------------------- */
/*                               Custom Actions                               */
/* -------------------------------------------------------------------------- */

// No custom actions.

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const CertificationController = {
  createCertification,

  getCertifications,

  getCertificationById,

  getCertificationBySlug,

  updateCertification,

  deleteCertification,

  getActiveCertifications,

  getCertificationsBySkill,

  getExpiredCertifications,

  getValidCertifications,

  getCertificationsByIssuer,
};
