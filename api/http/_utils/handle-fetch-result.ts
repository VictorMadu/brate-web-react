import { HttpError } from "../../../utils/status";

type Data = Record<string, any> | true;
type Err = HttpError;

type Result<D extends Data, E extends Err> = [D, undefined] | [undefined, E];

type DataVal<FetcherReturn extends Result<Data, Err>> = Exclude<
  FetcherReturn[0],
  undefined
>;

type ErrVal<FetcherReturn extends Result<Data, Err>> = Exclude<
  FetcherReturn[1],
  undefined
>;

export function handleFetchResult<
  FetcherReturn extends Result<Data, Err>,
  OnDataReturn extends any,
  OnErrReturn extends any
>(
  fetcher: () => Promise<FetcherReturn>,
  applyOnData: (data: DataVal<FetcherReturn>) => OnDataReturn,
  applyOnErr: (err: ErrVal<FetcherReturn>) => OnErrReturn
): Promise<OnDataReturn | OnErrReturn> {
  return fetcher().then((result) => {
    const data = result[0];
    if (data) return applyOnData(data as DataVal<FetcherReturn>);

    const err = result[1];
    return applyOnErr(err as ErrVal<FetcherReturn>);
  });
}
