import { Link } from "react-router-dom";

import MediaItem from "../../components/mediaItem"

const MediaPage = () => {

    return <section class="container py-5 my-md-3 my-lg-5" id="FeedbackBox">

        <div>

            <main className="page-wrapper">

                {/* Page content */}
                <section className="container mt-4 mb-lg-5 pt-lg-2 pb-5">

                    {/* Page title */}
                    <div className="row align-items-end gy-3 mb-4 pb-lg-3 pb-1">
                        <div className="col-lg-5 col-md-4">
                            <h1 className="mb-2 mb-md-0">Media</h1>
                        </div>
                    </div>

                    {/* Portfolio grid */
                    }
                    <section className="container pb-5 mb-2 mb-md-4 mb-lg-5">
                        <div className="row pb-lg-3">

                            {/*Showcase*/}
                            {/* Item - Link*/}
                            <div className="col-md-5 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/12-team.jpg" alt="Image" />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="h4 mb-2">
                                            {/* Image Link and Header*/}
                                            <Link to="/12-showcase" className="stretched-link">
                                                Showcase!
                                            </Link>
                                        </h2>
                                        <div className="card-portfolio-meta">
                                            {/* Description Text */}
                                            <span className="text-muted">
                                                Was a great day, proud to show our system at the ANU Capstone showcase.                       
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*poster*/}
                            {/* Item - Link*/}
                            <div className="col-md-6 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/09-poster.png" alt="Image" />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="h4 mb-2">
                                            {/* Image Link and Header*/}
                                            <Link to="/09-yuqi" className="stretched-link">
                                                Our ANU Capstone Showcase Poster
                                            </Link>
                                        </h2>
                                        <div className="card-portfolio-meta">
                                            {/* Description Text */}
                                            <span className="text-muted">
                                                Visit our stall on October 14!                
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Steering*/}
                            {/* Item - Link*/}
                            <div className="col-md-5 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/10-steer.png" alt="Image" />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="h4 mb-2">
                                            {/* Image Link and Header*/}
                                            <Link to="/10-liam" className="stretched-link">
                                                Steering Design
                                            </Link>
                                        </h2>
                                        <div className="card-portfolio-meta">
                                            {/* Description Text */}
                                            <span className="text-muted">
                                                A retrofittable steering solution, unique gear system.                    
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Pedals*/}
                            {/* Item - Link*/}
                            <div className="col-md-5 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/10-pedal.png" alt="Image" />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="h4 mb-2">
                                            {/* Image Link and Header*/}
                                            <Link to="/10-liam" className="stretched-link">
                                                Pedal Design
                                            </Link>
                                        </h2>
                                        <div className="card-portfolio-meta">
                                            {/* Description Text */}
                                            <span className="text-muted">
                                                A retrofittable pedal solution, with new stronger mounting to the car.                     
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Logitech*/}
                            {/* Item - Link*/}
                            <div className="col-md-3 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/11-logitech.jpg" alt="Image" />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="h4 mb-2">
                                            {/* Image Link and Header*/}
                                            <Link to="/11-tirrncode" className="stretched-link">
                                                Logitech Driving Control
                                            </Link>
                                        </h2>
                                        <div className="card-portfolio-meta">
                                            {/* Description Text */}
                                            <span className="text-muted">
                                                We are using the Logitech G25 steering system - looks pretty cool!                                 
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Working on Servos*/}
                            {/* Item - Link*/}
                            <div className="col-md-3 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/07-servo.png" alt="Image" />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="h4 mb-2">
                                            {/* Image Link and Header*/}
                                            <Link to="/07-servo" className="stretched-link">
                                                Tirrn and Evangeline debugging the motors.
                                            </Link>
                                        </h2>
                                        <div className="card-portfolio-meta">
                                            {/* Description Text */}
                                            <span className="text-muted">
                                                Lots of learning and upskilling. Really pleased to have a system with a fast response this early!                                        
                                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*Working on car*/}
                            {/* Item - Link*/}
                            <div className="col-md-4 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/06-workingincar.jpg" alt="Image" />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="h4 mb-2">
                                            {/* Image Link and Header*/}
                                            <Link to="/06-unlocking-vision" className="stretched-link">
                                                Daniel and Evangeline testing the vision system.
                                            </Link>
                                        </h2>
                                        <div className="card-portfolio-meta">
                                            {/* Description Text */}
                                            <span className="text-muted">
                                                It was a very warm day in Canberra.                                             </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Camera  */}
                            {/* Item - Link*/}
                            <div className="col-md-4 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/06-camera.jpg" alt="Image" />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="h4 mb-2">
                                            {/* Image Link and Header*/}
                                            <Link to="/06-unlocking-vision" className="stretched-link">
                                                The Megapixel 720p USB Wide-angle Camera
                                            </Link>
                                        </h2>
                                        <div className="card-portfolio-meta">
                                            {/* Description Text */}
                                            <span className="text-muted">
                                                Boasts impressive specifications, including a 720p resolution, a wide 140-degree field of view (FOV), and a smooth 30 frames per second (fps) capture rate. These specifications make it an ideal choice for our project, offering the clarity and wide coverage we need to capture critical data and also meet the clients' requirements.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* ANU Article:  */}
                            {/* Item - Link*/}
                            <div className="col-md-5 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/03-externalblog.png" alt="Image" />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="h4 mb-2">
                                            {/* Image Link and Header*/}
                                            <a href="https://cecc.anu.edu.au/news/would-you-trust-ai-drive-semi-trailer" className="stretched-link">
                                                ANU College of Engineering Article: Would you trust AI to drive a semi trailer?
                                            </a>
                                        </h2>
                                        <div className="card-portfolio-meta">
                                            {/* Description Text */}
                                            <span className="text-muted">
                                                ANU have published a great article about the TOTUS project, particularly about the project's beginnings in 2022, and a great interview with this project's CEO, Alex!
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Mechanics mid project Update */}
                            {/* Item - Link*/}
                            <div className="col-md-5 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/03-mechanics.png" alt="Image" />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="h4 mb-2">
                                            {/* Image Link and Header*/}
                                            <Link to="/03-midprojectupdate" className="stretched-link">
                                                Initial mechanical designs
                                            </Link>
                                        </h2>
                                        <div className="card-portfolio-meta">
                                            {/* Description Text */}
                                            <span className="text-muted">
                                                Some initial designs developed by our mechanics team, to show off at the mid project presentation.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Vision mid project Update */}
                            {/* Item - Link*/}
                            <div className="col-md-5 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/03-vision.png" alt="Image" />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="h4 mb-2">
                                            {/* Image Link and Header*/}
                                            <Link to="/03-midprojectupdate" className="stretched-link">
                                                Initial vision testing
                                            </Link>
                                        </h2>
                                        <div className="card-portfolio-meta">
                                            {/* Description Text */}
                                            <span className="text-muted">
                                                Filming in a car, to get an initial idea about how the vision system will work.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* JUSTIN */}
                            {/* Item - Link*/}
                            <div className="col-md-3 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/InterviewJustin.png" alt="Image" />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="h4 mb-2">
                                            {/* Image Link and Header*/}
                                            <Link to="/02-intervews-with-stakeholders" className="stretched-link">
                                                Chat with Justin, Former Truck Driver
                                            </Link>
                                        </h2>
                                        <div className="card-portfolio-meta">
                                            {/* Description Text */}
                                            <span className="text-muted">
                                                Justin shared his perspective on our project, shedding light on its potential impact on the trucking industry.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* MAIA */}
                            {/* Item - Link*/}
                            <div className="col-md-3 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/02-maia.jpg" alt="Image" />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="h4 mb-2">
                                            {/* Image Link and Header*/}
                                            <Link to="/02-intervews-with-stakeholders" className="stretched-link">
                                                Chat with Maia, ANU Cybernetics
                                            </Link>
                                        </h2>
                                        <div className="card-portfolio-meta">
                                            {/* Description Text */}
                                            <span className="text-muted">
                                                Maia is the Cybernetic Engagements Lead the for the School of Cybernetics. She had interesting legal and ethical perspectives for our project.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* BEN SWIFT */}
                            {/* Item - Link*/}
                            <div className="col-md-5 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/BenSwift.png" alt="Image" />
                                    </div>
                                    <div className="card-body">
                                        <h2 className="h4 mb-2">
                                            {/* Image Link and Header*/}
                                            <Link to="/02-intervews-with-stakeholders" className="stretched-link">
                                                Chat with ANU Cybernetics
                                            </Link>
                                        </h2>
                                        <div className="card-portfolio-meta">
                                            {/* Description Text */}
                                            <span className="text-muted">
                                                Ben is the ANU School of Cybernetics' associate director (Education) responsible for overseeing the overall education portfolio, including the Master of Applied Cybernetics.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Team TOTUS */}
                            {/* Item - No Link*/}
                            <div className="col-md-5 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img ">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/totus-team-spelled.jpg" alt="Image" />
                                    </div>
                                    <div className="card-body">
                                        {/* Header */}
                                        <h2 className="h4 mb-2">
                                            Team TOTUS
                                        </h2>
                                        <div className="card-portfolio-meta pb-1">
                                            {/* Description Text */}
                                            <span className="text-muted">
                                                Talented engineers.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* TEAM MEETING WITH ALEX  */}
                            {/* Item - No Link*/}
                            <div className="col-md-5 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/TeamThumbsUp.jpg" alt="Image" />
                                    </div>
                                    <div className="card-body">
                                        {/* Header */}
                                        <h2 className="h4 mb-2">
                                            Team meeting!
                                        </h2>
                                        <div className="card-portfolio-meta pb-1">
                                            {/* Description Text */}
                                            <span className="text-muted">
                                                Meeting with our client, Alex!
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                    </section>

                </section>

            </main>
        </div>


    </section>
}

export default MediaPage
