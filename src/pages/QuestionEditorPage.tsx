import React from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {Question} from "@/interfaces";
import {updateQuestion} from "@/services/questionService";
import QuestionForm from "@/components/forms/QuestionForm";

const QuestionEditorPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {quizId} = useParams<{quizId: string}>();
    // Lấy thông tin question từ state (dùng cho chế độ chỉnh sửa)
    const question = location.state?.question as Question;

    // Hàm xử lý khi lưu câu hỏi
    const handleSaveQuestion = async (updatedQuestion: Question) => {
        console.log("Saving question:", updatedQuestion);

        try {
            await updateQuestion(quizId!, question.questionId, updatedQuestion);
            navigate(`/quizzes/${quizId}/edit`, {
                state: {updatedQuestion: updatedQuestion},
            });
        } catch (error) {
            console.error("Error saving question:", error);
            alert("Có lỗi xảy ra khi lưu câu hỏi!");
        }
    };

    // Hàm xử lý khi hủy
    const handleCancel = () => {
        navigate(`/quizzes/${quizId}/edit`);
    };

    if (!quizId) {
        return <div>Không tìm thấy ID của quiz</div>;
    }

    if (!question) {
        return <div>Không tìm thấy câu hỏi</div>;
    }

    return (
        <QuestionForm
            initialQuestion={question}
            quizId={quizId}
            onSave={handleSaveQuestion}
            onCancel={handleCancel}
            isCreateMode={false}
        />
    );
};

export default QuestionEditorPage;
