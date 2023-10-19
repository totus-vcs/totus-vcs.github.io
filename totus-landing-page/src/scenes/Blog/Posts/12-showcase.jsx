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
            Time to Showcase our Design!
          </h1>

          {/* DATE */}
          <div className="fs-sm pe-3 me-1 mb-1">
            October 14, 2023
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
                It is showcase day! A great day for our team, and stakeholders to check out our project.
              </h3>

              {/* Normal Text */}
              <p className="mb-4 pb-2">
              The highly anticipated day arrived when the TOTUS project team convened at the ANU Capstone Showcase to unveil the culmination of a year's worth of painstaking effort and unwavering commitment. It was an opportunity to present our autonomous vehicle project to a discerning audience.
              </p>

              <p className="mb-4 pb-2">
              Our remotely controlled vehicle stood as a testament to advanced engineering and cutting-edge technology. Its elegant design and sophisticated components captivated onlookers, embodying the pinnacle of technological achievement.
              </p>

              <p className="mb-4 pb-2">
              What set this showcase apart was the interactive nature of the event. Attendees had the unique privilege of taking the driver's seat, experiencing first-hand the precision and control of our system. This immersive engagement allowed them to appreciate the extent of mastery we had attained.
              </p>

              <p className="mb-4 pb-2">
              Moreover, the vehicle was open for thorough examination, inviting curious minds to explore its intricate workings and mechanisms. The event buzzed with lively discussions as attendees delved into the technological nuances of our project and its potential applications.
              </p>

              <p className="mb-4 pb-2">
              Of particular interest were discussions surrounding the possible integration of our autonomous system within the Australian trucking industry. In-depth dialogues unfolded, where our project team shared valuable insights regarding the challenges and opportunities that such an integration could present. These exchanges underscored the versatility and innovation underpinning our project's core technology.

              </p>

              <p className="mb-4 pb-2">
              Amidst conversations that touched on the project's trials and triumphs, attendees could sense the collective achievement. The team recounted the countless hours devoted to code optimization, system integration, and the relentless pursuit of technological excellence. It was a celebration of innovative spirit and unwavering determination.

              </p>

              <p className="mb-4 pb-2">

              The impressive turnout at the showcase was met with profound appreciation. We extend our heartfelt gratitude to all who visited. Your interest, support, and engaging discussions contributed significantly to the success of the event. Such moments remind us of the driving force behind our ambitious project.

              </p>

              <p className="mb-4 pb-2">
              As we conclude this chapter, we look forward to the future with optimism and an unswerving resolve. The TOTUS project is not merely a manifestation of autonomous technology; it exemplifies what can be achieved through collaborative effort, dedication, and a steadfast commitment to a shared vision.

              </p>

              <h3 className="h5 mb-4 pb-2 fw-medium">

              We extend our sincere thanks to all those who joined us on this momentous day. Your presence and enthusiasm fueled our passion and determination. Stay tuned for the upcoming stages of our journey as we continue to push the boundaries of autonomous technology, shaping the future of transportation.
              </h3>

              <div className="mb-4 pb-2" >
                <img
                  className=""
                  src="assets/img/blog_post_images/12-team.jpg"
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