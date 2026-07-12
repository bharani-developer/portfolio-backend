// src/modules/hero/hero.service.ts

/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import { BaseSingletonService } from '../../shared/base/index.js';

import { Hero } from './hero.model.js';

import type { IHero, TCreateHeroPayload, TUpdateHeroPayload } from './hero.types.js';

/* -------------------------------------------------------------------------- */
/*                           Base Singleton Service                           */
/* -------------------------------------------------------------------------- */

const singletonService = new BaseSingletonService<IHero>(Hero, 'Hero section');

/* -------------------------------------------------------------------------- */
/*                                   Create                                   */
/* -------------------------------------------------------------------------- */

const createHero = async (payload: TCreateHeroPayload) => singletonService.create(payload);

/* -------------------------------------------------------------------------- */
/*                                     Get                                    */
/* -------------------------------------------------------------------------- */

const getHero = async () => singletonService.get();

/* -------------------------------------------------------------------------- */
/*                                   Update                                   */
/* -------------------------------------------------------------------------- */

const updateHero = async (payload: TUpdateHeroPayload) => singletonService.update(payload);

/* -------------------------------------------------------------------------- */
/*                                   Delete                                   */
/* -------------------------------------------------------------------------- */

const deleteHero = async () => singletonService.delete();

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */

export const HeroService = Object.freeze({
  createHero,

  getHero,

  updateHero,

  deleteHero,
});
