import platforms from "../Data/platforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const UsePlatforms = () => ({ data: platforms, error: null, isLoading: false });

export default UsePlatforms;
