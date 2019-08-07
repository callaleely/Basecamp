import React from 'react';

class EventForm extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <script type="text/javascript" src="https://addevent.com/libs/atc/1.6.1/atc.min.js" async defer></script>
                </header>
                <div title="Add to Calendar" className="addeventatc">
                    Add to Calendar
                    <span className="start">08/20/2019 08:00 AM</span>
                    <span className="end">08/20/2019 10:00 AM</span>
                    <span className="timezone">America/Los_Angeles</span>
                    <span className="title">Summary of the event</span>
                    <span className="description">Description of the event</span>
                    <span className="location">Location of the event</span>
                </div>
            </div>
        )
    }
}

export default EventForm; 