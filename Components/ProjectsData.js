import React from "react";
import { Projects } from "../data/Projects";
import { EmpListProject1, EmpListProject2 } from "../data/Emp";
import { Button, Badge } from "react-bootstrap";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

export default class AssignHistory extends React.Component {
  constructor() {
    super();
    this.state = {
      // isLoading: true,
      projectsData: [],
      projectByID: []
    };
  }
  componentDidMount() {
    //Ya'ani call to the server for data
    // const employees = getEmployeeForAssignments();
    this.state.projectsData = Projects;
    this.state.projectByID = [EmpListProject1, EmpListProject2];
    setTimeout(() => {
      this.setState({
        // isLoading: false
      });
    }, 100);
  }

  render() {
    return (
      <>
        <div className="col justify-content-md-center">
          <h1 style={{ marginLeft: "600px" }}>Projects Tables</h1>
          <div className="d-flex justify-content-end align-items-center mb-2">
            <input
              className="form-control mr-sm-2 w-25 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </div>
          <div className="accordion" id="accordionExample">
            {this.state.projectsData.map(project => {
              return (
                <div className="card">
                  <div className="card-header" id="headingOne0">
                    <div className="row">
                      <div className="col">
                        <button
                          className="btn btn-outline-info"
                          type="button"
                          data-toggle="collapse"
                          data-target={`#${project.id}`}
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Info
                        </button>
                      </div>
                      <div className="col">
                        <h3>Name: {project.name}</h3>
                      </div>
                      <div className="col">
                        {" "}
                        <h3>ID: {project.id}</h3>
                      </div>
                      <div className="col">
                        {" "}
                        <button
                          className="btn btn-outline-success"
                          style={{ marginLeft: "5px" }}
                          type="button"
                        >
                          <Link to={"./Team-Table"} style={{ color: "black" }}>
                            Assign
                          </Link>
                        </button>
                      </div>
                    </div>

                    {/* ends card-header div */}
                  </div>
                  <div
                    id={project.id}
                    className="collapse "
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <div className="row">
                        <div className="col">
                          <h6 style={{ fontWeight: "bold" }}>
                            Required Technical Skills{" "}
                          </h6>
                          {project.technicalSkills.map((skill, index) => {
                            return (
                              <span
                                className="badge badge-info mr-1"
                                key={index}
                              >
                                {skill.name}{" "}
                                <span
                                  className="badge badge-light"
                                  style={{
                                    fontSize: skill.level > 3 ? "1em" : ""
                                  }}
                                >
                                  {skill.level}
                                </span>
                              </span>
                            );
                          })}
                        </div>
                        <div className="col">
                          <h6 style={{ fontWeight: "bold" }}>
                            Required Product Skills{" "}
                          </h6>
                          {project.productSkills.map((skill, index) => {
                            return (
                              <span
                                className="badge badge-secondary mr-1"
                                key={index}
                              >
                                {skill.name}{" "}
                                <span
                                  className="badge badge-light"
                                  style={{
                                    fontSize: skill.level > 3 ? "1em" : ""
                                  }}
                                >
                                  {skill.level}
                                </span>
                              </span>
                            );
                          })}
                        </div>
                        <div className="col">
                          <h6 style={{ fontWeight: "bold" }}>Date</h6>
                          {project.startDate}
                        </div>
                        <div className="col">
                          <h6 style={{ fontWeight: "bold" }}>Description</h6>
                          {project.description}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <h6 style={{ fontWeight: "bold" }}> Employess </h6>
                          {this.state.projectByID.map(EmpList => {
                            return (
                              <>
                                {EmpList.map(Emp => {
                                  return (
                                    <button
                                      className="btn btn-outline-secondary"
                                      style={{ marginLeft: "5px" }}
                                      type="button"
                                    >
                                      <Link
                                        to={`Assign-History/${Emp.id}`}
                                        style={{ color: "black" }}
                                      >
                                        {Emp.name}
                                      </Link>
                                    </button>
                                  );
                                })}
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

{
  /* <table
            id="assignment-history"
            className="table table-hover"
            style={{
              width: "70%",
              marginLeft: "200px",
              marginTop: "20px",
              border: "1px solid black"
            }}
          >
            <thead className="thead-dark">
              <tr style={{ textAlign: "center", fontSize: "18px" }}>
                <th scope="col"> ID</th>
                <th scope="col"> Name</th>
                <th scope="col">Start Date</th>
                <th scope="col">RequiredSkills</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.projectsData.map(project => {
                return (
                  <tr
                    key={project.id}
                    style={{ textAlign: "center", fontSize: "16px" }}
                  >
                    <td>{project.id}</td>
                    <td>{project.name}</td>
                    <td>{project.startDate}</td>

                    <td>
                      {project.technicalSkills.map((skill, index) => {
                        return (
                          <span className="badge badge-info mr-1" key={index}>
                            {skill.name}{" "}
                            <span
                              className="badge badge-light"
                              style={{
                                fontSize: skill.level > 3 ? "1em" : ""
                              }}
                            >
                              {skill.level}
                            </span>
                          </span>
                        );
                      })}
                      {project.productSkills.map((skill, index) => {
                        return (
                          <span
                            className="badge badge-secondary mr-1"
                            key={index}
                          >
                            {skill.name}{" "}
                            <span
                              className="badge badge-light"
                              style={{
                                fontSize: skill.level > 3 ? "1em" : ""
                              }}
                            >
                              {skill.level}
                            </span>
                          </span>
                        );
                      })}
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-success "
                        style={{ width: "100px" }}
                      >
                        <small>More Info</small>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table> */
}
