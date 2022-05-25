export type uuid = string;

export type RequiredData<T extends { data: any }> = T & {
  data: Required<T["data"]>;
} extends infer O
  ? O
  : never;

export type Res = { status: boolean; msg: string; data?: any };

export type ResData<T extends Record<string, any>> = T extends { data: infer O }
  ? O
  : true;
