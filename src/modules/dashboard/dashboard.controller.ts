// src/modules/dashboard/dashboard.controller.ts

import httpStatus from "http-status";

import {
  catchAsync,
  sendResponse,
} from "../../utils/index.js";

import { DashboardService } from "./dashboard.service.js";

const getDashboardStats = catchAsync(
  async (req, res) => {
    const result =
      await DashboardService.getDashboardStats(
        req.user.role,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message:
        "Dashboard statistics retrieved successfully",
      data: result,
    });
  },
);

export const DashboardController = {
  getDashboardStats,
};