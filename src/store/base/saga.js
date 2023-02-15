import { buffers, EventChannel, eventChannel } from "redux-saga";
import { ForkEffect, put, select, takeEvery, call, take, fork, delay } from "redux-saga/effects";
import { FetchApi } from "../../api/fetchService";
// import { CurrencyData, SocketCurrencyResonpse } from "../../api/types";
import { WebSocketService, WssApi } from "../../api/service";
// import { ActionTypes } from "../../types/redux";
import { setCurrencyData, setMaxPage, setNewPrices } from "./actions";
import { getCurrencyCapacity } from "./selector";
import { CurrencyActionTypes } from "./types";


function createSocketCurrency(socket) {
    return eventChannel((emit) => {
      socket.openConnection();
      socket.onMessage((response) => {
        const data = JSON.parse(response.data);
        emit(data);
      });
      return () => {
        socket.closeConnection();
      };
    }, buffers.sliding(5));
  }
  
function* watchNewCurrency() {
    const socketChanel = yield call(createSocketCurrency, WssApi);
    while (true) {
      try {
        const payload = yield take(socketChanel);
        yield delay(1000);
        yield put(setNewPrices(payload));
      } catch {
        socketChanel.close();
      }
    }
}

function* fetchCurrencyList() {
    try {
      const currencyListData = yield call(FetchApi.getCurrencyList);
      const currencyPerPage = yield select(getCurrencyCapacity);
      const maxPossiblePages = Math.ceil(currencyListData.length / currencyPerPage);
      yield put(setMaxPage(maxPossiblePages));
      yield put(setCurrencyData(currencyListData));
      yield fork(watchNewCurrency);
    } catch (error) {
      console.log(error);
    }
  }

export function* doFetchCurrencyList() {
    yield takeEvery(CurrencyActionTypes.FETCH_CURRENCY_DATA, fetchCurrencyList);
}