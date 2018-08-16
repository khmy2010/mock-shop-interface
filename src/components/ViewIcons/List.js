import React from 'react';

const icon = ({ active, clicked }) => (
    <svg
        width={25}
        height={25}
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#fff"
        fillRule="evenodd"
        className="view-icon"
        onClick={clicked}
    >
        <g stroke="none" fill={active ? '#000' : '#b7b7b7'}>
            <rect x={2} y={1} width={6} height={6} rx={1} />
            <rect x={2} y={10} width={6} height={6} rx={1} />
            <rect x={2} y={19} width={6} height={6} rx={1} />
            <rect x={10} y={1} width={16} height={6} rx={1} />
            <rect x={10} y={10} width={16} height={6} rx={1} />
            <rect x={10} y={19} width={16} height={6} rx={1} />
        </g>
    </svg>
);

export default icon;
