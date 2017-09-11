import React from 'react';


export default class Todo extends React.Component {
   render() {
     const todo  = this.props.text;

      return (
          <li>{ todo }</li>
      );
   }
}
