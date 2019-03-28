import React, { Fragment } from "react";
import "./style.css";

const Profile = ({ user }) => (
  <Fragment>
    <div className="row">
      <div className="col-md-4">
        <div className="card width">
          <img className="card-img-top" src={user.avatar_url} />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Repositórios:
              <span className="badge badge-success"> {user.public_repos}</span>
            </li>
            <li className="list-group-item">
              Seguidores:
              <span className="badge badge-primary"> {user.followers}</span>
            </li>
            <li className="list-group-item">
              Seguindo:
              <span className="badge badge-info"> {user.following}</span>
            </li>
          </ul>
          <div className="card-body">
            <a href={user.html_url} className="btn btn-success btn-block">
              Ver Perfil
            </a>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default Profile;
