import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import Login from "../components/Login";


const mapStateToProps = (state)=> {
  console.log(state);
  return {
    isLogin:state.login.isLogin
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
      submit:(name,password)=>{
        dispatch({type:'LOGIN',name,password})
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);





