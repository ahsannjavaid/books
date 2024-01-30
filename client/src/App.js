import Home from './Views/pages/Home'
import AddBook from './Views/pages/AddBook'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/add-book' element={<AddBook />} />
      </Routes>
    </>
  );
}

export default App;
