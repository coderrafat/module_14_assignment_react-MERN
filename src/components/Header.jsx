const Header = ({ ...rest }) => {
  return (
    <header>
      <h1>{rest.title}</h1>
    </header>
  );
};

export default Header;
