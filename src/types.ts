export interface NavInterface {
  // origin: string | null;
  origin: {
    description: string | undefined;
    location: {
      lat: number;
      lng: number;
    };
  };
  // destination: string | null;
  destination: {
    location: {
      lat: number;
      lng: number;
    };
    description: string | undefined;
  };
  travelTimeInformation: string | null;
}

export type RootStackParamList = {
  Home: undefined;
  MapScreen: undefined;
  EatsScreen: undefined;
};

export interface DataInterface {
  title: string;
  id: string;
  image: string;
  screen: string;
}
