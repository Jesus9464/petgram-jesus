import React from "react";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCard = () => {
  return (
    <ul>
      {[1, 2, 3, 4, 5].map((item) => (
        <li key={item}>
          <PhotoCard />
        </li>
      ))}
    </ul>
  );
};
