import React, { Fragment } from "react";
import { ImgWrapper, Img, Article } from "./style";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNearScreen } from "../../hooks/useNearScreen";
import { ButtonLike } from "../ButtonLike/index";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, likes = 0, src }) => {
  const key = `like-${id}`;
  const [liked, setLike] = useLocalStorage(key, false);
  const [show, elementoDelRef] = useNearScreen();

  return (
    <Article ref={elementoDelRef}>
      {show && (
        <Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src ? src : DEFAULT_IMAGE} alt="" />
            </ImgWrapper>
          </a>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleButtonLike = () => {
                !liked &&
                  toggleLike({
                    variables: {
                      input: { id },
                    },
                  });
                setLike(!liked);
              };
              return (
                <ButtonLike
                  liked={liked}
                  likes={likes}
                  onClick={handleButtonLike}
                />
              );
            }}
          </ToggleLikeMutation>
        </Fragment>
      )}
    </Article>
  );
};
