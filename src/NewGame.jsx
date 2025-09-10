const NewGame = ({ setCategory, setObjective }) => {
  const setParameters = (e) => {
    e.preventDefault();

    setCategory(e.target.category.value);
    setObjective(e.target.objective.value);
  };

  return (
    <form onSubmit={setParameters} className='row g-3'>
      <div className='col-12 col-sm-7'>
        <div className='input-group'>
          <input type='text' className='form-control' id='category' placeholder='Category' required />
        </div>
      </div>

      <div className='col-12 col-sm'>
        <div className='input-group'>
          <input type='number' min='1' className='form-control' id='objective' placeholder='Objective' required />
        </div>
      </div>

      <div className='col-12 col-sm d-grid'>
        <button type='submit' className='btn btn-success'>Start</button>
      </div>
    </form>
  );
};

export default NewGame;
