import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./scenes/navbar";
import Footer from "./scenes/footer";
import Home from "./scenes/home";
import Feedback from "./scenes/feedback";
import FeedbackBox from "./scenes/FeedbackBox";


import 'atropos/css'
import BlogPage from "./scenes/Blog/BlogPage";
import Post1 from "./scenes/Blog/Posts/01-welcome-to-totus";
import ScrollToTop from "./components/ScrollToTop";


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
              <Route path="/project-updates" element={<div> <BlogPage/> <FeedbackBox/> </div>} />


              {/* BLOG PAGES */}
              <Route path="/01-welcome-to-totus" element={<Post1/>} />

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
