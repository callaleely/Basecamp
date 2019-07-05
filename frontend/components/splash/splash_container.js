import Splash from './splash';
import {connect} from 'react-redux';
import {logout, dummyLogin} from '../../actions/session';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  dummyLogin: () => dispatch(dummyLogin())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);