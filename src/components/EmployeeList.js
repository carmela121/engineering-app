import React from 'react';
import { connect } from 'react-redux';
import { fetchAllEmployees, fetchPersonas, fetchFilteredEmployees } from '../actions';
import _ from 'lodash';

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
            this.props.fetchAllEmployees();
        } else {
            this.setState({projectStatus: value})
            this.props.fetchFilteredEmployees(value);
        }
      
    }
   
    componentDidMount() {
        this.props.fetchAllEmployees();
        
    }
    
   
    render() {
      
        return(
            <div className="ui container">
                <h2 className="ui header">Select from the following menu</h2>
                <div className="ui four column doubling stackable grid container">
            
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
                            <option value="2">blah</option>
                            <option value="1">blahblah</option>
                            <option value="0">Held</option>
                        </select>
                    </div>
        
                </div>
                
                    <div className="grid"> 
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
                </div>
            </div>
            
            
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        employees: state.employees.employeeList,
        personas: state.personas.personaList
  
        
       
     };

}

export default connect(mapStateToProps, {fetchAllEmployees, fetchFilteredEmployees, fetchPersonas})(Employees);