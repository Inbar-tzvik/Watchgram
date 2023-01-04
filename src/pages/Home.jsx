import { Component } from "react";


export class Home extends Component{

    componentDidMount() {
        // this.props.loadToys()
    }

    render(){
        return(
            <div className="welcome-div flex column">
            <div className="welcome-txt flex column justify-center">
            <h1>Welcome to <span>WatchGram</span></h1>
            <p>our toys are the best on the planet! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum atque dolores optio saepe repellendus, corporis, possimus quod nemo dicta ratione explicabo unde? Minima, nulla ea! Ut vitae repudiandae reiciendis natus.</p>
            </div>
        </div>
        )
    }
}