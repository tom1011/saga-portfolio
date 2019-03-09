import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {
    state = {
        name: '',
        date: '',
        urlWebsite: '',
        gitHub: '',
        description: '',
    }

    componentDidMount() {
        this.getPort();
    }
    getPort=()=> {
        this.props.dispatch({ type: 'GET_PORTFOLIO' })
    }

    toProjectPage = () => {
        this.props.history.push('/')
    }
    deleteButton =  (event)=> {
        console.log(event.target.value)
        this.props.dispatch({type: 'REMOVE_PROJECT', payload: event.target.value})
    }

    onChangeInput = (name) => (event) => {
        // console.log( "this is the name hoping its name" ,name)
        // console.log( "this is the triger" , event.target.value)
        this.setState({
                ...this.state,
                [name]: event.target.value,
        });
    }
    onSubmintButton = (event) => {
        event.preventDefault();
        console.log(this.state ,"in onsubmit buttton")
        this.props.dispatch({ type: 'ADD_PORTFOLIO', payload: this.state})
        this.setState({
        name: '',
        date: '',
        urlWebsite: '',
        gitHub: '',
        description: '',
        image: ''
        })
    }

  render() {

    return (
      <div>
        <div className="Headerclass">
        <h2>Admin page</h2>
        </div>
        <div>
            <div>
            <input  placeholder="name of project" onChange={this.onChangeInput("name")}/>
            <input type="date" onChange={this.onChangeInput("date")}/>
            <p>temp hoolding for tags</p>
            </div>
            <div>
                <input placeholder ="URL of website" onChange={this.onChangeInput("urlWebsite")}/>
                <input placeholder ="gitHub URL" onChange={this.onChangeInput("gitHub")}/>
                <input placeholder = "img name" onChange={this.onChangeInput("image")}/>
            </div>
            <div>
                <textarea row="4" cols="50" placeholder="Description of Project" onChange={this.onChangeInput("description")}>
                </textarea>
                <button onClick={this.onSubmintButton}>Submit</button>
            </div>

            </div>
        <div>
            {/* move to new componet at some point/ this is the project map table */}
        <table>
        <tr>
            <th>Name</th>
            <th>Delete</th>
        </tr>
        {this.props.reduxState.projects.map((object) => <tr> 
            <td>{object.name}</td>
            <td><button key={object.id} value={object.id} onClick={this.deleteButton}>Delete</button></td>
        </tr>)}
        </table>
        {/* end project table on admin */}
        <button onClick={this.toProjectPage}>To Project Page</button>
      </div>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapStateToProps)(Admin);