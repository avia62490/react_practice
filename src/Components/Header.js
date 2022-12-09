import icon from '../logo.svg';

export default function Header() {
  return (
      <nav className="nav">
          <img src={icon} className="App-logo" alt="logo" width="80px"/>
          <h3>React Facts</h3>
          <h4>React Course - Project 1</h4>
      </nav>
  );
}