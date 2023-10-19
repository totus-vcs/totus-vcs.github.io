// import EvangelineAuthor from "../../../components/AuthorAvatar/EvangelineAuthor"
// import BoruiAuthor from "../../../components/AuthorAvatar/BoruiAuthor"
// import DanielAuthor from "../../../components/AuthorAvatar/DanielAuthor"
import TirrnAuthor from "../../../components/AuthorAvatar/TirrnAuthor"
// import YuqiAuthor from "../../../components/AuthorAvatar/YuqiAuthor"
// import LiamAuthor from "../../../components/AuthorAvatar/LiamAuthor"
import { Link } from "react-router-dom";

export default function () {
  return <section class="container py-5 my-md-2 my-lg-4 my-xl-5">

    <div>
      <main>
        <section className="container mt-4 pt-lg-2 pb-3">

          {/* HEADING */}
          <h1 className="pb-0" style={{ maxWidth: 970 }}>
            Unlocking Crystal Clear Vision
          </h1>

          {/* DATE */}
          <div className="fs-sm pe-3 me-1 mb-1">
            September 03, 2023
          </div>

          {/* CHANGE AUTHOR AVATAR */}
          <TirrnAuthor />

          {/* Leave */}
          <hr className="my-4" />


        </section>
  
        {/* Post Content - in this section/divider*/}
        <section className="container mb-5 pt-4 pb-2 py-mg-4">
          <div className="row gy-4">

            {/* CONTENT */}
            <div className="col-lg-9">


              {/* Normal Text */}
              <p className="mb-4 pb-2">
                Hi all, <br />
                Today, we're thrilled to share a significant achievement in our journey: coding and testing the servos responsible for controlling the pedals and steering wheel. We have managed to make the servos move through Jetson!

              </p>

              <h3 className="h5 mb-4 pb-2 fw-medium">
                The Power of Servos              </h3>
              <p className="mb-4 pb-2">
                Servos are the silent heroes behind the precise control of various vehicle functions. In our case, they play a role in managing both the pedals and the steering wheel. These compact, versatile motors are essential for ensuring safe and reliable control over our vehicle's movements.
                Leveraging the Jetson and Adafruit Package
                The Jetson Nano, our computational powerhouse, paired with the Adafruit package, empowers us to control the servos through a PCA9685 board.

              </p>

              <h3 className="h5 mb-4 pb-2 fw-medium">
              What's Next?              </h3>
              <p className="mb-4 pb-2">
              With the servos for the pedals and steering wheel successfully coded and tested, we're now poised to refine and calibrate the sensitivity of the motors. This achievement is an awesome moment for the team, setting the stage for further development where focuses can shift towards object detection.
Our commitment to pushing the boundaries of autonomous technology remains unwavering. We're determined to create a future where transportation is safer, smarter, and more efficient. As we continue to build and refine our vision system, stay tuned for more exciting updates from the TOTUS team!

              </p>


              <div className="mb-4 pb-2" >
                <img
                  className=""
                  src="assets/img/blog_post_images/07-servo.png"
                  alt="Ben Swift Interview"
                />
              </div>


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