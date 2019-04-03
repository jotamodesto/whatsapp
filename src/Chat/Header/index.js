import React from "react";
import { connect } from "react-redux";
import FotoTiago from "../../assets/images/tiago.png";

const Header = props => (
  <button className="header justify-content-start">
    <img src={FotoTiago} alt="" className="foto-header" />
    <div className="text-contact">
      <span className="name-contact">{props.contact.Name}</span>
    </div>
  </button>
);

const mapStateToProps = state => ({
  contact: state.contact.selectedContact
});

export default connect(mapStateToProps)(Header);
