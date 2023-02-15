import React from "react";
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Table from 'react-bootstrap/Table';

import { getCurrencyListPart } from "../store/base/selector";
import TableRow from "./TableRow";
import TableSort from "./TableSort";
import { PossibleSortTypes } from "../store/base/types";
import ViewMore from "./ViewMore";


const TableListing = () => {

  const currencyList = useSelector(getCurrencyListPart);

  return (
    <>
      <Container fluid className="" style={{marginTop:"-80px"}}>
        <Table responsive="sm" className="shadow bg-white" style={{ width: "90%", margin:"0 auto"}}>
          <thead>
            <tr>
              <TableSort sortType={PossibleSortTypes.BY_RANK}>Rank</TableSort>
              <TableSort sortType={PossibleSortTypes.BY_NAME}>Name</TableSort>
              <TableSort sortType={PossibleSortTypes.BY_PRICE}>Price</TableSort>
              <TableSort sortType={PossibleSortTypes.BY_MARKETCAP}>Market Cap</TableSort>
              <TableSort sortType={PossibleSortTypes.BY_VWAP}>VWAP(24hr)</TableSort>
              <TableSort sortType={PossibleSortTypes.BY_SUPPLY}>Supply</TableSort>
              <TableSort sortType={PossibleSortTypes.BY_VOLUME}>Volume24h</TableSort>
              <TableSort sortType={PossibleSortTypes.BY_CHANGE}>Change(24hr)</TableSort>
            </tr>
          </thead>
          <tbody>
            {currencyList.map((rowData) => (
              <TableRow key={rowData.symbol} data={rowData} />
            ))}
          </tbody>
        </Table>
      </Container>
      <div className="my-3 d-flex justify-content-center">
        <ViewMore/>
      </div>
    </>
  );
};

export default TableListing;

