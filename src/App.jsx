import { useState, useEffect } from 'react';
import { setTheme, getPreferredTheme } from './utils/theme';
import Header from './Header';
import Game from './Game';
import NewGame from './NewGame';
import Footer from './Footer';

const App = () => {
  const [category, setCategory] = useState(null);
  const [objective, setObjective] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    setTheme(getPreferredTheme());
  }, []);

  return (
    <div className='container'>
      <Header
        category={category}
        setCategory={setCategory}
        setObjective={setObjective}
        setList={setList} />

      {category
        ? <Game category={category} objective={objective} list={list} setList={setList} />
        : <NewGame setCategory={setCategory} setObjective={setObjective} />
      }

      <Footer />
    </div>
  );
};

export default App;
