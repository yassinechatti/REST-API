import "./App.css";
import { Switch, Route } from "react-router-dom";
import ContactList from "./Pages/ContactList/ContactList";
import AddEditContact from "./Pages/AddEditContact/AddEditContact";
import Navbarr from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Navbarr />
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route
          path={["/addContact", "/editContact/:id"]}
          component={AddEditContact}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
