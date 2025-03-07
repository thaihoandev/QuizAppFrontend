import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {getQuestionsByQuizId, updateQuiz} from "@/services/quizService";
import {useParams} from "react-router-dom";
import QuestionEditorHeader from "@/components/headers/QuestionEditorHeader";
import QuestionEditorSidebar from "@/components/sidebars/QuestionEditorSidebar";
import QuestionEditorCard from "@/components/cards/QuestionEditorCard";
import AddQuestionByTypeModal from "@/components/modals/AddQuestionByTypeModal";

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

const QuizEditorPage: React.FC = () => {
    const {quizId} = useParams<{quizId: string}>();
    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [publishing, setPublishing] = useState(false); // Trạng thái xuất bản

    useEffect(() => {
        const fetchQuestions = async () => {
            if (!quizId) return;
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
    }, [quizId]);

    const handleTimeChange = (
        quizId: string,
        questionId: string,
        time: number,
    ) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((q) =>
                q.questionId === questionId ? {...q, timeLimit: time} : q,
            ),
        );
    };

    const handlePointsChange = (
        quizId: string,
        questionId: string,
        points: number,
    ) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((q) =>
                q.questionId === questionId ? {...q, points: points} : q,
            ),
        );
    };

    const addNewQuestion = (type: string) => {
        let newQuestion: Question;
        switch (type) {
            case "MULTIPLE_CHOICE":
                newQuestion = {
                    questionId: `q${questions.length + 1}`,
                    questionType: "MULTIPLE_CHOICE",
                    questionText: "Câu hỏi mới (Nhiều lựa chọn)",
                    options: [
                        {
                            optionId: "o1",
                            optionText: "Lựa chọn 1",
                            correct: true,
                            correctAnswer: "Lựa chọn 1",
                        },
                        {
                            optionId: "o2",
                            optionText: "Lựa chọn 2",
                            correct: false,
                            correctAnswer: "",
                        },
                        {
                            optionId: "o3",
                            optionText: "Lựa chọn 3",
                            correct: false,
                            correctAnswer: "",
                        },
                        {
                            optionId: "o4",
                            optionText: "Lựa chọn 4",
                            correct: false,
                            correctAnswer: "",
                        },
                    ],
                    timeLimit: 30,
                    points: 1,
                };
                break;
            case "TRUE_FALSE":
                newQuestion = {
                    questionId: `q${questions.length + 1}`,
                    questionType: "TRUE_FALSE",
                    questionText: "Câu hỏi mới (Đúng/Sai)",
                    options: [
                        {
                            optionId: "o1",
                            optionText: "Đúng",
                            correct: true,
                            correctAnswer: "Đúng",
                        },
                        {
                            optionId: "o2",
                            optionText: "Sai",
                            correct: false,
                            correctAnswer: "",
                        },
                    ],
                    timeLimit: 30,
                    points: 1,
                };
                break;
            case "FILL_IN_THE_BLANK":
                newQuestion = {
                    questionId: `q${questions.length + 1}`,
                    questionType: "FILL_IN_THE_BLANK",
                    questionText: "Câu hỏi mới (Điền vào chỗ trống)",
                    options: [
                        {
                            optionId: "o1",
                            optionText: "Đáp án đúng",
                            correct: true,
                            correctAnswer: "Đáp án đúng",
                        },
                    ],
                    timeLimit: 30,
                    points: 1,
                };
                break;
            default:
                return;
        }
        setQuestions([...questions, newQuestion]);
    };

    const handlePublish = async () => {
        if (!quizId) return;
        setPublishing(true);
        try {
            await updateQuiz(quizId, questions);
            alert("Bài quiz đã được xuất bản thành công!");
        } catch (error) {
            alert("Có lỗi xảy ra khi xuất bản bài quiz!");
        } finally {
            setPublishing(false);
        }
    };

    return (
        <div className="container-fluid bg-light" style={{minHeight: "100vh"}}>
            <QuestionEditorHeader
                onPublish={handlePublish}
                publishing={publishing}
            />
            <div className="container py-4">
                <div className="row">
                    <QuestionEditorSidebar />
                    <div className="col-8">
                        <div className="card shadow-sm mb-4">
                            <div className="card-body">
                                <h6 className="fw-bold mb-3">
                                    Tìm kiếm từ Thư viện Quizizz
                                </h6>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-white border-end-0">
                                        <i className="bx bx-search"></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control border-start-0"
                                        placeholder="Nhận biết"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <span className="fw-bold fs-5">
                                {questions.length} câu hỏi{" "}
                                <span className="text-muted small">
                                    (
                                    {questions.reduce(
                                        (sum, q) => sum + q.points,
                                        0,
                                    )}{" "}
                                    điểm)
                                </span>
                            </span>
                            <button
                                className="btn btn-outline-secondary btn-sm me-2"
                                onClick={() => setShowModal(true)}
                            >
                                <i className="bx bx-plus-circle"></i> Thêm câu
                                hỏi
                            </button>
                        </div>
                        {questions.map((question, idx) => (
                            <QuestionEditorCard
                                key={idx}
                                quizId={quizId ?? ""} // Truyền quizId vào đây
                                question={question}
                                index={idx}
                                onTimeChange={handleTimeChange}
                                onPointsChange={handlePointsChange}
                            />
                        ))}
                        <div className="d-flex justify-content-center mt-4">
                            <button
                                className="btn btn-outline-primary me-2"
                                onClick={() => setShowModal(true)}
                            >
                                <i className="bx bx-plus-circle"></i> Thêm câu
                                hỏi
                            </button>
                            <button className="btn btn-outline-secondary">
                                <i className="bx bx-bulb"></i> Thêm tương tự
                                (AI)
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <AddQuestionByTypeModal
                show={showModal}
                onHide={() => setShowModal(false)}
                onAddQuestion={addNewQuestion}
            />
        </div>
    );
};

export default QuizEditorPage;
