import React from "react";
import MainNav from "../../components/MainNav";
import ChartLine from "../../components/ChartLine";
import PaymentMethod from "./PaymentMethod";
import TableTransaction from "./TableTransaction";
import { FaBars } from "react-icons/fa";

const LayoutTransaction = ({ handleToggleSidebar }) => {
  return (
    <div className="wrapper">
      <main>
        <div>
          <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
            <FaBars />
          </div>
        </div>

        <MainNav title="Transaction" />
        <div className="row">
          <div className="col-8">
            <ChartLine />
          </div>
          <div className="col-4">
            <PaymentMethod />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TableTransaction />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LayoutTransaction;
