import HeaderProfile from "@/components/HeaderProfile";
import NavigationMenuProfile from "@/components/NavigationMenuProfile";
import React from "react";
import {useEffect, useState} from "react";
import {getCurrentUser} from "@/services/userService";
import {useAuth} from "@/hooks/useAuth";

const QuizzesPage = () => {
    const testMenuItems = [
        {path: "/profile", icon: "bx-user", label: "Profile"},
        {path: "/classes", icon: "bx-chalkboard", label: "Classes"},
        {path: "/courses", icon: "bx-book", label: "Courses"},
        {path: "/quizzes", icon: "bx-task", label: "Quizzes"},
    ];
    const {user} = useAuth(); // Lấy thông tin user từ Zustand
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const data = await getCurrentUser();
                console.log("data", data);
                setProfile(data);
            } catch (err: any) {
                setError("Không thể tải thông tin người dùng");
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []); // Không cần phụ thuộc vào `user?.id` vì API `/me` tự lấy từ token
    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <HeaderProfile profile={profile} />
            {/* <!--/ Header --> */}

            {/* <!-- Navbar pills --> */}
            <NavigationMenuProfile menuItems={testMenuItems} />
            <div className="row">
                <div className="col-xl-12">
                    <div className="nav-align-top nav-tabs-shadow">
                        <ul className="nav nav-tabs nav-fill" role="tablist">
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className="nav-link active"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-justified-home"
                                    aria-controls="navs-justified-home"
                                    aria-selected="true"
                                >
                                    <span className="d-none d-sm-inline-flex align-items-center">
                                        <i className="icon-base bx bx-home icon-sm me-1_5"></i>
                                        Home
                                        <span className="badge rounded-pill badge-center h-px-20 w-px-20 bg-label-danger ms-1_5">
                                            3
                                        </span>
                                    </span>
                                    <i className="icon-base bx bx-home icon-sm d-sm-none"></i>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className="nav-link"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-justified-profile"
                                    aria-controls="navs-justified-profile"
                                    aria-selected="false"
                                >
                                    <span className="d-none d-sm-inline-flex align-items-center">
                                        <i className="icon-base bx bx-user icon-sm me-1_5"></i>
                                        Profile
                                    </span>
                                    <i className="icon-base bx bx-user icon-sm d-sm-none"></i>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    type="button"
                                    className="nav-link"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-justified-messages"
                                    aria-controls="navs-justified-messages"
                                    aria-selected="false"
                                >
                                    <span className="d-none d-sm-inline-flex align-items-center">
                                        <i className="icon-base bx bx-message-square icon-sm me-1_5"></i>
                                        Messages
                                    </span>
                                    <i className="icon-base bx bx-message-square icon-sm d-sm-none"></i>
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div
                                className="tab-pane fade show active"
                                id="navs-justified-home"
                                role="tabpanel"
                            >
                                <p>
                                    Icing pastry pudding oat cake. Lemon drops
                                    cotton candy caramels cake caramels sesame
                                    snaps powder. Bear claw candy topping.
                                </p>
                                <p className="mb-0">
                                    Tootsie roll fruitcake cookie. Dessert
                                    topping pie. Jujubes wafer carrot cake
                                    jelly. Bonbon jelly-o jelly-o ice cream
                                    jelly beans candy canes cake bonbon. Cookie
                                    jelly beans marshmallow jujubes sweet.
                                </p>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="navs-justified-profile"
                                role="tabpanel"
                            >
                                <p>
                                    Donut dragée jelly pie halvah. Danish
                                    gingerbread bonbon cookie wafer candy oat
                                    cake ice cream. Gummies halvah tootsie roll
                                    muffin biscuit icing dessert gingerbread.
                                    Pastry ice cream cheesecake fruitcake.
                                </p>
                                <p className="mb-0">
                                    Jelly-o jelly beans icing pastry cake cake
                                    lemon drops. Muffin muffin pie tiramisu
                                    halvah cotton candy liquorice caramels.
                                </p>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="navs-justified-messages"
                                role="tabpanel"
                            >
                                <p>
                                    Oat cake chupa chups dragée donut toffee.
                                    Sweet cotton candy jelly beans macaroon
                                    gummies cupcake gummi bears cake chocolate.
                                </p>
                                <p className="mb-0">
                                    Cake chocolate bar cotton candy apple pie
                                    tootsie roll ice cream apple pie brownie
                                    cake. Sweet roll icing sesame snaps caramels
                                    danish toffee. Brownie biscuit dessert
                                    dessert. Pudding jelly jelly-o tart brownie
                                    jelly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizzesPage;
