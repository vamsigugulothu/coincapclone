import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import TableListing from "../components/TableListing";
import { fetchCurrencyData } from "../store/base/actions";
import Stats from "../components/Stats";

const CurrencyList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrencyData());
  }, [dispatch]);

  const data = [
      {
        "title": "Market Cap",
        "value": "$ 893.01b"
      },
      {
        "title": "Exchange Vol",
        "value": "$ 140.63b"
      },
      {
        "title": "Assets",
        "value": "1,656"
      },
      {
        "title": "Exchanges",
        "value": "74"
      },
      {
        "title": "Markets",
        "value": "6,856"
      },
      {
        "title": "BTC Dom Index",
        "value": "68.7%"
      }
    ]

  return (
    <>
      <Stats data={data} />
      <TableListing />
    </>
  );
};

export default CurrencyList;