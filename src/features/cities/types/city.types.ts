export type City = {
  id: number;
  name: string;
  officesCount: number;
  image: string;
  slug: string;
};

export type CityCardProps = {
  city: City;
};