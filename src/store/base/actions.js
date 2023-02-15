import { CurrencyActionTypes } from "./types"


export const setCurrencyData = (data) => ({
    type: CurrencyActionTypes.SET_CURRENCY_DATA,
    payload: data,
} );
  
  export const fetchCurrencyData = () => ({
    type: CurrencyActionTypes.FETCH_CURRENCY_DATA,
  } );
  
  export const setMaxPage = (pageCounts) => ({
    type: CurrencyActionTypes.SET_MAX_PAGE,
    payload: pageCounts,
  });
  
  export const changePage = () => ({
    type: CurrencyActionTypes.CHANGE_VIEW_PAGE,
  });
  
  export const setSortType = (sortType) => ({
    type: CurrencyActionTypes.SET_SORT_TYPE,
    payload: sortType,
  });
  
  export const changeSortDirection = () => ({
    type: CurrencyActionTypes.CHANGE_SORT_DIRECTION,
  });
  
  export const setNewPrices = (newPrices) => ({
    type: CurrencyActionTypes.SET_NEW_PRICES,
    payload: newPrices,
  });