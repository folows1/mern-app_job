import { useAppContext } from "../context/appContext";
import AreaChart from "./AreaChart";
import BarChart from "./BarChart";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { useState } from "react";

const ChartsContainer = () => {
  const [chartControl, setChartControl] = useState(true);
  const { monthlyApplications: data } = useAppContext();
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setChartControl((prev) => !prev)}>
        {chartControl ? "Area Chart" : "Bar Chart"}
      </button>
      {chartControl ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
