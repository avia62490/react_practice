import logo from './logo.svg';
import './App.css';

function Page() {
    return (
                <ul>
                    <li>This is coding with React</li>
                    <li>Learning through Scrimba</li>
                    <li>Using v 18 locally</li>
                </ul>
    );
}
function Header() {
    return (
        <nav className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" width="300px"/>
                <h1>Hello World</h1>
            <Page />
            </header>
        </nav>  
    );
}


export default Header;

