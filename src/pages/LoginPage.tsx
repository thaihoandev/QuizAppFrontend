import FormLogin from "@/components/FormLogin";
import React from "react";

const LoginPage = () => {
    return (
        <>
            <div className="authentication-inner row m-0">
                {/* <!-- /Left Text --> */}
                <div className="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center p-5">
                    <div className="w-100 d-flex justify-content-center">
                        <img
                            src="../../assets/img/illustrations/boy-with-rocket-light.png"
                            className="img-fluid"
                            alt="Login image"
                            width="700"
                            data-app-dark-img="illustrations/boy-with-rocket-dark.png"
                            data-app-light-img="illustrations/boy-with-rocket-light.png"
                        />
                    </div>
                </div>
                {/* <!-- /Left Text --> */}
                <FormLogin />
            </div>
        </>
    );
};

export default LoginPage;
