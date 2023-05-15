import EvangelineAuthor from "../../../components/AuthorAvatar/EvangelineAuthor";
// import BoruiAuthor from "../../../components/AuthorAvatar/BoruiAuthor"
// import DanielAuthor from "../../../components/AuthorAvatar/DanielAuthor"
// import TirrnAuthor from "../../../components/AuthorAvatar/TirrnAuthor"
// import YuqiAuthor from "../../../components/AuthorAvatar/YuqiAuthor"
// import LiamAuthor from "../../../components/AuthorAvatar/LiamAuthor"
import { Link } from "react-router-dom";

export default function () {
  return (
    <section class="container py-5 my-md-2 my-lg-4 my-xl-5">
      <div>
        <main>
          <section className="container mt-4 pt-lg-2 pb-3">
            {/* HEADING */}
            <h1 className="pb-0" style={{ maxWidth: 970 }}>
              Mid Project Update!
            </h1>

            {/* DATE */}
            <div className="fs-sm pe-3 me-1 mb-1">12 May 2023</div>

            {/* CHANGE AUTHOR AVATAR */}
            <EvangelineAuthor />

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
                  Yesterday we presented our mid project update to fellow
                  capstone groups at ANU!
                </h3>

                {/* Normal Text */}
                <p className="mb-4 pb-2">
                  This was a fantastic opportunity for us to show the progress
                  we have made in the capstone project. We talked about the
                  researchers and truck drivers we had talked to (see our last
                  post!), and showed off some of our initial testing and
                  designs.
                </p>

                {/* Subteam Updates */}
                <h2 className="h4">Sub-Team Updates</h2>

                <p className="mb-4 pb-2">
                  Our software team has started looking into the latency
                  problem, particularly within displaying images. They have also
                  mapped out the detailed requirements and design criteria, and
                  the electrical interconnections of our system. <br /> 

                  Our vision subteam performed a footage test, to gain some
                  initial insight into the problems that might occur with object
                  and hazard detection, stability of images on the road, FPS and
                  quality issues, and how to display mutliple views on a screen.
                  Although the hazard detection model needs some refinement, our
                  model does a fantastic job at identifying hazards and signage
                  on the road, and we are very excited to show off a live model
                  soon! <br />
                  
                </p>

                <p className='mb-4 pb-2'> 
                  Our mechanics team is working on the steering and pedal
                  systems. They have been improving the 2022 designs, and
                  identifying many issues to solve within the system. <br />
                  Specific updates from our sub-teams coming soon! 
                </p> 

                {/* Subteam Updates */}
                <h2 className="h4">Value</h2>

                <p className="mb-4 pb-2">
                  VALUE PARAGRAPH <br/>
                </p>

                {/* Quotation */}
                <figure className="position-relative mb-4 ps-4">
                  <span className="position-absolute top-0 start-0 w-3 h-100 bg-primary" />
                  <blockquote className="blockquote fs-xl fw-medium text-dark ps-1 ps-sm-3">
                    <p>
                      Sollicitudin eget massa, elementum, purus nec fermentum
                      vitae, elementum. Tincidunt vulputate lorem cursus id.
                      Dictum tincidunt mi ornare tristique. Id sit elit pulvinar
                      eu. Tempus vel, mauris sed proin aliquet vulputate cras
                      est. Ut ornare eget a viverra.
                    </p>
                  </blockquote>
                </figure>

                {/* Pros and Cons List */}
                <h4 className="h6">
                  <i className="bx bx-plus-circle me-1 mt-n1 align-middle fs-5 text-primary" />
                  PROS
                </h4>
                <ul className="mb-4 pb-2 ps-4">
                  <li className="mb-1">Pro item number 1</li>
                  <li className="mb-1">Pro item number 2</li>
                </ul>
                <h4 className="h6">
                  <i className="bx bx-minus-circle me-1 mt-n1 align-middle fs-5 text-primary" />
                  CONS
                </h4>
                <ul className="mb-4 pb-2 ps-4">
                  <li className="mb-1">Con item number 1</li>
                  <li className="mb-1">Con item number 2</li>
                </ul>
              </div>
              {/* Sidebar - LEAVE ME ALONE*/}
              <div className="col-lg-3 position-relative">
                <div
                  className="sticky-top ms-xl-5 ms-lg-4 ps-xxl-4 pt-5"
                  style={{ top: "105px !important" }}
                >
                  <Link
                    className="btn btn-lg btn-outline-secondary"
                    to="/project-updates"
                  >
                    <i className="bx bx-back me-2 lead " />
                    Back to Project Updates
                  </Link>
                  <h6 className="pt-5">Like what we are doing? </h6>

                  <Link
                    className="btn btn-lg btn-outline-secondary"
                    to="/feedback"
                  >
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
          <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">
            Top
          </span>
          <i className="btn-scroll-top-icon bx bx-chevron-up" />
        </a>
      </div>
    </section>
  );
}

// Presets
