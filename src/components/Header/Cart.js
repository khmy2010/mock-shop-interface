import React from 'react';

const cart = props => (
    <span className="header-icon border-brown">
        <svg
            width={23}
            height={21}
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="#fff"
            fillRule="evenodd"
            {...props}
        >
            <path
                d="M21 3H6L5 2c0-1 0-1-1-1H2C1 1 1 1 1 2s0 1 1 1h1l2 12h1v1h12l1-1c0-1-1-2-1-2H7v-1h13l1-8V3zm-2 2l-1 2h-3V5h4zm-5 0v2h-3V5h3zm0 3v2h-3V8h3zm-4-3v2H6V5h4zM6 8h4v2H7L6 8zm9 2V8h3v2h-3zm-9 9c0-1 1-2 2-2 0 0 1 1 1 2l-1 1c-1 0-2-1-2-1zm10 0c0-1 1-2 2-2 0 0 1 1 1 2l-1 1c-1 0-2-1-2-1z"
                stroke="#be6b00"
                fill="#be6b00"
            />
        </svg>
    </span>
);

export default cart;
