// src\modules\about\about.service.ts

import { BaseSingletonService } from "../../shared/base/index.js";

import { About } from "./about.model.js";

import type { IAbout } from "./about.interface.js";

const aboutBaseService = new BaseSingletonService<IAbout>(
  About,
  "About section",
);

const createAbout = async (payload: Partial<IAbout>) => {
  return aboutBaseService.create(payload);
};

const getAbout = async () => {
  return aboutBaseService.get();
};

const updateAbout = async (payload: Partial<IAbout>) => {
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
