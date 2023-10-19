// import EvangelineAuthor from "../../../components/AuthorAvatar/EvangelineAuthor"
// import BoruiAuthor from "../../../components/AuthorAvatar/BoruiAuthor"
import DanielAuthor from "../../../components/AuthorAvatar/DanielAuthor"
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
          Unlocking Crystal Clear Vision: Introducing Our Megapixel 720p USB Wide-angle Camera for Raspberry Pi and NVIDIA Jetson Nano
          </h1>

          {/* DATE */}
          <div className="fs-sm pe-3 me-1 mb-1">
            20 Aug 2023
          </div>

          {/* CHANGE AUTHOR AVATAR */}
          <DanielAuthor />

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
              backgroundImage: "url(assets/img/blog_post_images/06-workingincar.jpg)",
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
                Update from our vision lead!
              </h3>


              {/* Normal Text */}
              <p className="mb-4 pb-2">
                We are thrilled to share a significant development in our project's camera and mounting subsystem. After careful consideration and evaluation, we have selected the Megapixel 720p USB Wide-angle Camera for Raspberry Pi and NVIDIA Jetson Nano as our camera of choice. This decision was made after a thorough assessment of its features and capabilities.
              </p>

              <div className="mb-4 pb-2" >
                <img
                  className=""
                  src="assets/img/blog_post_images/06-camera.jpg"
                  alt="Ben Swift Interview"
                />
              </div>

              <p className="mb-4 pb-2">
              The Megapixel 720p USB Wide-angle Camera boasts impressive specifications, including a 720p resolution, a wide 140-degree field of view (FOV), and a smooth 30 frames per second (fps) capture rate. These specifications make it an ideal choice for our project, offering the clarity and wide coverage we need to capture critical data and also meet the clients' requirements.
              </p>

              <p className="mb-4 pb-2">
              It's compatibility with the NVIDIA Jetson Nano and with a simple USB connection there should be seamless integration into our existing setup. This choice reinforces our commitment to delivering a reliable and effective solution for our project.
              </p>

              <h3 className="h5 mb-4 pb-2 fw-medium">
              As we move forward, this camera selection marks a significant step towards achieving our project's objectives. Stay tuned for more exciting updates!
              </h3>


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