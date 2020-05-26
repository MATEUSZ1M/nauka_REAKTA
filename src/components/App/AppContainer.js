import { connect } from 'react-redux';
import App from './App';
// import {createAction_moveCard} from '../../../redux/cardsRedux';

const mapStateToProps = (state) => ({
  title: state.app.title,
  subtitle: state.app.subtitle,
  lists: state.lists,
});
//to do ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const mapDispatchToProps = (dispatch, props) => ({
//   moveCard: (payload) => dispatch(createAction_moveCard({
//     payload: props.id,
//   })),
// });


export default connect(mapStateToProps)(App);
