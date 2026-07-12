// src/modules/about/about.service.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { BaseSingletonService } from '../../shared/base/index.js';

import { About } from './about.model.js';

import type { IAbout, TCreateAboutPayload, TUpdateAboutPayload } from './about.types.js';

/* -------------------------------------------------------------------------- */
/*                           Base Singleton Service                           */
/* -------------------------------------------------------------------------- */

const singletonService = new BaseSingletonService<IAbout>(About, 'About section');

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

const createAbout = async (payload: TCreateAboutPayload) => singletonService.create(payload);

/* -------------------------------------------------------------------------- */
/*                                     Get                                    */
/* -------------------------------------------------------------------------- */

const getAbout = async () => singletonService.get();

/* -------------------------------------------------------------------------- */
/*                                   Update                                   */
/* -------------------------------------------------------------------------- */

const updateAbout = async (payload: TUpdateAboutPayload) => singletonService.update(payload);

/* -------------------------------------------------------------------------- */
/*                                   Delete                                   */
/* -------------------------------------------------------------------------- */

const deleteAbout = async () => singletonService.delete();

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const AboutService = Object.freeze({
  createAbout,

  getAbout,

  updateAbout,

  deleteAbout,
});
