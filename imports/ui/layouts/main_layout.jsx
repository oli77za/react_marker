import React from 'react';

export default MainLayout = ( { header, content, footer } ) => (
    <div className="main_layout">
        <header>{header}</header>
        <main>{content}</main>
        <footer>{footer}</footer>
    </div>);

