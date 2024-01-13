import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/productsSlice';
import { setSearchField } from '../features/searchSlice';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const searchField = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const onSearchChange = (event) => {
    
    dispatch(setSearchField(event.target.value));
  };

  const filteredProducts = products.filter((product) => {
    
    return product.title.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className='container tc'>
      <h1 className='f1 white'>Store</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList products={filteredProducts} />
      </Scroll>
    </div>
  );
}

export default App;


