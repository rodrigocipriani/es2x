import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

class CardComponent extends PureComponent {

  render() {
    const { children, className, title, actions } = this.props;

    return (
      <Card expanded={ true } onExpandChange={ () => console.log('teste') } >
        <CardHeader
          title={ title }
          subtitle=''
          avatar=''
          actAsExpander={ false }
          showExpandableButton={ false }
        />
        {children}
        <CardActions>
          {actions}
        </CardActions>
      </Card>
    );

    return (
      <div className={ ['card', className].join(' ') }>
        <div className='card-content'>
          <span className='card-title'>{title}</span>
          {children}
        </div>
        <div className='card-action'>
          {actions}
        </div>
      </div>
    );
  }
}

CardComponent.propTypes = {
  children : PropTypes.any,
  className: PropTypes.string,
  title    : PropTypes.string,
  actions  : PropTypes.any
};

CardComponent.defaultProps = {
  children : null,
  className: '',
  title    : '',
  actions  : ''
};

export default CardComponent;
