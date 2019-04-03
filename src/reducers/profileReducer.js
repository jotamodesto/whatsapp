const INITIAL_STATE = {
    show: '',
    name: ''
}

const profileReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TOGGLE_BAR':
            if(state.show == '')
                return {...state, show: 'active'};
            return {...state, show: ''};
        case 'TOGGLE_NAME':
            if(state.name == '')
                return {...state, name: 'active'};
            return {...state, name: ''};
        default:
            return state;
    }
};

export default profileReducer;

