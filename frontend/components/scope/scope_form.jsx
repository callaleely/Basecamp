import React from 'react';
import {withRouter} from 'react-router-dom';


class ScopeForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.createScope(this.props.scope)
            .then(this.props.history.push(this.props.match))
    }

    update(property) {
        return e => this.setState({[property]: e.currentTarget.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <br/>
                        <input type="text"
                            value="title"
                            onChange={this.update("title")}/>
                    </label>
                </form>
                <button >Cancel</button>
            </div>
        )
    }
}

export default withRouter(ScopeForm)