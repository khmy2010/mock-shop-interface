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
            <rect x={3} y={3} width={10} height={9} rx={2} />
            <rect x={14} y={3} width={10} height={9} rx={2} />
            <rect x={3} y={14} width={10} height={9} rx={2} />
            <rect x={14} y={14} width={10} height={9} rx={2} />
        </g>
    </svg>
);

export default icon;
