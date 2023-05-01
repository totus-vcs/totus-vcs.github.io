// import EvangelineAuthor from "../../../components/AuthorAvatar/EvangelineAuthor"
// import BoruiAuthor from "../../../components/AuthorAvatar/BoruiAuthor"
import DanielAuthor from "../../../components/AuthorAvatar/DanielAuthor"
// import TirrnAuthor from "../../../components/AuthorAvatar/TirrnAuthor"
// import YuqiAuthor from "../../../components/AuthorAvatar/YuqiAuthor"
import LiamAuthor from "../../../components/AuthorAvatar/LiamAuthor"
import { Link } from "react-router-dom"; 

export default function () {
  return <section class="container py-5 my-md-2 my-lg-4 my-xl-5">

    <div>
      <main>
        <section className="container mt-4 pt-lg-2 pb-3">

          {/* HEADING */}
          <h1 className="pb-0" style={{ maxWidth: 970 }}>
            Stakeholder Interviews
          </h1>

          {/* DATE */}
          <div className="fs-sm pe-3 me-1 mb-1">
            17 April 2023
          </div>

          {/* CHANGE AUTHOR AVATAR */}
          <DanielAuthor />
          <LiamAuthor/>

          {/* Leave */}
          <hr className="my-4" />

        </section>
        <div
          className="jarallax mb-lg-5 mb-4"
          data-jarallax
          data-speed="0.35"
          style={{ height: "36.45vw", minHeight: 300 }}
        >

          {/* CHANGE URL OF IMAGE BELOW */}
          <div
            className="jarallax-img"
            style={{
              backgroundImage: "url(assets/img/blog/single/cover-image.jpg)",
            }}
          />
        </div>

        {/* Post Content - in this section/divider*/}
        <section className="container mb-5 pt-4 pb-2 py-mg-4">
          <div className="row gy-4">

            {/* CONTENT */}
            <div className="col-lg-9">

              {/* Subtitle */}
              <h3 className="h5 mb-4 pb-2 fw-medium">
                This week we had a chat with some great stakeholders and researchers, and gained some very insightful
                information about our project. 
              </h3>

              {/* Paragraph title */}
              <h2 className="h4">Ben Swift - ANU School of Cybernetics</h2>

              {/* Normal Text */}
              <p className="mb-4 pb-2">
              Tirrn and Daniel had the pleasure of interviewing Dr. Ben Swift. Ben is the school of cybernetics' associate director (Education) responsible for overseeing the overall education portfolio, including the Master of Applied Cybernetics. Ben is an internationally recognised interdisciplinary scholar and electronic/computer music artist. He’s an expert in computational art and music, AI/machine learning, data vis/data science and user experience (UX) design. 
              <br/> <br/> 
              Questions such as his general thoughts on the project and feasibility to more technical questions such as technics to reduce latency and suitable languages were asked. A very interesting suggestion that Ben had was to use a gaming controller, such as a Mario Kart Wii controller for the wheel given available libraries online.  
              <br/> <br/> 
              To watch the full-length interview, visit the External Communication folder in the repository. Thanks, Ben, for his time! 
              </p>

              {/* Photo */}
              <div className="mb-4 pb-2" >
                  <img
                    className=""
                    src="assets/img/blog_post_images/BenSwift.png"
                    alt="Ben Swift Interview"
                  />
              </div>

              <p className="mb-4 pb-2">
              For more about Dr Swift:
              <br/>
              <a href="https://cybernetics.anu.edu.au/people/ben-swift/">Ben Swift | ANU School of Cybernetics </a> 
              <br/>
              <a href="https://benswift.me/">benswift.me | livecoder & researcher homepage - code, creativity, culture </a> 
              
              </p>

        
            <hr className="my-4" />

              {/* Quotation */}
              {/* <figure className="position-relative mb-4 ps-4">
                <span className="position-absolute top-0 start-0 w-3 h-100 bg-primary" />
                <blockquote className="blockquote fs-xl fw-medium text-dark ps-1 ps-sm-3">
                  <p>
                  “Making cars go broom broom on a farm is fun.” – Dr Ben Swift 
                  </p>
                </blockquote>
              </figure> */}

              {/* Paragraph title */}
              <h2 className="h4">Ben Swift - ANU School of Cybernetics</h2>

              {/* Normal Text */}
              <p className="mb-4 pb-2">
              Tirrn and Daniel had the pleasure of interviewing Dr. Ben Swift. Ben is the school of cybernetics' associate director (Education) responsible for overseeing the overall education portfolio, including the Master of Applied Cybernetics. Ben is an internationally recognised interdisciplinary scholar and electronic/computer music artist. He’s an expert in computational art and music, AI/machine learning, data vis/data science and user experience (UX) design. 
              <br/> <br/> 
              Questions such as his general thoughts on the project and feasibility to more technical questions such as technics to reduce latency and suitable languages were asked. A very interesting suggestion that Ben had was to use a gaming controller, such as a Mario Kart Wii controller for the wheel given available libraries online.  
              <br/> <br/> 
              To watch the full-length interview, visit the External Communication folder in the repository. Thanks, Ben, for his time! 
              </p>

              {/* Photo */}
              <div className="mb-4 pb-2" >
                  <img
                    className=""
                    src="assets/img/blog_post_images/BenSwift.png"
                    alt="Ben Swift Interview"
                  />
              </div>

              <p className="mb-4 pb-2">
              For more about Dr Swift:
              <br/>
              <a href="https://cybernetics.anu.edu.au/people/ben-swift/">Ben Swift | ANU School of Cybernetics </a> 
              <br/>
              <a href="https://benswift.me/">benswift.me | livecoder & researcher homepage - code, creativity, culture </a> 
              
              </p>


            </div>
            {/* Sidebar - LEAVE ME ALONE*/}
            <div className="col-lg-3 position-relative">
              <div
                className="sticky-top ms-xl-5 ms-lg-4 ps-xxl-4 pt-5"
                style={{ top: "105px !important" }}
              >
                <Link className="btn btn-lg btn-outline-secondary" to="/project-updates">
                  <i className="bx bx-back me-2 lead " />
                  Back to Project Updates
                </Link>
                <h6 className='pt-5'>Like what we are doing? </h6>

                <Link className="btn btn-lg btn-outline-secondary" to="/feedback">
                  <i className="bx bx-like me-2 lead" />
                  Leave a message
                </Link>
              </div>
            </div>
          </div>
        </section>

        
      </main>
      {/* Footer */}
      
      {/* Back to top button */}
      <a href="#top" className="btn-scroll-top" data-scroll>
        <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
        <i className="btn-scroll-top-icon bx bx-chevron-up" />
      </a>
    </div>

  </section >
}

// Presets