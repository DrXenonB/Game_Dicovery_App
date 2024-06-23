import UseData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const UsePlatforms = () => UseData<Platform>("/platforms/lists/parents");

export default UsePlatforms;
