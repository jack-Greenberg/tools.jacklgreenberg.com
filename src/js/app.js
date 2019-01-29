import React from 'react';

export function Window(props) {
    return (
        <div className="window">
            <div className="window__nav">
                <span className="circle  circle--red"></span>
                <span className="circle  circle--yellow"></span>
                <span className="circle  circle--green"></span>
            </div>

            <div className="window__body">
                <div className="phrase-display"></div>
            </div>
        </div>
    );
}
