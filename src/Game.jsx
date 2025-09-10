import ItemInput from './ItemInput';
import List from './List';

const Game = ({ category, objective, list, setList }) => {
  return (
    <div className='row'>
      <div className='col-12 col-md-4'>
        <div className='mb-3'>Category: <strong>{category}</strong></div>

        <ItemInput list={list} setList={setList} />
      </div>

      <div className='col-12 col-md-8'>
        <div className='mb-3'>
          Found {list.length} / {objective}
          {list.length / objective >= 1 && ' 🎉'}
        </div>

        <List list={list} />
      </div>
    </div>
  );
};

export default Game;
