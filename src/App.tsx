import { Route, Routes } from 'react-router-dom';
import { Home, FoodDetails, AreaDetails, CategoryDetails } from '~/pages';

export const App = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/food/:foodId' element={<FoodDetails />} />
    <Route path='/area/:areaName' element={<AreaDetails />} />
    <Route path='/category/:categoryName' element={<CategoryDetails />} />
  </Routes>
);
