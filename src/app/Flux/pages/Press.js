import React from 'react';

export default class Press extends React.Component {
   render() {
     return (
       <div className="container">
         <div className="row">
           <div className="col-sm-12 blog-main">
               <div className="blog-post">
                 <label for="emailid">Email id</label><br />
                 <input type="email" Placeholder="Email id" />
                 <br /><br />
                 <label for="password">Password</label><br />
                 <input type="password" Placeholder="Password" /><br /><br />
                 <button className="btn btn-success" type="submit" onClick="">Login</button>
               </div>
             </div>
           </div>
       </div>
     );
   }
}
