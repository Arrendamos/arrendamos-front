import './App.css';
import { Home, Property } from './Pages';
import { Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property" element={<Property />} />
      </ Routes>
    </Provider>
  );
}

export default App;
