import React from 'react';
import EmployeeList from './EmployeeList';
import Header from './Header';

const App = () => {
    return(
        <div className="ui container">
             <Header/>
    
            <EmployeeList />
        </div>
       
       
    )
}

export default App;