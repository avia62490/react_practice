import './App.css';
import Header from './Components/Header'
import Body from './Components/Body'



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

