import React from "react";
import { AssignHistoryForEmp } from "../data/AssignHistoryForEmp";
import {  Link } from "react-router-dom";
export default class AssignHisToryTable extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      EmpHistory: [],
      myMatch:{}
    };
  }
  componentDidMount() {
    this.state.EmpHistory = AssignHistoryForEmp;
    this.setState({myMatch:this.props.match.params})
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 500);
  }
  render() {
    return (
      <div className="col justify-content-md-center">
        <h1 style={{ marginLeft: "500px" }}>History Table For Emp {this.state.myMatch.id} </h1>
        <button className="btn btn-outline-info"><Link to="/Projects">Back</Link></button>
        <table
          className="table"
          style={{
            width: "70%",
            marginLeft: "200px",
            marginTop: "20px",
            border: "1px solid black",
            textAlign: "center"
          }}
        >
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Assignment ID</th>
              <th scope="col">Project Name</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Status</th>
              <th scope="col">Request By Manager</th>
            </tr>
          </thead>
          <tbody>
            {this.state.EmpHistory.map((Assign, i) => {
              return (
                <tr>
                  <td>{i}</td>
                  <td>{Assign.projectID}</td>
                  <td>{Assign.projectName}</td>
                  <td>{Assign.startDate}</td>
                  <td>{Assign.endDate}</td>
                  <td>{Assign.status}</td>
                  <td>{Assign.requestFromManagerID}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
