import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <div>
        <img src={logo} className="App-logo" alt="logo" width="300px"/>
        <h1>Hello World</h1>
    </div>
  )
}
function Body() {
    return (
        <ul>
            <li>This is coding with React</li>
            <li>Learning through Scrimba</li>
            <li>Using v 18 locally</li>
            <li>Putting different elements into Page component</li>
        </ul>
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

