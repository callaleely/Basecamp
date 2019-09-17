import React from 'react';

class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = this.props.event;
    }

    handleSubmit() {
        this.props.createEvent(this.state)
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    render() {
        return(
            <div className="form_container">
                <form>
                    <label>
                        <input type="text"
                            className="feature_form-title_input"
                            placeholder="Event title is..."
                            onChange={this.update("title")}/>
                        <br/>
                    </label>
                    <label>
                        Start:
                        <input type="date"
                            className="feature_form-title_input"
                            onChange={this.update("start")}/>
                        <br/>
                    </label>
                    <label>
                        End:
                        <input type="date"
                            className="feature_form-title_input"
                            onChange={this.update("end")}/>
                        <br/>
                    </label>
                    <label>
                        All Day?
                        <input type="checkbox"
                            className="feature_form-title_input"
                            onChange={this.update("allDay?")}/>
                        <br/>
                    </label>
                    <label>
                        Note:
                        <input type="text"
                            className="feature_form-title_input"
                            onChange={this.update("resource?")}/>
                        <br/>
                    </label>
                    <input 
                    onClick={() => this.handleSubmit()}
                    className="form-submit_button" 
                    type="submit"
                    value={this.props.formType} />
                </form>
            </div>
        )
    }
}

export default EventForm; 