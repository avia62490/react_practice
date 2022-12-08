import './App.css';
import Header from './Header'
import Body from './Body'



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

