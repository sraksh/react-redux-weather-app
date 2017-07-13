import React, {Component} from 'react';
import {connect} from 'react-redux';

class SearchBar extends Component{
  render(){
    return (
    <form className="input-group">
      <input
        className="form-control"
        value=""
      />
      <span className="input-group-btn">
        <button className="btn btn-secondary" type="submit">Search</button>
      </span>
    </form>
    ); 
  }
}
const mapStateToProps = state => ({
  book: state.activeBook
});
export default connect(mapStateToProps)(SearchBar);
