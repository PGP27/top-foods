import { useEffect, useState } from 'react';
import { Header, HomeCard } from '~/components';
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
    <div className='flex flex-col items-center'>
      <div className='w-full max-w-7xl'>
        <Header />
        <h2 className='text-3xl py-4'>Categories</h2>
        <div className='w-full grid grid-cols-7 gap-8 py-6 border-t'>
          {categories.map(({ idCategory, strCategory, strCategoryThumb }: any) => {
            return <HomeCard key={idCategory} name={strCategory} image={strCategoryThumb} />;
          })}
        </div>
        <h2 className='text-3xl mt-10'>Areas</h2>
        <div className='w-full grid grid-cols-7 gap-8 py-6 border-t'>
          {areas.map(({ strArea }: any) => {
            return <HomeCard key={strArea} name={strArea} />;
          })}
        </div>
      </div>
    </div>
  );
};
