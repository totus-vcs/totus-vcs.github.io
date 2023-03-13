// {/* <!-- Hero section with layer parallax gfx --> */}

import TickListNew from "../../components/TickListNew";
import TickListNormal from "../../components/TickListNormal";
import CrossList from "../../components/CrossList";


const Home = () => {
    return <div>
        <section class="position-relative overflow-hidden py-4 mb-3">
            <div class="container pt-lg-3">
                <div class="row flex-lg-nowrap">
                    <div class="col-lg-6 col-xl-5 text-center text-lg-start pt-5 mt-xl-4">
                        <h1 class="display-4 pt-5 pb-2 pb-lg-3 mt-sm-2 mt-lg-5">
                            Introducing the future of logistics.
                        </h1>
                        <p class="fs-lg mb-4 mb-lg-5">
                            TOTUS: An project in association with the Australian
                            National University to enable the remote operation of
                            trucks, vehicles and industrial systems.
                        </p>
                        <a
                            href="https://anu365-my.sharepoint.com/:f:/g/personal/u7335615_anu_edu_au/ElXSr9AwRDxHuzBFsxqYGqABTw6t1kxTnfoEvq63VnaB_Q?e=RXMXlq"
                            class="btn btn-primary btn-lg"
                        >
                            View Repository &nbsp;
                            <i class="bx bx-cloud"></i>
                        </a>
                        {/* <div class="pt-4 mt-xl-5">
                            <h6 class="pt-xl-3 pb-3 pb-lg-4"></h6>
                            <div class="d-flex justify-content-center justify-content-lg-start mx-xl-n2">
                                <a href="#" class="d-block me-2">
                                    <img
                                        src="assets/img/brands/07.svg"
                                        width="135"
                                        alt="Logo"
                                    />
                                </a>
                                
                            </div>
                        </div> */}
                    </div>

                    {/* <!-- Layer parallax --> */}
                    {/* <div class="parallax mt-4 ms-4 me-lg-0 ms-lg-n5 ms-xl-n3 mt-lg-n4">
                        <div class="parallax-layer" data-depth="0.1">
                            <img
                                src="assets/img/landing/saas-1/hero/layer01.png"
                                width="1416"
                                alt="Layer"
                            />
                        </div>
                        <div class="parallax-layer zindex-2" data-depth="0.15">
                            <img
                                src="assets/img/landing/saas-1/hero/layer02.png"
                                alt="Layer"
                            />
                        </div>
                        <div class="parallax-layer zindex-2" data-depth="0.35">
                            <img
                                src="assets/img/landing/saas-1/hero/layer03.png"
                                alt="Layer"
                            />
                        </div>
                        <div class="parallax-layer zindex-2" data-depth="0.25">
                            <img
                                src="assets/img/landing/saas-1/hero/layer04.png"
                                alt="Layer"
                            />
                        </div>
                        <div class="parallax-layer zindex-2" data-depth="0.4">
                            <img
                                src="assets/img/landing/saas-1/hero/layer05.png"
                                alt="Layer"
                            />
                        </div>
                        <div class="parallax-layer zindex-2" data-depth="0.28">
                            <img
                                src="assets/img/landing/saas-1/hero/layer06.png"
                                alt="Layer"
                            />
                        </div>
                        <div class="parallax-layer zindex-2" data-depth="0.35">
                            <img
                                src="assets/img/landing/saas-1/hero/layer07.png"
                                alt="Layer"
                            />
                        </div>
                    </div> */}

                </div>
            </div>
        </section>


        {/* <!-- Quick Links --> */}
        <section class="container">
            <h2 class="h1 text-center pb-4 pb-lg-5">Quick Links</h2>
            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6 text-center pb-md-2 mb-3 mb-lg-4">
                    <div class="d-inline-block bg-secondary rounded-circle p-3 mb-4">
                        <img
                            src="assets/img/landing/saas-1/features/document.svg"
                            width="32"
                            alt="Icon"
                        />
                    </div>
                    <h3 class="h5 pb-1 mb-2">
                        <a href="https://anu365-my.sharepoint.com/:f:/g/personal/u7335615_anu_edu_au/EpgISWg3QzpHvFqHYwZaDUQBLgj1-btU_owfhGa7oHDhOw?e=su9FOT">
                            <u>Concept of Operations</u>
                        </a>
                    </h3>
                    <p class="fs-sm">
                        Primary project document containing our requirements,
                        milestones and scope.
                    </p>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 text-center pb-md-2 mb-3 mb-lg-4">
                    <div class="d-inline-block bg-secondary rounded-circle p-3 mb-4">
                        <img
                            src="assets/img/landing/saas-1/features/meeting.svg"
                            width="32"
                            alt="Icon"
                        />
                    </div>
                    <h3 class="h5 pb-1 mb-2">
                        <a href="https://anu365-my.sharepoint.com/:f:/g/personal/u7335615_anu_edu_au/ElFQxe0NSGtHpeZk9NL8Mn8BAJGZhf_yGM7BHVN0CW4L1Q?e=eZqTtc">
                            <u>Meeting Minutes</u>
                        </a>
                    </h3>
                    <p class="fs-sm">View minutes for team meetings.</p>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 text-center pb-md-2 mb-3 mb-lg-4">
                    <div class="d-inline-block bg-secondary rounded-circle p-3 mb-4">
                        <img
                            src="assets/img/landing/saas-1/features/decision.svg"
                            width="32"
                            alt="Icon"
                        />
                    </div>
                    <h3 class="h5 pb-1 mb-2">
                        <a href="https://anu365-my.sharepoint.com/:f:/g/personal/u7335615_anu_edu_au/EkZmi7Iiv2tNoLL9h3n6VDkBoimotNBn62z2GcNEWyqcSA?e=FLb10D">
                            <u>Decision Log</u>
                        </a>
                    </h3>
                    <p class="fs-sm">
                        Contains all project decisions made, including risk
                        assessment, project impacts and justification{" "}
                    </p>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 text-center pb-md-2 mb-3 mb-lg-4">
                    <div class="d-inline-block bg-secondary rounded-circle p-3 mb-4">
                        <img
                            src="assets/img/landing/saas-1/features/feedback.svg"
                            width="32"
                            alt="Icon"
                        />
                    </div>
                    <h3 class="h5 pb-1 mb-2">
                        <a href="https://anu365-my.sharepoint.com/:f:/g/personal/u7335615_anu_edu_au/EsYnLLSgwERIlE42jGAZcCEBWNtKfavlyRV-j7A9LXSC6w?e=Nyp9qq">
                            <u>Feedback</u>
                        </a>
                    </h3>
                    <p class="fs-sm">
                        Notes and summaries on our recieved feedback.
                    </p>
                </div>
            </div>
        </section>

        {/* <!-- News --> */}
        {/* <section class="container pb-4 mb-lg-4">
            <div class="row align-items-center">
                <div
                    class="rellax col-md-5"
                    data-rellax-percentage="0.5"
                    data-rellax-speed="-0.6"
                    data-disable-parallax-down="lg"
                >
                    <img
                        src="assets/img/latest-updates.png"
                        class="d-block mx-auto"
                        width="600"
                        alt="Image"
                    />
                </div>

                <div class="col-lg-6 offset-lg-1 col-md-5">
                    <div
                        class="swiper overflow-hidden w-100 ms-n2 ms-md-0 pe-3 pe-sm-4 swiper-initialized swiper-vertical swiper-pointer-events swiper-free-mode swiper-backface-hidden"

                        data-swiper-options='{
                    "direction": "vertical",
                    "slidesPerView": "auto",
                    "freeMode": true,
                    "scrollbar": {
                      "el": ".swiper-scrollbar"
                    },
                    "mousewheel": true
                  }'
                    >
                        <div
                            class="swiper-wrapper pe-md-2"
                            id="swiper-wrapper-327f3ac1ba1052fde"
                            aria-live="polite"
                        >
                            <div
                                class="swiper-slide h-auto px-2 swiper-slide-active"
                                role="group"
                                aria-label="1 / 1"
                            >
                                <div class="row row-cols-md-1 row-cols-sm-2 row-cols-1 g-md-4 g-3">
                                    {/* <!-- Article -->
                                    <div class="col">
                                        <article class="card h-100 border-0 shadow-sm card-hover-primary">
                                            <div class="card-body pb-0">
                                                <div class="d-flex align-items-center justify-content-between mb-3">
                                                    <a
                                                        href="#"
                                                        class="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2"
                                                    >
                                                        Digital
                                                    </a>
                                                    <span class="fs-sm text-muted">1 day ago</span>
                                                </div>
                                                <h3 class="h5 mb-0">
                                                    <a
                                                        href="blog-single.html"
                                                        class="stretched-link"
                                                    >
                                                        Mobile App Generates Data for the Energy
                                                        Management
                                                    </a>
                                                </h3>
                                            </div>
                                            <div class="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                                                <div class="d-flex align-items-center me-3">
                                                    <i class="bx bx-like fs-lg me-1"></i>
                                                    <span class="fs-sm">8</span>
                                                </div>
                                                <div class="d-flex align-items-center me-3">
                                                    <i class="bx bx-comment fs-lg me-1"></i>
                                                    <span class="fs-sm">4</span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <i class="bx bx-share-alt fs-lg me-1"></i>
                                                    <span class="fs-sm">2</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>

                                    {/* <!-- Article --> 
                                    <div class="col">
                                        <article class="card h-100 border-0 shadow-sm card-hover-primary">
                                            <div class="card-body pb-0">
                                                <div class="d-flex align-items-center justify-content-between mb-3">
                                                    <a
                                                        href="#"
                                                        class="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2"
                                                    >
                                                        Business
                                                    </a>
                                                    <span class="fs-sm text-muted">
                                                        May 24, 2021
                                                    </span>
                                                </div>
                                                <h3 class="h5 mb-0">
                                                    <a
                                                        href="blog-single.html"
                                                        class="stretched-link"
                                                    >
                                                        How the Millennial Lifestyle Changes as
                                                        Service Prices Rise
                                                    </a>
                                                </h3>
                                            </div>
                                            <div class="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                                                <div class="d-flex align-items-center me-3">
                                                    <i class="bx bx-like fs-lg me-1"></i>
                                                    <span class="fs-sm">2</span>
                                                </div>
                                                <div class="d-flex align-items-center me-3">
                                                    <i class="bx bx-comment fs-lg me-1"></i>
                                                    <span class="fs-sm">0</span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <i class="bx bx-share-alt fs-lg me-1"></i>
                                                    <span class="fs-sm">3</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>

                                    {/* <!-- Article --> 
                                    <div class="col">
                                        <article class="card h-100 border-0 shadow-sm card-hover-primary">
                                            <div class="card-body pb-0">
                                                <div class="d-flex align-items-center justify-content-between mb-3">
                                                    <a
                                                        href="#"
                                                        class="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2"
                                                    >
                                                        Digital
                                                    </a>
                                                    <span class="fs-sm text-muted">
                                                        May 25, 2021
                                                    </span>
                                                </div>
                                                <h3 class="h5 mb-0">
                                                    <a
                                                        href="blog-single.html"
                                                        class="stretched-link"
                                                    >
                                                        Inclusive Marketing: Why and How Does it Work?
                                                    </a>
                                                </h3>
                                            </div>
                                            <div class="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                                                <div class="d-flex align-items-center me-3">
                                                    <i class="bx bx-like fs-lg me-1"></i>
                                                    <span class="fs-sm">5</span>
                                                </div>
                                                <div class="d-flex align-items-center me-3">
                                                    <i class="bx bx-comment fs-lg me-1"></i>
                                                    <span class="fs-sm">0</span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <i class="bx bx-share-alt fs-lg me-1"></i>
                                                    <span class="fs-sm">2</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>

                                    {/* <!-- Article --> 
                                    <div class="col">
                                        <article class="card h-100 border-0 shadow-sm card-hover-primary">
                                            <div class="card-body pb-0">
                                                <div class="d-flex align-items-center justify-content-between mb-3">
                                                    <a
                                                        href="#"
                                                        class="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2"
                                                    >
                                                        Technology
                                                    </a>
                                                    <span class="fs-sm text-muted">
                                                        May 26, 2021
                                                    </span>
                                                </div>
                                                <h3 class="h5 mb-0">
                                                    <a
                                                        href="blog-single.html"
                                                        class="stretched-link"
                                                    >
                                                        A Study on Smartwatch Design Qualities and
                                                        People’s Preferences
                                                    </a>
                                                </h3>
                                            </div>
                                            <div class="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                                                <div class="d-flex align-items-center me-3">
                                                    <i class="bx bx-like fs-lg me-1"></i>
                                                    <span class="fs-sm">7</span>
                                                </div>
                                                <div class="d-flex align-items-center me-3">
                                                    <i class="bx bx-comment fs-lg me-1"></i>
                                                    <span class="fs-sm">4</span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <i class="bx bx-share-alt fs-lg me-1"></i>
                                                    <span class="fs-sm">1</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>

                                    {/* <!-- Article --> 
                                    <div class="col">
                                        <article class="card h-100 border-0 shadow-sm card-hover-primary">
                                            <div class="card-body pb-0">
                                                <div class="d-flex align-items-center justify-content-between mb-3">
                                                    <a
                                                        href="#"
                                                        class="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2"
                                                    >
                                                        Startups
                                                    </a>
                                                    <span class="fs-sm text-muted">
                                                        May 27, 2021
                                                    </span>
                                                </div>
                                                <h3 class="h5 mb-0">
                                                    <a
                                                        href="blog-single.html"
                                                        class="stretched-link"
                                                    >
                                                        Why UX Design Matters and How it Affects
                                                        Ranking
                                                    </a>
                                                </h3>
                                            </div>
                                            <div class="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                                                <div class="d-flex align-items-center me-3">
                                                    <i class="bx bx-like fs-lg me-1"></i>
                                                    <span class="fs-sm">5</span>
                                                </div>
                                                <div class="d-flex align-items-center me-3">
                                                    <i class="bx bx-comment fs-lg me-1"></i>
                                                    <span class="fs-sm">3</span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <i class="bx bx-share-alt fs-lg me-1"></i>
                                                    <span class="fs-sm">9</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>

                                    {/* <!-- Article --> 
                                    <div class="col">
                                        <article class="card h-100 border-0 shadow-sm card-hover-primary">
                                            <div class="card-body pb-0">
                                                <div class="d-flex align-items-center justify-content-between mb-3">
                                                    <a
                                                        href="#"
                                                        class="badge fs-sm text-nav bg-white text-decoration-none position-relative zindex-2"
                                                    >
                                                        Web
                                                    </a>
                                                    <span class="fs-sm text-muted">
                                                        May 28, 2021
                                                    </span>
                                                </div>
                                                <h3 class="h5 mb-0">
                                                    <a
                                                        href="blog-single.html"
                                                        class="stretched-link"
                                                    >
                                                        This Week in Search: New Limits and Exciting
                                                        Features
                                                    </a>
                                                </h3>
                                            </div>
                                            <div class="card-footer d-flex align-items-center py-4 text-muted border-top-0">
                                                <div class="d-flex align-items-center me-3">
                                                    <i class="bx bx-like fs-lg me-1"></i>
                                                    <span class="fs-sm">3</span>
                                                </div>
                                                <div class="d-flex align-items-center me-3">
                                                    <i class="bx bx-comment fs-lg me-1"></i>
                                                    <span class="fs-sm">5</span>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <i class="bx bx-share-alt fs-lg me-1"></i>
                                                    <span class="fs-sm">2</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-scrollbar swiper-scrollbar-vertical">
                            <div
                                class="swiper-scrollbar-drag"
                            ></div>
                        </div>
                        <span
                            class="swiper-notification"
                            aria-live="assertive"
                            aria-atomic="true"
                        ></span>
                    </div>
                </div>
            </div>
        </section> */}

        {/* <!-- Audit Tracking --> */}
        <section class="container py-5 my-md-2 my-lg-4 my-xl-5">
            <h2 class="h1 text-center pb-3 pb-md-4">Audit Tracking</h2>
            <div class="price-switch-wrapper mb-n2">
                <div class="table-responsive-xxl pt-md-3">
                    <div class="row flex-nowrap pb-4">
                        <div class="col">
                            <div
                                class="card h-100 border-0 bg-primary shadow-primary shadow-dark-mode-none p-xxl-3"

                            >
                                <div class="card-body">
                                    <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                                        <div class="ps-4">
                                            <h3 class="fs-lg fw-normal text-light opacity-70 mb-2">
                                                March 2023
                                            </h3>
                                            <h4 class="h3 text-light lh-1 mb-0">
                                                <span data-monthly-price>Audit 1</span>
                                                <span class="fs-sm fw-normal opacity-70"></span>
                                            </h4>
                                        </div>
                                    </div>
                                    <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                                        <TickListNew item="Concept of Operations" />
                                        <CrossList item="Stakeholder Review" />
                                        <CrossList item="Scope Defined" />
                                        <CrossList item="Initial System Design" />
                                        <CrossList item="Model of system on RC Car" />
                                        <CrossList item="Finalized System Design" />
                                        <CrossList item="Remotely Driving Car" />
                                    </ul>
                                </div>
                                <div class="card-footer border-0 pt-0 pb-4">
                                    <a href="https://anu365-my.sharepoint.com/:f:/g/personal/u7335615_anu_edu_au/EhTe-TYyTJdPvx7FMioCWuoBisxp5JRImX-2pVpWx5AQ5A?e=eJAFLN" class="btn btn-light w-100 mb-2">
                                        View Submission
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div
                                class="card h-100 border-0 shadow-sm p-xxl-3"

                            >
                                <div class="card-body">
                                    <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                                        <div class="ps-4">
                                            <h3 class="fs-lg fw-normal text-light opacity-70 mb-2">
                                                June 2023
                                            </h3>
                                            <h4 class="h3 text-light lh-1 mb-0">
                                                <span data-monthly-price>Audit 2</span>
                                                <span class="fs-sm fw-normal opacity-70"></span>
                                            </h4>
                                        </div>
                                    </div>
                                    <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                                        <TickListNormal item="Concept of Operations" />
                                        <TickListNew item="Stakeholder Review" />
                                        <TickListNew item="Scope Defined" />
                                        <TickListNew item="Initial System Design" />
                                        <CrossList item="Model of system on RC Car" />
                                        <CrossList item="Finalized System Design" />
                                        <CrossList item="Remotely Driving Car" />
                                    </ul>
                                </div>
                                <div class="card-footer border-0 pt-0 pb-4">
                                    <a href="https://anu365-my.sharepoint.com/:f:/g/personal/u7335615_anu_edu_au/EiEW3y3iUIBOms0XvTfQ828BOxyPFaKzqHCu3t-V_aBoSg?e=SMeYaO" class="btn btn-outline-primary w-100">
                                        View Planning Document
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div
                                class="card h-100 border-0 shadow-sm p-xxl-3"

                            >
                                <div class="card-body">
                                    <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                                        <div class="ps-4">
                                            <h3 class="fs-lg fw-normal text-light opacity-70 mb-2">
                                                September 2023
                                            </h3>
                                            <h4 class="h3 text-light lh-1 mb-0">
                                                <span data-monthly-price>Audit 3</span>
                                                <span class="fs-sm fw-normal opacity-70"></span>
                                            </h4>
                                        </div>
                                    </div>
                                    <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                                        <TickListNormal item="Concept of Operations" />
                                        <TickListNormal item="Stakeholder Review" />
                                        <TickListNormal item="Scope Defined" />
                                        <TickListNormal item="Initial System Design" />
                                        <TickListNew item="Model of system on RC Car" />
                                        <TickListNew item="Finalized System Design" />
                                        <CrossList item="Remotely Driving Car" />
                                    </ul>
                                </div>
                                <div class="card-footer border-0 pt-0 pb-4">
                                    <a href="https://anu365-my.sharepoint.com/:f:/g/personal/u7335615_anu_edu_au/EiEW3y3iUIBOms0XvTfQ828BOxyPFaKzqHCu3t-V_aBoSg?e=SMeYaO" class="btn btn-outline-primary w-100">
                                        View Planning Document
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div
                                class="card h-100 border-0 shadow-sm p-xxl-3"

                            >
                                <div class="card-body">
                                    <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                                        <div class="ps-4">
                                            <h3 class="fs-lg fw-normal text-light opacity-70 mb-2">
                                                November 2023
                                            </h3>
                                            <h4 class="h3 text-light lh-1 mb-0">
                                                <span data-monthly-price>Audit 4</span>
                                                <span class="fs-sm fw-normal opacity-70"></span>
                                            </h4>
                                        </div>
                                    </div>
                                    <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                                    <TickListNormal item="Concept of Operations" />
                                        <TickListNormal item="Stakeholder Review" />
                                        <TickListNormal item="Scope Defined" />
                                        <TickListNormal item="Initial System Design" />
                                        <TickListNormal item="Model of system on RC Car" />
                                        <TickListNormal item="Finalized System Design" />
                                        <TickListNew item="Remotely Driving Car" />
                                    </ul>
                                </div>
                                <div class="card-footer border-0 pt-0 pb-4">
                                    <a href="https://anu365-my.sharepoint.com/:f:/g/personal/u7335615_anu_edu_au/EiEW3y3iUIBOms0XvTfQ828BOxyPFaKzqHCu3t-V_aBoSg?e=SMeYaO" class="btn btn-outline-primary w-100">
                                        View Planning Document
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Testimonials --> */}
        {/* <section class="py-4">
            <div class="container py-2 py-md-3 py-lg-4 py-xl-5">
                <div class="row row-cols-1 row-cols-md-2 gx-3 gx-lg-4">
                    <div class="col-md-6 mb-3 mb-md-0">
                        <div class="card border-0 bg-dark h-100 p-xl-4">
                            <div class="card-body">
                                <h2 class="display-1 text-light">
                                    Put Demo Videos Here?
                                </h2>
                                <p class="lead fw-medium text-light">
                                    <span class="opacity-70">
                                        users are taking advantage of our
                                    </span>{" "}
                                    <span class="fw-bold">Task Manager Tool</span>
                                    <span class="opacity-70">
                                        . It’s a new transparent and efficient way to organize
                                        all of your daily tasks.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card border-0 shadow-sm p-4 p-xxl-5">
                            <div class="d-flex justify-content-between pb-4 mb-2">
                                <span class="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
                                    <i class="bx bxs-quote-left"></i>
                                </span>
                                <div class="d-flex">
                                    <button
                                        type="button"
                                        id="testimonials-prev"
                                        class="btn btn-prev btn-icon btn-sm me-2"
                                    >
                                        <i class="bx bx-chevron-left"></i>
                                    </button>
                                    <button
                                        type="button"
                                        id="testimonials-next"
                                        class="btn btn-next btn-icon btn-sm ms-2"
                                    >
                                        <i class="bx bx-chevron-right"></i>
                                    </button>
                                </div>
                            </div>

                            {/* <!-- Slider --> *
                            <div
                                class="swiper mx-0 mb-md-n2 mb-xxl-n3"
                                data-swiper-options='{
                  "spaceBetween": 24,
                  "loop": true,
                  "pagination": {
                    "el": ".swiper-pagination",
                    "clickable": true
                  },
                  "navigation": {
                    "prevEl": "#testimonials-prev",
                    "nextEl": "#testimonials-next"
                  }
                }'
                            >
                                <div class="swiper-wrapper">
                                    {/* <!-- Item --> *
                                    <div class="swiper-slide h-auto">
                                        <figure class="card h-100 position-relative border-0 bg-transparent">
                                            <blockquote class="card-body p-0 mb-0">
                                                <p class="fs-lg mb-0">
                                                    Mi semper risus ultricies orci pulvinar in at
                                                    enim orci. Quis facilisis nunc pellentesque in
                                                    ullamcorper sit. Lorem blandit arcu sapien,
                                                    senectus libero, amet dapibus cursus quam. Eget
                                                    pellentesque eu purus volutpat adipiscing
                                                    malesuada.
                                                </p>
                                            </blockquote>
                                            <figcaption class="card-footer border-0 d-flex align-items-center w-100 pb-2">
                                                <img
                                                    src="assets/img/avatar/14.jpg"
                                                    width="60"
                                                    class="rounded-circle"
                                                    alt="Annette Black"
                                                />
                                                <div class="ps-3">
                                                    <h6 class="fw-semibold lh-base mb-0">
                                                        Annette Black
                                                    </h6>
                                                    <span class="fs-sm text-muted">
                                                        Strategic Advisor at Company LLC
                                                    </span>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                    {/* <!-- Item --> *
                                    <div class="swiper-slide h-auto">
                                        <figure class="card h-100 position-relative border-0 bg-transparent">
                                            <blockquote class="card-body p-0 mb-0">
                                                <p class="fs-lg mb-0">
                                                    Vestibulum nunc lectus auctor quis. Natoque
                                                    lectus tortor lacus, eu. Nunc feugiat nisl
                                                    maecenas nulla hac morbi. Vitae, donec facilisis
                                                    sed nunc netus. Venenatis posuere faucibus enim
                                                    est. Vel dignissim morbi blandit morbi tellus.
                                                </p>
                                            </blockquote>
                                            <figcaption class="card-footer border-0 d-flex align-items-center w-100 pb-2">
                                                <img
                                                    src="assets/img/avatar/13.jpg"
                                                    width="60"
                                                    class="rounded-circle"
                                                    alt="Ralph Edwards"
                                                />
                                                <div class="ps-3">
                                                    <h6 class="fw-semibold lh-base mb-0">
                                                        Ralph Edwards
                                                    </h6>
                                                    <span class="fs-sm text-muted">
                                                        Head of Marketing at Lorem Ltd.{" "}
                                                    </span>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>

                                    {/* <!-- Item --> *
                                    <div class="swiper-slide h-auto">
                                        <figure class="card h-100 position-relative border-0 bg-transparent">
                                            <blockquote class="card-body p-0 mb-0">
                                                <p class="fs-lg mb-0">
                                                    Ac at sed sit senectus massa. Massa ante amet
                                                    ultrices magna porta tempor. Aliquet diam in et
                                                    magna ultricies mi at. Lectus enim, vel enim
                                                    egestas nam pellentesque et leo. Elit mi
                                                    faucibus laoreet aliquam pellentesque sed
                                                    aliquet integer massa.
                                                </p>
                                            </blockquote>
                                            <figcaption class="card-footer border-0 d-flex align-items-center w-100 pb-2">
                                                <img
                                                    src="assets/img/avatar/11.jpg"
                                                    width="60"
                                                    class="rounded-circle"
                                                    alt="Darrell Steward"
                                                />
                                                <div class="ps-3">
                                                    <h6 class="fw-semibold lh-base mb-0">
                                                        Darrell Steward
                                                    </h6>
                                                    <span class="fs-sm text-muted">
                                                        Project Manager at Ipsum Ltd.
                                                    </span>
                                                </div>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>

                                {/* <!-- Pagination (bullets) --> *
                                <div class="swiper-pagination position-relative mt-5"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
    </div>
}

export default Home; 