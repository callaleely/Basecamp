import {connect} from 'react-redux';
import EventForm from './event_form';
import {createEvent} from '../../actions/event_actions';
import {withRouter} from 'react-router-dom'; 

const mapStateToProps = (state, ownProps) => {
    const event = {name:"", 
                    scope_id: ownProps.match.params.scopeId, 
                    start:"", end:"", "allDay?": false, "resource?":""};
    const formType = "Add this event";
    return {event, formType}
}

const mapDispatchToProps = dispatch => ({
    createEvent: event => dispatch(createEvent(event))
})

export default withRouter(connect (
    mapStateToProps,
    mapDispatchToProps
)(EventForm))