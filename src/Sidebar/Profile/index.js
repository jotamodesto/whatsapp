import React from 'react';
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg';
import EditIcon from '../../assets/icons/edit.svg';
import FotoKeven from '../../assets/images/keven.jpg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleBarProfile, toggleInputName } from '../../actions/profileActions';

const Profile = props => (
    <div className={`profile ${props.profile.show   }`}>
        <div className="profile-header">
            <button onClick={props.toggleBarProfile}>
                <img src={ArrowLeftIcon} width="16" />
            </button>
            <span className="profile-headline">Perfil</span>
        </div>
        <div className="profile-body">
            <img src={FotoKeven} className="profile-photo" />
            <span className="label">Seu Nome</span>
            <div className="profile-form">
                <span className={props.profile.name == 'active' ? 'form-control' : 'form-control active'}>Keven Jesus</span>
                <input autoFocus={props.profile.name == 'active' ? true : false} className={props.profile.name == 'active' ? 'form-control active' : 'form-control'} placeholder="Nome" value="Keven Jesus" />
                <button onClick={props.toggleInputName}>
                    <img src={EditIcon} width="16" />
                </button>
            </div>
        </div>
    </div>
);

const mapStateToProps = state => ({profile: state.profile});
const mapDispatchToProps = dispatch => bindActionCreators({toggleBarProfile,toggleInputName}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Profile);