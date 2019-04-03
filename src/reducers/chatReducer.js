const INITIAL_STATE = {
    messanges: [],
    text: ''
};

const chatReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SEND_MESSAGE':
            let newMessanges = state.messanges.push(action.payload);
            return {...state, messanges: newMessanges};
        case 'CHANGED_TEXT':
            return {...state, text: action.payload};
        default:
            return state;
    }
};

export default chatReducer;