import {connect} from 'react-redux';
import EventIndex from './event_index';
import {
    fetchEvents
} from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => { 
    return {
    events: Object.keys(state.entities.events)
        .map(id => state.entities.events[id]),
    scopeName: state.entities.scopes[ownProps.match.params.scopeId].name
}};

const mapDispatchToProps = dispatch => ({
    fetchEvents: (scopeId) => dispatch(fetchEvents(scopeId))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventIndex);