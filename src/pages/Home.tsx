import { useEffect, useState } from 'react';
import { AreaCard, CategoryCard } from '~/components';
import { foodAreas, foodCategories } from '~/services';

export const Home = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [areas, setAreas] = useState<any[]>([]);

  const getCategories = async () => {
    foodCategories().then((res) => setCategories(res.data.categories));
  };

  const getAreas = async () => {
    foodAreas().then((res) => setAreas(res.data.meals));
  };

  useEffect(() => {
    getCategories();
    getAreas();
  }, []);

  return (
    <div>
      <h1>Top Foods</h1>
      <h2>Categories</h2>
      <div>
        {categories.map(({ idCategory, strCategory, strCategoryThumb }: any) => {
          return <CategoryCard key={idCategory} name={strCategory} image={strCategoryThumb} />;
        })}
      </div>
      <h2>Areas</h2>
      <div>
        {areas.map(({ strArea }: any) => {
          return <AreaCard key={strArea} name={strArea} />;
        })}
      </div>
    </div>
  );
};
