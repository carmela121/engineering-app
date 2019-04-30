import React from 'react';
import { connect } from 'react-redux';
import { fetchEmployees, fetchPersonas } from '../actions';
import _ from 'lodash';

class Employees extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            projectStatus: '',
            skillName: ''
          
        
        }

    }
   
    componentDidMount() {
        this.props.fetchEmployees();
        this.props.fetchPersonas();
        
        
    }

  
    handleChange = (value) => {
       
        let filteredData;
        if(this.state.projectStatus === "all"){
           
          filteredData = this.props.employees;
        } else {
          filteredData = this.props.employees.filter(item => console.log(this.state.projectStatus));
        }
    }

    handleToggle = (e) => {
        var value = e.target.value;
        this.setState({projectStatus: value})
        this.handleChange(value);
    }

    
    renderList() {
  
        
        return (
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
                {
                    this.props.personas.map((persona, index) => (
                        <div className="ui container" key={index} className="item">
                           
                              
                                <div className="description">
                                    <p>{persona.name}</p>
                                    <p>{persona.description}</p>
                             
                        
                            </div>
                        </div>
                    ))
                }
                
            </div>
        ) 
    }
    render() {
      console.log(this.state.projectStatus)
        return(
            <div className="ui container">
                <h2 className="ui header">Select from the following menu</h2>
                <div className="ui four column doubling stackable grid container">
            
                    <div className="column">
                        <select value={this.state.projectStatus} onChange={this.handleToggle} className="ui dropdown">
                            <option value="">Project Status</option>
                            <option value="all">All</option>
                            <option value="BENCH">Bench</option>
                            <option value="ASSIGNED">Assigned</option>
                            <option value="HELD">Held</option>
                        </select>
                    </div>
                    <div className="column">
                        <select  className="ui dropdown">
                            <option value="">Skills</option>
                            <option value="2">Java</option>
                            <option value="1">Python</option>
                            <option value="0">Javast</option>
                        </select>
                        
                    </div>
        
                </div>
                <div className="grid">{this.renderList()}</div>
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

export default connect(mapStateToProps, {fetchEmployees, fetchPersonas})(Employees);