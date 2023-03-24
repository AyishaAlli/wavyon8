import "./App.css";
import Nav from "./Nav";
import Carousell from "./Carousel";
import Sponsors from "./Sponsors";
import Footer from "./Footer";
import Main from "./Main";
import MailingList from "./MailingList";

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousell />
      <Main />
      <Sponsors />
      <MailingList />
      <Footer />
    </div>
  );
}

export default App;
