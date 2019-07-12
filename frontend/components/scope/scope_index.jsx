import React from 'react';
import ScopeIndexItems from './scope_index_item';
import {Link} from 'react-router-dom';

class ScopeIndex extends React.Component {

    constructor(props) {
        super(props);
        // this.scopes = this.props.fetchScopes();
    }

    componentDidMount () {
        this.props.fetchScopes();
    }

    render () {
        if (this.props.scopes.length === 0) return null
        let companies = this.props.scopes.filter(scope => (scope.category === 'company'));
        let newCompanies;
        let teams = this.props.scopes.filter(scope => (scope.category === 'team'));
        let newTeams;
        let projects = this.props.scopes.filter(scope => (scope.category === 'project'));
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
                    scope = {company}
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
                    scope = {team}
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
                    scope = {project}
                    key = {project.id}/>
            ))
        };

        return (
            <div className="scope-index">
                <div className="main-top-nav">
                    <div>
                        <Link to="/scopes">
                        <img className="nav-logo" src="https://help.basecamp.com/images/logo-bc.png"/>
                        </Link>
                    </div>
                    <div className="top-nav-div">
                        <div className="top-navi">
                            <Link to="/scopes">Home</Link>
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
                    </div>
                </div>
                <div className="scopes">
                    <div className="each-scope">
                        <Link to='/scopes/new'>+NEW</Link>
                        <div className="flex-items">
                        <h2 className="index-header">
                            <span>Company</span>
                        </h2>
                        </div>
                        <div className="flex-items">
                            <ul>
                                <div className="flex-adjust">
                                    {newCompanies}
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="each-scope">
                        <div className="flex-items">
                        <h2 className="index-header">Teams</h2>
                        </div>
                        <div className="flex-items">
                            <ul>
                                <div className="flex-adjust">
                                    {newTeams}
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="each-scope">
                    <div className="flex-items">
                    <h2 className="index-header">Projects</h2>
                    </div>
                        <div className="flex-items">
                            <ul>
                                <div className="flex-adjust">
                                    {newProjects}
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScopeIndex; 