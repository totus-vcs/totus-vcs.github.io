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
            bgImage={"url(assets/img/blog_post_images/12-team.jpg)"}
            pageref="/12-showcase"
            date={"October 14, 2023"}
            title={"Time to Showcase our Design"}
            previewText={"ANU's Capstone showcase day was a success!"}
            authorAvatar={<EvangelineAuthor/>}
          />

          <BlogPreview
            bgImage={"url(assets/img/blog_post_images/11-logitech.jpg)"}
            pageref="/11-tirrncode"
            date={"October 10, 2023"}
            title={"Jetson Nano and Logitech G25 in Sync "}
            previewText={"Jetson Nano is now perfectly synchronized with the Logitech G25 steering set and pedals, marking a significant milestone in our project."}
            authorAvatar={<TirrnAuthor />}
          />

          <BlogPreview
            bgImage={"url(assets/img/blog_post_images/09-poster.png)"}
            pageref="/09-yuqi"
            date={"October 5, 2023"}
            title={"Sneak Preview of our Showcase Poster"}
            previewText={"Come check our project out on the 14th of October!"}
            authorAvatar={<EvangelineAuthor />}
          />

          <BlogPreview
            bgImage={"url(assets/img/blog_post_images/10-truck.png)"}
            pageref="/10-liam"
            date={"September 30, 2023"}
            title={"Finalised Mechanics Design for the 2023 TOTUS Project"}
            previewText={"Hey there, folks! We're excited to share some exciting updates regarding the finalised mechanics design for our car project."}
            authorAvatar={<LiamAuthor />}
          />

          <BlogPreview
            bgImage={"url(assets/img/blog_post_images/08-cv.png)"}
            pageref="/08-evie-code"
            date={"September 14, 2023"}
            title={"Optimizing Latency in Our TOTUS Remote Driving System"}
            previewText={"In the world of autonomous vehicles, every millisecond counts."}
            authorAvatar={<EvangelineAuthor />}
          />

          <BlogPreview
            bgImage={"url(assets/img/blog_post_images/07-jetson.png)"}
            pageref="/07-code"
            date={"September 03, 2023"}
            title={"Driving Progress: Servo Success with Jetson and Adafruit for Safer Autonomous Vehicles"}
            previewText={"Today, we're excited to share a significant achievement in our journey: coding and testing the servos!"}
            authorAvatar={<TirrnAuthor />}
          />

          <BlogPreview
            bgImage={"url(assets/img/blog_post_images/06-camera.jpg)"}
            pageref="/06-unlocking-vision"
            date={"August 20, 2023"}
            title={"Unlocking Crystal Clear Vision: Introducing Our Megapixel 720p USB Wide-angle Camera for Raspberry Pi and NVIDIA Jetson Nano"}
            previewText={"We are thrilled to share a significant development in our project's camera system."}
            authorAvatar={<DanielAuthor />}
          />

          <BlogPreview
            bgImage={"url(assets/img/blog_post_images/camera.jpg)"}
            pageref="/05-we're-back"
            date={"August 1, 2023"}
            title={"We're back: The project is now"}
            previewText={"It's the moment you've all been waiting for, we are back and the project is now."}
            authorAvatar={<LiamAuthor />}
          />

          <BlogPreview
            bgImage={"url(assets/img/blog_post_images/Audit-2.png)"}
            pageref="/04-audit-2-update"
            date={"May 23, 2023"}
            title={"Audit 2 Update: Systems Engineering and Design Thinking"}
            previewText={"Last week we completed Audit 2 and presented our updates to fellow capstone groups at ANU!"}
            authorAvatar={<LiamAuthor />}
          />

          <BlogPreview
            bgImage={"url(assets/img/blog_post_images/03-present.jpg)"}
            pageref="/03-midprojectupdate"
            date={"May 12, 2023"}
            title={"Mid Project Update"}
            previewText={"Yesterday we presented our mid project update to fellow capstone groups at ANU!"}
            authorAvatar={<EvangelineAuthor />}
          />

          <BlogPreview
            bgImage={"url(assets/img/blog_post_images/InterviewJustin.png)"}
            pageref="/02-intervews-with-stakeholders"
            date={"April 17, 2023"}
            title={"Some Chats with Drivers and Logistics"}
            previewText={"This week we had a chat with some great stakeholders and researchers, and gained some very insightful information about our project."}
            authorAvatar={<div><DanielAuthor /><LiamAuthor /></div>}
          />

          <BlogPreview
            bgImage={"url(assets/img/blog_post_images/TeamThumbsUp.jpg)"}
            pageref="/01-welcome-to-totus"
            date={"March 10, 2023"}
            title={"Welcome to Totus 2023"}
            previewText={"Following the COVID-19 pandemic and an increasing demand for truck drivers in Australia the logistics industry is facing more challenges than ever. This is where TOTUS comes in..."}
            authorAvatar={<EvangelineAuthor />}
          />

        </section>



      </main>
    </div>


  </section>
}

export default FeedbackBox
