import React from 'react';


class ScopeForm extends React.Component {
    constructor(props) {
        super(props);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.createScope()
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
                            onChange={this.forceUpdate("title")}/>
                    </label>
                </form>
            </div>
        )
    }
}