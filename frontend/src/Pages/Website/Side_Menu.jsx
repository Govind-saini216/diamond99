import React, { useState } from "react";

const RacingSports = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="accordion">
                <div className="accordion-item">
                    <h2 className="sidebar-title accordion-header">
                        <button
                            type="button"
                            aria-expanded={isOpen}
                            className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            Racing Sports
                        </button>
                    </h2>
                    <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
                        <div className="racing-sport accordion-body">
                            <ul>
                                <li className="nav-item dropdown">
                                    <a
                                        id="horse-dropdown"
                                        aria-expanded="false"
                                        role="button"
                                        className="dropdown-toggle nav-link"
                                        href="#"
                                    >
                                        Horse Racing
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                <li className="nav-item dropdown">
                                    <a
                                        id="greyhound-dropdown"
                                        aria-expanded="false"
                                        role="button"
                                        className="dropdown-toggle nav-link"
                                        href="#"
                                    >
                                        Greyhound Racing
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RacingSports;
