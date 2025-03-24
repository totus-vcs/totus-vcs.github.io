// import EvangelineAuthor from "../../../components/AuthorAvatar/EvangelineAuthor"
// import BoruiAuthor from "../../../components/AuthorAvatar/BoruiAuthor"
// import DanielAuthor from "../../../components/AuthorAvatar/DanielAuthor"
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
            Finalised Mechanics Design for the 2023 TOTUS Project
          </h1>

          {/* DATE */}
          <div className="fs-sm pe-3 me-1 mb-1">
            September 30, 2023
          </div>

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
              <h3 className="h5 mb-4 pb-2 fw-medium">
                Hey there, folks! We're excited to share some exciting updates regarding the finalised mechanics design for our car project. This significant progress centres on the steering and pedal sub-systems. Let's delve into the details:              </h3>

              <div className="mb-4 pb-2" >
                <img
                  className=""
                  src="assets/img/blog_post_images/10-truck.png"
                  alt="Ben Swift Interview"
                />
              </div>


              {/* Paragraph title */}
              <h2 className="h4">The Pedal System:</h2>

              {/* Normal Text */}
              <p className="mb-4 pb-2">
                Our pedal sub-system is responsible for controlling the car's accelerator and brake. It comprises two motors equipped with metal rods that push down on the pedals at an angle. These motors are securely mounted to the car floor using a new, robust mounting system that we've developed. <br /> <br />
                Throughout the project, we've explored various design ideas aiming for a universal retrofittable solution, including the use of easy-to-adjust tension bars. However, given our constraints in terms of resources and schedule, we decided to go with a simpler, floor-mounted design. <br /><br />
                This design was inspired by the 2022 TOTUS team's attempt, which, though innovative, wasn't successful due to the mounting system being constructed entirely from wood, unable to withstand the high torque of the motor. In our iteration, we used a combination of metal brackets for the motor's mounting, ensuring it could withstand the force. With rigorous testing and fine-tuning from our software sub-team, the pedal system now works accurately according to the input from the Logitech G25 controller. <br /><br />
                Achieving a functioning pedal system represents a significant leap forward compared to the previous year's design and brings us one step closer to our ultimate goal.

              </p>

              <div className="mb-4 pb-2" >
                <img
                  className=""
                  src="assets/img/blog_post_images/10-pedal.png"
                  alt="Ben Swift Interview"
                />
              </div>

              <h2 className="h4">The Steering System:</h2>

              {/* Normal Text */}
              <p className="mb-4 pb-2">
                Just like the pedal system, we considered more idealistic designs for the steering system, which would be perfect for future iterations of this project. However, since our primary focus was integrating all systems within our resources and schedule, these designs were set aside. <br /><br />
                In our quest for improvements, we revisited last year's design. The 2022 TOTUS team did have a working steering system, but it had notable design flaws. The angular gears, while innovative, featured a very basic straight triangular-toothed design that did not account for the angular movement of the gears. This led to teeth slipping and issues during operation. <br /><br />
                To address this, we developed our own bevel gears, which are industry-standard for angular gears and specifically designed to mesh seamlessly at specified angles. The result was an effective steering system that could respond to Logitech G25 controller inputs with minimal slipping. <br /><br />
                However, an unexpected challenge emerged when we discovered that the mounting system inherited from last year's team had almost-worn-out screw holes. After a few rounds of testing and demonstrations, the mounting system began to slip and detach. <br /><br />
                This experience reinforced the importance of an effective handover process for next year's team. It also highlighted the room for further improvements in our steering system. <br /><br />

              </p>

              <div className="mb-4 pb-2" >
                <img
                  className=""
                  src="assets/img/blog_post_images/10-steer.png"
                  alt="Ben Swift Interview"
                />
              </div>

              <h3 className="h5 mb-4 pb-2 fw-medium">
                In summary, we've made substantial progress in finalizing the mechanical sub-systems, and we're excited about the direction our car project is headed. With the pedal and steering systems in place, we're one step closer to realizing our vision. Stay tuned for more updates as we continue to refine and enhance our project. Your support is greatly appreciated!

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