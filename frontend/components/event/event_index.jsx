import React from 'react';
import EventFormContainer from './event_form_container';
import {Calendar} from 'react-big-calendar';

class EventIndex extends React.Component {

    setDate(date) {
        this.setState({date})
    };

    render() {
        return(
            <div>
                <Calendar
                    events={this.props.events}
                    startAccessor="start"
                    endAccessor="end"/>
                <EventFormContainer/>
            </div>
        )
    }
}
export default EventIndex;
