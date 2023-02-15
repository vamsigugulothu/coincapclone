import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSortDirection, setSortType } from "../store/base/actions";
import { isSortDirectonToLow, getSortType } from "../store/base/selector";

const TableSort = ({ children, sortType }) => {


  const dispatch = useDispatch();
  const sortDirection = useSelector(isSortDirectonToLow);
  const activeSortType = useSelector(getSortType);

  const changeSortTypeHandler = () => {
    dispatch(setSortType(sortType));
  };

  const changeSortDirectionHandler = () => {
    dispatch(changeSortDirection());
  };

  return (
    <th>
      <div style={{minWidth:"80px" }} onClick={changeSortTypeHandler} active={sortType === activeSortType}>
        {children} <i class="fas fa-sort fa-xs" onClick={changeSortDirectionHandler} style={{cursor:"pointer"}}></i>
      </div>
      <span
        onClick={changeSortDirectionHandler}
        active={sortType === activeSortType}
        tabIndex={sortType === activeSortType ? 0 : -1}
        toLow={sortDirection}
      />
    </th>
  );
};

export default TableSort;
