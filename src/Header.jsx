const Header = ({ category, setCategory, setObjective, setList }) => {
  const reset = () => {
    setCategory(null);
    setObjective(null);
    setList([]);
  };

  return (
    <header className='d-flex flex-wrap py-3 mb-4 border-bottom'>
      <div className='d-flex align-items-center me-auto'>
        <h1 className='fs-4 mb-0'>Name Game</h1>
      </div>

      {category && <button type='button' className='btn btn-danger' onClick={reset}>Reset</button>}
    </header>
  );
};

export default Header;
