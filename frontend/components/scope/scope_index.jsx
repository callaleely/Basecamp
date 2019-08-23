import React from 'react';
import ScopeIndexItems from './scope_index_item';
import {Link} from 'react-router-dom';
import Modal from '../modal/modal';
import NavBarContainer from '../nav_bar/nav_bar_container'
import ScopeFormContainer from './scope_form_container';

class ScopeIndex extends React.Component {

    constructor(props) {
        super(props);
        // this.scopes = this.props.fetchScopes();
        this.logout = this.props.logout.bind(currentUser);
        this.handleSave = this.handleSave.bind(this);
        this.createCompany = this.createCompany.bind(this);
        this.createTeam = this.createTeam.bind(this);
        this.createProject = this.createProject.bind(this);
        this.state = {companyFormOpen: false};
        this.state = {teamFormOpen: false};
        this.state = {projectFormOpen: false};
        this.cancelCompany = this.cancelCompany.bind(this);
        this.cancelTeam = this.cancelTeam.bind(this);
        this.cancelProject = this.cancelProject.bind(this);
    }

    componentDidMount () {
        this.props.fetchScopes();
    }

    handleSave(e) {
        e.preventDefault();
        this.props.openModal('scopeForm')
    }

    createCompany() {
        this.setState({companyFormOpen: !this.state.companyFormOpen,
        teamFormOpen: false,
        projectFormOpen: false})
    }

    createTeam() {
        this.setState({teamFormOpen: !this.state.teamFormOpen,
        companyFormOpen: false,
        projectFormOpen: false})
    }

    createProject() {
        this.setState({projectFormOpen: !this.state.projectFormOpen,
        companyFormOpen: false,
        teamFormOpen: false})
    }

    cancelClick(e) {
        e.stopPropagation()
    }

    cancelCompany() {
        this.setState({companyFormOpen: false})
    }

    cancelTeam() {
        this.setState({teamFormOpen: false})
    }

    cancelProject() {
        this.setState({projectFormOpen: false})
    }

    render () {
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
                    key = {company.id}
                    deleteScope={this.props.deleteScope}/>
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
                key = {team.id}
                deleteScope={this.props.deleteScope}/>
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
                key = {project.id}
                deleteScope={this.props.deleteScope}/>
            ))
        };
        return (
            <div className="scope-index">
                <NavBarContainer />
                <div className="scopes">
                    <div className="each-scope">
                        <div className="new-button" onClick={this.createCompany}>+NEW
                            {this.state.companyFormOpen ? <div onClick={(e) => this.cancelClick(e)}><ScopeFormContainer
                            category={"company"}
                            cancel={this.cancelCompany}/>
                            </div> : <div onClick={(e) => this.cancelClick(e)}></div>}
                        </div>
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
                    <div className="new-button" onClick={this.createTeam}>+NEW
                    {this.state.teamFormOpen ? <div onClick={(e) => this.cancelClick(e)}><ScopeFormContainer
                            category={"team"}
                            cancel={this.cancelTeam}/>
                            </div> : <div onClick={(e) => this.cancelClick(e)}></div>}
                        </div>
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
                    <div className="new-button" onClick={this.createProject}>+NEW
                    {this.state.projectFormOpen ? <div onClick={(e) => this.cancelClick(e)}><ScopeFormContainer
                            category={"project"}
                            cancel={this.cancelProject}/>
                            </div> : <div onClick={(e) => this.cancelClick(e)}></div>}
                        </div>
                    <div className="flex-items">
                    <h2 className="index-header">Projects</h2>
                    </div>
                            <ul>
                                <div className="flex-adjust">
                                    {newProjects}
                                </div>
                            </ul>

                    </div>
                </div>
            </div>
        )
    }
}

export default ScopeIndex; 