import { useAppContext } from "../context/appContext";
import Loading from "./Loading";
import Job from "./Job";
import Alert from "./Alert";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useEffect } from "react";
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const {
    getJobs,
    jobs,
    isLoading,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
    numOfPages,
    showAlert,
  } = useAppContext();

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) <Loading center />;

  if (totalJobs === 0)
    <Wrapper>
      <h2>No jobs to display...</h2>
    </Wrapper>;

  return (
    <Wrapper>
      {showAlert && <Alert />}
      <h5>
        {totalJobs} job{totalJobs > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
