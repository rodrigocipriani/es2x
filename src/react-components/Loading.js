import React, { PureComponent } from 'react';


export default class Loading extends PureComponent {

  render() {
    return (
      <div className='progress' style={ { margin: 0 } }>
        <div className='indeterminate'/>
      </div>
    );
  }
}
