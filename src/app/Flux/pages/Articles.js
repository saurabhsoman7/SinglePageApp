import React from 'react';

export default class Article extends React.Component {
   render() {
     const {title} = this.props;
     const topMargStyle = {
       marginTop:"20px"
     };
     return (
          <div className="col-md-4" style={topMargStyle}>
              <h2>{title}</h2>
              <p>deidud siui sduo sudisu doisudus dos dso dusodddd dddd osd
              sdds dshh sdhskhd
              kd shd</p>
              <a href="#"> More Info</a>
          </div>

      );
   }
}
