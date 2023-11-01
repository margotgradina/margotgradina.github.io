import {create} from "zustand";
import {Colour} from "../sBlockTypes";

const initialColour = {
  hsl: {
    h: 0,
    s: 0,
    l: 0,
    a: 1,
  },
  hex: "#000000",
  rgb: {
    r: 0,
    g: 0,
    b: 0,
    a: 1,
  },
  hsv: {
    h: 0,
    s: 0,
    v: 0,
    a: 1,
  },
  oldHue: 0,
  source: "hsv",
};

type State = {
  gridData: any[];
  numRows: number | null;
  numCols: number | null;
  cellSize: string | null;
  border: string | null;

  currentLayer: number;
  currentColour: Colour | string | null;
  currentShape;
  s;
  currentRotation;
  // rides: Ride[];
  // selectedRideId: number;
  // selectedDate: Date;
  // // selectedTruck: TransportUnit | null;
  // selectedRide: Ride;
  // selectedPlanning: Planning;
  // includeSaturday: boolean;
  // includeSunday: boolean;
};

const initialState: State = {
  // rides: [],
  // selectedRideId: -1,
  // selectedDate: new Date(),
  // // selectedTruck: null,
  // selectedRide: {} as Ride,
  // selectedPlanning: {} as Planning,
  // includeSaturday: false,
  // includeSunday: false,
};

type Actions = {
  // setRides: (newRides: Ride[]) => void;
  // addRide: (newRide: Ride) => void;
  // removeRide: (index: number) => void;
  // setSelectedRideId: (rideId: number) => void;
  // setSelectedDate: (newDate: Date) => void;
  // // setSelectedTruck: (newTruck: TransportUnit) => void;
  // resetDateToToday: () => void;
  // setSelectedRide: (newRide: Ride) => void;
  // setSelectedPlanning: (newPlanning: Planning) => void;
  // toggleIncludeSaturday: () => void;
  // toggleIncludeSunday: () => void;
};

export const useSBlocksStore = create<State & Actions>((set) => ({
  ...initialState,
  clearDataStoreOO: () => set(initialState),

  // setRides: (newRides: Ride[]) => set(() => ({ rides: newRides })),
  // addRide: (newRide: Ride) => set((state) => ({ rides: [...state.rides, newRide] })),
  // removeRide: (index: number) => set((state) => ({ rides: state.rides.filter((ride, i) => i != index) })),

  // setSelectedRideId: (rideId: number) => set(() => ({ selectedRideId: rideId })),

  // setSelectedDate: (newDate: Date) => set(() => ({ selectedDate: newDate })),
  // // setSelectedTruck: (newTruck: TransportUnit) => set(() => ({ selectedTruck: newTruck })),
  // resetDateToToday: () => set(() => ({ selectedDate: new Date() })),

  // setSelectedRide: (newRide: Ride) => set(() => ({ selectedRide: newRide })),

  // setSelectedPlanning: (newPlanning: Planning) => set(() => ({ selectedPlanning: newPlanning })),

  // toggleIncludeSaturday: () => set((state) => ({ includeSaturday: !state.includeSaturday })),
  // toggleIncludeSunday: () => set((state) => ({ includeSunday: !state.includeSunday })),
}));
