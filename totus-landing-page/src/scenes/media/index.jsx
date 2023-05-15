import { Link } from "react-router-dom";

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
                            <div className="col-md-5 mb-2">
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
                            <div className="col-md-5 mb-2">
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
                            <div className="col-md-7 mb-2">
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
                            <div className="col-md-7 mb-2">
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
