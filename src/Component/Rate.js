import React from 'react';

const Rate = ({ rate, setRatingSearch }) => {
    const stars = x => {
        let star = [];
        for (let i = 1; i <= 5; i++) {
        if (i <= x) {
            star.push(<span className='stars'
            onClick={() => setRatingSearch(i)}
            >★</span>);
        } else {
            star.push(<span className='stars'
            onClick={() => setRatingSearch(i)}
            >☆</span>);
        }
        }
        return star;
    };
    return <div>{stars(rate)}</div>;
};

Rate.defaultProps = {
    setRatingSearch: () => {},
    rate: 1,
}

export default Rate;