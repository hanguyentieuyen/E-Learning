import { useState } from "react";
import Sidebar from "../components/intructor/Sidebar";
import LayoutTransaction from "../components/intructor/LayoutTransaction";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const Transaction = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = (checked) => {
    setCollapsed(checked);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="content-layout">
        <Sidebar
          collapsed={collapsed}
          toggled={toggled}
          handleToggleSidebar={handleToggleSidebar}
          handleCollapsedChange={handleCollapsedChange}
        />
        <LayoutTransaction
          toggled={toggled}
          collapsed={collapsed}
          handleToggleSidebar={handleToggleSidebar}
        />
      </div>
    </ThemeProvider>
  );
};

export default Transaction;
