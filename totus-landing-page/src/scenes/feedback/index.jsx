

import React, { useState } from "react";
import Box from '@mui/material/Box';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/d6473040-ce18-11ed-9802-15820248f1c1"; // TODO - fill on the later step


const Feedback = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };


    if (submitted) {
        return (
            <>
                <section className="container py-5 my-md-3 my-lg-5">

                    <h2 className="text-center text-xl-start">Thank you!</h2>
                    <div className="text-center text-xl-start">We'll be in touch soon.</div>

                </section>
            </>
        );
    }


    return (
        <section className="container py-5 my-md-3 my-lg-5">



            <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
                <div className="w-100 align-self-end pt-1 pt-md-4 pb-4">

                    {/* Heading */}
                    <h1 className="text-center text-xl-start">Feedback</h1>

                    <form
                        className="needs-validation mb-2"
                        noValidate
                        action={FORM_ENDPOINT}
                        onSubmit={handleSubmit}
                        method="POST"
                    //target="_blank"
                    >

                        <div className="position-relative mb-4">
                            <label htmlFor="name" className="form-label fs-base">Name</label>
                            <input type="text" id="name" name="name" className="form-control form-control-lg" required />
                        </div>

                        <div className="position-relative mb-4">
                            <label htmlFor="email" className="form-label fs-base">Email</label>
                            <input type="email" id="email" name="email" className="form-control form-control-lg" required />
                        </div>

                        <div className="position-relative mb-4">
                            <label htmlFor="message" className="form-label fs-base">Feedback</label>
                            <textarea placeholder="Your feedback" id="message" name="message" className="form-control form-control-lg" required />
                        </div>


                        <button type="submit" value="Submit" className="btn btn-primary shadow-primary btn-lg w-100">Submit</button>

                        {/* Super secret spam detection applied */}
                        <div
                            style={{
                                textIndent: "-99999px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                position: "absolute",
                            }}
                            aria-hidden="true"
                        >
                            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
                        </div>

                    </form>

                </div>
            </div>





        </section>

    );

};


export default Feedback;