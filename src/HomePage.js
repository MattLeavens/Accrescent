import React from 'react';
import './App.css';
import './HomePage.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default class HomePage extends React.Component {
    render() {
        return (
            <>
                <div className="container">
            <header className="blog-header py-3">
                <div className="row flex-nowrap justify-content-between align-items-center">
                    <div className="col-4 pt-1">
                        <Link className="link-secondary" to="/article/create">Create an Article</Link>
                    </div>
                    <div className="col-4 text-center">
                        <Link className="blog-header-logo accrescentGradient" href="#">Accrescent</Link>
                    </div>
                    <div className="col-4 d-flex justify-content-end align-items-center">
                        <Link className="link-secondary" href="#" aria-label="Search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-3" role="img" viewBox="0 0 24 24"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"/><path d="M21 21l-5.2-5.2"/></svg>
                        </Link>
                        <Link className="btn btn-sm btn-outline-secondary" href="#">Sign up</Link>
                    </div>
                </div>
            </header>

            <div className="nav-scroller py-1 mb-2">
                <nav className="nav d-flex justify-content-between">
                    <Link className="p-2 link-secondary" to="/genrepage">Video Games</Link>
                    <Link className="p-2 link-secondary" to="/genrepage">Movies</Link>
                    <Link className="p-2 link-secondary" to="/genrepage">Tech </Link>
                    <Link className="p-2 link-secondary" to="/genrepage">Design</Link>
                    <Link className="p-2 link-secondary" to="/genrepage">Culture</Link>
                    <Link className="p-2 link-secondary" to="/genrepage">See List</Link>
                </nav>
            </div>
        </div>

        <main className="container">
            <div className="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic multiColorText"> The Modding Space </h1>
                    <p className="lead my-3">A short journey into the ever expanding world of Modding. How it began, grew and will forever be available.</p>
                    <p className="lead mb-0"><Link to="/articlepage" className="text-white fw-bold">Continue reading...</Link></p>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary">Design</strong>
                            <h3 className="mb-0">Featured post</h3>
                            <div className="mb-1 text-muted">Nov 12</div>
                            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/articlepage" className="stretched-link">Continue reading</Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <svg className="bdPlaceholderImg" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-success">Design</strong>
                            <h3 className="mb-0">Post title</h3>
                            <div className="mb-1 text-muted">Nov 11</div>
                            <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/articlepage" className="stretched-link">Continue reading</Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <svg className="bdPlaceholderImg" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <h3 className="pb-4 mb-4 font-italic border-bottom">
                        From the Firehose
                    </h3>

                    <article className="blog-post">
                        <h2 className="blog-post-title">Sample blog post</h2>
                        <p className="blog-post-meta">January 1, 2014 by <Link href="#">Mark</Link></p>

                        <p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, images, and code are all supported.</p>
                        <hr/>
                            <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                            <blockquote>
                                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                            </blockquote>
                            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                            <h2>Heading</h2>
                            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <h3>Sub-heading</h3>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            <pre><code>Example code block</code></pre>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa.</p>
                            <h3>Sub-heading</h3>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <ul>
                                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                                <li>Donec id elit non mi porta gravida at eget metus.</li>
                                <li>Nulla vitae elit libero, a pharetra augue.</li>
                            </ul>
                            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                            <ol>
                                <li>Vestibulum id ligula porta felis euismod semper.</li>
                                <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li>
                                <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                            </ol>
                            <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.</p>
                    </article>

                    {/*BLog post*/}

                    <article className="blog-post">
                        <h2 className="blog-post-title">Another blog post</h2>
                        <p className="blog-post-meta">December 23, 2013 by <a href="#">Jacob</a></p>

                        <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
                        <blockquote>
                            <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        </blockquote>
                        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    </article>

                    <article className="blog-post">
                        <h2 className="blog-post-title">New feature</h2>
                        <p className="blog-post-meta">December 14, 2013 by <a href="#">Chris</a></p>

                        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <ul>
                            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                            <li>Donec id elit non mi porta gravida at eget metus.</li>
                            <li>Nulla vitae elit libero, a pharetra augue.</li>
                        </ul>
                        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.</p>
                    </article>

                    <nav className="blog-pagination" aria-label="Pagination">
                        <Link className="btn btn-outline-primary" href="#">Older</Link>
                        <Link className="btn btn-outline-secondary disabled" href="#" tabIndex="-1" aria-disabled="true">Newer</Link>
                    </nav>

                </div>

                <div className="col-md-4">
                    <div className="p-4 mb-3 bg-light rounded">
                        <h4 className="font-italic">About</h4>
                        <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                    </div>

                    <div className="p-4">
                        <h4 className="font-italic">Archives</h4>
                        <ol className="list-unstyled mb-0">
                            <li><Link href="#">March 2014</Link></li>
                            <li><Link href="#">February 2014</Link></li>
                            <li><Link href="#">January 2014</Link></li>
                            <li><Link href="#">December 2013</Link></li>
                            <li><Link href="#">November 2013</Link></li>
                            <li><Link href="#">October 2013</Link></li>
                            <li><Link href="#">September 2013</Link></li>
                            <li><Link href="#">August 2013</Link></li>
                            <li><Link href="#">July 2013</Link></li>
                            <li><Link href="#">June 2013</Link></li>
                            <li><Link href="#">May 2013</Link></li>
                            <li><Link href="#">April 2013</Link></li>
                        </ol>
                    </div>

                    <div className="p-4">
                        <h4 className="font-italic">Elsewhere</h4>
                        <ol className="list-unstyled">
                            <li><Link href="#">GitHub</Link></li>
                            <li><Link href="#">Twitter</Link></li>
                            <li><Link href="#">Facebook</Link></li>
                        </ol>
                    </div>
                </div>

            </div>

        </main>


        <footer className="blog-footer">
            <p>Blog template built for <a href="https://getbootstrap.com/">Bootstrap</a> by <a href="https://twitter.com/mdo">@mdo</a>.</p>
            <p>
                <Link href="#">Back to top</Link>
            </p>
        </footer>
        </>

        );
    }
}
