export interface UserRequestDTO {
    username: string;
    email: string;
    password: string;
}

export interface User {
    id: string;
    username: string;
    email: string;
    accessToken: string;
    refreshToken: string;
    avatar?: string;
    name: string;
}

export interface Option {
    optionId: string;
    optionText: string;
    correct: boolean;
    value?: boolean;
    correctAnswer?: string;
}

export interface Question {
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
