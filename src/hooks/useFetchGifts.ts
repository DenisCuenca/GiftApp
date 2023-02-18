import React, { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";

export default function useFetchGifts( category : any) {
  const [imgs, setimgs] = useState([]);
  const [isLoading, setIsLoading] = useState(true)


  const getImgs = async () => {

    const newImgs = await getGifts(category);

    setimgs(newImgs);
    setIsLoading(false);
  }; 

  useEffect(() => {
    getImgs();
  }, []);

  return {
    imgs,
    isLoading,
  };
}
