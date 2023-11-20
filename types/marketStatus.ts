import type {StringOrNull} from "~/types/base";

export interface IMarketStatus {
  "exchange": string,
  "holiday": StringOrNull,
  "isOpen": boolean,
  "session": string,
  "timezone": string,
  "t": number
}
