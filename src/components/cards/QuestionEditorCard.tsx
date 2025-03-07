import {Question} from "@/interfaces";
import React from "react";
import {useNavigate} from "react-router-dom";

interface QuestionEditorCardProps {
    quizId: string; // Thêm quizId vào props
    question: Question;
    index: number;
    onTimeChange: (quizId: string, questionId: string, time: number) => void;
    onPointsChange: (
        quizId: string,
        questionId: string,
        points: number,
    ) => void;
}

const QuestionEditorCard: React.FC<QuestionEditorCardProps> = ({
    quizId,
    question,
    index,
    onTimeChange,
    onPointsChange,
}) => {
    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/quizzes/${quizId}/questions/${question.questionId}`, {
            state: {quizId, question},
        });
    };

    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="d-flex align-items-center">
                        <button className="btn btn-outline-light btn-sm me-2">
                            <i className="bx bx-grid"></i>
                        </button>
                        <span className="badge bg-primary me-2">
                            {index + 1}. {question.questionType}
                        </span>
                        <div className="dropdown me-2">
                            <button
                                className="btn btn-outline-secondary btn-sm dropdown-toggle"
                                type="button"
                                id={`timeDropdown${index}`}
                                data-bs-toggle="dropdown"
                            >
                                <i className="bx bx-stopwatch"></i>{" "}
                                {question.timeLimit} giây
                            </button>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby={`timeDropdown${index}`}
                            >
                                {[10, 20, 30, 60, 120].map((time) => (
                                    <li key={time}>
                                        <button
                                            className="dropdown-item"
                                            onClick={() =>
                                                onTimeChange(
                                                    quizId,
                                                    question.questionId,
                                                    time,
                                                )
                                            }
                                        >
                                            {time} giây
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="dropdown">
                            <button
                                className="btn btn-outline-secondary btn-sm dropdown-toggle"
                                type="button"
                                id={`pointsDropdown${index}`}
                                data-bs-toggle="dropdown"
                            >
                                <i className="bx bx-star"></i> {question.points}{" "}
                                điểm
                            </button>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby={`pointsDropdown${index}`}
                            >
                                {[1, 2, 3, 5, 10].map((points) => (
                                    <li key={points}>
                                        <button
                                            className="dropdown-item"
                                            onClick={() =>
                                                onPointsChange(
                                                    quizId,
                                                    question.questionId,
                                                    points,
                                                )
                                            }
                                        >
                                            {points} điểm
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div>
                        {[
                            {icon: "bx-copy", title: "Sao chép"},
                            {icon: "bx-edit", title: "Chỉnh sửa"},
                            {icon: "bx-trash", title: "Xóa"},
                        ].map((btn, btnIdx) => (
                            <button
                                key={btnIdx}
                                className="btn btn-outline-secondary btn-sm me-2 px-3"
                                title={btn.title}
                                onClick={
                                    btn.icon === "bx-edit"
                                        ? handleEdit
                                        : undefined
                                }
                            >
                                <i className={`bx ${btn.icon}`}></i>
                                {btn.icon === "bx-edit" && (
                                    <span className="ms-2">Chỉnh sửa</span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
                <h6 className="mb-3">{question.questionText}</h6>
                <p className="text-muted small mb-3">Lựa chọn trả lời</p>
                <div className="row">
                    {question.options.map((option, optIdx) => (
                        <div key={optIdx} className="col-6 mb-3">
                            <div
                                className={`card ${option.correct ? "border-success" : "border-danger"} shadow-sm`}
                            >
                                <div className="card-body p-2 d-flex align-items-center">
                                    <i
                                        className={`bx ${option.correct ? "bx-check-circle" : "bx-x-circle"} ${option.correct ? "text-success" : "text-danger"} me-2`}
                                    ></i>
                                    <span>{option.optionText}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default QuestionEditorCard;
