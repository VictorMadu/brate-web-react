import { getErateBaseURL } from "../_utils";

const ERATE_BASE = getErateBaseURL();

// user
export const USER_SIGN_UP = ERATE_BASE + "/user/auth/signup";
export const SIGN_IN = ERATE_BASE + "/user/auth/signin";
export const SEND_OTP = ERATE_BASE + "/user/auth/otp/send";
export const VERIFY_OTP = ERATE_BASE + "/user/auth/otp/verify";
export const GET_USER_DATA = ERATE_BASE + "/user/";
export const GET_APP_DATA = ERATE_BASE + "/user/web-client";
export const EDIT_USER_DATA = ERATE_BASE + "/user/edit";
export const EDIT_APP_DATA = ERATE_BASE + "/user/web-client/edit";
export const UPDATE_APP_DATA = ERATE_BASE + "/user/notification/check";
export const GET_NOTIFICATIONS_DATA = ERATE_BASE + "/user/notification/list";
export const DELETE_NOTIFICATIONS = ERATE_BASE + "/user/notification";
export const REGISTER_FOR_WS = ERATE_BASE + "/user/ws/ticket";
export const REFRESH_TOKEN = ERATE_BASE + "/auth/refresh";

// currency
export const GET_CURRENCY_LIST = ERATE_BASE + "/currency-pair/names/list";
export const STAR_CURRENCY_PAIR = ERATE_BASE + "/currency-pair/favourites/star";
export const UNSTAR_CURRENCY_PAIR =
  ERATE_BASE + "/currency-pair/favourites/star";
export const SET_CURRENCY_ALERT = ERATE_BASE + "/currency-pair/alerts";
export const GET_CURRENCY_ALERT = ERATE_BASE + "/currency-pair/alerts";
export const DELETE_CURRENCY_ALERT = ERATE_BASE + "/currency-pair/alerts";

// market
export const GET_BLACK_MARKET_TRADE_DATA = ERATE_BASE + "/market/trade/list";
export const GET_MARKET_CURRENCIES_RATE = ERATE_BASE + "/market/rate/list";
export const SET_BLACK_MARKET_RATE = ERATE_BASE + "/market/rate";
export const BLACK_MARKET_TRADE_CURRENCY =
  ERATE_BASE + "/market/trade/exchange";
export const GET_PARALLEL_MARKET_RATE =
  ERATE_BASE + "/market/rate/parallel/latest";
export const GET_BLACK_MARKET_RATE = ERATE_BASE + "/market/rate/black/latest";
export const GET_SELLER_PAIRS_FOR_SALE =
  ERATE_BASE + "/market/sellers/trade/list";

// wallet
export const FUND_WALLET = ERATE_BASE + "/wallet/fund";
export const GET_WALLET_DATA = ERATE_BASE + "/wallet/currencies/amount/list";
export const WITHDRAW_FROM_WALLET = ERATE_BASE + "/wallet/withdraw";
