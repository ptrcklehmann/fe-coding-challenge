export type Coordinates = {
  latitude: number | null;
  longitude: number | null;
};

export type Location = {
  name: string | null;
  code: string | null;
  slug: string | null;
  timezone: string | null;
  coordinates: Coordinates;
};
