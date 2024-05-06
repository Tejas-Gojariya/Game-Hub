import { Genre } from "./Genre";
import { publishers } from "./Publisher";
import { Platform } from "./platforms";

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: publishers[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
