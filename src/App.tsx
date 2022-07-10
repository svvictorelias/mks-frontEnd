import Navbar from './components/Navbar';
import { GlobalStyle, AppStyle } from './styles/global';
import ContentContainer from './components/ContentContainer'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <AppStyle className="App">
      <Navbar/>
      <ContentContainer/>
      <Footer/>
      </AppStyle>
    </>
  );
}

export default App;
