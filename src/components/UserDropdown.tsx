import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "@/hooks/useAuth";
import {getCurrentUser} from "@/services/userService";
const UserDropdown = () => {
    const navigate = useNavigate();
    const {user, logout} = useAuth(); // Lấy thông tin user và hàm logout từ Zustand
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const data = await getCurrentUser();
                setProfile(data);
            } catch (err: any) {
                setError("Không thể tải thông tin người dùng");
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    const handleLogout = () => {
        logout(); // Xóa trạng thái user trong Zustand
        navigate("/login");
    };

    return (
        <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <a
                className="nav-link dropdown-toggle hide-arrow p-0"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
            >
                <div className="avatar avatar-online">
                    <img
                        src={
                            profile?.avatar && profile.avatar.trim() !== ""
                                ? profile.avatar
                                : "/assets/img/avatars/unknown.jpg"
                        }
                        className="rounded-circle"
                        alt={profile?.name}
                    />
                </div>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
                <li>
                    <div className="dropdown-item">
                        <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                                <div className="avatar avatar-online">
                                    <img
                                        src={
                                            profile?.avatar &&
                                            profile.avatar.trim() !== ""
                                                ? profile.avatar
                                                : "/assets/img/avatars/unknown.jpg"
                                        }
                                        className="w-px-40 h-auto rounded-circle"
                                        alt={profile?.name || "Unknown"}
                                    />
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <h6 className="mb-0">
                                    {profile?.name || "Guest"}
                                </h6>{" "}
                                {/* ✅ Hiển thị username */}
                                <small className="text-body-secondary">
                                    {profile?.username}
                                </small>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="dropdown-divider my-1"></div>
                </li>
                <li>
                    <Link className="dropdown-item" to="/profile">
                        <i className="icon-base bx bx-user icon-md me-3"></i>
                        <span>My Profile</span>
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item" to="/billing">
                        <span className="d-flex align-items-center align-middle">
                            <i className="flex-shrink-0 icon-base bx bx-credit-card icon-md me-3"></i>
                            <span className="flex-grow-1 align-middle">
                                Achivement
                            </span>
                            <span className="flex-shrink-0 badge rounded-pill bg-danger">
                                4
                            </span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item" to="/settings">
                        <i className="icon-base bx bx-cog icon-md me-3"></i>
                        <span>Settings</span>
                    </Link>
                </li>

                <li>
                    <div className="dropdown-divider my-1"></div>
                </li>
                <li>
                    {/* ✅ Xử lý logout bằng sự kiện onClick */}
                    <button className="dropdown-item" onClick={handleLogout}>
                        <i className="icon-base bx bx-power-off icon-md me-3"></i>
                        <span>Log Out</span>
                    </button>
                </li>
            </ul>
        </li>
    );
};

export default UserDropdown;
