import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card, { CardActions, CardHeader, CardContent } from 'material-ui/Card';


class CardComponent extends PureComponent {

  render() {
    const { children, title, actions, subheader, avatar, showExpandableButton, actAsExpander } = this.props;

    return (
      <Card>
        <CardHeader
          title={ <div>{title}</div> }
          subheader={ subheader }
          avatar={ avatar }
          // actAsExpander={ actAsExpander }
          // showExpandableButton={ showExpandableButton }
        />
        <CardContent>
          {children}
        </CardContent>
        <CardActions>
          {actions}
        </CardActions>
      </Card>
    );
  }
}

CardComponent.propTypes = {
  children            : PropTypes.any,
  title               : PropTypes.any,
  subheader           : PropTypes.any,
  avatar              : PropTypes.any,
  actions             : PropTypes.any,
  showExpandableButton: PropTypes.bool,
  actAsExpander       : PropTypes.bool
};

CardComponent.defaultProps = {
  children            : null,
  title               : null,
  subheader           : null,
  avatar              : null,
  actions             : '',
  showExpandableButton: false,
  actAsExpander       : false
};

export default CardComponent;
