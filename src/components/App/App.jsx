// import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import contacts from "../../contacts.json";
import "./App.css";

function App() {
  // const [contacts, setContacts] = useState(initialContacts);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
