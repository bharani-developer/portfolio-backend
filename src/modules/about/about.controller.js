// src\modules\about\about.controller.ts
import httpStatus from "http-status";
import { MESSAGE } from "../../constants/message.constant.js";
import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { AboutService } from "./about.service.js";
const createAbout = catchAsync(async (req, res) => {
    const result = await AboutService.createAbout(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: MESSAGE.CREATED,
        data: result,
    });
});
const getAbout = catchAsync(async (_req, res) => {
    const result = await AboutService.getAbout();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.RETRIEVED,
        data: result,
    });
});
const updateAbout = catchAsync(async (req, res) => {
    const result = await AboutService.updateAbout(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.UPDATED,
        data: result,
    });
});
const deleteAbout = catchAsync(async (_req, res) => {
    await AboutService.deleteAbout();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: MESSAGE.DELETED,
        data: null,
    });
});
export const AboutController = {
    createAbout,
    getAbout,
    updateAbout,
    deleteAbout,
};
//# sourceMappingURL=about.controller.js.map