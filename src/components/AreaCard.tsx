import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { filterFoodByArea } from '~/services';

interface Props {
  name: string;
}

export const AreaCard = ({ name }: Props) => {
  const [areaFirstFoodImage, setAreaFirstFoodImage] = useState({ strMeal: '', strMealThumb: '' });

  const getFirstFoodByArea = async (area: string) => {
    filterFoodByArea(area).then((res) => setAreaFirstFoodImage(res.data.meals[0]));
  };

  useEffect(() => {
    getFirstFoodByArea(name);
  }, [name]);

  return (
    <Link to={`/area/${name}`}>
      <button type='button'>
        <img
          src={areaFirstFoodImage.strMealThumb}
          alt={`${areaFirstFoodImage.strMeal} thumb`}
          className='h-32 w-32 rounded-full'
        />
        <p>{name}</p>
      </button>
    </Link>
  );
};
