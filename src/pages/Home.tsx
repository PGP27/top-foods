import { MagnifyingGlass } from '@phosphor-icons/react';
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
    <div className='flex flex-col items-center'>
      <div className='max-w-7xl'>
        <div className='flex items-center'>
          <h1>Top Foods</h1>
          <div className='flex items-center relative'>
            <input
              type='text'
              className='w-full outline-none py-1 px-2 transition rounded border bg-gray-100 focus:bg-gray-50 focus:border-gray-500'
            />
            <MagnifyingGlass className='absolute left-2' />
          </div>
        </div>
        <h2 className='text-3xl'>Categories</h2>
        <div className='w-fit grid grid-cols-7'>
          {categories.map(({ idCategory, strCategory, strCategoryThumb }: any) => {
            return <CategoryCard key={idCategory} name={strCategory} image={strCategoryThumb} />;
          })}
        </div>
        <h2 className='text-3xl'>Areas</h2>
        <div>
          {areas.map(({ strArea }: any) => {
            return <AreaCard key={strArea} name={strArea} />;
          })}
        </div>
      </div>
    </div>
  );
};
