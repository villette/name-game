import { useState, useRef } from 'react';

const ItemInput = ({ list, setList }) => {
  const [error, setError] = useState(null);
  const addItemRef = useRef(null);

  const addItem = (e) => {
    e.preventDefault();

    const addItemElement = addItemRef.current;
    const newItem = e.target.item.value.trim().toLowerCase();

    if (newItem) {
      const index = list.findIndex((item) => item == newItem);

      if (index === -1) {
        setError(null);
        setList([...list, newItem]);
        addItemElement.value = '';
      }
      else {
        setError(`${newItem} is already in the list`);
        addItemElement.select();
      }
    }
    else {
      setError('Input is not valid');
      addItemElement.select();
    }

    addItemElement.focus();
  };

  return (
    <form onSubmit={addItem} className='mb-3 mb-md-0'>
      <div className={`input-group ${error && 'has-validation'}`}>
        <input type='text' id='item' ref={addItemRef} className={`form-control ${error && 'is-invalid'}`} />
        <button type='submit' className='btn btn-primary'>Add</button>

        {error && <div className='invalid-feedback'>{error}</div>}
      </div>
    </form>
  );
};

export default ItemInput;
