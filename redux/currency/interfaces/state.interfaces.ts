type Symbol = string;
type Name = string;

export interface CurrencyState {
  base: string;
  list: Record<Symbol, Name>;
  error: number | undefined;
}
