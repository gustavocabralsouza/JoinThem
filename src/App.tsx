import './styles/global.css';


function App() { //No react nunca pode ter varios componentes debaixo do outro sem uma div por volta deles
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo"></div>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
          </ul>
        </nav>
        <img className="cart" />
      </div>
    </div>
  );}


export default App;
