// src/modules/dashboard/dashboard.controller.ts

import httpStatus from 'http-status';

import { DashboardService } from './dashboard.service.js';
import { catchAsync, sendResponse } from '../../shared/utils/index.js';

const getDashboardStats = catchAsync(async (req, res) => {
  const result = await DashboardService.getDashboardStats(req.user.role);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Dashboard statistics retrieved successfully',
    data: result,
  });
});

export const DashboardController = {
  getDashboardStats,
};
