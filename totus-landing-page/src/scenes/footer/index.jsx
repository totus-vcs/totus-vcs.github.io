import { Link } from "react-router-dom"; 

const Footer = () => {
    return <div>

        <footer className="footer pt-10 pb-4 pb-lg-5">
            <div className="container pt-lg-4">
                <div className="row pb-5">
                    <div className="col-lg-4 col-md-6">
                        <div className="navbar-brand text-dark p-0 me-0 mb-3 mb-lg-4">

                            {/* Totus Image */}
                            <img
                                src="assets/img/Totus_FRONT.png"
                                width="75"
                                alt="Totus"
                            />
                            <img
                                src="assets/img/TotusText.png"
                                width="200"
                                alt="Vehicle Control Systems"
                            />
                        </div>

                        {/* Footer Text  */}
                        <p className="fs-sm pb-lg-1 mb-1">
                            Trucks roll down highways without a soul,<br />
                            Autonomous driving taking control,<br />
                            Remotely operated, no need for a driver's role,<br />
                            A new era in trucking, a technological goal,<br />
                            The future arrives, transporting goods with ease and whole.<br/> 
                            
                        </p>
                        <p className="font-italic">- ChatGPT</p>
                    </div>

                    {/* Footer links */}
                    <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
                        <div id="footer-links" className="row">
                             {/* Column 1 */}
                            <div className="col-xl-4 col-lg-3">
                                <div
                                    id="useful-links"
                                    className="collapse d-lg-block"
                                    data-bs-parent="#footer-links"
                                >
                                    <ul className="nav flex-column pb-lg-1 mb-lg-3">
                                        <li className="nav-item">
                                            <Link
                                                to="/"
                                                className="nav-link d-inline-block px-0 pt-1 pb-2"
                                            >
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                to="/project-updates"
                                                className="nav-link d-inline-block px-0 pt-1 pb-2"
                                            >
                                                Updates
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link
                                                to="/media"
                                                className="nav-link d-inline-block px-0 pt-1 pb-2"
                                            >
                                                Media
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                href="https://www.linkedin.com/company/totus-vehicle-control-systems/"
                                                className="nav-link d-inline-block px-0 pt-1 pb-2"
                                            >
                                                TOTUS LinkedIn
                                            </a>
                                        </li>

                                    </ul>

                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-5 pt-2 pt-lg-0">
                                <h6 className="mb-2">Contact Client</h6>
                                <a
                                    href="mailto:alexander.ollman@gmail.com"
                                    className="fw-medium"
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

