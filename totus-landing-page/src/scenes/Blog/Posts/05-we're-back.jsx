//import EvangelineAuthor from "../../../components/AuthorAvatar/EvangelineAuthor";
// import BoruiAuthor from "../../../components/AuthorAvatar/BoruiAuthor"
// import DanielAuthor from "../../../components/AuthorAvatar/DanielAuthor"
// import TirrnAuthor from "../../../components/AuthorAvatar/TirrnAuthor"
// import YuqiAuthor from "../../../components/AuthorAvatar/YuqiAuthor"
import LiamAuthor from "../../../components/AuthorAvatar/LiamAuthor"
import { Link } from "react-router-dom";

export default function () {
  return (
    <section class="container py-5 my-md-2 my-lg-4 my-xl-5">
      <div>
        <main>
          <section className="container mt-4 pt-lg-2 pb-3">
            {/* HEADING */}
            <h1 className="pb-0" style={{ maxWidth: 970 }}>
              We're back!
            </h1>

            {/* DATE */}
            <div className="fs-sm pe-3 me-1 mb-1">1 August 2023</div>

            {/* CHANGE AUTHOR AVATAR */}
            <LiamAuthor />

            {/* Leave */}
            <hr className="my-4" />
          </section>
          
          {/* Post Content - in this section/divider*/}
          <section className="container mb-5 pt-4 pb-2 py-mg-4">
            <div className="row gy-4">
              {/* CONTENT */}
              <div className="col-lg-9">
                {/* Subtitle */}
                <h3 className="h4 mb-4 pb-2 fw-medium">
                  It's the moment you've all been waiting for, we are back and the project is now.
                </h3>

                {/* Normal Text */}
                <p className="mb-4 pb-2">
                Hello everyone, 
                After having been all freshened up from the mid-year holidays, we've hit the ground running, diving straight into 
                the captivating design phase. Our ambition knows no bounds as we craft an "unlimited budget design" that aims to 
                fulfill all our project requirements with unmatched performance and finesse.
                <br /> <br />
                Guided by the skilled hands of Evangeline, our visionary captain, the design landscape unfolds with precision and artistry. 
                Every detail meticulously examined, every component carefully chosen, as our dream takes shape.

                </p>

                {/* Subteam Updates */}
                <h2 className="h4">A gorgeous, adaptable, high-speed camera</h2>

                <p className="mb-4 pb-2">
                Daniel has been in our pursuit of the perfect camera for setup, the NileCAM130_CUOAGX has emerged as the undisputed champion. 
                Webcams and dashcams quickly faded from consideration, unable to harmonize with our audio-free endeavor and demanding live streaming needs.
                <br /> <br />
                Enter the NileCAM130 – a tailor-made gem. Unlike Raspberry Pi modules, it offers an array of quality options, a boon for the driver's experience. 
                Uncompressed video output reigns supreme, combating latency and allowing us to refine our custom compression techniques. NileCam's YUV422 output 
                further turbocharges compression, an innovation that aligns seamlessly with our aspirations. 

                </p>

                {/* Photo */}
                <div className="mb-4 pb-2" >
                  <img
                    className=""
                    src="assets/img/blog_post_images/camera.jpg"
                    alt="camera"
                  />
                </div>


                {/* Subteam Updates */}
                <h2 className="h4 pt-4">An absolute beast of a processing machine</h2>

                <p className='mb-4 pb-2'>
                On the software end of things, Tirrn has decided we must unleash the power of the NVIDIA Jetson. The NVIDIA Jetson platform boasts powerful GPU acceleration, 
                optimized for AI and deep learning tasks, enabling energy-efficient processing. With a comprehensive software stack, robust ecosystem, and sensor integration 
                capabilities, Jetson devices offers us a versatile solution for real-time AI applications across various industries.
                </p>

                {/* Photo */}
                <div className="mb-4 pb-2" >
                  <img
                    className=""
                    src="assets/img/blog_post_images/jetson.png"
                    alt="jetson"
                  />
                </div>

                <h2 className="h4 pt-4">The experts chime in</h2>

                <p className='mb-4 pb-2'>
                Meanwhile, Liam orchestrates our engagement with stakeholders, connecting with logistics officers and truck drivers. Interviews with industry experts like Chris Camilleri 
                of Tony Innaimo Transport and Ashley Marsh from Australia Post shed light on our path, illuminating key insights.
                </p>

                <h2 className="h4 pt-4">Slick, flexible, fitting design</h2>

                <p className='mb-4 pb-2'>
                As the pieces of our design puzzle fall into place, Yuqi has been developing CAD drawings that reveal our removable mechanical vision. That’s right, I said removable. 
                Our system will be slick and versatile, as we aim to provide upmost flexibility. Stay tuned for the unveiling of this spatial symphony!
                <br /> <br />
                With gears turning and creativity flowing, our journey surges forward. The next update promises even more excitement as we carve the path towards our V2 prototype. 
                Until then, onward and upward!
                <br /> <br />
                Sincerely, TOTUS
                </p>

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
