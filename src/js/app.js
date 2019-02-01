import React from 'react';
import ReactDOM from 'react-dom';
import {bank} from './words.min.js';
const wordSource = bank.filter(word => word.length > 3 && word.length < 10);

let Phrases = [];

export class Window extends React.Component {
    render() {
        const phraseList = Phrases.map((phrase, index) => <p key={index}>{phrase}</p>);

        return (
            <div className="window">
                <div className="window__nav">
                    <span className="circle  circle--red"></span>
                    <span className="circle  circle--yellow"></span>
                    <span className="circle  circle--green"></span>
                </div>

                <div className="window__body">
                    <div className="phrase-display">
                        {phraseList}
                    </div>
                </div>
            </div>
        );
    }
};

export class Controls extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            wordCount: 3,
            number: false,
            spchr: false,
            spaces: true,
            capital: false
        }
    }

    handleChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : parseInt(target.value);
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    handleClick(e) {
        Phrases.push(generatePhrase(this.state));
        console.log(Phrases);
    }

    render() {
        return (
            <div>
                <CreateButton settings={this.state.settings} handleClick={this.handleClick} />
                <CopyButton />
                <InfoButton />
                <div className="settings">
                    <form className="settings__words">
                        <p>Number of words:</p>
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
            </div>
        )
    }
};

class CreateButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.handleClick(e.target.value);
    }

    render() {
        return (
            <button id="create" className="controls__button" onClick={this.handleClick}>
                <img src={"images/plus.svg"}></img>
            </button>
        )
    }
};

class CopyButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        return
    }

    render() {
        return (
            <button id="copy" className="controls__button" onClick={this.handleClick}>
                <img src={"images/copy.svg"}></img>
            </button>
        )
    }
};

class InfoButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        $('body').addClass('info');
    }

    render() {
        return (
            <button id="info" className="controls__button" onClick={this.handleClick}>
                <img src={"images/info.svg"}></img>
            </button>
        )
    }
};

function generatePhrase(settings) {
    function pickRandomFromArray(theArray) {
        var a = theArray[Math.floor(Math.random() * theArray.length)];
        return a;
    };

    let passPhrase = '';

    for (let i = 0; i < settings.wordCount; i++) {
        let word = pickRandomFromArray(wordSource);

        if (settings.capital) {
            if (i == 0) {
                word = word.charAt(0).toUpperCase() + word.slice(1);
            };
        };

        if (settings.spaces) {
            if (i != (settings.wordCount - 1)) {
                word += " ";
            };
        };

        passPhrase += word
    }

    if (settings.number) {
        passPhrase += Math.floor(Math.random() * 10); // number
    }

    if (settings.spchr) {
        passPhrase += pickRandomFromArray(['!','?','/',':',';','$','&','-','@','"']); // spchr
    }

    return passPhrase;
}
