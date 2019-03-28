import React, { Fragment } from "react";

const Repo = ({ repo }) => (
  <Fragment>
    <div className="card card-body">
      <div className="row">
        <div className="col-md-6">
          <a href="repo.html_url" target="_blank">
            {repo.name}
          </a>
        </div>
        <div className="col-md-6">
          <span class="badge badge-primary">
            Starts: {repo.stargazers_count}
          </span>
          <span class="badge badge-secondary">
            Watch: {repo.watchers_count}
          </span>
          <span class="badge badge-success">Forks: {repo.forks_count}</span>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Repo;
