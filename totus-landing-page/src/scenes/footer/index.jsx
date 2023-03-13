
const Footer = () => {
    return <div>
        {/* <!-- Sign up CTA --> */}
        <section class="container">
            <div class="bg-dark border border-light rounded-3 py-5 px-4 px-sm-0">
                <div class="row justify-content-center py-sm-2 py-lg-5">
                    <div class="col-xl-6 col-lg-7 col-md-8 col-sm-10 text-center">
                        <h2 class="h1 text-light mb-4">Any questions or thoughts?</h2>
                        <p class="fs-lg text-light opacity-70 pb-4 mb-3">
                            Share your feedback with us!
                        </p>

                        {/* <!-- Desktop form --> */}

                        <button type="submit" class="btn btn-primary" href="">
                            Feedback Form
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <footer class="footer pt-5 pb-4 pb-lg-5">
            <div class="container pt-lg-4">
                <div class="row pb-5">
                    <div class="col-lg-4 col-md-6">
                        <div class="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">
                            <img
                                src="assets/img/Totus_FRONT.png"
                                width="100"
                                alt="Silicon"
                            />
                            <img
                                src="assets/img/TotusText.png"
                                width="300"
                                alt="Silicon"
                            />
                        </div>
                        <p class="fs-sm pb-lg-3 mb-4">
                            Proin ipsum pharetra, senectus eget scelerisque varius pretium
                            platea velit. Lacus, eget eu vitae nullam proin turpis etiam
                            mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus,
                            eget elementum dolor ullamcorper sodales ultrices eros.
                        </p>
                    </div>
                    <div class="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
                        <div id="footer-links" class="row">
                            <div class="col-lg-4">
                                <h6 class="mb-2">
                                    <a
                                        href="#useful-links"
                                        class="d-block text-dark dropdown-toggle d-lg-none py-2"
                                        data-bs-toggle="collapse"
                                    >
                                        Useful Links
                                    </a>
                                </h6>
                                <div
                                    id="useful-links"
                                    class="collapse d-lg-block"
                                    data-bs-parent="#footer-links"
                                >
                                    <ul class="nav flex-column pb-lg-1 mb-lg-3">
                                        <li class="nav-item">
                                            <a
                                                href="#"
                                                class="nav-link d-inline-block px-0 pt-1 pb-2"
                                            >
                                                Home
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                href="#"
                                                class="nav-link d-inline-block px-0 pt-1 pb-2"
                                            >
                                                Features
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                href="#"
                                                class="nav-link d-inline-block px-0 pt-1 pb-2"
                                            >
                                                Integrations
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                href="#"
                                                class="nav-link d-inline-block px-0 pt-1 pb-2"
                                            >
                                                Our Clients
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                href="#"
                                                class="nav-link d-inline-block px-0 pt-1 pb-2"
                                            >
                                                Blog
                                            </a>
                                        </li>
                                    </ul>
                                    <ul class="nav flex-column mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a
                                                href="#"
                                                class="nav-link d-inline-block px-0 pt-1 pb-2"
                                            >
                                                Terms &amp; Conditions
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                href="#"
                                                class="nav-link d-inline-block px-0 pt-1 pb-2"
                                            >
                                                Privacy Policy
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-3">
                                <h6 class="mb-2">
                                    <a
                                        href="#social-links"
                                        class="d-block text-dark dropdown-toggle d-lg-none py-2"
                                        data-bs-toggle="collapse"
                                    >
                                        Socials
                                    </a>
                                </h6>
                                <div
                                    id="social-links"
                                    class="collapse d-lg-block"
                                    data-bs-parent="#footer-links"
                                >
                                    <ul class="nav flex-column mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a
                                                href="#"
                                                class="nav-link d-inline-block px-0 pt-1 pb-2"
                                            >
                                                Facebook
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                href="#"
                                                class="nav-link d-inline-block px-0 pt-1 pb-2"
                                            >
                                                LinkedIn
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                href="#"
                                                class="nav-link d-inline-block px-0 pt-1 pb-2"
                                            >
                                                Twitter
                                            </a>
                                        </li>
                                        <li class="nav-item">
                                            <a
                                                href="#"
                                                class="nav-link d-inline-block px-0 pt-1 pb-2"
                                            >
                                                Instagram
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-5 pt-2 pt-lg-0">
                                <h6 class="mb-2">Contact Client</h6>
                                <a
                                    href="mailto:alexander.ollman@gmail.com"
                                    class="fw-medium"
                                >
                                    alexander.ollman@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
}

export default Footer;

