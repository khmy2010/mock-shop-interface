import React from 'react';

const search = props => (
    <span className="header-icon">
        <svg
            width={22}
            height={22}
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#fff"
            fillRule="evenodd"
            {...props}
        >
            <path
                d="M21 19l-5-5c1-1 1-3 1-5 0-4-3-8-8-8-4 0-8 4-8 8 0 5 4 8 8 8 2 0 4 0 5-1l5 5 2-2zM9 15c-3 0-5-3-5-6s2-5 5-5 6 2 6 5-3 6-6 6z"
                stroke="none"
                fill="#000"
            />
        </svg>
    </span>
);

export default search;
