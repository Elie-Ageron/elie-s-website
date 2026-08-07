import { coreCities } from './cities/list-core';
import { tarentaiseCities } from './cities/list-tarentaise';
import { chamberyCities } from './cities/list-chambery';
import type { CityData } from './cities/types';

export type { CityData, CityDepth, CityLocale, CityBlock, CityFaq } from './cities/types';

/**
 * Toutes les pages locales du site. L'ordre pilote la liste affichee en pied
 * de page et dans le maillage interne.
 */
export const cities: CityData[] = [...coreCities, ...tarentaiseCities, ...chamberyCities];

export const getCityBySlug = (slug: string): CityData | undefined =>
  cities.find((city) => city.slug === slug);

/** Pages locales a proposer depuis une autre page locale. */
export const getRelatedCities = (city: CityData, limit = 3): CityData[] => {
  const picked: CityData[] = [];
  const push = (candidate?: CityData) => {
    if (candidate && candidate.slug !== city.slug && picked.length < limit && !picked.includes(candidate)) {
      picked.push(candidate);
    }
  };

  (city.relatedCities ?? []).forEach((slug) => push(getCityBySlug(slug)));
  cities.filter((c) => c.department === city.department).forEach(push);
  cities.forEach(push);

  return picked;
};
