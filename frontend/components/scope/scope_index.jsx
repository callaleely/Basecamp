import React from 'react';
import ScopeIndexItems from './scope_index_container';
import {Link} from 'react-router-dom';

class ScopeIndex extends React.Component {

    constructor(props) {
        super(props);
        this.scopes = this.props.fetchScopes();
    }

    render () {
        console.log(this.scopes)
        let companies = this.props.scopes.map(scope => (scope.category = 'company'));
        let newCompanies;
        let teams = this.props.scopes.map(scope =>(scope.category = 'team'));
        let newTeams;
        let projects = this.props.scopes.map(scope =>(scope.category = 'team'));
        let newProjects;
        if (!companies.length) {
            newCompanies = (
                <div>
                    there are no companies
                </div>
            );
        } else {
            newCompanies = companies.map(company => (
                <ScopeIndexItems
                    company = {company}
                    key = {company.id}/>
            ))
        };

        if (!teams.length) {
            newTeams = (
                <div>
                    there are no teams
                </div>
            );
        } else {
            newTeams = teams.map(team => (
                <ScopeIndexItems
                    team = {team}
                    key = {team.id}/>
            ))
        };

        if (!projects.length) {
            newProjects = (
                <div>
                    there are no projects
                </div>
            );
        } else {
            newProjects = projects.map(project => (
                <ScopeIndexItems
                    project = {project}
                    key = {project.id}/>
            ))
        };

        return (
            <div>
                <div className="top-navi">
                    Home
                </div>
                <div className="top-navi">
                    Company
                </div>
                <div className="top-navi">
                    Teams
                </div>
                <div className="top-navi">
                    Projects
                </div>
                <div>
                    <h2>Company</h2>
                    <ul>
                        <div>
                            {newCompanies}
                        </div>
                    </ul>
                </div>
                <div>
                    <h2>Teams</h2>
                    <div>
                        {newTeams}
                    </div>
                </div>
                <div>
                   <h2>Projects</h2>
                   <ul>
                       <div>
                           {newProjects}
                       </div>
                   </ul>
                </div>
            </div>
        )
    }
}

export default ScopeIndex; 