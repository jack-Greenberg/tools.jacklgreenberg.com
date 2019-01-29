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

export function Controls() {
    return (
        <div className="controls">
            <Button id="create" img="plus" />
            <Button id="copy" img="copy" />
            <Button id="info" img="info" />
		</div>
    );
}

function Button(props) {
    return (
        <button id={props.id} className="controls__button">
            <img src={"images/" + props.img + ".svg"}></img>
        </button>
    );
}

export function Settings(props) {
    return (
        <div className="settings">
            <p>Number of words:</p>
            <form className="settings__words">
				<input type="radio" className="setting-click" id="two" value="2"></input>
		    		<label for="two">2</label>
				<input type="radio" className="setting-click" id="three" value="3"></input>
		        	<label for="three">3</label>
				<input type="radio" className="setting-click" id="four" value="4" checked></input>
		    		<label for="four">4</label>
				<input type="radio" className="setting-click" id="five" value="5"></input>
		        	<label for="five">5</label>
			</form>
            <form className="settings__includes">
				<input type="checkbox" className="setting-click" id="number" />
					<label for="number">incl. number</label>
				<input type="checkbox" className="setting-click" id="spchr" />
					<label for="spchr">incl. sp. character</label>
				<input type="checkbox" className="setting-click" id="spaces" checked />
					<label for="spaces">incl. spaces</label>
                <input type="checkbox" className="setting-click" id="capital" />
					<label for="spaces">incl. capital</label>
			</form>
        </div>
    );
}
