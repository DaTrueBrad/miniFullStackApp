import { Route, Routes } from 'react-router';
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import ArticlePage from './components/articleComponents/ArticlePage';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='articles' element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
