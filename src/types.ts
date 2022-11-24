export interface NavInterface {
  origin: string | null;
  destination: string | null;
  travelTimeInformation: string | null;
}

export type RootStackParamList = {
  Home: undefined;
};

export interface DataInterface {
  title: string;
  id: string;
  image: string;
  screen: string;
}
