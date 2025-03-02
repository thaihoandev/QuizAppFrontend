import NavigationMenuProfile from "@/components/NavigationMenuProfile";
import "@/assets/vendor/css/pages/page-profile.css";
import HeaderProfile from "@/components/HeaderProfile";
const ProfilePage = () => {
    const profileMenuItems = [
        {path: "/profile", icon: "bx-user", label: "Profile"},
        {path: "/classes", icon: "bx-chalkboard", label: "Lớp Học"},
        {path: "/courses", icon: "bx-book", label: "Học Phần"},
        {path: "/tests", icon: "bx-task", label: "Bài Kiểm Tra"},
    ];
    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            {/* <!-- Header --> */}
            <HeaderProfile />
            {/* <!--/ Header --> */}

            {/* <!-- Navbar pills --> */}
            <NavigationMenuProfile menuItems={profileMenuItems} />
            {/* <!--/ Navbar pills --> */}

            {/* <!-- User Profile Content --> */}
            <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-5">
                    {/* <!-- About User --> */}
                    <div className="card mb-6">
                        <div className="card-body">
                            <small className="card-text text-uppercase text-body-secondary small">
                                About
                            </small>
                            <ul className="list-unstyled my-3 py-1">
                                <li className="d-flex align-items-center mb-4">
                                    <i className="icon-base bx bx-user"></i>
                                    <span className="fw-medium mx-2">
                                        Full Name:
                                    </span>{" "}
                                    <span>John Doe</span>
                                </li>
                                <li className="d-flex align-items-center mb-4">
                                    <i className="icon-base bx bx-check"></i>
                                    <span className="fw-medium mx-2">
                                        Status:
                                    </span>{" "}
                                    <span>Active</span>
                                </li>
                                <li className="d-flex align-items-center mb-4">
                                    <i className="icon-base bx bx-crown"></i>
                                    <span className="fw-medium mx-2">
                                        Role:
                                    </span>{" "}
                                    <span>Developer</span>
                                </li>
                                <li className="d-flex align-items-center mb-4">
                                    <i className="icon-base bx bx-flag"></i>
                                    <span className="fw-medium mx-2">
                                        Country:
                                    </span>{" "}
                                    <span>USA</span>
                                </li>
                                <li className="d-flex align-items-center mb-2">
                                    <i className="icon-base bx bx-detail"></i>
                                    <span className="fw-medium mx-2">
                                        Languages:
                                    </span>{" "}
                                    <span>English</span>
                                </li>
                            </ul>
                            <small className="card-text text-uppercase text-body-secondary small">
                                Contacts
                            </small>
                            <ul className="list-unstyled my-3 py-1">
                                <li className="d-flex align-items-center mb-4">
                                    <i className="icon-base bx bx-phone"></i>
                                    <span className="fw-medium mx-2">
                                        Contact:
                                    </span>{" "}
                                    <span>(123) 456-7890</span>
                                </li>
                                <li className="d-flex align-items-center mb-4">
                                    <i className="icon-base bx bx-chat"></i>
                                    <span className="fw-medium mx-2">
                                        Skype:
                                    </span>{" "}
                                    <span>john.doe</span>
                                </li>
                                <li className="d-flex align-items-center mb-4">
                                    <i className="icon-base bx bx-envelope"></i>
                                    <span className="fw-medium mx-2">
                                        Email:
                                    </span>{" "}
                                    <span>john.doe@example.com</span>
                                </li>
                            </ul>
                            <small className="card-text text-uppercase text-body-secondary small">
                                Teams
                            </small>
                            <ul className="list-unstyled mb-0 mt-3 pt-1">
                                <li className="d-flex flex-wrap mb-4">
                                    <span className="fw-medium me-2">
                                        Backend Developer
                                    </span>
                                    <span>(126 Members)</span>
                                </li>
                                <li className="d-flex flex-wrap">
                                    <span className="fw-medium me-2">
                                        React Developer
                                    </span>
                                    <span>(98 Members)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!--/ About User --> */}
                    {/* <!-- Profile Overview --> */}
                    <div className="card mb-6">
                        <div className="card-body">
                            <small className="card-text text-uppercase text-body-secondary small">
                                Overview
                            </small>
                            <ul className="list-unstyled mb-0 mt-3 pt-1">
                                <li className="d-flex align-items-center mb-4">
                                    <i className="icon-base bx bx-check"></i>
                                    <span className="fw-medium mx-2">
                                        Task Compiled:
                                    </span>{" "}
                                    <span>13.5k</span>
                                </li>
                                <li className="d-flex align-items-center mb-4">
                                    <i className="icon-base bx bx-star"></i>
                                    <span className="fw-medium mx-2">
                                        Projects Compiled:
                                    </span>{" "}
                                    <span>146</span>
                                </li>
                                <li className="d-flex align-items-center">
                                    <i className="icon-base bx bx-user"></i>
                                    <span className="fw-medium mx-2">
                                        Connections:
                                    </span>{" "}
                                    <span>897</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!--/ Profile Overview --> */}
                </div>
                <div className="col-xl-8 col-lg-7 col-md-7">
                    <div className="row g-6">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <div className="card h-100">
                                <div className="card-header pb-4">
                                    <div className="d-flex align-items-start">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar me-4">
                                                <img
                                                    src="../../assets/img/icons/brands/social-label.png"
                                                    alt="Avatar"
                                                    className="rounded-circle"
                                                />
                                            </div>
                                            <div className="me-2">
                                                <h5 className="mb-0">
                                                    <a
                                                        href="javascript:;"
                                                        className="stretched-link text-heading"
                                                    >
                                                        Social Banners
                                                    </a>
                                                </h5>
                                                <div className="client-info text-body">
                                                    <span className="fw-medium">
                                                        Client:{" "}
                                                    </span>
                                                    <span>
                                                        Christian Jimenez
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ms-auto">
                                            <div className="dropdown z-2">
                                                <button
                                                    type="button"
                                                    className="btn btn-icon btn-text-secondary rounded-pill dropdown-toggle hide-arrow p-0"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i className="icon-base bx bx-dots-vertical-rounded icon-md text-body-secondary"></i>
                                                </button>
                                                <ul className="dropdown-menu dropdown-menu-end">
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="javascript:void(0);"
                                                        >
                                                            Rename project
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="javascript:void(0);"
                                                        >
                                                            View details
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="javascript:void(0);"
                                                        >
                                                            Add to favorites
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <hr className="dropdown-divider" />
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item text-danger"
                                                            href="javascript:void(0);"
                                                        >
                                                            Leave Project
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex align-items-center flex-wrap">
                                        <div className="bg-lighter px-3 py-2 rounded me-auto mb-4">
                                            <p className="mb-1">
                                                <span className="fw-medium text-heading">
                                                    $24.8k
                                                </span>
                                                / $18.2k
                                            </p>
                                            <span className="text-body">
                                                Total Budget
                                            </span>
                                        </div>
                                        <div className="text-start mb-4">
                                            <p className="mb-1">
                                                <span className="text-heading fw-medium">
                                                    Start Date:{" "}
                                                </span>
                                                14/2/21
                                            </p>
                                            <p className="mb-1">
                                                <span className="text-heading fw-medium">
                                                    Deadline:{" "}
                                                </span>
                                                28/2/22
                                            </p>
                                        </div>
                                    </div>
                                    <p className="mb-0">
                                        We are Consulting, Software Development
                                        and Web Development Services.
                                    </p>
                                </div>
                                <div className="card-body border-top">
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex align-items-center">
                                            <ul className="list-unstyled d-flex align-items-center avatar-group mb-0 z-2">
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-popup="tooltip-custom"
                                                    data-bs-placement="top"
                                                    title="Vinnie Mostowy"
                                                    className="avatar avatar-sm pull-up"
                                                >
                                                    <img
                                                        className="rounded-circle"
                                                        src="../../assets/img/avatars/5.png"
                                                        alt="Avatar"
                                                    />
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-popup="tooltip-custom"
                                                    data-bs-placement="top"
                                                    title="Allen Rieske"
                                                    className="avatar avatar-sm pull-up"
                                                >
                                                    <img
                                                        className="rounded-circle"
                                                        src="../../assets/img/avatars/12.png"
                                                        alt="Avatar"
                                                    />
                                                </li>
                                                <li
                                                    data-bs-toggle="tooltip"
                                                    data-popup="tooltip-custom"
                                                    data-bs-placement="top"
                                                    title="Julee Rossignol"
                                                    className="avatar avatar-sm pull-up me-3"
                                                >
                                                    <img
                                                        className="rounded-circle"
                                                        src="../../assets/img/avatars/6.png"
                                                        alt="Avatar"
                                                    />
                                                </li>
                                                <li>
                                                    <small className="text-body-secondary">
                                                        280 Members
                                                    </small>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="ms-auto">
                                            <a
                                                href="javascript:void(0);"
                                                className="text-body-secondary d-flex align-items-center"
                                            >
                                                <i className="icon-base bx bx-chat me-1"></i>{" "}
                                                15
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--/ User Profile Content --> */}
        </div>
    );
};

export default ProfilePage;
