import TickListNew from "../../components/TickListNew";
import TickListNormal from "../../components/TickListNormal";
import CrossList from "../../components/CrossList";

export default function () {

    return (
        <section class="container py-5 my-md-2 my-lg-4 my-xl-5">
            <h2 class="h1 text-center pb-3 pb-md-4">What's New In 2023!</h2>
            <div class="price-switch-wrapper mb-n2">
                <div class="table-responsive-xxl pt-md-3">
                    <div class="row flex-nowrap pb-4">

                        {/*  2022 */}
                        <div class="col">
                        <div class="card h-100 border-0 shadow-sm p-xxl-3"                            >
                                <div class="card-body">
                                    <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                                        <div class="ps-4">
                                            <h3 class="fs-lg fw-normal text-light opacity-70 mb-2"> 2022 </h3>
                                            <h4 class="h3 text-light lh-1 mb-0">
                                                <span data-monthly-price>First Iteration</span>
                                                <span class="fs-sm fw-normal opacity-70"></span>
                                            </h4>
                                        </div>
                                    </div>
                                    <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                                        <TickListNormal item="Initial Concept and Design" />
                                        <TickListNormal item="Singular Camera" />
                                        <TickListNormal item="Remotely Controlled Steering and Pedals" />
                                        <TickListNormal item="Remote Software Connection and Remote Control" />
                                        <TickListNormal item="Working Individual Components" />
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* 2023 */}
                        <div class="col">
                        <div class="card h-100 border-0 bg-primary shadow-primary shadow-dark-mode-none p-xxl-3"                            >
                                <div class="card-body">
                                    <div class="d-flex align-items-center pb-2 pb-md-3 mb-4">
                                        <div class="ps-4">
                                            <h3 class="fs-lg fw-normal text-light opacity-70 mb-2"> 2023 </h3>
                                            <h4 class="h3 text-light lh-1 mb-0">
                                                <span data-monthly-price>Current Project</span>
                                                <span class="fs-sm fw-normal opacity-70"></span>
                                            </h4>
                                        </div>
                                    </div>
                                    <ul class="list-unstyled fs-sm pb-md-3 mb-3">
                                        <TickListNew item="Improved Concept and Design" />
                                        <TickListNew item="Multiple Cameras" />
                                        <TickListNew item="Better materials and durability for existing mechanical designs" />
                                        <TickListNew item="Remote Connection with User Friendly Interface" />
                                        <TickListNew item="Robust and seemless control of all components simultaneously" />
                                        <TickListNew item="Investigating ways to reduce latency" />
                                        <TickListNew item="Contact and feedback from Truck Drivers and Logistics Industry" />
                                    </ul>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    )
}
