import React, { Component, PropTypes } from 'react';
import { Navigation } from 'components';
import { connect } from 'react-redux';
import { container, innerContainer } from './styles.css';

class MainContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div className={container}>
        <Navigation isAuthed={this.props.isAuthed} />
        <div className={innerContainer}>{this.props.children}</div>
      </div>
    );
  }
}

MainContainer.propTypes = {
  children: PropTypes.element,
  isAuthed: PropTypes.bool.isRequired,
};
const MainConnect = connect(state => ({ isAuthed: state.isAuthed }))(
  MainContainer
);
export { MainConnect };
