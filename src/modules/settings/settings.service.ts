// src/modules/settings/settings.service.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { BaseSingletonService } from '../../shared/base/index.js';

import { Settings } from './settings.model.js';

import type { ISettings, TCreateSettingsPayload, TUpdateSettingsPayload } from './settings.types.js';

/* -------------------------------------------------------------------------- */
/*                           Base Singleton Service                           */
/* -------------------------------------------------------------------------- */

const singletonService = new BaseSingletonService<ISettings>(Settings, 'Settings');

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

const createSettings = async (payload: TCreateSettingsPayload) => singletonService.create(payload);

/* -------------------------------------------------------------------------- */
/*                                     Get                                    */
/* -------------------------------------------------------------------------- */

const getSettings = async () => singletonService.get();

/* -------------------------------------------------------------------------- */
/*                                   Update                                   */
/* -------------------------------------------------------------------------- */

const updateSettings = async (payload: TUpdateSettingsPayload) => singletonService.update(payload);

/* -------------------------------------------------------------------------- */
/*                                   Delete                                   */
/* -------------------------------------------------------------------------- */

const deleteSettings = async () => singletonService.delete();

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const SettingsService = Object.freeze({
  createSettings,

  getSettings,

  updateSettings,

  deleteSettings,
});
