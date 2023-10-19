import EvangelineAuthor from "../../../components/AuthorAvatar/EvangelineAuthor"
// import BoruiAuthor from "../../../components/AuthorAvatar/BoruiAuthor"
// import DanielAuthor from "../../../components/AuthorAvatar/DanielAuthor"
// import TirrnAuthor from "../../../components/AuthorAvatar/TirrnAuthor"
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
            Revving Up the Engine: Optimizing Latency in Our TOTUS Remote Driving System
          </h1>

          {/* DATE */}
          <div className="fs-sm pe-3 me-1 mb-1">
            14 Sept 2023
          </div>

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
                Update from our coding team!
              </h3>


              {/* Normal Text */}
              <p className="mb-4 pb-2">
                In the world of autonomous vehicles, every millisecond counts. That's why we've been burning the midnight oil to fine-tune our backend code and achieve seamless control of our TOTUS remote driving system. Our focus? Latency, and reducing it to the absolute minimum.              </p>

              {/* Subtitle */}
              <h3 className="h5 mb-4 pb-2 fw-medium">
                Mastering Computer Vision for Speed and Precision
              </h3>

              <p className="mb-4 pb-2">
                One of the key areas of our optimization efforts has been in the realm of computer vision. We've been working relentlessly to refine our code, making it smarter and faster. Our goal is to filter out unwanted detections while increasing the speed of the detections that matter.
              </p>

              <h3 className="h5 mb-4 pb-2 fw-medium">
                Jetson: Our Speed Demon
              </h3>

              <p className="mb-4 pb-2">
                One of our secret weapons in the quest for speed is the Jetson controller. Its exceptional performance and processing power have already given us a significant advantage in achieving near-instantaneous results.
              </p>

              <h3 className="h5 mb-4 pb-2 fw-medium">
                Exploring APIs and WebSockets for the Ultimate Performance
              </h3>

              <p className="mb-4 pb-2">
                But we're not stopping there. To deliver the best possible performance, we're exploring various APIs and WebSocket solutions. These technologies promise to take our system's responsiveness to the next level, ensuring that our remote driving experience is as seamless as it gets.
              </p>

              <h3 className="h5 mb-4 pb-2 fw-medium">
                The Art of Multiprocessing
              </h3>

              <p className="mb-4 pb-2">
                As we delve deeper into the world of optimization, we're also researching the best multiprocessing techniques. Leveraging the full power of our hardware to handle multiple tasks concurrently is a key strategy to further reduce latency and improve system efficiency.
              </p>

              <h3 className="h5 mb-4 pb-2 fw-medium">

              </h3>

              <div className="mb-4 pb-2" >
                <img
                  className=""
                  src="assets/img/blog_post_images/08-cv.png"
                  alt="Ben Swift Interview"
                />
              </div>

              <p className="mb-4 pb-2">
                Our commitment to excellence and unwavering dedication to pushing the boundaries of technology drive us forward. We're excited about the progress we've made so far and are even more thrilled about what lies ahead.
                <br />
                <br />
                Stay tuned as we continue to work tirelessly to create a future where remote driving is not just a possibility, but a reality. TOTUS is here to make it happen, and we're here to keep you in the loop with our latest updates.
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