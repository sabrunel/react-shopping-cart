import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function ProductRating({ rating }) {
    const [backgroundFill, setBackgroundFill] = useState(0);

    useEffect(() => {
        if (rating != 0) {
            setBackgroundFill(parseFloat(rating) * 20);
        } else {
            setBackgroundFill(0);
        }
        }, [rating])

    return (
        <div
            style={{
                backgroundImage: `linear-gradient(90deg, black 0%, black ${backgroundFill}%, white ${backgroundFill}%)`,
                backgroundClip: "text",
                WebkitbackgroundClip: "text"
        }}>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button 
                        key={index}
                        className="cursor-none"
                    >
                        <span className="text-transparent text-stroke-1">&#9733;</span>
                    </button>
                )
            })}
        </div>
    )
}

ProductRating.propTypes = {
    rating: PropTypes.number,
  };