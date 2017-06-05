import { connect } from 'react-redux';

export default (component) => {
  const mapStateToProps = (state) => {
    return {
      msgs    : state.bodyReducer.msgs
    };
  };

  const mapDispatchToProps = () => {
    return {};
  };

  return connect(
      mapStateToProps,
      mapDispatchToProps
  )(component);
};
