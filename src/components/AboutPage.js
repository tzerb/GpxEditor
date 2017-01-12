import React from 'react';
import {Link} from 'react-router';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div className="container-fluid body-content">
      <div className="row">
          <div className="col-md-12">
            <h2>hello</h2>
          </div>
      </div>    
      <div className="row">
          <div className="col-md-6">
            <h2>hello</h2>
          </div>
          <div className="col-md-6">
            <h2>hello</h2>
          </div>
      </div>    
    </div>

    // <div>
    //   <div className="flex-container">
    //     <div className="flex-item">flex item 1</div>
    //   </div>    
    //   <div className="flex-container">
    //     <div className="flex-item item2">flex item 1</div>
    //     <div className="flex-item item1">flex item 2</div>
    //     <div className="flex-item item3">flex item 3</div> 
    //   </div>
    // </div>
/*    
    <div>
      <h2 className="alt-header">About</h2>
      <p>
        This example app is part of the <a href="https://github.com/coryhouse/react-slingshot">React-Slingshot
        starter kit</a>.
      </p>
      <p>
        <Link to="/badlink">Click this bad link</Link> to see the 404 page.
      </p>
    </div>
    */
  );
};

export default AboutPage;
