import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import './style.css';



export class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        Login Page
      </div>
    );
  }
}

Login.propTypes = {

};

const mapStateToProps = (state) => ({
  status: state.status
});

export default connect(mapStateToProps)(Login);