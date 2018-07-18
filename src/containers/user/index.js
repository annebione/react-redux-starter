import React from 'react'
import PropTypes from 'prop-types';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import  { fetchUser, editUser }  from './UserActions'

import './user.css'


const User = props => {

  function constructor(props) {
    this.super(props);
  }

  this.propTypes = {
    name: PropTypes.string
  };    

  function componentDidMount() {
   //
  }
  
  return (     
    <div>
      <h1>About Us - {props.name} </h1>
      <p className="user-fetch-btn" onClick={() => props.fetchUser(25)} >Hello Medium!</p>
    </div>
  )
}

const mapStateToProps = state => ({
    name: state.user.user.name,
    oi: 'oi'
  })
  
  const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUser: () => fetchUser(),
    editUser: () => editUser(),
    changePage: () => push('/about-us')
  }, dispatch)
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(User)