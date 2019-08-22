import React from 'react';
import EventFormContainer from './event_form_container';
import {
    Calendar,
    DateLocalizer,
    momentLocalizer,
    globalizeLocalizer,
    move,
    Views,
    Navigate,
    components,
  } from 'react-big-calendar'
import moment from 'moment';
import NavBarContainer from "../nav_bar/nav_bar_container";
import {Link} from 'react-router-dom';

const localizer = momentLocalizer(moment) // or globalizeLocalizer


class EventIndex extends React.Component {

    componentDidMount() {
        this.props.fetchEvents(this.props.match.params.scopeId);
        this.props.fetchScopes();
    }

    setDate(date) {
        this.setState({date})
    };

    render() {
        let scopePage = '/scopes/'+this.props.match.params.scopeId
        let scopeName = this.props.scopes.map(scope => {
            if (scope.id == this.props.id) {
                return scope.name
            }
        });
        return(
            <div className="feature_page">
                <NavBarContainer />
                    <div className="feature_container">
                        <div className="scope_name_container">
                            <Link to={scopePage} className="scope_name">
                                {scopeName}
                            </Link>
                        </div>
                        <div className="feature_index"> 
                            <div className="feature_index-container">
                                <div className="feature_index-feature_name">
                                    Schedules
                                </div>
                                <Calendar
                                    localizer={localizer}
                                    events={this.props.events}
                                    defaultDate={new Date()}
                                    defaultView="month"
                                    startAccessor="start"
                                    endAccessor="end"
                                    style={{ height: "100vh" }}
                                    className="calendar_container"
                                />
                                <br/>
                                <br/>
                                <EventFormContainer/>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
export default EventIndex;
