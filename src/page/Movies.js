import React, { useContext, useEffect, useState } from "react";
import LayOut from "../components/LayOut";
import useMovies from "../hooks/useMovies";
import Card from "../components/Card";
import { Store } from "../store/ContextProvider";

const Movies = () => {

const { movies } = useContext(Store);
  

  return (
    <LayOut>
      <div className=" w-full flex items-center justify-center py-6 flex-row flex-wrap gap-6 bg-slate-200">
        {movies?.code === 200 &&
          movies?.data.map((ele) => {
            return <Card ele={ele} />;
          })}
      </div>
    </LayOut>
  );
};

export default Movies;
