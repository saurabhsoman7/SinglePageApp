import React from 'react';
import Header from './Header';
import Footer from './Footer';


export default class App extends React.Component {
   constructor(){
       super();
       this.state = {name : "MH", title:"Welcome Harry"};
   }   

   getName(){
      return "Shweta";
   } 

   changeTitle(title){
         this.setState({title : title});
   } 
 
   render() {
        setTimeout(() => {
           this.setState({name : "GJ"});
        }, 2000)
     
	return (
          <div>
            <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title}/>
            Hello {this.getName()}!!!
            <br/>State {this.state.name}
	    <br/>Title {this.state.title}
            <Footer />
          </div>
        
      );
   }
}

