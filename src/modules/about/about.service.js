// src\modules\about\about.service.ts
import { BaseSingletonService } from "../../shared/base/index.js";
import { About } from "./about.model.js";
const aboutBaseService = new BaseSingletonService(About, "About section");
const createAbout = async (payload) => {
    return aboutBaseService.create(payload);
};
const getAbout = async () => {
    return aboutBaseService.get();
};
const updateAbout = async (payload) => {
    return aboutBaseService.update(payload);
};
const deleteAbout = async () => {
    return aboutBaseService.delete();
};
export const AboutService = {
    createAbout,
    getAbout,
    updateAbout,
    deleteAbout,
};
//# sourceMappingURL=about.service.js.map