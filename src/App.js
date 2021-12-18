import Room from '../src/pages/notFound/room/Room';
import Main from '../src/pages/notFound/main/Main';
import NotFound from '../src/pages/notFound/notFound/NotFound';
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
