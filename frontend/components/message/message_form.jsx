import React from 'react';

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.message;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
    }

    update(field) {
        return e => this.setState({[field]: e.target.value})
    }

    render() {
        return (
            <div>
                <form  onClick={this.handleSubmit}>
                    <label>
                        Title:
                        <input type="text"
                            onChange={this.update("title")}/>
                        <br/>
                    </label>
                    <label>
                        Note:
                        <textarea
                            onChange={this.update('body')}/>
                            <br/>
                    </label>
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }
}

export default MessageForm; 