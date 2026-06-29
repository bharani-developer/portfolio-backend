// src/modules/hero/hero.service.ts

import { BaseSingletonService } from "../../shared/base/baseSingleton.service.js";

import { Hero } from "./hero.model.js";

import type { IHero } from "./hero.interface.js";

const heroBaseService = new BaseSingletonService<IHero>(
  Hero,
  "Hero section",
);

const createHero = async (
  payload: Partial<IHero>,
) => {
  return heroBaseService.create(payload);
};

const getHero = async () => {
  return heroBaseService.get();
};

const updateHero = async (
  payload: Partial<IHero>,
) => {
  return heroBaseService.update(payload);
};

const deleteHero = async () => {
  return heroBaseService.delete();
};

export const HeroService = Object.freeze({
  createHero,
  getHero,
  updateHero,
  deleteHero,
});