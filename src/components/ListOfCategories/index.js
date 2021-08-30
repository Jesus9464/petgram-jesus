import React, { useState } from "react";
import { Category } from "../category/index";
import { List, Item } from "./style";
import { categories as mockCategories } from "../../../api/db.json";

export const ListOfCategories = () => {
  const [categories, setCategories] = useState(mockCategories);
  console.log(categories);
  return (
    <List>
      {categories.map((item) => (
        <Item key={item.id}>
          <Category {...item} />
        </Item>
      ))}
    </List>
  );
};
