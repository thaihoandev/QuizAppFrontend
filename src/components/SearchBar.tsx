import React, {useState, useEffect, useRef} from "react";
import {searchQuizzes} from "../services/searchService"; // Import service gọi API

interface SearchResult {
    quizId: string;
    title: string;
    description: string;
    status: string;
    hostId: string | null;
}

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Debounce để hạn chế gọi API khi người dùng gõ nhanh
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (searchQuery) {
                fetchSearchResults(searchQuery);
            } else {
                setSuggestions([]);
                setIsDropdownOpen(false);
            }
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchQuery]);

    // Gọi API để lấy danh sách gợi ý tìm kiếm
    const fetchSearchResults = async (query: string) => {
        try {
            const data = await searchQuizzes(query);
            setSuggestions(data); // Cập nhật danh sách quiz từ API
            setIsDropdownOpen(true);
            setActiveIndex(-1);
        } catch (error) {
            console.error("Error fetching search results:", error);
            setSuggestions([]);
            setIsDropdownOpen(true);
            setActiveIndex(-1);
        }
    };

    // Xử lý khi nhập vào ô tìm kiếm
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    // Xử lý khi chọn một gợi ý
    const handleSelectSuggestion = (index: number) => {
        if (index >= 0 && index < suggestions.length) {
            setSearchQuery(suggestions[index].title); // Hiển thị title của quiz
            setSuggestions([]);
            setIsDropdownOpen(false);
            setActiveIndex(-1);
        }
    };

    // Xử lý phím tắt và điều hướng bàn phím
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.ctrlKey && event.key === "q") {
                event.preventDefault();
                if (searchInputRef.current) {
                    searchInputRef.current.focus();
                }
                return;
            }

            if (!isDropdownOpen) return;

            if (event.key === "ArrowDown") {
                event.preventDefault();
                setActiveIndex((prev) =>
                    prev < suggestions.length - 1 ? prev + 1 : prev,
                );
            } else if (event.key === "ArrowUp") {
                event.preventDefault();
                setActiveIndex((prev) => (prev > -1 ? prev - 1 : -1));
            } else if (event.key === "Enter" && activeIndex >= 0) {
                event.preventDefault();
                handleSelectSuggestion(activeIndex);
            } else if (event.key === "Escape") {
                setIsDropdownOpen(false);
                setActiveIndex(-1);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [activeIndex, suggestions, isDropdownOpen]);

    // Ẩn dropdown khi nhấp ra ngoài
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsDropdownOpen(false);
                setActiveIndex(-1);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="dropdown position-relative w-100" ref={dropdownRef}>
            <div className="input-group">
                <span className="input-group-text text-light">
                    <i className="bx bx-search"></i>
                </span>
                <input
                    type="text"
                    ref={searchInputRef}
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Search quizzes [Ctrl + Q]"
                    className="form-control text-light"
                    onFocus={() => setIsDropdownOpen(true)}
                />
            </div>

            {isDropdownOpen && (
                <ul className="dropdown-menu show w-100 position-absolute">
                    {suggestions.length > 0 ? (
                        suggestions.map((result, index) => (
                            <li key={result.quizId}>
                                <button
                                    className={`dropdown-item ${index === activeIndex ? "active" : ""}`}
                                    onMouseDown={() =>
                                        handleSelectSuggestion(index)
                                    }
                                >
                                    <strong>{result.title}</strong>
                                    <br />
                                    <small className="text-muted">
                                        {result.description}
                                    </small>
                                </button>
                            </li>
                        ))
                    ) : (
                        <li className="dropdown-item text-center text-muted">
                            Không có kết quả
                        </li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default SearchBar;
