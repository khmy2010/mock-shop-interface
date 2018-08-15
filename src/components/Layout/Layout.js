import React from 'react';

import './Layout.css';

const layout = ({ children }) => (
    <React.Fragment>
        <main>{children}</main>
        <div className="push" />
    </React.Fragment>
);

export default layout;
