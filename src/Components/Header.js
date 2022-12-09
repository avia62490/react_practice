import icon from '../Images/logo.svg';

export default function Header() {
  return (
      <nav className="nav">
          <img src={icon} className="App-logo" alt="logo" width="80px"/>
          <h3 className='nav--logo_text'>React Facts</h3>
          <h4 className='nav--title'>React Course - Project 1</h4>
      </nav>
  );
}