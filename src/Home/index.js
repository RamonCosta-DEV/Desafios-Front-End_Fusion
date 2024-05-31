import './Home.sass'
import Header from '../layout/header/header';
import Main from '../layout/main/main';
import Footer from '../layout/footer/footer';

function Home() {
  return (
    <div className="App-container">
      <Header className="header" />
      <Main className="main" />
      <Footer className="footer" />
    </div>
  );
}

export default Home;
