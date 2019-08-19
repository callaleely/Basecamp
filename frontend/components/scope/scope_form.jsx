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
            .then(this.props.closeModal())
    }

    update(property) {
        return e => this.setState({[property]: e.target.value})
    }

    render() { 
        return (
            <div>
                <form onSubmit={() => this.handleSubmit()}>
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
                    {/* <input type="hidden"
                        value={this.props.category}
                        onChange={this.update('category')}/> */}
                    <button>Create</button>
                </form>
                <button onClick={this.closeModal}>Cancel</button>
            </div>
        )
    }
}

export default withRouter(ScopeForm)