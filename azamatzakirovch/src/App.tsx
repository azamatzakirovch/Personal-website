import './App.css';
import azamatzakirovch from "./../public/azamatzakirovch.jpg"
import instagram from "./../public/instagram.png"
import linkedin from "./../public/linkedin.png"

import youtube from "./../public/youtube.png"
import github from "./../public/github.png"
import linearAlgebra from "./../public/science.png"
import Probability from "./../public/curve.png"

import calc from "./../public/calculus.png"
import py from "./../public/python.png"
import html from "./../public/html.png"
import css from "./../public/css.png"

import react from "./../public/react.png"
import vite from "./../public/vite.svg"
import c from "./../public/c.png"
import cplus from "./../public/cpp.png"

import java from "./../public/java.png"
import js from "./../public/js.png"
import analytics from "./../public/metrics.png"
import LinearAlgebra from "./root-of-other-pages/information-about-skills/LinearAlgebra/LinearAlgebra.tsx"

import C from "./root-of-other-pages/information-about-skills/C/C.tsx"
import CPP from "./root-of-other-pages/information-about-skills/CPP/CPP.tsx"
import HTML from "./root-of-other-pages/information-about-skills/HTML/HTML.tsx"
import CSS from "./root-of-other-pages/information-about-skills/CSS/CSS.tsx"

import REACT from "./root-of-other-pages/information-about-skills/React/React.tsx"
import PYTHON from "./root-of-other-pages/information-about-skills/Python/Python.tsx"
import DATA from "./root-of-other-pages/information-about-skills/DataAnalytics/DataAnalytics.tsx"
import PROBABILITY from "./root-of-other-pages/information-about-skills/Probability-and-Statistics/Probability-and-Statistics.tsx"

import JS from "./root-of-other-pages/information-about-skills/Js/Js.tsx"
import JAVA from "./root-of-other-pages/information-about-skills/Java/Java.tsx"
import VITE from "./root-of-other-pages/information-about-skills/Vite/Vite.jsx"

