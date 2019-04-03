const INITIAL_STATE = {
  contacts: [],
  selectedContact: {}
};

const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CONTACTS_FETCHED":
      return { ...state, contacts: action.payload };

    case "CONTACT_SELECTED":
      return { ...state, selectedContact: action.payload };
    default:
      return state;
  }
};

export default contactReducer;
