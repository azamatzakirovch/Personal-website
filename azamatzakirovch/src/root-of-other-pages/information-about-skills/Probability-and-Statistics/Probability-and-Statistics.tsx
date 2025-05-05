import './Probability-and-Statistics.css';

import sarvartohirov from "./../../../../public/FarxodEshmatov.jpg"
import network from "./../../../../public/OttoBretscher.jpg"
import chatGpt from "./../../../../public/science.png"

export default function LinearAlgebra() {
    return (
        <>
            <div style={{
                position: 'absolute',
                top: "15px",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "22px",
                fontWeight: "bold",
                color: "#ffffff",
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            }}>📐 My Journey in Linear Algebra
            </div>

            <div
                style={{
                    position: "absolute",
                    top: "50px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "980px",
                    fontSize: "18px",
                    color: "#ffffff",
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    textAlign: "justify"
                }}>
                In 2024, I began my journey into Linear Algebra — a subject that would become a cornerstone of my understanding in computer science, machine learning, and data science.
            </div>

            <img src={sarvartohirov} className="Sarvar-Tohirov" alt={"FirstProf"}/>

            <div
                style={{
                    position: "absolute",
                    top: "200px",
                    left: "325px",
                    width: "980px",
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#ffffff",
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    textAlign: "justify"
                }}>
                👨‍🏫 My Professor Who Guided Me
            </div>

            <div
                style={{
                    position: "absolute",
                    top: "235px",
                    left: "327px",
                    width: "700px",
                    fontSize: "22px",
                    color: "#ffffff",
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    textAlign: "justify"
                }}>
                Dr. Farxod Eshmatov played an instrumental role in guiding me through the intricacies of Linear Algebra. His ability to break down complex concepts into easily digestible pieces allowed me to approach difficult topics like vector spaces, determinants, eigenvalues, and orthogonality with confidence. Dr. Eshmatov used practical, real-world examples that showed how Linear Algebra is deeply integrated into fields such as computer graphics, machine learning, and cryptography. His passion for teaching and his clear, engaging explanations inspired me to explore more advanced topics, making Linear Algebra an essential and exciting part of my academic journey.
            </div>

            <div style={{
                position: 'absolute',
                top: "440px",
                left: "180px",
                transform: "translateX(-50%)",
                fontSize: "27px",
                fontWeight: "bold",
                color: "#ffffff",
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            }}>DR Farxod Eshmatov
            </div>

            <div style={{
                position: 'absolute',
                top: "470px",
                left: "180px",
                transform: "translateX(-50%)",
                fontSize: "15px",
                fontWeight: "bold",
                color: "#8a8a8a",
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            }}>Senior Lecturer at NewUU
            </div>

            <img
                src={network}
                style={{
                    position: "absolute",
                    top: "580px",
                    right: "60px",
                    width: "240px",
                    height: "auto",
                    cursor: "pointer",
                    borderRadius: "20%",
                    backgroundColor: "#ffffff",
                }} alt = ""/>

            <div
                style={{
                    position: "absolute",
                    top: "605px",
                    right: "-290px",
                    width: "980px",
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#ffffff",
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    textAlign: "justify"
                }}>
                📘 The Influence of Otto Bratscher
            </div>

            <div
                style={{
                    position: "absolute",
                    top: "640px",
                    right: "327px",
                    width: "700px",
                    fontSize: "22px",
                    color: "#ffffff",
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    textAlign: "justify"
                }}>
                Otto Bratscher's Linear Algebra book is one of the key resources that shaped my deep
                understanding of the subject. His approach to the theory of linear equations, vector
                spaces, and matrices helped build a solid theoretical foundation that bridged the gap
                between abstract mathematical concepts and their real-world applications. Bratscher's
                detailed examples, particularly in solving systems of linear equations and eigenvalue
                problems, reinforced the relevance of Linear Algebra in fields like data science, cryptography,
                and signal processing. The clarity with which Bratscher explains the concepts allows one to not
                only solve problems but also understand the underlying principles that drive computational techniques
                in modern technology.
            </div>


            <img
                src={chatGpt}
                style={{
                    position: "absolute",
                    top: "1000px",
                    left: "60px",
                    width: "240px",
                    height: "240px",
                    cursor: "pointer",
                    // borderRadius: "50%",
                }} alt = ""/>

            <div
                style={{
                    position: "absolute",
                    top: "955px",
                    left: "325px",
                    width: "980px",
                    fontSize: "22px",
                    fontWeight: "bold",
                    color: "#ffffff",
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    textAlign: "justify"
                }}>
                Why Linear Algebra Matters in Computer Science
            </div>

            <div
                style={{
                    position: "absolute",
                    top: "985px",
                    left: "327px",
                    width: "700px",
                    fontSize: "22px",
                    color: "#ffffff",
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    textAlign: "justify"
                }}>
                Linear Algebra is the backbone of many computer science applications. It powers 3D graphics and image processing by providing the mathematical framework for transformations like rotations, scaling, and translations in graphical environments. In machine learning, Linear Algebra is fundamental for algorithms that rely on matrix operations for data processing, such as neural networks, optimization problems, and dimensionality reduction techniques like PCA. In AI, it supports data transformations and matrix operations for tasks such as natural language processing, computer vision, and recommendation systems. Furthermore, Linear Algebra helps in solving complex systems of equations, which is essential in simulations, control systems, and numerical analysis.
            </div>

            <div
                style={{
                    position: "absolute",
                    top: "1100px",
                    left: "327px",
                    width: "700px",
                    fontSize: "22px",
                    color: "#0d1117",
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                    textAlign: "justify"
                }}>
                When I started coding, Google became my most powerful weapon. Every bug, every error message,
            </div>
        </>
    );
}

