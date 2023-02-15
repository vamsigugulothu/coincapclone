import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../store/base/actions";
import { getCurrencyPage, getMaxPage } from "../store/base/selector";
import Button from 'react-bootstrap/Button';

const ViewMore = () => {
  const currentPage = useSelector(getCurrencyPage);
  const maxPage = useSelector(getMaxPage);
  const dispatch = useDispatch();

  const viewHideList = () => {
    dispatch(changePage());
  };

  return <Button variant="primary" className="btn btn-primary btn-sm rounded-pill shadow" onClick={viewHideList}>{maxPage === currentPage ? "Hide" : "View More"}</Button>;
};

export default ViewMore;