import { all, AllEffect, ForkEffect } from "redux-saga/effects";
import { doFetchCurrencyList }  from "./base/saga";

export default function* rootSaga() {
    yield all([
        doFetchCurrencyList()
    ])
}