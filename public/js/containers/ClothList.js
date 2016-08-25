import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import ClothList from "../components/ClothList";

const mapStateToProps = (state)=> {
  return {
    clothes: state.clothesReducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getClothes: ()=> {
      dispatch({type: "GET_CLOTHES"});
    },
    onRemove: (c_id)=>dispatch({type: "DELETE_CLOTH", c_id}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClothList);
