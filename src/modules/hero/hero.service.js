// src/modules/hero/hero.service.ts
import { BaseSingletonService } from "../../shared/base/baseSingleton.service.js";
import { Hero } from "./hero.model.js";
const heroBaseService = new BaseSingletonService(Hero, "Hero section");
const createHero = async (payload) => {
    return heroBaseService.create(payload);
};
const getHero = async () => {
    return heroBaseService.get();
};
const updateHero = async (payload) => {
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
//# sourceMappingURL=hero.service.js.map