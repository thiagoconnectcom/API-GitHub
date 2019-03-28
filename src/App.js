import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Navbar from "../src/Components/Navbar";
import Profile from "../src/Components/Profile";
import Repo from "../src/Components/Repositorio";

class App extends Component {
  constructor() {
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "b94a8aa74f7dabd3492a",
        client_secret: "8cd4702c155be2f29bcc7c1e20684812cd897f71",
        count: 7,
        sort: "created: asc"
      },
      user: [],
      repos: []
    };
  }

  getUser = e => {
    const user = e.target.value;
    const { url, client_id, client_secret, count, sort } = this.state.github;
    axios
      .get(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ user: data }));

    axios
      .get(
        `${url}/${user}/repos?per_pages=${count}&sort=${sort}&client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ repos: data }));
  };

  renderProfile = () => {
    const { user, repos } = this.state;

    return (
      <div className="row">
        <div className="col-md-4">
          <Profile user={user} />
        </div>
        <div className="col-md-8">
          {repos.map(repo => (
            <Repo key={repo.name} repo={repo} />
          ))}
        </div>
      </div>
    );
  };

  render() {
    console.log(this.state.user);
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="card card-body">
            <h1>Pesquisar Usuários do GitHub</h1>
            <input
              className="search"
              onChange={this.getUser}
              placeholder="Pesquise por Usuário do GitHub"
              type="text"
            />
            <div classNmae="right">
              <i className="fa fa-search" />
            </div>
          </div>
          {this.state.user.length !== 0 ? this.renderProfile() : null}
        </div>
      </div>
    );
  }
}

export default App;
