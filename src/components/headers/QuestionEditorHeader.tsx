import React from "react";

interface QuestionEditorHeaderProps {
    onPublish: () => void;
    publishing: boolean;
}

const QuestionEditorHeader: React.FC<QuestionEditorHeaderProps> = ({
    onPublish,
    publishing,
}) => (
    <header
        className="row py-3 border-bottom bg-white align-items-center shadow-sm"
        style={{
            position: "sticky",
            top: 0,
            zIndex: 1000, // Để nằm trên các phần khác
            backgroundColor: "white",
        }}
    >
        <div className="col d-flex align-items-center">
            <button className="btn btn-outline-secondary btn-sm me-2">
                <i className="bx bx-arrow-back"></i>
            </button>
            <h5 className="mb-0 text-dark">Nhận biết</h5>
        </div>
        <div className="col text-end">
            <button className="btn btn-outline-secondary btn-sm me-2">
                <i className="bx bx-cog"></i> Cài đặt
            </button>
            <button className="btn btn-outline-secondary btn-sm me-2">
                <i className="bx bx-show"></i> Xem trước
            </button>
            <button className="btn btn-primary btn-sm">
                <i className="bx bx-cloud-upload"></i> Xuất bản
            </button>
        </div>
    </header>
);

export default QuestionEditorHeader;
