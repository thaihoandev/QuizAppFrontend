import React, {Suspense} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import Home from "@/pages/Home";
import Login from "@/pages/LoginPage";
import Register from "@/pages/RegisterPage";
import NotFound from "@/pages/NotFoundPage";
import ProfilePage from "@/pages/ProfilePage";
import ClassesPage from "@/pages/ClassesPage";
import CoursesPage from "@/pages/CoursesPage";
import SettingProfilePage from "@/pages/SettingProfilePage";
import ChangePasswordPage from "@/pages/ChangePasswordPage";
import ScrollToTop from "@/components/ScrollToTop";
import AchievementPage from "@/pages/AchievementPage";
import QuizzesPage from "@/pages/QuizzesPage";
import QuizManagementPage from "@/pages/QuizManagementPage";

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <ScrollToTop />
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/classes" element={<ClassesPage />} />
                        <Route path="/courses" element={<CoursesPage />} />
                        <Route path="/quizzes" element={<QuizzesPage />} />
                        <Route
                            path="/quizzes/:quizId"
                            element={<QuizManagementPage />}
                        />
                        <Route
                            path="/achievements"
                            element={<AchievementPage />}
                        />

                        <Route
                            path="/settings"
                            element={<SettingProfilePage />}
                        />
                        <Route
                            path="/change-password"
                            element={<ChangePasswordPage />}
                        />
                    </Route>
                    <Route element={<AuthLayout />}>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;
