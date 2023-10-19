const MediaItem = ({ title }) => {

    {/* ANU Article:  */ }
    {/* Item - Link*/ }
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

}

export default MediaItem
