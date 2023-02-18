import React, { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";
import GifItem from "./GifItem";

import useFetchGifts from "../hooks/useFetchGifts";

export function GifGrid({ category }: any) {
  const { imgs, isLoading } = useFetchGifts(category);

  return (
    <>
      {isLoading && <h1>Cargando.....</h1>}

      <h2>{category}</h2>

      <div className="card-grid">
        {imgs.map((image: any) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
}
