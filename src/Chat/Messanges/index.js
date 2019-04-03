import React from 'react';
import { connect } from 'react-redux';


const msgs = [
    {
        from: 'you',
        message: 'Opa meu velho'
    },
    {
        from : 'contact',
        message: 'MORRA DEVS!!!'
    }
]

const Message = props => (
    <span className={`message ${props.from}`}>
        {props.message}
    </span>
)

const Messanges = props => (
    <div className="messanges">
    {
        msgs.map(msg => (
            <Message key={msg} from={msg.from} message={msg.message} />
        ))
    }
    </div>
);

const mapStateToProps = state => ({chat: state.chat});
export default connect(mapStateToProps)(Messanges);