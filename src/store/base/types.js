
export const CurrencyActionTypes = {
    FETCH_CURRENCY_DATA : "currency/FETCH_CURRENCY_DATA",
    SET_CURRENCY_DATA : "currency/SET_CURRENCY_DATA",
    SET_SORT_TYPE : "currency/SET_SORT_TYPE",
    SET_MAX_PAGE : "currency/SET_MAX_PAGE",
    SET_NEW_PRICES : "currency/SET_NEW_PRICES",
    CHANGE_VIEW_PAGE : "currency/CHANGE_VIEW_PAGE",
    CHANGE_SORT_DIRECTION : "currency/CHANGE_SORT_DIRECTION",
}


export const PossibleSortTypes = {
    NOT_SORTED : "NOT_SORTED",
    BY_RANK : "BY_RANK",
    BY_NAME : "BY_NAME",
    BY_PRICE : "BY_PRICE",
    BY_MARKETCAP : "BY_MARKET_CAP",
    BY_VWAP : "BY_VWAP",
    BY_SUPPLY : "BY_SUPPLY",
    BY_VOLUME : "BY_VOLUME",
    BY_CHANGE : "BY_CHANGE",
}