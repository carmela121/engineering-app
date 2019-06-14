import React from 'react';
import { connect } from 'react-redux';
import { fetchAllEmployees, fetchPersonas, fetchFilteredEmployees, fetchSkills, createEmployee } from '../actions';
import ReactTable from "react-table";
import "react-table/react-table.css";
import SimpleForm from "./AddEmployee";

class Employees extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            projectStatus: '',
            skillName: ''
        }

    }

    handleChange = (e) => {
        let value = e.target.value
            if(value === "all") {
                this.setState({projectStatus: 'all'})
                this.props.fetchAllEmployees();
            } else {
                this.setState({projectStatus: value})
                this.props.fetchFilteredEmployees(value);
            }
    
      
    }
  
    componentDidMount() {
  
        this.props.fetchAllEmployees();
        this.props.fetchPersonas();
        this.props.fetchSkills()
        
    }
    
   
    render() {
        console.log(this.props)
        const data  = this.props.employees;
        const columns = [{
            Header: 'Name',
            id: 'name',
            accessor: d => d.firstname
        }, {
            Header: 'Surname',
            id: 'surname',
            accessor: d => d.surname
        }, {
            Header: 'Email',
            id: 'email',
            accessor: d => d.email
        }, {
            Header: 'Level',
            id: 'level',
            accessor: d => d.consultantLevelEnum
        }, {
            Header: 'Project Status',
            id: 'projectStatus',
            accessor: d => d.projectStatus
        
        }]

          console.log(data)
        return(
            <div className="ui container">
                <h2 className="ui header">Select from the following menu</h2>
                {/* <div className="ui four column doubling stackable grid container">
            
                    <div className="column">
                        <select value={this.state.projectStatus} onChange={this.handleChange} className="ui dropdown">
                            <option value="">Project Status</option>
                            <option value="all">All</option>
                            <option value="BENCH">Bench</option>
                            <option value="ASSIGNED">Assigned</option>
                            <option value="HELD">Held</option>
                        </select>
                    </div>
                
                    
                        <div className="column">
                            <select className="ui dropdown">
                                <option value="">Skills</option>
                                <option value="all">All</option>
                                {this.props.skills.map(skill => 
                                    <option key={skill.id} value={skill.name}>{skill.name}</option>
                                    )
                                }
                            </select>
                        </div>
                
                   
        
                </div> */}
                
                    {/* <div className="grid"> 
                        <div>
                        {
                            
                            this.props.employees.map((employee, index) => (
                                <div className="ui container" key={index}>
                                    <div className="ui list">
                                    <div className="item">
                                    <i className="ui avatar image icon user"/>
                                    <div className="content">
                                    <p className="header">{employee.firstname} {employee.surname}</p>
                                        <div className="description">
                                        
                                        <p>Email: {employee.email}<br/>
                                            Location: {employee.location}<br/>
                                            Level: {employee.consultantLevelEnum}<br/>
                                            Start Date: {employee.startDate}<br/>
                                          
                                            Project Status: {employee.projectStatus}</p>
                                        </div>
                                    </div>
                                    </div>

                                
                                    </div>
                                </div>
                            ))
                        }
                    
                    </div>
                </div> */}

                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={15}
            />
            <SimpleForm/>
            </div>
            
            
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        employees: state.employees.employeeList,
        personas: state.personas.personaList,
        skills: state.skills.skillList  
       
     };

}

export default connect(mapStateToProps, {fetchAllEmployees, fetchFilteredEmployees, fetchPersonas, fetchSkills, createEmployee})(Employees);