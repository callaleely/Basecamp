import React from 'react';
import ScopeIndexItems from './scope_index_item';
import {Link} from 'react-router-dom';
import Modal from '../modal/modal';
import NavBarContainer from '../nav_bar/nav_bar_container'

class ScopeIndex extends React.Component {

    constructor(props) {
        super(props);
        // this.scopes = this.props.fetchScopes();
        this.logout = this.props.logout.bind(currentUser);
        this.handleSave = this.handleSave.bind(this);
        this.createCompany = this.createCompany.bind(this);
        this.createTeam = this.createTeam.bind(this);
        this.createProject = this.createProject.bind(this);
    }

    componentDidMount () {
        this.props.fetchScopes();
    }

    handleSave(e) {
        e.preventDefault();
        this.props.openModal('scopeForm')
    }

    createCompany() {
        this.props.openModal('companyForm')
    }

    createTeam() {
        this.props.openModal('teamForm')
    }

    createProject() {
        this.props.openModal('projectForm')
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
                <NavBarContainer />
                <div className="scopes">
                    <div className="each-scope">
                        <button className="new-button" onClick={this.createCompany}>+NEW
                        </button>
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
                    <button className="new-button" onClick={this.createTeam}>+NEW
                        </button>
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
                    <button className="new-button" onClick={this.createProject}>+NEW
                        </button>
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