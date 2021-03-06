import React from 'react';
import UserProfileHeader from './UserProfileHeader'
import UserProfileDetails from './UserProfileDetails'
import UserProfileRoles from './UserProfileRoles';
import UserProfileChart from './UserProfileChart';
import UserProfileFooter from './UserProfileFooter';
import {USER} from '../../data/mockData'

export default class UserProfile extends React.Component{

    constructor(props){
        super(props);
        this.state={
            mode:{edit:false, add:false},
            status:{deactivated:false, locked:false},
            userData:{
                details:{
                    firstName:'',
                    lastName:'',
                    workSite:{
                        name:'',
                        id:-1,
                        country:{
                            name:'',
                            id:''
                        }
                    },
                    manager:{name:'',id:-1},
                    phone:'',
                    email:'',
                    department:{name:'',id:-1},
                    lastLogin:'',
                },
                roles:{
                    roles:[{
                        id:'',
                        name:'',
                        description:''
                    }]
                },
                img:{
                    imgURL:'',
                }
            }
        }
        
        this.toggleEditMode=this.toggleEditMode.bind(this)
        this.toggleLockUser=this.toggleLockUser.bind(this)
        this.browseImage=this.browseImage.bind(this)
        this.fetchUserData=this.fetchUserData.bind(this)
    }

    componentDidMount(){
        this.fetchUserData()
    }

    fetchUserData(){
        this.setState({
            userData:USER
        })
        console.log(this.state.userData)
    }

    toggleEditMode(action){
        if(!action){
            this.setState({
                mode:{
                    ...this.state.mode,
                    edit:!this.state.mode.edit,
                }
            })
        }else{
            this.setState({
                mode:{
                    ...this.state.mode,
                    edit:action
                }
            })
        }
    }

    browseImage(){
       alert('This function is currently unavailable')
    }

    toggleLockUser(){
        this.setState({
            ...this.state,
            status:{deactivated:false, locked:!this.state.status.locked},
        })
        this.toggleEditMode(this.state.status.locked)
    }

    render(){
        return(
         <>
        <div className="container">
            <div className="row p-0 m-0">
                <div className="col-12 mb-2 mr-3 ml-3 p-0 mt-5">
                    <UserProfileHeader toggleEditMode={this.toggleEditMode}
                                        browseImage={this.browseImage}
                                        imgURL={this.state.userData.img.imgURL}
                                        employeeName={this.state.userData.details.firstName+" " + this.state.userData.details.lastName}
                                        isLocked={this.state.status}/>

                    <UserProfileDetails editMode={!this.state.mode.edit} 
                                        details={this.state.userData.details}/>

                    <UserProfileRoles editMode={!this.state.mode.edit}
                                        userRoles={this.state.userData.roles}/>

                    <UserProfileChart editMode={!this.state.mode.edit} />

                    <UserProfileFooter editMode={!this.state.mode.edit}
                                        isLocked={this.state.status.locked}
                                        toggleLockUser={this.toggleLockUser}/>
                </div>
            </div>
        </div>  


         
                
        </>
        )
    }
}