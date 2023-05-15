import EvangelineAuthor from "../../components/AuthorAvatar/EvangelineAuthor"
import BoruiAuthor from "../../components/AuthorAvatar/BoruiAuthor"
import DanielAuthor from "../../components/AuthorAvatar/DanielAuthor"
import TirrnAuthor from "../../components/AuthorAvatar/TirrnAuthor"
import YuqiAuthor from "../../components/AuthorAvatar/YuqiAuthor"
import LiamAuthor from "../../components/AuthorAvatar/LiamAuthor"

import BlogPreview from "../../components/BlogPreview"

const FeedbackBox = () => {
 
  return <section class="container py-5 my-md-3 my-lg-5" id="FeedbackBox">
    <div>

      <main className="page-wrapper">

        {/* Page content */}
        <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">

          {/* Page title */}
          <div className="row align-items-end gy-3 mb-4 pb-lg-3 pb-1">
            <div className="col-lg-5 col-md-4">
              <h1 className="mb-2 mb-md-0">Project Updates</h1>
            </div>
          </div>

          <BlogPreview
            bgImage={"url(assets/img/blog_post_images/03-present.jpg)"}
            pageref="/03-midprojectupdate"
            date={"May 12, 2023"}
            title={"Mid Project Update"}
            previewText={"Yesterday we presented our mid project update to fellow capstone groups at ANU!"}
            authorAvatar={<EvangelineAuthor/>}
          />

          <BlogPreview
            bgImage={"url(assets/img/blog_post_images/InterviewJustin.png)"}
            pageref="/02-intervews-with-stakeholders"
            date={"April 17, 2023"}
            title={"Interviews with Stakeholders"}
            previewText={"This week we had a chat with some great stakeholders and researchers, and gained some very insightful information about our project."}
            authorAvatar={<div><DanielAuthor/><LiamAuthor/></div>}
          />

          <BlogPreview
            bgImage={"url(assets/img/blog_post_images/TeamThumbsUp.jpg)"}
            pageref="/01-welcome-to-totus"
            date={"March 10, 2023"}
            title={"Welcome to Totus 2023"}
            previewText={"Following the COVID-19 pandemic and an increasing demand for truck drivers in Australia the logistics industry is facing more challenges than ever. This is where TOTUS comes in..."}
            authorAvatar={<EvangelineAuthor/>}
          />

          


        </section>



      </main>
    </div>


  </section>
}

export default FeedbackBox
