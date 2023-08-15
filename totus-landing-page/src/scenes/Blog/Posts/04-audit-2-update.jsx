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
              Audit 2 Update!
            </h1>

            {/* DATE */}
            <div className="fs-sm pe-3 me-1 mb-1">23 May 2023</div>

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
                  Last week we completed Audit 2 and presented our updates to fellow capstone groups at ANU!
                </h3>

                {/* Normal Text */}
                <p className="mb-4 pb-2">
                Hello everyone, 
                We're back with an update on our project's journey, and we're excited to share the latest developments 
                as we reach Audit 2 out of 4. This phase has allowed us to reflect on our progress and how it aligns 
                with our initial plans from Audit 1. Here's a snapshot of what we've been up to: 
                </p>

                {/* Subteam Updates */}
                <h2 className="h4">Refining Sub-Systems and Expanding on our Requirements</h2>

                <p className="mb-4 pb-2">
                One of the highlights of our recent work has been refining our sub-systems and crafting a solid architecture 
                to link them together. We've introduced an "interface system" that connects our vision and software elements, 
                and an "electrical system" that forms the bridge between our software and hardware components. <br /> <br />

                We've taken a closer look at our project requirements, breaking them down for each sub-system. Assigning importance weightings 
                and benchmarking against similar projects has helped us ensure that our project remains on track. We've also established testing 
                procedures to measure the performance of each sub-system effectively. <br />

                </p>


                {/* Photo */}
                <div className="mb-4 pb-2" >
                  <img
                    className=""
                    src="assets/img/blog_post_images/Audit-2.png"
                    alt="Sub-Components"
                  />
                </div>


                {/* Subteam Updates */}
                <h2 className="h4 pt-4">Improved Decision-Making, Requirement Tracing, and Transition Planning</h2>

                <p className='mb-4 pb-2'>
                To continue keeping ourselves accountable and decisions transparent, we've set up a requirement traceability matrix. 
                This matrix helps us stay focused on our main goals while making sure that we're meeting the essential criteria we've set. 
                Additionally, we've significantly added to our decision-making log. <br /> <br />

                Our teamwork structure has evolved to enhance collaboration. Our team leaders - Evangeline and Borui, along with our communications officer, Liam,
                have been lending their help to each sub-team, respectively. While we're sad to see Borui leave as he graduates, we have a plan in place to ensure 
                a smooth transition and keep the project momentum going. 
                </p>

                {/* Photo */}
                <div className="mb-4 pb-2" >
                  <img
                    className=""
                    src="assets/img/blog_post_images/borui-gone.png"
                    alt="borui-gone"
                  />
                </div>

                <h2 className="h4 pt-4">Taking a Breather and Looking Ahead </h2>

                <p className='mb-4 pb-2'>
                With Audit 2 behind us, we're taking a short break during the mid-year holidays. It's a chance for our team to recharge before we dive into the next phase. 
                We're thankful for your continued support and interest in our project, and we can't wait to share more updates with you next semester. 
                <br /> <br /> 
                Wishing you all a relaxing break and looking forward to what lies ahead! 
                <br /> <br /> 
                Best regards, TOTUS 
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
