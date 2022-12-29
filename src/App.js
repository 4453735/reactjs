import React from "react";
import * as ReactDomClient from "react-dom/client";
import Header from "./components/Header";
import Image from "./components/Image";
import logo from "./img/react.png";
import Users from "./components/Users";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            helpText: "Help text",
            userData: ""
        }
        this.inputClick = this.inputClick.bind(this);
    }

    componentDidUpdate(prevProp) {
        if(this.state.helpText !== "Help")
            console.log("Some");
    }

    helpText = "Help text";
    render() {
        return (<div className="name">
            <Header title="Список пользователей"/>
            <main>
                <Users />
            </main>
            <aside></aside>
            <h1>{this.state.helpText}</h1>
            <h2>{this.state.userData}</h2>
            <input type="text" placeholder={this.state.helpText}
                   onChange={event => this.setState({userData: event.target.value})}
                   onClick={this.inputClick} onMouseEnter={this.mouseOver}/>
            <p>{this.state.helpText === "Help text" ? "Yes" : "No"}</p>
            <Image image={logo} />
            <img src={logo} />
        </div>)
    }

    inputClick() {
        this.setState({helpText: "Changed"})
        console.log("Clickeeeeed");
    }
    mouseOver() {console.log("Mouse oveeeer!")}
}

export default App;