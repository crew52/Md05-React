import {useState} from "react";

function StarRating({ user, onRatingChange }) {
    const [hoveredRating, setHoveredRating] = useState(null);

    return (
        [...Array(5)].map((_, index) => {
            const hovered = hoveredRating ?? user.rating;
            return (
                <i
                    key={index}
                    className={`bi ${index < hovered ? "bi-star-fill text-warning" : "bi-star text-secondary"}`}
                    onMouseEnter={() => setHoveredRating(index + 1)}
                    onMouseLeave={() => setHoveredRating(null)}
                    onClick={() => onRatingChange(user.id, index + 1)}
                    style={{ cursor: "pointer" }}
                ></i>
            );
        })
    );
}

export default StarRating