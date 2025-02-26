import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegSquareMinus } from "react-icons/fa6";
import { Link } from "react-router-dom";
// import '../css/Side_menu.css'
const sections = [
    {
        title: "Racing Sports",
        items: ["Horse Racing", "Greyhound Racing"],
    },
    {
        title: "Others",
        items: ["Our Casino", "Our Virtual", "Live Casino", "Slot Game", "Fantasy Game"],
    },
];

const allSports = [
    {
        game: "Politics", // Empty game name, should not be shown
        categories: [
            { name: "Assembly Election 2025", subcategories: ["Assembly Election 2025"] },
        ],
    },
    {
        game: "Cricket",
        categories: [
            { name: "T5 XI", subcategories: ["BT XI v GAW XI"] },
            { name: "T10 XI", subcategories: ["Gujarat Titans XI v Punjab Kings XI"] },
            { name: "Test Matches", subcategories: ["Sri Lanka v Australia", "Zimbabwe v Ireland"] },
        ],
    },
    {
        game: "Football", // Example of a game with no categories
        categories: [],
    },
];

const SideMenu = () => {
    const [openSections, setOpenSections] = useState(
        sections.reduce((acc, section) => ({ ...acc, [section.title]: false }), {})
    );

    const [openAllSports, setOpenAllSports] = useState(false);
    const [activeGame, setActiveGame] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeSubcategory, setActiveSubcategory] = useState(null);

    const toggleSection = (title) => {
        setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
    };

    const toggleGame = (game) => {
        if (activeGame === game) {
            setActiveGame(null); // Close the game section if it's already open
        } else {
            setActiveGame(game);
            setActiveCategory(null); // Reset category when opening a new game
            setActiveSubcategory(null); // Reset subcategory when opening a new game
        }
    };

    const toggleCategory = (game, category) => {
        if (activeCategory === category) {
            setActiveCategory(null); // Close the category section if it's already open
        } else {
            setActiveCategory(category);
            setActiveSubcategory(null); // Reset subcategory when opening a new category
        }
    };

    const toggleSubcategory = (category, subcategory) => {
        setActiveSubcategory(activeSubcategory === subcategory ? null : subcategory);
    };

    return (
        <div className="mt-[5px] font-roboto xl:w-[280px] lg:w-[60px] md:w-[40px] mobile:w-[20px] transition-all duration-700 ease-in-out h-auto">
            {/* Racing Sports and Others Sections */}
            {sections.map((section) => (
                <div key={section.title}>
                    <div
                        className="text-white text-[15.8px] flex justify-between items-center bg-[#0088CC] cursor-pointer h-[30px]"
                        onClick={() => toggleSection(section.title)}
                    >
                        <h1 className="ml-[5px] " style={{ letterSpacing: "0.0057em" }}>
                            {section.title}
                        </h1>
                        <div>
                            {openSections[section.title] ? (
                                <FaChevronUp className="text-[10.53px] stroke-[5.85em] mr-[14.3px] mt-[-2.495px]" />
                            ) : (
                                <FaChevronDown className="text-[10.53px] stroke-[5.59em] mr-[14.1px] mt-[-2.495px]" />
                            )}
                        </div>
                    </div>

                    {openSections[section.title] && (
                        <div className="text-black  bg-[#BBBBBB]">
                            {section.items.map((item, index) => (
                                <div key={index}>
                                    <p className="cursor-pointer pl-[15px] py-[2px] text-[14px]">{item}</p>
                                    <hr className="border-t-1 border-[#2c3e50] opacity-25" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            {/* All Sports Section */}
            <div key="All Sports">
                <div
                    className="text-white text-[15.8px] flex justify-between items-center bg-[#0088CC] cursor-pointer h-[30px]"
                    onClick={() => setOpenAllSports(!openAllSports)}
                >
                    <h1 className="ml-[5px]" style={{ letterSpacing: "0.0057em" }}>
                        All Sports
                    </h1>
                    <div>
                        {openAllSports ? (
                            <FaChevronUp className="text-[10.53px] stroke-[5.85em] mr-[14.3px] mt-[-2.495px]" />
                        ) : (
                            <FaChevronDown className="text-[10.53px] stroke-[5.59em] mr-[14.1px] mt-[-2.495px]" />
                        )}
                    </div>
                </div>

                {openAllSports && (
                    <div className="text-black text-[14px] bg-[#BBBBBB]">
                        {allSports
                            .filter((game) => game.game) // Filter out games with no name
                            .map((game, index) => (
                                <div key={index}>
                                    <div
                                        className="cursor-pointer pl-[15px] flex items-center"
                                        onClick={() => toggleGame(game.game)}
                                    >
                                        {activeGame === game.game ? (
                                            <FaRegSquareMinus className="size-[14px] ml-[-1px] mt-[-1px]" />
                                        ) : (
                                            <FaRegPlusSquare className="size-[14px] ml-[-1px] mt-[-1px]" />
                                        )}
                                        <h1 className="ml-[3px] pt-[2px] pb-[2px]" style={{ letterSpacing: "0.006em" }}>
                                            {game.game}
                                        </h1>
                                    </div>
                                    <hr className="border-t-1 border-[#2c3e50] opacity-25" />
                                    {activeGame === game.game && (
                                        <div className="pl-[25px]">
                                            {game.categories.length > 0 ? (
                                                game.categories.map((category, idx) => (
                                                    <div key={idx}>
                                                        <div
                                                            className="cursor-pointer flex items-center"
                                                            onClick={() => toggleCategory(game.game, category.name)}
                                                        >
                                                            {activeCategory === category.name ? (
                                                                <FaRegSquareMinus className="size-[14px] ml-[-1px] mt-[-1px]" />
                                                            ) : (
                                                                <FaRegPlusSquare className="size-[14px] ml-[-1px] mt-[-1px]" />
                                                            )}
                                                            <h1 className="ml-[3px] pt-[2px] pb-[2px]" style={{ letterSpacing: "0.00em" }}>
                                                                {category.name}
                                                            </h1>
                                                        </div>
                                                        <hr className="border-t-1 border-[#2c3e50] opacity-25" />
                                                        {activeCategory === category.name && (
                                                            <div className="pl-[9px]">
                                                                {category.subcategories.length > 0 ? (
                                                                    category.subcategories.map((subcategory, subIdx) => (
                                                                        <div
                                                                            key={subIdx}
                                                                            className="cursor-pointer pl-[1px]"
                                                                            onClick={() => toggleSubcategory(category.name, subcategory)}
                                                                        >
                                                                            <Link
                                                                                to={`/game-details/4/${index}`} // Route structure to pass match details
                                                                                state={{ subcategory }} // Passing the subcategory (match) details as state
                                                                                className="cursor-pointer"
                                                                            >
                                                                                {subcategory}
                                                                            </Link>
                                                                            <hr className="border-t-1 border-[#2c3e50] opacity-25" />
                                                                        </div>
                                                                    ))
                                                                ) : (
                                                                    <p>No subcategories available</p>
                                                                )}
                                                            </div>
                                                        )}
                                                    </div>
                                                ))
                                            ) : (
                                                <p>No categories available</p>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SideMenu;
