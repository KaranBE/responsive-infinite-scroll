import useFetch from '../utils/customFetch';
import { AlbumList } from './index';
import { Suspense, useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const {
    loading,
    error,
    formattedList = [],
  } = useFetch(page, 'https://jsonplaceholder.typicode.com/albums');

  const row = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (row.current) observer.observe(row.current);
  }, [handleObserver]);

  useEffect(() => {
    if (sessionStorage.getItem('authenticated')) {
    } else {
      navigate('/');
    }
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<div>Loading</div>}>
        <AlbumList label="Component 1" albums={formattedList} />
      </Suspense>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={row} />
    </div>
  );
};

export default Home;
