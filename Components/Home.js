import React from 'react';


export default class Home extends React.Component {
   render() {
        return (
              <div>
                <h1 className="blog-title">The Bootstrap Blog Home</h1>
                <div className="container">
                    <div className="row">
                      <div className="col-sm-12 blog-main">
                        <div className="blog-post">
                        <h2 className="blog-post-ti tle">Sample blog post</h2>
                        <p className="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>
                        <p>This blog post shows a few different types of content that supported and styled with Bootstrap. Basic typography, images, and code are all support  ed.</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
      );
   }
}
