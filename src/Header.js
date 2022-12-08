import logo from './logo.svg';

export default function Header() {
  return (
      <nav className="nav">
          <img src={logo} className="App-logo" alt="logo" width="200px"/>
          <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
      </nav>
  );
}