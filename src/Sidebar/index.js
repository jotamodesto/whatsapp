import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Search from "./Search";

import Contact from "../Contact";
import Profile from "./Profile";

import { getContacts, contactSelected } from "../actions/contactActions";

// const list = [
//   {
//     name: "Tiago Bispo",
//     status: "No trabalho"
//   },
//   {
//     name: "Oscar Martins",
//     status: "Viagando..."
//   }
// ];

const ListComponent = props => {
  useEffect(() => {
    props.getContacts();
  }, []);

  const list = props.contacts.sort((c1, c2) => {
    if (c1.Name > c2.Name) return 1;
    else if (c1.Name < c2.Name) return -1;
    return 0;
  });

  const handleContactSelected = id => {
    props.contactSelected(list.filter(item => item.Id === id)[0]);
  };

  return list.map(item => (
    <Contact
      key={item.Id}
      id={item.Id}
      name={item.Name}
      selectContact={handleContactSelected}
    />
  ));
};
const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

const ConnectedList = connect(
  mapStateToProps,
  { getContacts, contactSelected }
)(ListComponent);

const Sidebar = props => (
  <div className="sidebar">
    <Header />
    <Search />
    <ConnectedList />
    <Profile />
  </div>
);

export default Sidebar;
