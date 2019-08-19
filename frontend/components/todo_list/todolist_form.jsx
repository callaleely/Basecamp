import React from 'react';

class TodolistForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.todolist;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        this.props.action(this.props.match.params.scopeId, this.state);
        this.setState({"title":"", "body":""})
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    render() {
        return (
            <div className="form_container">
                <form>
                    <label>
                        Title:
                        <input type="text"
                            className="feature_form-title_input"
                            onChange={this.update("title")}/>
                        <br/>
                    </label>
                    <label>
                        Note:
                        <textarea
                            className="feature_form-body_input"
                            onChange={this.update('body')}/>
                            <br/>
                    </label>
                    <input 
                      onClick={() => this.handleSubmit()}
                      className="form-submit_button" type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default TodolistForm;