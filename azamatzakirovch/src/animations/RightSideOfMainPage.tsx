import { useEffect, useRef, useState } from "react";
import "./RightSideOfMainPage.css";
import azamatzakirovch from "./../../public/azamatzakirovch.jpg";

const RightSideOfMainPage = () => {
    const [activePage, setActivePage] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const pageHeight = container.clientHeight;
            const currentPage = Math.round(container.scrollTop / pageHeight);
            setActivePage(currentPage);
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    const pageContent = [
        <div className="page-content">
            <div>
            </div> 
        </div>
        ,
        <div className="page-content">
            <h1>🚀 Welcome to Page 2</h1>
            <p>Talk about your goals, dreams, and passions here!</p>
            <img src={azamatzakirovch} alt="Azamat Zakirovch" />
        </div>,
        <div className="page-content">
            <h1>🔥 Page 3: Skills and Projects</h1>
            <p>Show off what you've built and learned!</p>
            <img src={azamatzakirovch} alt="Azamat Zakirovch" />
        </div>,
    ];

    return (
        <div ref={containerRef} className="right">
            {pageContent.map((content, index) => (
                <div
                    key={index}
                    className={`section ${activePage === index ? "fade-in" : "fade-out"}`}
                >
                    {content}
                </div>
            ))}
        </div>
    );
};

export default RightSideOfMainPage;