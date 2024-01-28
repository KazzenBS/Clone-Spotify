import './App.css';
import Header from './header/header';
import SideBar from './sidebar/sidebar';
import MainContent from './main/main';
import Footer from './footer/footer';


function App() {
  return (
    <div className='container'>
      <div className='search'><Header/></div>
      <div className='sidebar'><SideBar/></div>
      <div className='principal'><MainContent/></div>
      <div className='rodape'><Footer/></div>
    </div>
    )
}

export default App;

