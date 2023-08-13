import { Link } from "react-router-dom";

const Navbar = () => {
    return (


        <section className="container py-1 my-md-3 my-lg-2">

            <nav className="navbar bg-body-tertiary ">

                {/* img */}
                <div className="justify-content-start">
                    <a className="pt-3" href="/">
                        <img
                            src="assets/img/Totus_FRONT.png"
                            width="90"
                            alt="Totus Logo"
                        />
                        <img
                            src="assets/img/Totus_REAR.png"
                            width="200"
                            alt="Totus Text"
                        />
                    </a>
                </div>

                {/* {/* Right align buttons  */}
                <form className="justify-content-end">

                    <Link className="btn btn-sm btn-outline-primary me-2" type="button" to="/project-updates">
                        Project Updates
                    </Link>

                    <Link className="btn btn-sm btn-outline-primary me-2" type="button" to="/media">
                        Media
                    </Link>
                    {/* 
                <Link className="btn btn-sm btn-outline-primary me-2" type="button" to="/contents">
                    Contents
                </Link> */}

                    <a className="btn btn-sm btn-outline-secondary" type="button" href="https://anu365-my.sharepoint.com/:f:/r/personal/u6986400_anu_edu_au/Documents/ENGN4300-TOTUS%20(2023)?csf=1&web=1&e=vrCmNb">
                        Repository
                    </a>

                </form>
            </nav>
        </section >
    )
}


export default Navbar;

