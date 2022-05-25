import { HttpError } from "../../../utils/status";

export function noTokenError() {
  return [undefined, HttpError.NO_TOKEN] as [undefined, HttpError];
}
