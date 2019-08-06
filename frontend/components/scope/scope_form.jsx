import React from 'react';
import {withRouter} from 'react-router-dom';


class ScopeForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleSubmit(e) {
        debugger
        e.preventDefault();
        this.props.createScope(this.state)
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
                    </label>
                    <input type="hidden"
                            value={this.update('company')}/>
                    <button>Create</button>
                </form>
                <button onClick={this.closeModal}>Cancel</button>
            </div>
        )
    }
}

export default withRouter(ScopeForm)