import { useState, useEffect } from "react";

const API =
  "https://petgram-server-jesusgal-nskc54zex-jesus9464.vercel.app/categories";

export const useCategoryData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window
      .fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  return { categories, loading };
};
