interface Rate {
  pair: string;
  rate: number;
  prev_rate: number;
  is_favourite?: boolean;
}

export interface RateState {
  parallelRates: Rate[];
  parallelError: number | undefined;
  blackRates: Rate[];
  blackError: number | undefined;
}
