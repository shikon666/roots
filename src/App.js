import { useState , useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Date from './components/Date'
import Movie from './components/Movie';
import NavBar from './components/NavBar';
import {Routes,Route} from 'react-router-dom';
import Details from './components/Details';
import Error from './components/Error';
import Categorie from './components/Categorie';

function App() {

  const [search,setSearch] = useState('')
  const [movies,setMovies] = useState([]);

 
  useEffect(() => {
      axios.get('https://movie-app-gmc.herokuapp.com/api/movies')
      .then(res => setMovies(res.data))
      .catch(err => console.error(err))
  }, [])
 
  return (
    <div className="App">
      <NavBar setSearch={setSearch}/>

      <Routes>
      <Route path='/date/:date'  element={<Date movies={movies} />} />
      <Route path='/categorie/:category' element={<Categorie movies={movies} search={search} />}/>
        <Route index element={<Movie movies={movies}  search={search} />} />
        <Route path='/movie/:id' element={<Details />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      
    </div>
  );
}

export default App;
