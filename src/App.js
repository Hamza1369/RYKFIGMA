import { Routes, Route } from 'react-router-dom';
// import Layout from './components/Layouts/Layout';
import Homepage from './pages/Homepage';
import Nextpg from './pages/Nextpg';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Homepage />} />

      <Route path='/pervious' element={<Homepage />} />
      <Route path='/next' element={<Nextpg />} />


    </Routes>





  );
}

export default App;
