import {handleApiError} from "@/utils/apiErrorHandler";
import axiosInstance from "./axiosInstance";
import {Option, Question} from "@/interfaces";

export const getQuizzesByUser = async (userId: string) => {
    try {
        const response = await axiosInstance.get(`/quizzes/users/${userId}`);
        return response.data;
    } catch (error) {
        handleApiError(error, "Failed to fetch user quizzes");
    }
};

export const getQuestionsByQuizId = async (quizId: string) => {
    try {
        const response = await axiosInstance.get(
            `/quizzes/${quizId}/questions`,
        );
        console.log(response.data);

        return response.data; // Assuming API returns an array of questions
    } catch (error) {
        handleApiError(error, "Failed to fetch questions for quiz");
    }
};

export const updateQuiz = async (quizId: string, questions: Question[]) => {
    try {
        const response = await axiosInstance.put(`/quizzes/${quizId}/edit`, {
            headers: {"Content-Type": "application/json"},
        });
        console.log(response.data);

        return response.data; // Assuming API returns an array of questions
    } catch (error) {
        handleApiError(error, "Failed to fetch questions for quiz");
    }
};
