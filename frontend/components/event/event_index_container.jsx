import {connect} from 'react-redux';
import EventIndex from './event_index';
import {
    fetchEvents
} from '../../actions/event_actions';
import {
    fetchScopes
} from '../../actions/scope_actions';

const mapStateToProps = (state, ownProps) => { 
    return {
    events: Object.keys(state.entities.events)
        .map(id => state.entities.events[id]),
    scopes: Object.values(state.entities.scopes),
    id: ownProps.match.params.scopeId,
}};

const mapDispatchToProps = dispatch => ({
    fetchEvents: (scopeId) => dispatch(fetchEvents(scopeId)),
    fetchScopes: () => dispatch(fetchScopes())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EventIndex);