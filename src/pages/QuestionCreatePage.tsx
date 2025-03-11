import React, {useEffect, useState} from "react";
import {useNavigate, useParams, useLocation} from "react-router-dom";
import {Question} from "@/interfaces";
import {createQuestion} from "@/services/questionService";
import {DEFAULT_QUESTION_TYPE, QUESTION_TYPES} from "@/constants/quizConstants";
import QuestionForm from "@/components/forms/QuestionForm";

type QuestionType = (typeof QUESTION_TYPES)[keyof typeof QUESTION_TYPES];

const QuestionCreatePage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {quizId} = useParams<{quizId: string}>();

    const [questionType, setQuestionType] = useState<QuestionType | null>(null);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const typeParam = searchParams.get("type");

        console.log("Extracted type from URL:", typeParam);

        if (
            typeParam &&
            Object.values(QUESTION_TYPES).includes(typeParam as QuestionType)
        ) {
            setQuestionType(typeParam as QuestionType);
        } else {
            console.log(
                "Falling back to DEFAULT_QUESTION_TYPE:",
                DEFAULT_QUESTION_TYPE,
            );
            setQuestionType(DEFAULT_QUESTION_TYPE);
        }
    }, [location.search]);

    useEffect(() => {
        if (questionType) {
            console.log("Updated questionType:", questionType);
        }
    }, [questionType]);

    const handleCreateQuestion = async (newQuestion: Question) => {
        try {
            if (!quizId) throw new Error("Quiz ID not found");
            await createQuestion(quizId, newQuestion);
            navigate(`/quizzes/${quizId}/edit`, {
                state: {createdQuestion: newQuestion},
            });
        } catch (error) {
            console.error("Error creating question:", error);
            alert("Có lỗi xảy ra khi tạo câu hỏi mới!");
        }
    };

    const handleCancel = () => {
        navigate(`/quizzes/${quizId}/edit`);
    };

    if (!quizId) {
        return <div>Không tìm thấy ID của quiz</div>;
    }

    // 🚀 Chờ cho đến khi `questionType` có giá trị trước khi render `QuestionForm`
    if (!questionType) {
        return <div>Đang tải...</div>;
    }

    return (
        <QuestionForm
            quizId={quizId}
            onSave={handleCreateQuestion}
            onCancel={handleCancel}
            isCreateMode={true}
            initialQuestionType={questionType}
        />
    );
};

export default QuestionCreatePage;
