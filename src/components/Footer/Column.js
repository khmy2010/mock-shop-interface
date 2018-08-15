import React from 'react';

import { Link } from 'react-router-dom';

const column = ({ title, links }) => (
    <div className="footer-column">
        <h5>{title}</h5>
        <ul>
            {links.map(({ desc, to }) => (
                <li key={desc}>
                    <Link to={to}>{desc}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default column;
