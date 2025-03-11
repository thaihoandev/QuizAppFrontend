import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {getQuestionsByQuizId} from "@/services/quizService";
import QuestionCard from "@/components/cards/QuestionCard";
import {Link, useParams} from "react-router-dom";

interface Option {
    optionId: string;
    optionText: string;
    correct: boolean;
    correctAnswer: string;
}

interface Question {
    questionId: string;
    questionType:
        | "SINGLE_CHOICE"
        | "MULTIPLE_CHOICE"
        | "TRUE_FALSE"
        | "FILL_IN_THE_BLANK";
    questionText: string;
    options: Option[];
    timeLimit: number;
    points: number;
    imageUrl?: string;
}

const QuizManagementPage: React.FC = () => {
    const {quizId} = useParams<{quizId: string}>();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [showAnswers, setShowAnswers] = useState(true);
    const [loading, setLoading] = useState(true);

    // Fetch questions when component mounts or quizId changes
    useEffect(() => {
        const fetchQuestions = async () => {
            if (!quizId) return; // Ensure quizId is valid before making API call

            setLoading(true);
            try {
                const data = await getQuestionsByQuizId(quizId);
                setQuestions(data);
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
            setLoading(false);
        };

        fetchQuestions();
    }, [quizId]); // Depend on quizId

    return (
        <div className="container mt-4">
            {/* Quiz Header */}
            <div className="card shadow-sm rounded-3 p-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h4 className="fw-bold d-flex align-items-center">
                            Nhận biết{" "}
                            <span
                                className="badge bg-transparent border border-secondary text-secondary rounded mx-2"
                                style={{fontSize: "0.75rem"}}
                            >
                                Bản thảo
                            </span>
                        </h4>
                        <p className="text-muted mb-1">
                            Đánh giá • 9040_Ngô Hoàn • World Languages • Đại học
                            • 2 lần chơi • Dễ
                        </p>
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-secondary">
                            ↩ Hoàn tác
                        </button>
                        <Link
                            to={`/quizzes/${quizId}/edit`}
                            className="btn btn-outline-primary"
                        >
                            ✏ Chỉnh sửa
                        </Link>
                        <button className="btn btn-primary">📤 Xuất bản</button>
                    </div>
                </div>
            </div>

            {/* Quiz Controls */}
            <div className="d-flex justify-content-between align-items-center my-3">
                <div>
                    <button className="btn btn-light border me-2">
                        💾 Lưu
                    </button>
                    <button className="btn btn-light border me-2">
                        📤 Chia sẻ
                    </button>
                    <button className="btn btn-light border">
                        📊 Bảng tính
                    </button>
                </div>
            </div>

            {/* Quiz Questions */}
            <div className="card shadow-sm p-3">
                {/* Header Row */}
                <div className="d-flex justify-content-between align-items-center p-2">
                    <h6 className="fw-bold mb-0">{questions.length} CÂU HỎI</h6>
                    <div className="form-check form-switch mb-0 ">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            checked={showAnswers}
                            onChange={() => setShowAnswers(!showAnswers)}
                        />
                        <label className="form-check-label ms-2 fw-bold">
                            Hiển thị đáp án
                        </label>
                    </div>
                </div>

                {/* Questions List */}
                {loading ? (
                    <p className="text-center text-muted">
                        Đang tải câu hỏi...
                    </p>
                ) : (
                    questions.map((question, index) => (
                        <QuestionCard
                            key={question.questionId}
                            question={question}
                            index={index}
                            showAnswers={showAnswers}
                        />
                    ))
                )}
            </div>

            {/* Quiz Draft Notice */}
            <div className="alert alert-light border mt-3">
                <span className="fw-bold">⚠ Đây là một hoạt động dự thảo</span>
                <p className="mb-0 text-muted">
                    Xuất bản hoạt động này để có thể chia sẻ với học sinh của
                    bạn.
                </p>
            </div>
        </div>
    );
};

export default QuizManagementPage;
