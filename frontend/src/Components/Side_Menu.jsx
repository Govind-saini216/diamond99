import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const SideMenu = () => {
    // State to track open accordion sections
    const [openSections, setOpenSections] = useState({
        allSports: true,
        racing: true,
        others: true
    });

    // State to track open dropdowns inside each section
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section] // Toggle only the clicked section
        }));
    };

    const toggleDropdown = (dropdown) => {
        setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
    };

    return (
        <div className="sidebar left-sidebar mt-[5px]">
            {/* Racing Sports */}
            <div className="accordion">
                <div className="accordion-item">
                    <h2 className="sidebar-title accordion-header flex">
                        <button
                            type="button"
                            className={`accordion-button ${openSections.racing ? "" : "collapsed"}`}
                            aria-expanded={openSections.racing}
                            onClick={() => toggleSection("racing")}
                        >
                            Racing Sports
                        </button>

                    </h2>
                    <div className={`accordion-collapse ${openSections.racing ? "show" : "collapse"}`}>
                        <div className="racing-sport accordion-body">
                            {/* Horse Racing */}
                            <ul>
                                <li className="nav-item dropdown">
                                    <a
                                        role="button"
                                        className="dropdown-toggle nav-link"
                                        onClick={() => toggleDropdown("horseRacing")}
                                    >
                                        Horse Racing
                                    </a>
                                    <div className={`dropdown-menu ${openDropdown === "horseRacing" ? "show" : ""}`}>
                                        <h5>All Horse Racing</h5>
                                        <div className="horse-list-box">
                                            <a className="dropdown-item" href="/game-details/10/917162394">
                                                <p>13:40 HYDERABAD (IN)</p>
                                            </a>
                                            <a className="dropdown-item" href="/game-details/10/576239871">
                                                <p>13:50 Mount Barker (AU)</p>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                            {/* Greyhound Racing */}
                            <ul>
                                <li className="nav-item dropdown">
                                    <a
                                        role="button"
                                        className="dropdown-toggle nav-link"
                                        onClick={() => toggleDropdown("greyhoundRacing")}
                                    >
                                        Greyhound Racing
                                    </a>
                                    <div className={`dropdown-menu ${openDropdown === "greyhoundRacing" ? "show" : ""}`}>
                                        <h5>All Greyhound Racing</h5>
                                        <div className="horse-list-box ml-[16px] pr-[22px]">
                                            <a className="dropdown-item my-[4px]" href="/game-details/65/622320472">
                                                <p>18:33 Harlow (GB)</p>
                                            </a>
                                            <a className="dropdown-item my-[4px]" href="/game-details/65/587023420">
                                                <p>14:02 Bulli (AU)</p>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Others Section */}
            <div className="accordion">
                <div className="accordion-item">
                    <h2 className="sidebar-title accordion-header">
                        <button
                            type="button"
                            className={`accordion-button ${openSections.others ? "" : "collapsed"}`}
                            aria-expanded={openSections.others}
                            onClick={() => toggleSection("others")}
                        >
                            Others
                        </button>
                    </h2>
                    <div className={`accordion-collapse ${openSections.others ? "show" : "collapse"}`}>
                        <div className="other-casino-list accordion-body">
                            <ul>
                                <li className="nav-item">
                                    <a className="nav-link" href="/casino-list/LC/4">
                                        <span className="blink_me">Our Casino</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/casino-list/LC/19">
                                        <span className="blink_me">Our Virtual</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/live-casino-list/CS/26">
                                        <span>Live Casino</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/slot-list">
                                        <span className="">Slot Game</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/fantasy-list">
                                        <span>Fantasy Game</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* All Sports Section */}
            <div className="accordion">
                <div className="accordion-item">
                    <h2 className="sidebar-title accordion-header">
                        <button
                            type="button"
                            className={`accordion-button ${openSections.allSports ? "" : "collapsed"}`}
                            aria-expanded={openSections.allSports}
                            onClick={() => toggleSection("allSports")}
                        >
                            All Sports
                        </button>
                    </h2>
                    <div className={`accordion-collapse ${openSections.allSports ? "show" : "collapse"}`}>
                        <div className="menu-box accordion-body">
                            <ul className="navbar-nav">
                                {/* Politics Section */}
                                <li className="nav-item dropdown">
                                    <a
                                        className="dropdown-toggle nav-link"
                                        onClick={() => toggleDropdown("politics")}
                                    >
                                        <i className="far fa-plus-square me-1"></i>
                                        <span>Politics</span>
                                    </a>
                                    <ul className={`dropdown-menu ${openDropdown === "politics" ? "show" : ""}`}>
                                        <li className="nav-item">
                                            <a
                                                className="dropdown-toggle nav-link"
                                                onClick={() => toggleDropdown("assemblyElection")}
                                            >
                                                <i className="far fa-plus-square me-1"></i>
                                                <span>Assembly Election 2025</span>
                                            </a>
                                            <ul className={`dropdown-menu ${openDropdown === "assemblyElection" ? "show" : ""}`}>
                                                <li className="nav-item">
                                                    <a className="dropdown-toggle nav-link" href="/game-details/40/602080933">
                                                        <span>Assembly Election 2025</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            {/* More sports can be added here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
