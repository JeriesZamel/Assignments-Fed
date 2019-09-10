import React from 'react';
import ListRoles from '../ListRoles'


export default class UserProfileDetails extends React.Component{
    render(){
        return(<>
        <div className="card mb-2">
        
            <h5 className="text-center mt-3 mb-1">Roles</h5>
            <div className="d-flex justify-content-around">
                <div className="w-75 m-2">
                    <ListRoles disabled={this.props.editMode} options={[1,2,3,4]}/>
                </div>
                {!this.props.editMode &&
                <>
                <div className="d-flex flex-column justify-content-center">
                    <button className="btn btn-sm btn-outline-success m-1">Add <i className="fas fa-arrow-right"></i></button>
                    <button className="btn btn-sm btn-outline-danger m-1"><i className="fas fa-arrow-left"></i> Remove</button>
                </div>
                <div className="w-75 m-2">
                    <ListRoles disabled={this.props.editMode} options={[1,2,3,4]}/>
                </div>
            </>}
                
            </div>
        </div>
        
        </>)
    }
}