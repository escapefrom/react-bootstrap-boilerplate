import * as React from 'react';

class Graphics extends React.Component {
    render() {
        var src = "https://app.powerbi.com/view?r=eyJrIjoiODQzMTQ0MzItNjc5Zi00YWUxLTg0YWYtNzA4ZGQ5NzVlMzI2IiwidCI6ImIyODYzNTEyLWUzNmMtNDIwYi1hZTk4LTY1ZGEyYzc5ODg4MCJ9&pageName=ReportSection"

        return (
            <iframe style={{width: "100%", height: "100vh", display: "block"}} frameborder="0" allowFullScreen="true" src= {src} />
        );
    }
}

export default Graphics;
