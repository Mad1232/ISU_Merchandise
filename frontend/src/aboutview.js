import React from 'react';

export function AboutView() {
    return (
        <div>
            <div>
                <div className="container py-4">

                    <div className='information'>
                        <div className=''>
                            <h1>Project</h1>
                            <h4  style={{ textDecoration: "none" }}>E-commerce Web Applicaition.<br />Date: June 29th, 2024 <br />Email: prak@iastate.edu</h4>
                            <a href="home"><button className="btn btn-primary btn-lg" type="button">Go To Home</button></a>
                        </div>

                        <div>
                            <div className="h-100 p-5 bg-text-body-tertiary">
                                <h1>Developer</h1>
                                <a href="https://ibb.co/Z81Z5B1"><img src="https://i.ibb.co/jMZpmyZ/IMG-3543.jpg" className="bd-placeholder-img rounded-circle float-end" width="140" height="140" alt="Student 1"></img></a>

                                <p>Name: Prakarsha Poudel<br />Classification: Junior <br />Major: Software Engineering<br />Email: prak@iastate.edu</p>
                                <a href="home"><button className="btn btn-outline-secondary" type="button">Go To Home</button></a>
                            </div>
                        </div>
                    </div>

                

                    <footer className="pt-3 mt-4 text-body-secondary border-top">
                        &copy; 2023
                    </footer>
                </div>
            </div>

            <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    );
}
