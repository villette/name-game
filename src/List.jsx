const List = ({ list }) => {
  return (
    <ul className='list-inline'>
      {list.map((item, id) => (
        <li key={id} className='list-inline-item'>
          <span className='badge text-bg-secondary'>{item}</span>
          <br /> {/* Not sure if this is the best solution */}
        </li>
      ))}
    </ul>
  );
};

export default List;
