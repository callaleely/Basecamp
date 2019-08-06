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
        debugger
        return e => this.setState({[property]: e.currentTarget.value})
    }

    render() {
        return (
            <div>
                <form>
                    <label>
                        Title:
                        <br/>
                        <input type="text"
                            value="title"
                            onChange={this.update("title")}/>
                    </label>
                    <label>
                        Description:
                        <br/>
                        <input type="text"
                            value="description"
                            onChange={this.update('description')}/>
                    </label>
                    <button onCliuck={this.createScope(this.props)}></button>
                </form>
                <button onClick={this.handleSubmit}>Cancel</button>
            </div>
        )
    }
}

export default withRouter(ScopeForm)