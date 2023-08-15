import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./scenes/navbar";
import Footer from "./scenes/footer";
import Home from "./scenes/home";
import Feedback from "./scenes/feedback";
import FeedbackBox from "./scenes/FeedbackBox";


import 'atropos/css'

import BlogPage from "./scenes/Blog/BlogPage";
import Post1 from "./scenes/Blog/Posts/01-welcome-to-totus";
import Post2 from "./scenes/Blog/Posts/02-interviews-with-stakeholders";
import Post3 from "./scenes/Blog/Posts/03-midprojectupdate";
import Post4 from "./scenes/Blog/Posts/04-audit-2-update";
import Post5 from "./scenes/Blog/Posts/05-we're-back";

import ScrollToTop from "./components/ScrollToTop";
import MediaPage from "./scenes/media";
import Contents from "./scenes/contents"


function App() {
  return (
    <HashRouter>
      <ScrollToTop/>

    <div className="App">
      <header className="App-header">

        {/* <!-- Page loading spinner --> */}
        <div className="page-loading active">
          <div className="page-loading-inner">
            <div className="page-spinner"></div>
            <span>Loading...</span>
          </div>
        </div>

        {/* <!-- Page wrapper for sticky footer --> */}
        {/* <!-- Wraps everything except footer to push footer to the bottom of the page if there is little content --> */}
        <main className="page-wrapper">

          {/* NAV BAR */}
          <Navbar />
          
              {/* PAGES */}
            <Routes> 
              <Route path="/" element={<div> <Home /> <FeedbackBox/> </div>} />
              <Route path="/feedback" element={<Feedback/>} />
              <Route path="/media" element={<MediaPage/>} />
              <Route path="/contents" element={<Contents/>} />
              <Route path="/project-updates" element={<div> <BlogPage/> <FeedbackBox/> </div>} />


              {/* BLOG PAGES */}
              <Route path="/01-welcome-to-totus" element={<Post1/>} />
              <Route path="/02-intervews-with-stakeholders" element={<Post2/>} />
              <Route path="/03-midprojectupdate" element={<Post3/>} />
              <Route path="/04-audit-2-update" element={<Post4/>} />
              <Route path="/05-we're-back" element={<Post5/>} />
            </Routes>
     
        </main>

        {/* <!-- Footer --> */}
        <Footer />
      </header>
    </div>
    </HashRouter>

  );
}

export default App;
