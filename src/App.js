import React, { Component, useEffect } from 'react'
import PageHeader from './PageHeader'
import Case1 from './Case1'
import Case2 from './Case2'
import Case3 from './Case3'
import PageFooter from './PageFooter'
import Case1Content from './Case1Content'
import Case2Content from './Case2Content'
import Case3Content from './Case3Content'
import PageBio from './PageBio'
//import { Switch, Route } from 'react-router-dom'
import { HashRouter, Route, useLocation } from 'react-router-dom'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



class App extends Component {
  render() {
    return (
      <HashRouter>
          <ScrollToTop />
          <Route exact path="/" render={() => (
              <div className="container">
                <PageHeader />
                <Case1 />
                <Case2 />
                <Case3 />
                <PageBio />
                <PageFooter />
              </div>
            )} />

            <Route path="/essguide" render={() => (
                <div className="container">
                  <Case1Content />
                </div>
              )} />

            <Route path="/coldcut" render={() => (
                <div className="container">
                  <Case2Content />
                </div>
              )} />

            <Route path="/bolon" render={() => (
                <div className="container">
                  <Case3Content />
                </div>
              )} />


      </HashRouter>

    )
  }
}


// class App extends Component {
//   render() {
//     return (
//       <Switch>
//         <Route exact path="/" render={() => (
//             <div className="container">
//               <PageHeader />
//               <Case1 />
//               <Case2 />
//               <Case3 />
//               <PageBio />
//               <PageFooter />
//             </div>
//           )} />
//
//           <Route exact path="/essguide" render={() => (
//               <div className="container">
//                 <Case1Content />
//               </div>
//             )} />
//
//           <Route exact path="/coldcut" render={() => (
//               <div className="container">
//                 <Case2Content />
//               </div>
//             )} />
//
//           <Route exact path="/bolon" render={() => (
//               <div className="container">
//                 <Case3Content />
//               </div>
//             )} />
//
//       </Switch>
//
//     )
//   }
// }


export default App
