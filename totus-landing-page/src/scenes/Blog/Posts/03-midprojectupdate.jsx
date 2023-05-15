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
                  the electrical interconnections of our system. <br /> <br />

                  Our vision subteam performed a footage test, to gain some
                  initial insight into the problems that might occur with object
                  and hazard detection, stability of images on the road, FPS and
                  quality issues, and how to display mutliple views on a screen.
                  Although the hazard detection model needs some refinement, our
                  model does a fantastic job at identifying hazards and signage
                  on the road, and we are very excited to show off a live model
                  soon! <br />

                </p>

                {/* Photo */}
                <div className="mb-4 pb-2" >
                  <img
                    className=""
                    src="assets/img/blog_post_images/03-vision.png"
                    alt="Ben Swift Interview"
                  />
                </div>

                <p className='mb-4 pb-2'>
                  Our mechanics team is working on the steering and pedal
                  systems. They have been improving the 2022 designs, and
                  identifying many issues to solve within the system. <br />
                  Specific updates from our sub-teams coming soon!
                </p>

                {/* Photo */}
                <div className="mb-4 pb-2" >
                  <img
                    className=""
                    src="assets/img/blog_post_images/03-mechanics.png"
                    alt="Ben Swift Interview"
                  />
                </div>

                {/* Subteam Updates */}
                <h2 className="h4 pt-4">Ensuring Project Value</h2>

                <p className='mb-4 pb-2'>
                  Team TOTUS is ensuring through every step of our process, we are testing, considerings risks and engaging
                  with industry to ensure our project fixes the problem we are trying to solve. We have the following processes
                  in place:
                </p>

                <p>
                  <i className="bx bx-plus-circle me-1 mt-n1 align-middle fs-5 text-primary" />
                  Risk Management
                </p>
                <p>
                  <i className="bx bx-plus-circle me-1 mt-n1 align-middle fs-5 text-primary" />
                  Industry Engagement
                </p>
                <p>
                  <i className="bx bx-plus-circle me-1 mt-n1 align-middle fs-5 text-primary" />
                  Validation and Verification testing
                </p>
                <p>
                  <i className="bx bx-plus-circle me-1 mt-n1 align-middle fs-5 text-primary" />
                  User and professional feedback
                </p>
                <p>
                  <i className="bx bx-plus-circle me-1 mt-n1 align-middle fs-5 text-primary" />
                  Technical Performance Metrics
                </p>

                <h2 className="h4 pt-5">ANU College of Engineering Article: Would you trust AI to drive a semi trailer?</h2>

                {/* Quotation */}
                <figure className="position-relative mb-4 ps-4">
                  <span className="position-absolute top-0 start-0 w-3 h-100 bg-primary" />
                  <blockquote className="blockquote fs-xl fw-medium text-dark ps-1 ps-sm-3">
                    <p>
                      ANU have published a great article about the TOTUS project, particularly about the project's beginnings in 2022,
                      and a great interview with this project's CEO, Alex!
                    </p>
                    <a href='https://cecc.anu.edu.au/news/would-you-trust-ai-drive-semi-trailer'> 
                    Click here to view the article
                    </a>
                  </blockquote>
                </figure>

                {/* Photo */}
                <div className="mb-4 pb-2" >
                  <a href='https://cecc.anu.edu.au/news/would-you-trust-ai-drive-semi-trailer'> 
                  <img
                    className=""
                    src="assets/img/blog_post_images/03-externalblog.png"
                    alt="External Blog"
                  />
                  </a>
                </div>


                

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
