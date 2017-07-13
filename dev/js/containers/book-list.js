// import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import {selectBook} from '../actions/index';

// class BookList extends Component{
//   constructor(props) {
//     super(props);
//   }
//   createBookListItems(){
//     return this.props.books.map((book) => {
//       return(
//         <li key={book.title} onClick = {() => this.props.selectBook(book)} className="list-group-item">{book.title}</li>
//       );
//     });
//   }
//   render(){
//     return (
//       <ul className="list-group col-sm-4">
//         {this.createBookListItems()}
//       </ul>
//     );
//   }
// }
// const mapStateToProps = state => ({
//   books: state.books
// });

// const matchDispatchToProps = dispatch => (
//   bindActionCreators({selectBook: selectBook}, dispatch)
// )

// export default connect(mapStateToProps, matchDispatchToProps)(BookList);
