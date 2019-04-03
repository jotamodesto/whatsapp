import React from 'react';
import SendIcon from '../../assets/icons/send.svg';

const TextArea = props => (
    <form className="box-textarea">
        <input type="text" className="form-control-area" placeholder="Digite uma mensagem" />
        <button className="btn-send">
            <img src={SendIcon} width="24" />
        </button>
    </form>
);

export default TextArea;