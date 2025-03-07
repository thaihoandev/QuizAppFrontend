import {Option, Question} from "@/interfaces";
import React, {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";

const QuestionEditorPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const question = location.state?.question as Question;
    const quizId = location.state?.quizId as string;

    // Initialize with the question properties
    const [editedQuestion, setEditedQuestion] = useState<Question>({
        ...question,
        timeLimit: question.timeLimit || 30,
        points: question.points || 3,
        questionType: question.questionType || "SINGLE_CHOICE",
    });

    const handleQuestionTextChange = (
        e: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setEditedQuestion({...editedQuestion, questionText: e.target.value});
    };

    const handleOptionChange = (
        optionId: string,
        field: keyof Option,
        value: string | boolean,
    ) => {
        const newOptions = editedQuestion.options.map((option) =>
            option.optionId === optionId ? {...option, [field]: value} : option,
        );
        setEditedQuestion({...editedQuestion, options: newOptions});
    };

    const handleTimeLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setEditedQuestion({
            ...editedQuestion,
            timeLimit: parseInt(e.target.value),
        });
    };

    const handlePointsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setEditedQuestion({
            ...editedQuestion,
            points: parseInt(e.target.value),
        });
    };

    const handleQuestionTypeChange = (
        e: React.ChangeEvent<HTMLSelectElement>,
    ) => {
        setEditedQuestion({
            ...editedQuestion,
            questionType: e.target.value as Question["questionType"],
        });
    };

    const handleSave = () => {
        console.log("Saving question:", editedQuestion);
        navigate(`/quizzes/${quizId}/edit`, {
            state: {updatedQuestion: editedQuestion},
        });
    };

    const handleCancel = () => {
        navigate(`/quizzes/${quizId}/edit`);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            // In a real implementation, you would upload this file to your server
            // and get back a URL. For now, we'll create a temporary URL.
            const imageUrl = URL.createObjectURL(e.target.files[0]);
            setEditedQuestion({...editedQuestion, imageUrl});
        }
    };

    if (!question) {
        return <div>Không tìm thấy câu hỏi</div>;
    }

    // Question type mapping for display
    const questionTypeLabels = {
        SINGLE_CHOICE: "Nhiều lựa chọn (một đáp án)",
        MULTIPLE_CHOICE: "Nhiều lựa chọn (nhiều đáp án)",
        TRUE_FALSE: "Đúng/Sai",
        FILL_IN_THE_BLANK: "Điền vào chỗ trống",
    };

    // Time limit options
    const timeOptions = [5, 10, 20, 30, 60, 90, 120, 180];

    // Points options
    const pointsOptions = [1, 2, 3, 4, 5];

    // Determine if multiple answers are allowed
    const isMultipleAnswers = editedQuestion.questionType === "MULTIPLE_CHOICE";

    return (
        <div className="container-fluid p-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <button
                    className="btn btn-outline-secondary"
                    onClick={handleCancel}
                >
                    ← Quay lại
                </button>
                <div className="d-flex gap-2 align-items-center">
                    <div className="dropdown">
                        <select
                            className="form-select"
                            value={editedQuestion.questionType}
                            onChange={handleQuestionTypeChange}
                        >
                            {(
                                Object.keys(questionTypeLabels) as Array<
                                    keyof typeof questionTypeLabels
                                >
                            ).map((type) => (
                                <option key={type} value={type}>
                                    {questionTypeLabels[type]}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="me-2">⏱️</span>
                        <select
                            className="form-select"
                            value={editedQuestion.timeLimit}
                            onChange={handleTimeLimitChange}
                        >
                            {timeOptions.map((seconds) => (
                                <option key={seconds} value={seconds}>
                                    {seconds} giây
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="me-2">🏆</span>
                        <select
                            className="form-select"
                            value={editedQuestion.points}
                            onChange={handlePointsChange}
                        >
                            {pointsOptions.map((point) => (
                                <option key={point} value={point}>
                                    {point} điểm
                                </option>
                            ))}
                        </select>
                    </div>
                    <button className="btn btn-primary" onClick={handleSave}>
                        Lưu câu hỏi
                    </button>
                </div>
            </div>

            {/* Main question content area - dark purple background as in the image */}
            <div
                className="card p-4 bg-dark text-white rounded-4"
                style={{backgroundColor: "#2D0A40"}}
            >
                <div className="card-body">
                    {/* Image upload option */}
                    {editedQuestion.imageUrl && (
                        <div className="text-center mb-3">
                            <img
                                src={editedQuestion.imageUrl}
                                alt="Question image"
                                className="img-fluid mb-2"
                                style={{maxHeight: "200px"}}
                            />
                            <button
                                className="btn btn-sm btn-outline-light"
                                onClick={() =>
                                    setEditedQuestion({
                                        ...editedQuestion,
                                        imageUrl: undefined,
                                    })
                                }
                            >
                                Xóa ảnh
                            </button>
                        </div>
                    )}

                    {!editedQuestion.imageUrl && (
                        <div className="text-center mb-3">
                            <label className="btn btn-outline-light">
                                <i className="bx bx-image-add"></i> Thêm ảnh
                                <input
                                    type="file"
                                    accept="image/*"
                                    style={{display: "none"}}
                                    onChange={handleImageUpload}
                                />
                            </label>
                        </div>
                    )}

                    <div className="mb-5 text-center">
                        <input
                            type="text"
                            className="form-control bg-transparent text-white border-light text-center fs-3"
                            value={editedQuestion.questionText}
                            onChange={handleQuestionTextChange}
                            placeholder="Nhập câu hỏi của bạn ở đây"
                            style={{
                                border: "none",
                                borderBottom: "1px solid rgba(255,255,255,0.2)",
                            }}
                        />
                    </div>

                    {/* Options area */}
                    <div className="d-flex flex-wrap gap-3 justify-content-center mt-5">
                        {editedQuestion.options.map((option, index) => {
                            // Colors based on the image: blue, teal, orange, pink
                            const colors = [
                                "#2E77BB",
                                "#18A99D",
                                "#F5A623",
                                "#E84A5F",
                            ];
                            const color = colors[index % colors.length];

                            return (
                                <div
                                    key={option.optionId}
                                    className="position-relative"
                                    style={{
                                        width: "220px",
                                        height: "180px",
                                    }}
                                >
                                    <div
                                        className="card p-3 d-flex justify-content-center align-items-center h-100 position-relative"
                                        style={{
                                            backgroundColor: color,
                                            borderRadius: "10px",
                                        }}
                                    >
                                        <button
                                            className="btn btn-sm btn-light position-absolute top-0 end-0 m-2 rounded-circle"
                                            onClick={() => {
                                                // For MULTIPLE_CHOICE, toggle the current option
                                                if (isMultipleAnswers) {
                                                    handleOptionChange(
                                                        option.optionId,
                                                        "correct",
                                                        !option.correct,
                                                    );
                                                } else {
                                                    // For SINGLE_CHOICE, make all options false, then make this one true
                                                    const newOptions =
                                                        editedQuestion.options.map(
                                                            (opt) => ({
                                                                ...opt,
                                                                correct: false,
                                                            }),
                                                        );

                                                    newOptions[index].correct =
                                                        true;

                                                    setEditedQuestion({
                                                        ...editedQuestion,
                                                        options: newOptions,
                                                    });
                                                }
                                            }}
                                            style={{
                                                width: "24px",
                                                height: "24px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: 0,
                                            }}
                                        >
                                            {option.correct ? "✓" : ""}
                                        </button>

                                        <input
                                            type="text"
                                            className="form-control text-center bg-transparent text-white border-0 fs-5"
                                            value={option.optionText}
                                            onChange={(e) =>
                                                handleOptionChange(
                                                    option.optionId,
                                                    "optionText",
                                                    e.target.value,
                                                )
                                            }
                                            placeholder="Đáp án"
                                            style={{boxShadow: "none"}}
                                        />

                                        <button
                                            className="btn btn-sm btn-outline-light position-absolute bottom-0 end-0 m-2"
                                            onClick={() =>
                                                setEditedQuestion({
                                                    ...editedQuestion,
                                                    options:
                                                        editedQuestion.options.filter(
                                                            (opt) =>
                                                                opt.optionId !==
                                                                option.optionId,
                                                        ),
                                                })
                                            }
                                            style={{
                                                width: "24px",
                                                height: "24px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                padding: 0,
                                                borderRadius: "4px",
                                            }}
                                        >
                                            ×
                                        </button>
                                    </div>
                                </div>
                            );
                        })}

                        {/* Add new option button */}
                        {editedQuestion.options.length < 5 && (
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{
                                    width: "100px",
                                    height: "180px",
                                }}
                            >
                                <button
                                    className="btn btn-outline-light rounded-circle"
                                    onClick={() => {
                                        setEditedQuestion({
                                            ...editedQuestion,
                                            options: [
                                                ...editedQuestion.options,
                                                {
                                                    optionId:
                                                        Date.now().toString(),
                                                    optionText: "",
                                                    correct: false,
                                                    correctAnswer: "",
                                                },
                                            ],
                                        });
                                    }}
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Question type indicator based on the image */}
                    <div className="d-flex mt-4 justify-content-start">
                        <div className="px-3 py-1 bg-dark text-white rounded-pill">
                            {editedQuestion.questionType === "MULTIPLE_CHOICE"
                                ? "Nhiều câu trả lời đúng"
                                : "Câu trả lời đúng duy nhất"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionEditorPage;
