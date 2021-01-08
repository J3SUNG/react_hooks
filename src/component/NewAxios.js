import React from "react";
import UseAxios from "../function/UseAxios";

const NewAxios = () => {
  const { loading, data, error, refetch } = UseAxios({
    url:
      "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json",
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <h2>{error && "Error"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};

export default NewAxios;
