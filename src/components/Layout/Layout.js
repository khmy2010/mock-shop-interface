import React from 'react';

import './Layout.css';

const layout = ({ children }) => (
    <React.Fragment>
        <main className="content">{children}</main>
        <div className="push" />
    </React.Fragment>
);

export default layout;
