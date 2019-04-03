import axios from "axios";

export const contactsFetched = contacts => ({
  type: "CONTACTS_FETCHED",
  payload: contacts
});

export const contactSelected = contact => ({
  type: "CONTACT_SELECTED",
  payload: contact
});

export function getContacts() {
  return dispatch => {
    axios
      .get("http://praga:8099/contato")
      .then(resp => dispatch(contactsFetched(resp.data)));
  };
}
