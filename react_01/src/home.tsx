import React from 'react';
import Count from './count';
import Board from './board';

//* using a "?" tell TS that you may or may not pass a prop for that field
interface HomeProps {
    user?: string;
}

interface HomeState {
    server: boolean;
    list: {id:number, name: string}[]
}

//* The only way to pass state and still use a constructor; you must implement an Interface
//* HomeProps is the type that we will be passing in for props. TS needs to know the type. 
//* Note: You don't need to necessarily use an interface you could pass the props and the state as objects
//* i.e. React.Component<{user?: string}, {server: boolean}> {
//* However, using an interface is a much better way of doing this.
class Home extends React.Component<HomeProps, HomeState> {

    constructor(props: HomeProps) {
        super(props);

        this.state = {
            server: true,
            list: [
                {
                    id: 1,
                    name: "Steve"
                },                
                {
                    id: 2,
                    name: "Jess"
                },                
                {
                    id: 3,
                    name: "Nick" 
                }
            ]
        }
    }
    // state = {
    //     server: false
    // }

    showAlert(arg:string):void{
        alert(arg);
    }

    saySomething(): JSX.Element{
        return <div>I am saying something</div>
    }

    showList(): JSX.Element[]{
        return this.state.list.map(user => {
            return (
                <div>
                    <div>ID: {user.id}</div>
                    <div>Name: {user.name}</div>
                    <hr/>
                </div>
            )
        })
    }

    render() {
        return (
            <>
                <h1>home</h1>
                <div>Hello I am {this.props.user}</div>
                <div>
                    {
                        this.state.server ? (<div>The server is on</div>) : (<div>The server is down</div>)
                    }
                </div>
                <Count/>
                <Board name="boat" color="red"/>
                <hr/>
                <h3 onClick={() => this.showAlert("it works")}>Click me to alert</h3>
                <hr/>
                {this.saySomething()}
                <hr/>
                {this.showList()}
            </>
        );
    }
}

export default Home;