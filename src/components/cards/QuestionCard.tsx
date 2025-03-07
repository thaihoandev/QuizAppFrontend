import React from "react";

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

interface QuestionCardProps {
    question: Question;
    index: number;
    showAnswers: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    index,
    showAnswers,
}) => {
    const renderQuestionType = () => {
        switch (question.questionType) {
            case "SINGLE_CHOICE":
                return "Choose one answer";
            case "MULTIPLE_CHOICE":
                return "Choose one or more answers";
            case "TRUE_FALSE":
                return "True/False";
            case "FILL_IN_THE_BLANK":
                return "Fill in the blank";
            default:
                return "Type of question";
        }
    };

    const getInputType = () => {
        switch (question.questionType) {
            case "SINGLE_CHOICE":
            case "TRUE_FALSE":
                return "radio";
            case "MULTIPLE_CHOICE":
                return "checkbox";
            default:
                return "radio";
        }
    };

    return (
        <div className="border rounded p-3 my-3 shadow-sm">
            {/* Question Header */}
            <div className="d-flex justify-content-between align-items-center">
                <h6 className="text-muted mb-0">
                    {index + 1}. {renderQuestionType()}
                </h6>
                <div className="d-flex align-items-center text-muted">
                    <span className="me-3">⏳ {question.timeLimit} sec</span>
                    <span>⭐ {question.points} pt</span>
                </div>
            </div>

            {/* Question Image (if exists) */}
            {question?.imageUrl && (
                <img
                    src={question.imageUrl}
                    alt="Question"
                    className="img-fluid my-2 rounded"
                    style={{
                        width: "100%",
                        maxWidth: "400px",
                        height: "auto",
                        objectFit: "cover",
                    }} // 👈 Set max size
                />
            )}

            {/* Question Text */}
            <p className="fw-bold mt-2">{question.questionText}</p>

            {/* Answers */}
            <div className="row">
                {question.options.map((option) => (
                    <div key={option.optionId} className="col-6">
                        <div className="d-flex align-items-center my-1">
                            <input
                                className="form-check-input me-2"
                                type={getInputType()}
                                name={`question-${question.questionId}`}
                                id={`answer-${option.optionId}`}
                                checked={showAnswers ? option.correct : false}
                                disabled // 👈 Always disable clicking
                            />
                            <label
                                htmlFor={`answer-${option.optionId}`}
                                className={`${
                                    showAnswers
                                        ? option.correct
                                            ? "text-success fw-bold"
                                            : "text"
                                        : ""
                                }`}
                            >
                                {option.optionText}
                            </label>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;
