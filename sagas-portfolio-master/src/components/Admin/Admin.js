import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {

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

  render() {

    return (
      <div>
        <div className="Headerclass">
        <h2>Admin page</h2>
        </div>
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
        <button onClick={this.toProjectPage}>To Project Page</button>
      </div>
    );
  }
}
const mapStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapStateToProps)(Admin);