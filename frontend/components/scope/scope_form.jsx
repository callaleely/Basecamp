import React from 'react';
import {withRouter} from 'react-router-dom';


class ScopeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.category
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit() {
        this.props.createScope(this.state)
            .then(this.props.cancel())
    }

    update(property) {
        return e => this.setState({[property]: e.target.value})
    }

    render() {
        return (
            <div>
                <form className="scope_form_container" 
                onSubmit={() => this.handleSubmit()}>
                    <div className="scope_form_contents_container">
                    <label>
                        Title:
                        <input type="text"
                            value={this.props.name}
                            onChange={this.update("name")}/>
                        <br/>
                    </label>
                    <label>
                        Description:
                        <input type="text"
                            value={this.props.description}
                            onChange={this.update('description')}/>
                            <br/>
                    </label>
                    <div className="button_flex">
                        <button className="scope_create_button">Create</button>
                        <button 
                        className="cancel_button" 
                        onClick={this.props.cancel}>Cancel</button>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(ScopeForm)