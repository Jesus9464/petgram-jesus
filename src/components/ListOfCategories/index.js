import React, { useState, useEffect, Fragment } from "react";
import { Category } from "../category/index";
import { List, Item } from "./style";
import { useCategoryData } from "../../hooks/useCategoryData";
import ClipLoader from "react-spinners/ClipLoader";
import { override } from "../../hooks/styleLoader/style";

export const ListOfCategories = () => {
  const { categories, loading } = useCategoryData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const newShowFixed = window.scrollY > 200;
      showFixed !== newShowFixed && setShowFixed(newShowFixed);
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [showFixed]);

  const renderList = (fixed) => {
    return (
      <List fixed={fixed}>
        {loading ? (
          <ClipLoader css={override} />
        ) : (
          categories.map((item) => (
            <Item key={item.id}>
              <Category {...item} />
            </Item>
          ))
        )}
      </List>
    );
  };

  return (
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>
  );
};
