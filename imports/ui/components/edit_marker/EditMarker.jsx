import React from 'react';
import './edit_marker.scss';

export class EditMarker extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
    }
    handleClick() {
        console.log("MArker clicka, this", this);
    }
    onMouseEnter() {
        console.log("MArker mouseover");
    }
    render() {
        return (
            <div className="edit_marker">
                <div className="marker" onClick={this.handleClick} onMouseOver={this.onMouseOver}>
                    <div className="icon"></div>
                    <div className="toolbox">
                        <div className="tool">
                        </div>
                        <AddLineHandle marker={this}/>
                        <div className="tool"></div>
                    </div>
                </div>
            </div>
        );
    }
}


class AddLineHandle extends React.Component {
    onMouseDown() {
        console.log("Handle clicked", this);
    }  
    render() {
        return (<div className="tool addLineHandle" onMouseDown={this.onMouseDown}></div>);
    }
}
