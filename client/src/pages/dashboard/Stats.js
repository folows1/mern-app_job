import { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { ChartsContainer, StatsContainer } from "../../components";
import Loading from "../../components/Loading";

const Stats = () => {
  const { showStats, monthlyApplications, isLoading } = useAppContext();

  useEffect(() => {
    showStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) <Loading center />;

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
