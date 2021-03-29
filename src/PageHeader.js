import {Link} from "react-router-dom";
import React from "react";


export default class PageHeader extends React.Component {
    render() {
        return (
                <>
                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
        <Link className="navbar-brand accrescent-gradient"
              to="/">Accrescent</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">Search</a>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" href="/genrepage">Genres
                        <span className="sr-only">(current)</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/profilepage">Account</Link>
                </li>
                {/*<li className="nav-item">*/}
                {/*    <a className="nav-link" href="#">Contact</a>*/}
                {/*</li>*/}
            </ul>
        </div>
    </div>
</nav>

                </>
        );
    }
}