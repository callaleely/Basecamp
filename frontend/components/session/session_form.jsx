import React from 'react';
import {withRouter} from 'react-router-dom';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push('/'))
    }

    renderErrors() {
      return (
        <ul>
          {this.props.errors.map((error,i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      )
    }

    render() {
        return (
            <div className='login-form-container'>
                <h2>Sign Up</h2>
                <form>
                    <label>Email:
                        <input 
                            type='text'
                            value={this.props.email}
                            onChange={this.update('email')} />
                    </label>
                    <label>Password:
                        <input 
                            type='password'
                            value={this.props.password}
                            onChange={this.update('password')} />
                    </label>
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Signup); 