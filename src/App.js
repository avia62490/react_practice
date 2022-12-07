import logo from './logo.svg';
import './App.css';

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
function Body() {
    return (
        <div>
            <h1>Hello World</h1>
            <ul className="body-list">
                <li>This is coding with React</li>
                <li>Learning through Scrimba</li>
                <li>Using v 18 locally</li>
                <li>Putting different elements into Page component</li>
            </ul>
        </div>
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

