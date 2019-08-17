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

    setDate(date) {
        this.setState({date})
    };

    render() {
        let scopePage = '/scopes/'+this.props.match.params.scopeId
        
        return(
            <div className="feature_page">
                <NavBarContainer />
                    <div className="feature_container">
                        <div className="scope_name_container">
                            <Link to={scopePage} className="scope_name">
                                {this.props.scopeName}
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
                            </div>
                        </div>
                    </div>
                <EventFormContainer/>
            </div>
        )
    }
}
export default EventIndex;
