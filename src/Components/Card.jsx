import React from "react"

export default function Card() {
    return (
        <div className="card">
            <div className="name-div">
                <h3 className="name">Baran Bingöl</h3>
                <h4 className="title">Machine Learning Engineer</h4>
                <a href="https://baranbingol1.github.io/" className="blog-link" target="_blank" rel="noreferrer"><small>Check out my blog!</small></a>
                <div className="social-links">
                    <a href="https://github.com/baranbingol1" target="_blank" rel="noreferrer">
                        <img src="/github.svg" alt="GitHub link" class="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/baran-b-0a43a0252/" target="_blank" rel="noreferrer">
                        <img src="/linkedin.svg" alt="LinkedIn link" class="social-icon" />
                    </a>
                </div>
            </div>

            <div className="about">
                <h4>About</h4>
                <p>Artificial Intelligence and Data Engineering student in Ankara University. Interested in training Deep Learning models.</p>
            </div>
            <div className="interests">
                <h4>Interests</h4>
                <p className="interest-data-science">Data Science</p>
                <p className="interest-programming">Programming</p>
                <p className="interest-chess">
                    <a href="https://www.chess.com/member/baradonaisback" target="_blank" rel="noreferrer" className="chess-link">Chess</a>
                </p>
                <p className="interest-traveling">Traveling</p>
            </div>
        </div>
    )
}
