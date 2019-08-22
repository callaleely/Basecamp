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
            <div>
                <form>
                    <label>
                        Title:
                        <input type="text"
                            className="feature_form-title_input"
                            onChange={this.update("name")}/>
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
                            onChange={this.update("repeat")}/>
                        <br/>
                    </label>
                    <label>
                        Note:
                        <input type="text"
                            className="feature_form-title_input"
                            onChange={this.update("note")}/>
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