// src\modules\settings\settings.service.ts
import httpStatus from "http-status";
import AppError from "../../utils/AppError.js";
import { SETTINGS_MESSAGE } from "./settings.constant.js";
import { Settings } from "./settings.model.js";
const createSettings = async (payload) => {
    const existingSettings = await Settings.findOne();
    if (existingSettings) {
        throw new AppError(httpStatus.CONFLICT, SETTINGS_MESSAGE.ALREADY_EXISTS);
    }
    const result = await Settings.create(payload);
    return result;
};
const getSettings = async () => {
    const result = await Settings.findOne();
    if (!result) {
        throw new AppError(httpStatus.NOT_FOUND, SETTINGS_MESSAGE.NOT_FOUND);
    }
    return result;
};
const updateSettings = async (payload) => {
    const existingSettings = await Settings.findOne();
    if (!existingSettings) {
        throw new AppError(httpStatus.NOT_FOUND, SETTINGS_MESSAGE.NOT_FOUND);
    }
    const result = await Settings.findByIdAndUpdate(existingSettings._id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
};
const deleteSettings = async () => {
    const existingSettings = await Settings.findOne();
    if (!existingSettings) {
        throw new AppError(httpStatus.NOT_FOUND, SETTINGS_MESSAGE.NOT_FOUND);
    }
    await Settings.findByIdAndDelete(existingSettings._id);
    return null;
};
export const SettingsService = {
    createSettings,
    getSettings,
    updateSettings,
    deleteSettings,
};
//# sourceMappingURL=settings.service.js.map