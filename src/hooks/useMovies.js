import { useState, useEffect } from "react";
import axios from "axios";

const useMovies = () => {




  const [data, setData] = useState(null);
  const URL_LINK = "https://api.tvmaze.com/search/shows?q=all";
  useEffect(() => {
    axios
      .get(URL_LINK)
      .then((res) => {
        console.log(res);
        if(res.status===200)
        {
            setData({code:res.status,data:res.data})
        }
        else
        {
            setData({code:res.status,data:[]})
        }
      })
      .catch((err) => {
        setData({code:500,data:[]})
      });
  }, []);

  return data;
};

export default useMovies;
