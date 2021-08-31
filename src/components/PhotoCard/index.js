import React, { useRef, useEffect, useState, Fragment } from "react";
import { ImgWrapper, Img, Button, Article } from "./style";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src }) => {
  const key = `like-${id}`;
  const [liked, setLike] = useLocalStorage(key, false);
  const Icon = liked ? MdFavorite : MdFavoriteBorder;
  const [show, elementoDelRef] = useNearScreen();

  return (
    <Article ref={elementoDelRef}>
      {show && (
        <Fragment>
          <a href={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={DEFAULT_IMAGE} alt="" />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLike(!liked)}>
            <Icon size="32px" />
            {likes} likes!
          </Button>
        </Fragment>
      )}
    </Article>
  );
};
