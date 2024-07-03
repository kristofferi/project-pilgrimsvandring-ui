import React, { useEffect, useState } from 'react';

const Information= () => {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        fetch('/Information.html')
            .then(response => response.text())
            .then(data => setHtmlContent(data));
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    );
};

export default Information;