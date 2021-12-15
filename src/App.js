import Room from './Room.jsx';
import Main from './Main.jsx';
import NotFound from './NotFound.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main/>}></Route>
        <Route exact path="/room/:id" element={<Room/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
