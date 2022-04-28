const Header = (props) => {
  return (
    <header>
      <h1 className="header__title">Juego del ahorcado</h1>
      <button onClick={props.handleEventClick}>Incrementar</button>
    </header>
  );
};
export default Header;
