import {connect} from 'react-redux';
import EventIndex from './event_index';
import {
    fetchEvents
} from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => ({
    events: state.entities.events
});

const mapDispatchToProps = dispatch => ({
    fetchEvents: (scopeId) => dispatch(fetchEvents(scopeId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventIndex);