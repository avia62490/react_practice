import logo from './logo.svg';
import './App.css';
import Body from './Body'

function Header() {
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

function Page() {
    return (
        <nav className="App">
            <header className="App-header"> 
            <Header />
            <Body />
            </header>
        </nav>  
    );
}


export default Page;

