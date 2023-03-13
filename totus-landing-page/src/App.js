import Navbar from "./scenes/navbar"; 
import Footer from "./scenes/footer"; 
import Home from "./scenes/home"
import Team from "./scenes/team"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <!-- Page loading spinner --> */}
        <div class="page-loading active">
          <div class="page-loading-inner">
            <div class="page-spinner"></div>
            <span>Loading...</span>
          </div>
        </div>

        {/* <!-- Page wrapper for sticky footer --> */}
        {/* <!-- Wraps everything except footer to push footer to the bottom of the page if there is little content --> */}
        <main class="page-wrapper">


          {/* NAV BAR */}
          <Navbar/>
  
          <Home/>
          <Team/> 

          
        </main>

        {/* <!-- Footer --> */}
        <Footer/>

        
      </header>
    </div>
  );
}

export default App;
