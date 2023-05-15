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
                This week we had a chat with some great stakeholders and researchers, and gained some very insightful
                information about our project.
              </h3>

              <hr className="my-4" />

              {/* Paragraph title */}
              <h2 className="h4">Ben Swift - ANU School of Cybernetics</h2>

              {/* Normal Text */}
              <p className="mb-4 pb-2">
                Tirrn and Daniel had the pleasure of interviewing Dr. Ben Swift. Ben is the school of cybernetics' associate director (Education) responsible for overseeing the overall education portfolio, including the Master of Applied Cybernetics. Ben is an internationally recognised interdisciplinary scholar and electronic/computer music artist. He’s an expert in computational art and music, AI/machine learning, data vis/data science and user experience (UX) design.
                <br /> <br />
                Questions such as his general thoughts on the project and feasibility to more technical questions such as technics to reduce latency and suitable languages were asked. A very interesting suggestion that Ben had was to use a gaming controller, such as a Mario Kart Wii controller for the wheel given available libraries online.
                <br /> <br />
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
                <br />
                <a href="https://cybernetics.anu.edu.au/people/ben-swift/">Ben Swift | ANU School of Cybernetics </a>
                <br />
                <a href="https://benswift.me/">benswift.me | livecoder & researcher homepage - code, creativity, culture </a>

              </p>

              <hr className="my-4" />

              {/* Paragraph title */}
              <h2 className="h4">Maia Gould - ANU School of Cybernetics</h2>

              {/* Normal Text */}
              <p className="mb-4 pb-2">
                Part of the team’s research into ethical and legal concerns around the TOTUS system included reaching out to experts in the field. Tirrn and Daniel had a fantastic opportunity to ask relevant and pressing ethical and legal concerns surround the system to Maia Gould, the Cybernetics Engagements Lead at the Australian National University.
                <br/><br/>
                As the Cybernetic Engagements Lead the for the School of Cybernetics, Maia works closely with the team in exploring collaborations with academia, College of Engineering, Computing, and Cybernetics government, community organizations and private industry.
                <br/><br/>
                Maia had valid concerns such as the edge cases and the unpredictability of driving, criticality of public faith in the system and the data privacy of the system. With these concerns in mind, Maia was overall hopeful in the TOTUS system, with the rapid improvement in technology coupled with the benefit towards a harsh industry.
                <br/><br/>
                To watch the full-length interview, visit the External Communication folder in the repository. Thanks, Maia, for her time and insight!

              </p>

              {/* Photo */}
              <div className="mb-4 pb-2" >
                <img
                  className=""
                  src="assets/img/blog_post_images/02-maia.jpg"
                />
              </div>

              <p className="mb-4 pb-2">
                For more about Maia:
                <br />
                <a href="https://cybernetics.anu.edu.au/people/maia-gould/">Maia Gould | ANU School of Cybernetics </a>
                <br />
                <a href="https://cecc.anu.edu.au/people/maia-gould">Maia Gould | ANU College of Engineering, Computing and Cybernetics</a>

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
              <h2 className="h4">Justin's Perspective: A Former Truck Driver's Take on our Project</h2>

              {/* Normal Text */}
              <p className="mb-4 pb-2">
                In the world of innovation, practical insights from individuals with hands-on experience hold
                immense value. Meet Justin, a former truck driver who shares his perspective on our project,
                shedding light on its potential impact on the trucking industry. In this blog post, we delve
                into our interview with Justin to explore his unique viewpoint and the ways our project could
                bring positive change.
                <br /> <br />
                Justin's journey began as a truck driver, navigating highways and experiencing the realities
                of the profession. His firsthand experience provides a valuable lens through which we can assess
                the potential of our project in revolutionizing the trucking industry. Additionally, he knows
                many truck drivers firsthand and feels he can accurately speak on their behalf.
                <br /> <br />
                During the interview, Justin highlighted our project's potential to address ongoing challenges
                in the trucking industry. From driver shortages to logistics inefficiencies, he recognized how
                our project could contribute to improving operational efficiency, reducing costs, and increasing
                productivity. One aspect that resonated strongly with Justin was our project's focus on
                empowering truck drivers. With his own experience on the road, Justin believes that our project
                could enhance work-life balance, reduce fatigue, and increase job satisfaction by enabling
                remote vehicle operation. This newfound flexibility could help retain skilled drivers and attract
                new talent to the industry.
                <br /> <br />
                Safety is of utmost importance in the trucking industry, and Justin emphasized the significance
                of ensuring the highest standards of safety and reliability with remote-controlled vehicles. He
                stressed the need for robust training programs, as well as in office supervision for real-time
                monitoring and sobriety testing. Justin also praised the project’s ability to enable shorter
                shifts for drivers, as he believed one of the biggest safety issues currently is the extended
                hours of consecutive driving that truck drivers currently are required to do. He also stated
                that he believes the project would only be applicable for long inter-state drives, as there are
                too many hazards present in urban driving.
                <br /> <br />
                Justin's perspective as a former truck driver provides practical insights into the potential
                impact of our project on the trucking industry. His firsthand experience and understanding of
                the challenges faced by drivers highlight the significance of our project's goals. By addressing
                industry challenges, empowering drivers, prioritizing safety, and embracing innovation, our project
                can drive meaningful change in the trucking industry. Justin's interview serves as a testament to
                the potential positive effects of our project and the importance of incorporating diverse perspectives
                to shape a better future for trucking.
                <br /> <br />
                To watch the full-length interview, visit the External Communication folder in the repository. We are very grateful for Justin's Time.
              </p>

              {/* Photo */}
              <div className="mb-4 pb-2" >
                <img
                  className=""
                  src="assets/img/blog_post_images/InterviewJustin.png"
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