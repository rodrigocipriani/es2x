import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// todo : Fazer animação quando abrir e fechar sem Jquery
class Panel extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isOpen !== this.state.isOpen) {
      // chamada forçada par ao resize, pois tem componentes que necessitam se reorganizar
      window.dispatchEvent(new Event('resize'));
    }
  }

  _handleHeaderClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { header, titulo, children } = this.props;
    const { isOpen }                    = this.state;

    const display = isOpen ? 'block' : 'none';

    return (

      <ul className='collapsible2' data-collapsible='accordion'>
        <li>
          <div
            onClick={ this._handleHeaderClick }
            className={ ['collapsible-header', (isOpen && 'active')].join(' ') }
          >{header || titulo}</div>
          <div className='collapsible-body white animate' style={ { padding: '0px', display } }>
            {children}
          </div>
        </li>
      </ul>
    );
  }
}

Panel.propTypes = {
  titulo  : PropTypes.string,
  header  : PropTypes.any,
  children: PropTypes.any,
  isOpen  : PropTypes.bool,
};

Panel.defaultProps = {
  titulo  : null,
  header  : null,
  children: <div/>,
  isOpen  : false
};

export default Panel;
