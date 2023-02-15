import React, { useEffect, useRef } from "react";
import { getParsedData } from "../pages/helper";

import "./table.css";


export const getChangeStatus = (
    prev,
    next
  ) => {
    if (prev && next) {
      return prev < next;
    }
    return undefined;
  };

export const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
  
    return ref.current;
};
  

const TableRow = React.memo(
    ({ data }) => {
      const {
        icon,
        marketCap,
        name,
        percent,
        positive,
        price,
        rank,
        shortName,
        supply,
        volume24h,
        vwap24h,
      } = getParsedData(data);
      const prevPrice = usePrevious(data.priceUsd);
      return (
        <tr key={price} changeValue={getChangeStatus(+prevPrice, +data.priceUsd)}>
            <td>{rank}</td>
            <td>
                <div className="d-flex align-items-center">
                    <img class="rounded-circle" style={{ height: "30px", width:"30px"}} src={icon} />&nbsp;
                    <div className="" style={{ fontSize: "0.7rem"}}><span>{name}</span><br/><span>{shortName}</span> </div>
                </div>
            </td>
            <td>{price}</td>
            <td>{marketCap}</td>
            <td>{vwap24h}</td>
            <td>{supply}</td>
            <td>{volume24h}</td>
            <td className = {positive == "up" ? "text-success " : "text-danger"}>{percent}</td>
        </tr>
      );
    }
  );
  
  export default TableRow;