import React, { Fragment } from 'react';
import FotoKeven from '../../assets/images/keven.jpg';
import ChatIcon from '../../assets/icons/chat.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleBarProfile } from '../../actions/profileActions';

const HeaderSidebar = props => (
    <div className="header">
        <button onClick={props.toggleBarProfile}>
            <img src={FotoKeven} className="foto-header" />
        </button>
        <button>
            <img src={ChatIcon} width="24" />
        </button>
    </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({toggleBarProfile}, dispatch);

export default connect(null, mapDispatchToProps)(HeaderSidebar);