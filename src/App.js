// import { Button, ButtonGroup } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom';
import Homepage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' Component={Homepage} />
        <Route path='/chat' Component={ChatPage} />
      </Routes>
    </div>
  );
}

export default App;
