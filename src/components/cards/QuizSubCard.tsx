import React, {useState} from "react";
import PropTypes from "prop-types";
import QuizDropdown from "../dropdowns/QuizDropdown";

// Define types matching your Java model
export interface UserDto {
    userId: string;
    name: string;
    avatar: string;
}

export enum QuizStatus {
    DRAFT = "Draft",
    LIVE = "Live",
    COMPLETED = "Completed",
}

export interface QuizResponseDto {
    quizId: string;
    title: string;
    description?: string;
    host: UserDto;
    createdAt: string;
    updatedAt: string;
    status: QuizStatus;
    viewers: UserDto[];
    editors: UserDto[];
}

interface QuizCardProps {
    quiz: QuizResponseDto;
}

const QuizSubCard: React.FC<QuizCardProps> = ({quiz}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Determine badge color based on status
    const getStatusBadgeColor = () => {
        switch (quiz.status) {
            case QuizStatus.LIVE:
                return "success";
            case QuizStatus.COMPLETED:
                return "secondary";
            default:
                return "warning";
        }
    };

    return (
        <div className="card h-100 shadow-lg border mt-2">
            {" "}
            {/* Added Bootstrap box-shadow & mt-2 */}
            <div className="card-body">
                {/* Quiz Header */}
                <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                        <img
                            src={quiz.host.avatar}
                            alt="Host Avatar"
                            className="rounded-circle me-2"
                            width="40"
                            height="40"
                        />
                        <div>
                            <h5 className="mb-0">{quiz.title}</h5>
                            <small className="text-muted">
                                By: {quiz.host.name}
                            </small>
                        </div>
                    </div>

                    {/* Dropdown Menu */}
                    <QuizDropdown quizId={quiz.quizId} />
                </div>

                {/* Quiz Description */}
                <p className="text-muted">
                    {quiz.description || "No description available."}
                </p>

                {/* Quiz Metadata */}
                <div className="d-flex justify-content-end align-items-center">
                    <small className="text-muted">
                        Updated: {new Date(quiz.updatedAt).toLocaleDateString()}
                    </small>
                </div>

                {/* Viewers & Editors */}
                <div className="mt-3 d-flex justify-content-between">
                    {/* Viewers */}
                    <div className="d-flex align-items-center">
                        <span className="me-2">👀</span>
                        <div className="d-flex">
                            {quiz.viewers.slice(0, 3).map((user, index) => (
                                <img
                                    key={user.userId}
                                    src={user.avatar}
                                    alt={user.name}
                                    className="rounded-circle border border-white"
                                    width="30"
                                    height="30"
                                    title={user.name}
                                    style={{
                                        marginLeft: index === 0 ? 0 : "-8px",
                                    }}
                                />
                            ))}
                            {quiz.viewers.length > 3 && (
                                <span className="badge bg-secondary ms-1">
                                    +{quiz.viewers.length - 3}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* Editors */}
                    <div className="d-flex align-items-center">
                        <span className="me-2">✍️</span>
                        <div className="d-flex">
                            {quiz.editors.slice(0, 3).map((user, index) => (
                                <img
                                    key={user.userId}
                                    src={user.avatar}
                                    alt={user.name}
                                    className="rounded-circle border border-white"
                                    width="30"
                                    height="30"
                                    title={user.name}
                                    style={{
                                        marginLeft: index === 0 ? 0 : "-8px",
                                    }}
                                />
                            ))}
                            {quiz.editors.length > 3 && (
                                <span className="badge bg-secondary ms-1">
                                    +{quiz.editors.length - 3}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// PropTypes for runtime validation (optional)
QuizSubCard.propTypes = {
    quiz: PropTypes.shape({
        quizId: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        host: PropTypes.shape({
            userId: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
        }).isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
        status: PropTypes.oneOf(Object.values(QuizStatus)).isRequired,
        viewers: PropTypes.arrayOf(
            PropTypes.shape({
                userId: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                avatar: PropTypes.string.isRequired,
            }),
        ).isRequired,
        editors: PropTypes.arrayOf(
            PropTypes.shape({
                userId: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                avatar: PropTypes.string.isRequired,
            }),
        ).isRequired,
    }).isRequired,
};

export default QuizSubCard;
