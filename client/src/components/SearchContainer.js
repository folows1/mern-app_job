import { useState, useMemo } from "react";
import { useAppContext } from "../context/appContext";
import { FormRow, FormRowSelect } from ".";
import Wrapper from "../assets/wrappers/SearchContainer";

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState("");

  const {
    isLoading,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    handleChange,
    clearFilter,
    jobTypeOptions,
    statusOptions,
  } = useAppContext();

  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilter();
    setLocalSearch("");
  };

  const debounce = () => {
    let timer;

    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timer);
      timer = setTimeout(() => {
        handleChange({
          name: e.target.name,
          value: e.target.value,
        });
      }, 800);
    };
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceSearch = useMemo(() => debounce(), []);

  return (
    <Wrapper>
      <form className="form">
        <h4>search jobs</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={localSearch}
            handleChange={debounceSearch}
          />

          <FormRowSelect
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
            labelText="status"
          />

          <FormRowSelect
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
            labelText="type"
          />

          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />

          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
