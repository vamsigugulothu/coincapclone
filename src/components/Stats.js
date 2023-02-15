import React from "react";
import Container from 'react-bootstrap/Container';
import StatsItem from "./StatsItem";
import "./table.css";

const Stats = ({ data }) => {

  return (
    <Container fluid style={{ height: "260px", width: "100%", paddingTop:"100px", background: "linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255)"}}>
        <div id="stats" class="row"  style={{ width: "90%", margin:"0 auto"}}>
            {data.map((item) => (
                <div class="col">
                  <StatsItem key={item.title} title={item.title} value={item.value} />
                </div>
            ))}
        </div>
        <div className="text-center text-white h4" id="subhead">Welcome to Coin Currency</div>
    </Container>
  );
};

export default Stats;
