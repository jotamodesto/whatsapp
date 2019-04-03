const submitForm = message => ({
    type: 'SEND_MESSAGE',
    payload: message
});

export const changeText = text => ({
    type: 'CHANGED_TEXT',
    payload: text
});