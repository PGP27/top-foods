import { Link } from 'react-router-dom';

interface Props {
  name: string;
  image: string;
}

export const CategoryCard = ({ name, image }: Props) => {
  return (
    <Link to={`/category/${name}`}>
      <button type='button'>
        <img src={image} alt={`${name} thumb`} className='h-32 w-32 rounded-full' />
        <p>{name}</p>
      </button>
    </Link>
  );
};
