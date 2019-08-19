import React from 'react';
import {connect} from 'react-redux';
import ScopeFormContainer from '../scope/scope_form_container';
import {closeModal} from '../../actions/modal_actions';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'companyForm':
            component = <ScopeFormContainer
                            category={"company"}/>;
            break;
        case 'teamForm':
            component = <ScopeFormContainer
                            category={"team"}/>;
            break;
        case 'projectForm':
            component = <ScopeFormContainer
                            category={"project"}/>;
            break;
        default:
            return null; 
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    )
}

const mapStateToProps = state => { 
    return {
        modal: state.ui.modal
    }
}

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal)