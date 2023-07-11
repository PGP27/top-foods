import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { filterFoodByArea } from '~/services';

interface Props {
  name: string;
  image?: string;
}

export const HomeCard = ({ name, image }: Props) => {
  const [areaFirstFoodImage, setAreaFirstFoodImage] = useState({ strMeal: '', strMealThumb: '' });

  const getFirstFoodByArea = async (area: string) => {
    filterFoodByArea(area).then((res) => setAreaFirstFoodImage(res.data.meals[0]));
  };

  useEffect(() => {
    getFirstFoodByArea(name);
  }, [name]);

  return (
    <Link
      to={`${image ? '/category/' : '/area/'}${name}`}
      className='w-fit rounded p-4 hover:bg-gray-100 hover:shadow-inner transition'
    >
      <button type='button'>
        <img
          src={image || areaFirstFoodImage.strMealThumb}
          alt={`${image ? name : areaFirstFoodImage.strMeal} thumb`}
          className='h-36 w-36'
        />
        <p className='my-2'>{name}</p>
      </button>
    </Link>
  );
};
