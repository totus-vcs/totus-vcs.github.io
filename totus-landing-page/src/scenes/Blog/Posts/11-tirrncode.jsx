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
            Jetson Nano and Logitech G25 in Sync
          </h1>

          {/* DATE */}
          <div className="fs-sm pe-3 me-1 mb-1">
            October 5, 2023
          </div>

          {/* CHANGE AUTHOR AVATAR */}
          <TirrnAuthor />

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
              backgroundImage: "url(assets/img/blog_post_images/11-logitech.jpg)",
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
                We are excited to share that the Jetson Nano is now perfectly synchronized with the Logitech G25 steering set and pedals, marking a significant milestone in our project.
              </h3>

              {/* Paragraph title */}
              <h2 className="h4">The Perfect Harmony of Control</h2>

              {/* Normal Text */}
              <p className="mb-4 pb-2">
              Our vision of creating an autonomous vehicle relies on seamless and precise control over every aspect of the vehicle. The Logitech G25 steering set and pedals provide a lifelike interface for human-like control, and we've successfully integrated these components with our Jetson Nano.
<br/> <br/> When we move the steering wheel, the motors respond accordingly. 

              </p>

              {/* Paragraph title */}
              <h2 className="h4">Pedal to the Metal</h2>

              {/* Normal Text */}
              <p className="mb-4 pb-2">
              But it doesn't stop there. When we push the pedal, the motors spring into action, translating the force into movement. This pedal-to-motor synchronization allows for precise control of acceleration and braking, essential for the safe operation of our autonomous vehicle.
              </p>

              {/* Paragraph title */}
              <h2 className="h4">A Glimpse into the Future</h2>

              {/* Normal Text */}
              <p className="mb-4 pb-2">
              This achievement is a glimpse into the future of autonomous vehicles, with our Jetson Nano in harmony with the Logitech G25 set and pedals. Come meet us at the showcase to see it in action!
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