// src/modules/about/about.service.ts

import { BaseSingletonService } from "../../shared/base/index.js";

import type {
  IAbout,
  TCreateAboutPayload,
  TUpdateAboutPayload,
} from "./about.interface.js";
import { About } from "./about.model.js";

/* -------------------------------------------------------------------------- */
/*                              Base Singleton                                */
/* -------------------------------------------------------------------------- */

const aboutBaseService = new BaseSingletonService<IAbout>(
  About,
  "About section",
);

/* -------------------------------------------------------------------------- */
/*                                  Service                                   */
/* -------------------------------------------------------------------------- */

const createAbout = async (payload: TCreateAboutPayload) => {
  return aboutBaseService.create(payload);
};

const getAbout = async () => {
  return aboutBaseService.get();
};

const updateAbout = async (payload: TUpdateAboutPayload) => {
  return aboutBaseService.update(payload);
};

const deleteAbout = async () => {
  return aboutBaseService.delete();
};

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const AboutService = {
  createAbout,

  getAbout,

  updateAbout,

  deleteAbout,
} as const;
