import {connect} from 'react-redux';
import EventForm from './event_form';
import {createEvent} from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => ({
    events: state.entities.events
})

const mapDispatchToProps = dispatch => ({
    createEvent: event => dispatch(createEvent(event))
})

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(EventForm)