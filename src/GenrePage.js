import React from 'react';
import './App.css';
import './GenrePage.css';
import PageHeader from "./PageHeader";

export default class GenrePage extends React.Component {
    render() {
        return (
            <>

                <PageHeader/>

                {/*Page Content*/}
                <div className="container">

                    <div className="row">

                        {/*Title & Info*/}
                        <div className="col-lg-12">
                            {/*Title*/}
                            <h1 className="mt-4">Genre Name</h1>

                            {/*Date Joined / Posts Created*/}
                            <p>Joined on January 1, 2019 &emsp; 69 Posts</p>

                            <hr/>

                        </div>

                        {/*Posts' Content Column - Img, Bio, Articles*/}
                        <div className="col-lg-9">

                                {/*Profile Image*/}
                                <img className="img-fluid rounded" src="http://placehold.it/900x300" alt=""/>

                                    <p/>

                                    {/*Author Bio*/}
                                    <p className="lead">Genre Bio about interests, life, and whatever the author wants.
                                        more about the genre more about the genre more about the genre </p>


                                    {/*Article Place Holder*/}
                                    <div className="row mb-2 top-buffer">
                                        <div className="col-md-12">
                                            <div
                                                className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                                <div className="col p-4 d-flex flex-column position-static">
                                                    <strong className="d-inline-block mb-2 text-primary">Design</strong>
                                                    <h3 className="mb-0">Featured post</h3>
                                                    <div className="mb-1 text-muted">Nov 12</div>
                                                    <p className="card-text mb-auto">This is a wider card with
                                                        supporting text below as a natural lead-in to additional
                                                        content.</p>
                                                    <a href="file:///C:/Users/Matt/Documents/GitHub/Accrescent/blog_post/blog_post.html"
                                                       className="stretched-link">Continue reading</a>
                                                </div>

                                                <div className="col-auto d-none d-lg-block">
                                                    <svg className="bd-placeholder-img" width="200" height="250"
                                                         xmlns="http://www.w3.org/2000/svg" role="img"
                                                         aria-label="Placeholder: Thumbnail"
                                                         preserveAspectRatio="xMidYMid slice" focusable="false">
                                                        <title>Placeholder</title>
                                                        <rect width="100%" height="100%" fill="#55595c"/>
                                                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/*Article Place Holder*/}
                                    <div className="row mb-2">
                                        <div className="col-md-12">
                                            <div
                                                className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                                <div className="col p-4 d-flex flex-column position-static">
                                                    <strong className="d-inline-block mb-2 text-primary">Design</strong>
                                                    <h3 className="mb-0">Featured post</h3>
                                                    <div className="mb-1 text-muted">Nov 12</div>
                                                    <p className="card-text mb-auto">This is a wider card with
                                                        supporting text below as a natural lead-in to additional
                                                        content.</p>
                                                    <a href="file:///C:/Users/Matt/Documents/GitHub/Accrescent/blog_post/blog_post.html"
                                                       className="stretched-link">Continue reading</a>
                                                </div>

                                                <div className="col-auto d-none d-lg-block">
                                                    <svg className="bd-placeholder-img" width="200" height="250"
                                                         xmlns="http://www.w3.org/2000/svg" role="img"
                                                         aria-label="Placeholder: Thumbnail"
                                                         preserveAspectRatio="xMidYMid slice" focusable="false">
                                                        <title>Placeholder</title>
                                                        <rect width="100%" height="100%" fill="#55595c"/>
                                                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                        </div>
                        {/*Side Bar*/}
                        <div className="col-lg-3 reduce-top-buffer">
                            {/*Sidebar Widgets Column*/}


                                {/*Search Widget*/}
                                <div className="card my-4">
                                    <h5 className="card-header">Search</h5>
                                    <div className="card-body">
                                        <div className="input-group">
                                            <input type="text" className="form-control"
                                                   placeholder="Search for..."/>
                                            <span className="input-group-append">
                                                                        <button className="btn btn-secondary" type="button">Go!</button>
                                                                    </span>
                                        </div>
                                    </div>
                                </div>

                                {/*Categories Widget*/}
                                <div className="card my-4">
                                    <h5 className="card-header">Categories</h5>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <a href="#">Video Games</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Movies</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Tech</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6">
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                        <a href="#">Design</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Culture</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Fashion</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*Side Widget*/}
                                <div className="card my-4">
                                    <h5 className="card-header">Side Widget</h5>
                                    <div className="card-body">
                                        You can put anything you want inside of these side
                                        widgets. They are easy to use, and feature the new
                                        Bootstrap 4 card containers! I am still unsure what to
                                        do with this.
                                    </div>
                                </div>
                        </div>

                    </div>
                </div>

                    {/*Footer*/}
                    <footer className="py-5 bg-dark">
                        <div className="container">
                            <p className="m-0 text-center text-white">Copyright &copy; Your Website 2020</p>
                        </div>
                    </footer>

                </>

        );
    }
}