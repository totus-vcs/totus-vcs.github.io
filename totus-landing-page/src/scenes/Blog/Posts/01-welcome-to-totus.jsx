import EvangelineAuthor from "../../../components/AuthorAvatar/EvangelineAuthor"
import BoruiAuthor from "../../../components/AuthorAvatar/BoruiAuthor"
import DanielAuthor from "../../../components/AuthorAvatar/DanielAuthor"
import TirrnAuthor from "../../../components/AuthorAvatar/TirrnAuthor"
import YuqiAuthor from "../../../components/AuthorAvatar/YuqiAuthor"
import LiamAuthor from "../../../components/AuthorAvatar/LiamAuthor"
import { Link } from "react-router-dom"; 

export default function () {
  return <section class="container py-5 my-md-2 my-lg-4 my-xl-5">

    <div>
      <main>
        <section className="container mt-4 pt-lg-2 pb-3">

          {/* HEADING */}
          <h1 className="pb-0" style={{ maxWidth: 970 }}>
            Welcome to Totus 2023!
          </h1>

          {/* DATE */}
          <div className="fs-sm pe-3 me-1 mb-1">
            10 March 2023
          </div>

          {/* CHANGE AUTHOR AVATAR */}
          <EvangelineAuthor />


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
              backgroundImage: "url(assets/img/blog_post_images/TeamThumbsUp.jpg)",
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
                Hello from the 2023 Team!
              </h3>

              {/* Normal Text */}
              <p className="mb-4 pb-2">
                Following the COVID-19 pandemic and an increasing demand for truck drivers in Australia the
                logistics industry is facing more challenges than ever. <br/> <br/> 

                That's why we are developing a unique solution that will revolutionize the industry: our 
                remote-controlled trucks.<br/> <br/> 
                
                Drivers, and logistics companies can now operate their fleets from the comfort of their own 
                offices or homes. Our technology allows for remote control of the vehicle, giving operators 
                full control over the truck's movement and actions, all without ever having to leave their 
                desks.<br/> <br/> 

                This project started in 2022, where the previous team completed a proof of concept on a 
                smaller car. We currently have a remotely controllable Ford Focus!<br/>  


                However, there are more challenges to address to develop this proof of concept into a 
                system which can be implemented by the logistics industry. The 2023 team will focus on 
                improving the proof of concept from 2022, specifically:<br/> 
              </p>

              {/* Pros and Cons List */}
              <h4 className="h6">
                <i className="bx bx-plus-circle me-1 mt-n1 align-middle fs-5 text-primary" />
                Developing the existing system's individual components to work more seemlessly, and making the system more robust. 
              </h4>
              <h4 className="h6">
                <i className="bx bx-plus-circle me-1 mt-n1 align-middle fs-5 text-primary" />
                Increasing safety - reducing latency, improving failure cases and incorporating computer vision hazard detection. 
                              </h4>
              <h4 className="h6">
                <i className="bx bx-plus-circle me-1 mt-n1 align-middle fs-5 text-primary" />
                Improving the user experience for the driver - researching VR applications.
              </h4>

              <p className="mb-4 pb-2">
                <br/> <br/> 
                We are very excited to update you on how the project progresses. Stay tuned to hear more!
              </p>
              

              {/* END OF CONTENT */}
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