import React from 'react';
import {wordSource} from './words.min.js';

export class Window extends React.Component {
    render() {
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
}

export function Controls() {
    return (
        <div className="controls">
            <CreateButton />
            <CopyButton id="copy" img="copy" event="handleCopy" />
            <InfoButton id="info" img="info" event="handleInfo" />
		</div>
    );
}

class CreateButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        Generate()
    }

    render() {
        return (
            <button id="create" className="controls__button" onClick={this.handleClick}>
                <img src={"images/plus.svg"}></img>
            </button>
        )
    }
}

class CopyButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        copy()
    }

    render() {
        return (
            <button id="copy" className="controls__button" onClick={this.handleClick}>
                <img src={"images/copy.svg"}></img>
            </button>
        )
    }
}

class InfoButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        $('body').toggleClass('info');
    }

    render() {
        return (
            <button id="info" className="controls__button" onClick={this.handleClick}>
                <img src={"images/info.svg"}></img>
            </button>
        )
    }
}

export class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            wordCount: 3,
            number: false,
            spchr: false,
            spaces: true,
            capital: false
        };
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : parseInt(target.value);
        const name = target.name;

        this.setState({
            [name]: value
        }, () => {console.log(this.state)});
    }

    render() {
        return (
            <div className="settings">
                <p>Number of words:</p>
                <form className="settings__words">
                    <input type="radio" name="wordCount" className="js-settings__option  settings__option--number" id="two" value={2} defaultChecked={this.state.wordCount == 2 ? true : false} onChange={this.handleChange}></input>
                        <label htmlFor="two">2</label>
                    <input type="radio" name="wordCount" className="js-settings__option  settings__option--number" id="three" value={3} defaultChecked={this.state.wordCount == 3 ? true : false} onChange={this.handleChange}></input>
                        <label htmlFor="three">3</label>
                    <input type="radio" name="wordCount" className="js-settings__option  settings__option--number" id="four" value={4} defaultChecked={this.state.wordCount == 4 ? true : false} onChange={this.handleChange}></input>
                        <label htmlFor="four">4</label>
                    <input type="radio" name="wordCount" className="js-settings__option  settings__option--number" id="five" value={5} defaultChecked={this.state.wordCount == 5 ? true : false} onChange={this.handleChange}></input>
                        <label htmlFor="five">5</label>
                </form>
                <form className="settings__includes">
                    <input type="checkbox" className="js-settings__option  settings__option--check" id="number" name="number" defaultChecked={this.state.number} onChange={this.handleChange}></input>
                        <label htmlFor="number">incl. number</label>
                    <input type="checkbox" className="js-settings__option  settings__option--check" id="spchr" name="spchr" defaultChecked={this.state.spchr} onChange={this.handleChange}></input>
                        <label htmlFor="spchr">incl. sp. character</label>
                    <input type="checkbox" className="js-settings__option  settings__option--check" id="spaces" name="spaces" defaultChecked={this.state.spaces} onChange={this.handleChange}></input>
                        <label htmlFor="spaces">incl. spaces</label>
                    <input type="checkbox" className="js-settings__option  settings__option--check" id="capital" name="capital" defaultChecked={this.state.capital} onChange={this.handleChange}></input>
                        <label htmlFor="capital">incl. capital</label>
                </form>
            </div>
        )
    }
}




function Generate() {
    function pickRandomFromArray(theArray) {
        var a = theArray[Math.floor(Math.random() * theArray.length)];
        return a;
    };
    // pickRandomFromArray(wordSource);
}

function copy() {
    return
}
