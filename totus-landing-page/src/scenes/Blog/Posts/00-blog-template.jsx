import EvangelineAuthor from "../../../components/AuthorAvatar/EvangelineAuthor"
import BoruiAuthor from "../../../components/AuthorAvatar/BoruiAuthor"
import DanielAuthor from "../../../components/AuthorAvatar/DanielAuthor"
import TirrnAuthor from "../../../components/AuthorAvatar/TirrnAuthor"
import YuqiAuthor from "../../../components/AuthorAvatar/YuqiAuthor"
import LiamAuthor from "../../../components/AuthorAvatar/LiamAuthor"

export default function () {
  return <section class="container py-5 my-md-2 my-lg-4 my-xl-5">

    <div>
      <main>
        <section className="container mt-4 pt-lg-2 pb-3">

          {/* HEADING */}
          <h1 className="pb-0" style={{ maxWidth: 970 }}>
            Welcome to Totus 2023!
          </h1>

          {/* DATE */}
          <div className="fs-sm pe-3 me-1 mb-1">
            3 Sept 2023
          </div>

          {/* CHANGE AUTHOR AVATAR */}
          <EvangelineAuthor />


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
              backgroundImage: "url(assets/img/blog/single/cover-image.jpg)",
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
                This is the subtitle with the main point or cool thing to talk about first
              </h3>

              {/* Paragraph title */}
              <h2 className="h4">Paragraph Title</h2>

              {/* Normal Text */}
              <p className="mb-4 pb-2">
                Normal text goes here big paragraph. Breaks are like this: <br/> 
                Hello this is me la la la paragraph text
              </p>

              {/* Video */}
              <div className="gallery mb-4 pb-2" data-video="true">
                <a
                  href="https://www.youtube.com/watch?v=LDb-G8y88Sc"
                  className="gallery-item video-item is-hovered rounded-3"
                  data-sub-html='<h6 class="fs-sm text-light">Video inside blog post</h6>'
                >
                  <img
                    src="assets/img/blog/single/video-cover.jpg"
                    alt="Video preview"
                  />
                </a>
              </div>

              {/* Quotation */}
              <figure className="position-relative mb-4 ps-4">
                <span className="position-absolute top-0 start-0 w-3 h-100 bg-primary" />
                <blockquote className="blockquote fs-xl fw-medium text-dark ps-1 ps-sm-3">
                  <p>
                    Sollicitudin eget massa, elementum, purus nec fermentum vitae,
                    elementum. Tincidunt vulputate lorem cursus id. Dictum tincidunt
                    mi ornare tristique. Id sit elit pulvinar eu. Tempus vel, mauris
                    sed proin aliquet vulputate cras est. Ut ornare eget a viverra.
                  </p>
                </blockquote>
              </figure>

              {/* Pros and Cons List */}
              <h4 className="h6">
                <i className="bx bx-plus-circle me-1 mt-n1 align-middle fs-5 text-primary" />
                PROS
              </h4>
              <ul className="mb-4 pb-2 ps-4">
                <li className="mb-1">
                  Pro item number 1
                </li>
                <li className="mb-1">
                  Pro item number 2
                </li>
              </ul>
              <h4 className="h6">
                <i className="bx bx-minus-circle me-1 mt-n1 align-middle fs-5 text-primary" />
                CONS
              </h4>
              <ul className="mb-4 pb-2 ps-4">
                <li className="mb-1">
                  Con item number 1
                </li>
                <li className="mb-1">
                  Con item number 2
                </li>
              </ul>


            </div>
            {/* Sidebar - LEAVE */}
            <div className="col-lg-3 position-relative">
              <div
                className="sticky-top ms-xl-5 ms-lg-4 ps-xxl-4 pt-5"
                style={{ top: "105px !important" }}
              >
                <a className="btn btn-lg btn-outline-secondary" href="/project-updates">
                  <i className="bx bx-back me-2 lead " />
                  Back to Project Updates
                </a>
                <h6 className='pt-5'>Like what we are doing? </h6>
                
                <a className="btn btn-lg btn-outline-secondary" href="/feedback">
                  <i className="bx bx-like me-2 lead" />
                  Leave a message
                </a>
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