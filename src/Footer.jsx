const Footer = () => {
  return (
    <footer className='d-flex flex-wrap py-3 mt-4 border-top'>
      <div className='d-flex align-items-center me-auto'>
        <span className='text-body-secondary'>
          © {new Date().getFullYear()} Pierre Villette
        </span>
      </div>
    </footer>
  );
};

export default Footer;
