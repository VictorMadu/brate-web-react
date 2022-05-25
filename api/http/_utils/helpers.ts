import { HttpError } from "../../../utils/status";

type ExcludeUndefined<
  T extends [Record<string, any> | undefined, any],
  colNo extends 0 | 1
> = Exclude<T[colNo], undefined>;

type Data<T extends [Record<string, any> | undefined, any]> = ExcludeUndefined<
  T,
  0
>;
type Error<T extends [Record<string, any> | undefined, any]> = ExcludeUndefined<
  T,
  1
>;

type ResData = [Record<string, any>, undefined] | [undefined, HttpError];

export const applyHttpResCb = <T extends ResData>(
  resData: T,
  onSuccess: (data: Data<T>) => any,
  onFailure: (data: Error<T>) => any
) => {
  const [data, err] = resData;
  if (err) return onFailure(err as Error<T>);
  if (data) return onSuccess(data as Data<T>);
};
