import "./App.css";
import Nav from "./Nav";
import Carousell from "./Carousel";
import Sponsors from "./Sponsors";
import Footer from "./Footer";
//import Main from "./Main";
import Content from "./Content";
import MailingList from "./MailingList";

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousell />
      <Content />
      <Sponsors />
      <MailingList />
      <Footer />
    </div>
  );
}

export default App;
