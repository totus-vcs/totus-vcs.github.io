
const Footer = () => {
    return <div>
        {/* <!-- Sign up CTA --> */}
        <section className="container">
            <div className="bg-dark border border-light rounded-3 py-5 px-4 px-sm-0">
                <div className="row justify-content-center py-sm-2 py-lg-5">
                    <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10 text-center">
                        <h2 className="h1 text-light mb-4">Any questions or thoughts?</h2>
                        <p className="fs-lg text-light opacity-70 pb-4 mb-3">
                            Share your feedback with us!
                        </p>

                        {/* <!-- Desktop form --> */}

                        <a href="/feedback" className="btn btn-primary">
                            Feedback Form
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
}

export default Footer;

