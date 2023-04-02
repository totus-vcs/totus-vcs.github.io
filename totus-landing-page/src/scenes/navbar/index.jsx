
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

                <a className="btn btn-sm btn-outline-primary me-2" type="button" href="/project-updates">
                    Project Updates
                </a>

                <a className="btn btn-sm btn-outline-primary me-2" type="button" href="/media">
                    Media
                </a>

                <a className="btn btn-sm btn-outline-secondary" type="button" href="https://anu365-my.sharepoint.com/:f:/g/personal/u6986400_anu_edu_au/ErAc0ZSa1FpPpsEAtDJz43gBSlbknEQfhFSxOLqw1K8uZQ?e=3ZqbSK">
                    Repository
                </a>

            </form>
        </nav>

        




        </section >

        


    )
}


export default Navbar;

