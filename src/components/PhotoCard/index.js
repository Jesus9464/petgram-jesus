import React, { Fragment } from "react";
import { ImgWrapper, Img, Article } from "./style";
import { useNearScreen } from "../../hooks/useNearScreen";
import { ButtonLike } from "../ButtonLike/index";
import { ToggleLikeMutation } from "../../container/ToggleLikeMutation";
import { Link } from "@reach/router";
import PropType from "prop-types";

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const PhotoCard = ({ id, liked, likes = 0, src }) => {
  const [show, elementoDelRef] = useNearScreen();

  return (
    <Article ref={elementoDelRef}>
      {show && (
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src ? src : DEFAULT_IMAGE} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {(toggleLike) => {
              const handleButtonLike = () => {
                toggleLike({
                  variables: {
                    input: { id },
                  },
                });
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

PhotoCard.propType = {
  id: PropType.string.isRequired,
  liked: PropType.bool.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];
    if (propValue === undefined) {
      return new Error(`${propName} Value must be defined`);
    }
    if (propValue < 0) {
      return new Error(`${propName} Value must be greater than 0`);
    }
  },
  src: PropType.string.isRequired,
};
