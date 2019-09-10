import React from "react";
import { EmpListProject1 } from "../data/Emp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import {  Link } from "react-router-dom";
export default class MyTeamTable extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      Employees: []
    };
  }
  componentDidMount() {
    this.state.Employees = EmpListProject1;
    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 500);
    console.log(this.state.Employees);
  }
  render() {
    return (
      <>
        <div className="col justify-content-md-center">
          <div className="row"  style={{ width: "300x" }}>
           <div className="col md-3"></div>
            
            <div className="col md-6"><div class="card" >
              <div class="card-header">Employees For Team Leader </div>
              <div class="card-body">
                <h5 class="card-title">Ranem Daheer</h5>
                <p class="card-text">Project : VodaPhone</p>
                <p class="card-text">ID : "12332"</p>

                <button className="btn btn-outline-info"><Link to="/Projects">Back</Link></button>
              </div>
            </div></div>
            <div className="col md-3"></div>
          </div>
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
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">ID</th>
                <th scope="col">Skills</th>
                <th scope="col">Assign</th>
              </tr>
            </thead>
            <tbody>
              {this.state.Employees.map((Assign, i) => {
                return (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>
                      {" "}
                      <FontAwesomeIcon
                        style={{ cursor: "pointer" }}
                        title="ahalan"
                        size="2x"
                        icon={faUsers}
                      ></FontAwesomeIcon>
                    </td>
                    <td>{Assign.name}</td>
                    <td>{Assign.id}</td>
                    <td>
                      {Assign.technicalSkills.map((skill, index) => {
                        return (
                          <span className="badge badge-info mr-1" key={index}>
                            {skill.name}{" "}
                            <span
                              className="badge badge-light"
                              style={{
                                fontSize: skill.level > 3 ? "1em" : ""
                              }}
                            ></span>
                          </span>
                        );
                      })}

                      {Assign.productSkills.map((skill, index) => {
                        return (
                          <span
                            className="badge badge-primary mr-1"
                            key={index}
                          >
                            {skill.name}{" "}
                            <span
                              className="badge badge-light"
                              style={{
                                fontSize: skill.level > 3 ? "1em" : ""
                              }}
                            ></span>
                          </span>
                        );
                      })}
                    </td>
                    <td>
                      {" "}
                      <button
                        type="submit"
                        className="btn btn-primary btn-block"
                      >
                        Assign
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div style={{ height: "250px" }}></div>
      </>
    );
  }
}
