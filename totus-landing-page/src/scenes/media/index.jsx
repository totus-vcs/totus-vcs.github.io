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
                                                Chat with Ben Swift
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

                            {/* Item - No Link*/}
                            <div className="col-md-7 mb-2">
                                <div className="card card-portfolio">
                                    <div className="card-img ">
                                        {/* Image */}
                                        <img src="assets/img/blog_post_images/totus-team-spelled.jpg" alt="Image"/>
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
