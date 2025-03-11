import {handleApiError} from "@/utils/apiErrorHandler";
import axiosInstance from "./axiosInstance";
import {Option, Question} from "@/interfaces";

export const getAllQuestions = async (): Promise<Question[]> => {
    try {
        const response = await axiosInstance.get(`/questions`);
        return response.data;
    } catch (error) {
        handleApiError(error, "Failed to fetch questions");
        return []; // Add explicit return to avoid undefined
    }
};

export const getQuestionsByQuizId = async (
    quizId: string,
): Promise<Question[]> => {
    try {
        const response = await axiosInstance.get(
            `/quizzes/${quizId}/questions`,
        );
        return response.data;
    } catch (error) {
        handleApiError(error, "Failed to fetch questions for quiz");
        return []; // Add explicit return to avoid undefined
    }
};

export const updateQuestion = async (
    quizId: string,
    questionId: string,
    updateQuestion: Question,
): Promise<Question> => {
    try {
        const response = await axiosInstance.put(
            `/quizzes/${quizId}/questions/${questionId}/edit`,
            updateQuestion,
            {
                headers: {"Content-Type": "application/json"},
            },
        );
        return response.data;
    } catch (error) {
        handleApiError(error, "Failed to update question");
        throw error; // Re-throw so calling code knows the operation failed
    }
};

export const createQuestion = async (
    quizId: string,
    question: Question,
): Promise<Question> => {
    try {
        const response = await axiosInstance.post(
            `/quizzes/${quizId}/questions/create`,
            question,
        );
        return response.data;
    } catch (error) {
        handleApiError(error, "Failed to create question");
        throw error; // Re-throw so calling code knows the operation failed
    }
};

export const deleteQuestion = async (
    quizId: string,
    questionId: string,
): Promise<void> => {
    try {
        await axiosInstance.delete(
            `/quizzes/${quizId}/questions/${questionId}`,
        );
    } catch (error) {
        handleApiError(error, "Failed to delete question");
        throw error;
    }
};