import CALCULUS from "./root-of-other-pages/information-about-skills/Calculus/Calculus.tsx"
import {
    PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from 'recharts';
import {useState} from "react";
// import { useNavigate } from 'react-router-dom';
const data = [
    { name: 'Easy', value: 33 },
    { name: 'Middle', value: 37 },
    { name: 'Hard', value: 2 },
];
const COLORS = ['#0c8500', '#FFD93D', '#ff0000', '#1A535C'];





function App() {
    const [open_page, set_page] = useState<string | null>(null);
    const case_function_for_skills = () => {
        switch (open_page) {
            case "LinearAlgebra": return <LinearAlgebra />;
            case "C": return <C />;
            case "CPP": return <CPP />;
            case "HTML": return <HTML />;
            case "CSS": return <CSS />;
            case "REACT": return <REACT />;
            case "PYTHON": return <PYTHON />;
            case "DATA": return <DATA />;
            case "PROBABILITY": return <PROBABILITY />;
            case "JS": return <JS />;
            case "JAVA": return <JAVA />;
            case "VITE": return <VITE />;
            case "CALCULUS": return <CALCULUS />;
            default:
                return <div style={{ color: "white", padding: "20px" }}>Please select a skill from the icons above.</div>;
        }
    }

    return (
        <>
            <div className="navbar-border">
                <div className="txt-settings-of-navbar">About</div>
                <div className="txt-settings-of-navbar" style={{left: "70px"}}>Job</div>
                <div className="txt-settings-of-navbar" style={{left: "117px"}}>Future Goals</div>
                <div className="txt-settings-of-navbar" style={{left: "245px"}}>Connection</div>
                <div className="border-of-photo-for-navbar">
                    <img className="photo-for-navbar" src={azamatzakirovch} alt="navbar photo"/>
                </div>
            </div>

            <div className="top">
                <div className="border-of-photo-for-top">
                    <img className="photo-for-top" src={azamatzakirovch} alt="avatar"/>
                </div>
                <div className="border-of-name-for-top">
                    <div style={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        left: "5px",
                        fontFamily: "Arial",
                        textDecoration: "none",
                        fontSize: "40px",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: "#ffffff",
                    }}>
                        Azamat Zakirovch
                    </div>
                </div>
                <div className="border-of-social-media-icons-for-top">
                    <div className="social-media-icons-styles" style={{left: "5px"}}>
                        <a href="https://www.instagram.com/azamatzakirovch/" target="_blank" rel="noopener noreferrer">
                            <img className="social-media-icons-styles" src={instagram} alt="instagram"/>
                        </a>
                    </div>

                    <div className="social-media-icons-styles" style={{left: "30px", width: "58%", height: "auto"}}>
                        <a href="https://www.linkedin.com/in/azamatzakirovch" target="_blank" rel="noopener noreferrer">
                            <img className="social-media-icons-styles" src={linkedin} alt="linkedin"/>
                        </a>
                    </div>

                    <div className="social-media-icons-styles" style={{left: "65px", width: "50%", height: "auto"}}>
                        <a href="https://www.youtube.com/@azamatzakirovch" target="_blank" rel="noopener noreferrer">
                            <img className="social-media-icons-styles" src={youtube} alt="youtube"/>
                        </a>
                    </div>

                    <div className="social-media-icons-styles" style={{left: "100px"}}>
                        <a href="https://github.com/azamatzakirovch" target="_blank" rel="noopener noreferrer">
                            <img className="social-media-icons-styles" src={github} alt="github"/>
                        </a>
                    </div>
                </div>

                <div className="border-of-social-media-links-for-top">
                    <div style={{
                        position: "absolute",
                        top: "50%",
                        transform: "translateY(-50%)",
                        left: "9px",
                        fontFamily: "Arial",
                        textDecoration: "none",
                        fontSize: "20px",
                        color: "#474747",
                    }}>
                        @azamatzakirovch
                    </div>
                </div>

                <div className="bio">
                    <div className="quote-box">
                        <p className="quote-text">
                            "A guy who wants to learn everything. A guy who wants to build everything from scratch."
                        </p>
                        <span className="quote-author">— Azamat Zakirovch</span>
                    </div>
                </div>

            </div>


            <div className="skills-icon-container">
                <div className="border-of-icons" style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                }} onClick={() => set_page('LinearAlgebra')}>
                    <div className="icon-settings">
                        <img src={linearAlgebra} className="icon-settings" style={{
                            position: "absolute",
                            bottom: "-10px"
                        }} alt="linear algebra"/>
                        <div className="name">
                            <div className="text-settings-of-skills">Linear Algebra</div>
                        </div>
                    </div>
                </div>


                <div className="border-of-icons" style={{
                    position: "absolute",
                    top: "20px",
                    left: "160px",
                }} onClick={() => set_page('PROBABILITY')}>
                    <div className="icon-settings">
                        <img src={Probability} className="icon-settings" alt={"probability"} />
                        <div className="name">
                            <div className="text-settings-of-skills">Probability and Statistics</div>

                        </div>
                    </div>
                </div>

                <div className="border-of-icons" style={{
                    position: "absolute",
                    top: "20px",
                    left: "300px",
                }} onClick={() => set_page('CALCULUS')}>
                    <div className="icon-settings">
                        <img src={calc} className="icon-settings" alt={"calc"} />
                        <div className="name">
                            <div className="text-settings-of-skills" style={{
                                position: "absolute",
                                left: "85px",
                            }}>Calculus
                            </div>

                        </div>
                    </div>
                </div>

                <div className="border-of-icons" style={{
                    position: "absolute",
                    top: "20px",
                    left: "440px",
                }} onClick={() => set_page('PYTHON')}>
                    <div className="icon-settings">
                        <img src={py} className="icon-settings" alt={"py"} />
                        <div className="name">
                            <div className="text-settings-of-skills" style={{
                                position: "absolute",
                                left: "85px",
                            }}>Python
                            </div>
                        </div>
                    </div>
                </div>


                <div className="border-of-icons" style={{
                    position: "absolute",
                    top: "200px",
                    left: "20px",
                }} onClick={() => set_page('HTML')}>
                    <div className="icon-settings">
                        <img src={html} className="icon-settings" style={{
                            position: "absolute",
                            bottom: "-10px"
                        }} alt="html"/>
                        <div className="name">
                            <div className="text-settings-of-skills" style={
                                {
                                    position: "absolute",
                                    left: "95px",
                                }
                            }>HTML
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-of-icons" style={{
                    position: "absolute",
                    top: "200px",
                    left: "160px",
                }} onClick={() => set_page('CSS')}>
                    <div className="icon-settings">
                        <img src={css} className="icon-settings" alt={"css"} />
                        <div className="name">
                            <div className="text-settings-of-skills" style={
                                {
                                    position: "absolute",
                                    left: "100px",
                                }
                            }>CSS
                            </div>

                        </div>
                    </div>
                </div>

                <div className="border-of-icons" style={{
                    position: "absolute",
                    top: "200px",
                    left: "300px",
                }} onClick={() => set_page('REACT')}>
                    <div className="icon-settings">
                        <img src={react} className="icon-settings" alt={"react"} />
                        <div className="name">
                            <div className="text-settings-of-skills" style={
                                {
                                    position: "absolute",
                                    left: "90px",
                                }
                            }>React
                            </div>

                        </div>
                    </div>
                </div>

                <div className="border-of-icons" style={{
                    position: "absolute",
                    top: "200px",
                    left: "440px",
                }} onClick={() => set_page('VITE')}>
                    <div className="icon-settings">
                        <img src={vite} className="icon-settings" alt={"vite"} />
                        <div className="name">
                            <div className="text-settings-of-skills" style={{
                                position: "absolute",
                                left: "99px",
                            }}>Vite
                            </div>
                        </div>
                    </div>
                </div>


                <div className="border-of-icons" style={{
                    position: "absolute",
                    top: "380px",
                    left: "20px",
                }} onClick={() => set_page('C')}>
                    <div className="icon-settings">
                        <img src={c} className="icon-settings" style={{
                            position: "absolute",
                            bottom: "-10px"
                        }} alt="c"/>
                        <div className="name">
                            <div className="text-settings-of-skills" style={
                                {
                                    position: "absolute",
                                    left: "105px",
                                }
                            }>C
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-of-icons" style={{
                    position: "absolute",
                    top: "380px",
                    left: "160px",
                }} onClick={() => set_page('CPP')}>
                    <div className="icon-settings">
                        <img src={cplus} className="icon-settings" alt={"cplus"} />
                        <div className="name">
                            <div className="text-settings-of-skills" style={
                                {
                                    position: "absolute",
                                    left: "100px",
                                }
                            }>C++
                            </div>

                        </div>
                    </div>
                </div>

                <div className="border-of-icons" style={{
                    position: "absolute",
                    top: "380px",
                    left: "300px",
                }} onClick={() => set_page('JAVA')}>
                    <div className="icon-settings">
                        <img src={java} className="icon-settings" alt={"java"} />
                        <div className="name">
                            <div className="text-settings-of-skills" style={
                                {
                                    position: "absolute",
                                    left: "95px",
                                }
                            }>Java
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-of-icons" style={{
                    position: "absolute",
                    top: "380px",
                    left: "440px",
                }} onClick={() => set_page('JS')}>
                    <div className="icon-settings">
                        <img src={js} className="icon-settings" alt={"js"} />
                        <div className="name">
                            <div className="text-settings-of-skills" style={{
                                position: "absolute",
                                left: "75px",
                            }}>JavaScript
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-of-icons" style={{
                    position: "absolute",
                    top: "560px",
                    left: "300px",
                }} onClick={() => set_page('DATA')}>
                    <div className="icon-settings">
                        <img src={analytics} className="icon-settings" alt={"analytics"} />
                        <div className="name">
                            <div className="text-settings-of-skills" style={{
                                position: "absolute",
                                left: "55px",
                            }}>Data Analytics
                            </div>
                        </div>
                    </div>
                </div>

                <div className="donut-chart-wrapper">
                    <div style={{
                        position: 'absolute',
                        top: "130px",
                        left: "180px",
                        textAlign: "center",
                        fontSize: '40px',
                        color: 'white',
                    }}>72
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius={50}
                                outerRadius={60}
                                fill="#8884d8"
                                paddingAngle={2}
                                strokeWidth={0}
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${entry}`} fill={COLORS[index % COLORS.length]}/>
                                ))}
                            </Pie>
                            <Tooltip/>
                        </PieChart>
                    </ResponsiveContainer>
                </div>


                <div
                    style={{
                        position: 'absolute',
                        left: "130px",
                        bottom: "-11px",
                        fontSize: '20px',
                        fontWeight: 'bold',
                        // cursor: "pointer",
                        fontFamily: "Arial",
                        color: "white"
                    }}
                >
                    leetcode
                </div>

            </div>

            <div className="right">
                {case_function_for_skills()}
            </div>

        </>
    );
}

export default App;