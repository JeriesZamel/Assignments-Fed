import React from 'react';
import ListRoles from '../../Components/ListRoles'


export default class AddRole extends React.Component{

    render(){
        return(<>

        <h5 class="text-center">Add New Role</h5>
                <div className="row m-auto col-8">
            <label htmlFor="RoleName" className="mb-0">Role Name</label>
                    <div className="input-group mb-3">
                        <input type="text"
                        id="RoleName"
                        className="form-control"
                        placeholder="Username"
                        aria-label="Username"
                        defaultValue="Role Name"
                        aria-describedby="role_name"></input>
                    </div>
                </div>


                <div className="row m-auto col-8">
                <label htmlFor="RoleName" className="mb-0">Role Description</label>
                    <div className="input-group">
                        <textarea className="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>

            <div className="d-flex justify-content-center">
                <div className="w-75 m-2">
                <ListRoles options={['Manager','Employee','Admin']}/>
                </div>
                    <div className="d-flex flex-column justify-content-center">
                        <button className="btn btn-sm btn-outline-success m-1">Add <i className="fas fa-arrow-right"></i></button>
                        <button className="btn btn-sm btn-outline-danger m-1">Remove<i className="fas fa-arrow-left"></i> </button>
                    </div>
                    <div className="w-75 m-2">
                        <ListRoles options={['Intern','HR manager']}/>
                    </div>
                </div>


            </>
        )
    }
}