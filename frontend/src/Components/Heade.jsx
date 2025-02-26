import React, { useState, useRef, useEffect } from 'react';
import '../index.css';
import { FaChevronDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Heade = () => {
    const dropdownRef = useRef(null);
    const modalRef = useRef(null); // Reference for the modal
    const [isSearchVisible, setSearchVisible] = useState(false); // for search input visibility
    const [isDropdownVisible, setDropdownVisible] = useState(false); // for dropdown visibility
    const [isMobileDropdownVisible, setMobileDropdownVisible] = useState(false); // for dropdown visibility

    const [searchValue, setSearchValue] = useState(""); // state to store the value of the input
    const [isModalVisible, setModalVisible] = useState(false);
    const [activeTab, setActiveTab] = useState("game");
    const [showNotification, setShowNotification] = useState(false); // Notification visibility
    const [isReversing, setIsReversing] = useState(false);
    const [isTabContentVisible, setTabContentVisible] = useState(false);
    // Combined state for price label and value
    // Initial price state
    const [price, setPrice] = useState([
        { btxt: "1k", bval: "1000", bid: "72592950" },
        { btxt: "2k", bval: "2000", bid: "72592950" },
        { btxt: "5k", bval: "5000", bid: "72592951" },
        { btxt: "10k", bval: "10000", bid: "72592952" },
        { btxt: "20k", bval: "20000", bid: "72592953" },
        { btxt: "25k", bval: "25000", bid: "72592954" },
        { btxt: "50k", bval: "50000", bid: "72592955" },
        { btxt: "75k", bval: "75000", bid: "72592956" }

    ]);

    // Temporary state to handle input changes before saving
    const [tempPrice, setTempPrice] = useState([...price]);


    // Toggle search input visibility
    const handleSearchClick = () => {
        setSearchVisible(!isSearchVisible);
    };

    // Toggle dropdown visibility
    const handleDropdownClick = () => {
        setDropdownVisible(!isDropdownVisible);
        // setMobileDropdownVisible(!isMobileDropdownVisible)
    };
    // Toggle dropdown visibility
    const handleMobileDropdownClick = () => {
        // setDropdownVisible(!isDropdownVisible);
        setMobileDropdownVisible(!isMobileDropdownVisible)
    };

    // Handle change in search input
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleDropdownItemClick = () => {
        setDropdownVisible(false);
    };

    // Close Modal
    const handleCloseModal = () => {
        setTempPrice([...price]); // Revert temporary state to original values
        setModalVisible(false);
        document.body.classList.remove('no-scroll');
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Show modal and delay tab content rendering
    const handleSetButtonValuesClick = (event) => {
        event.stopPropagation();
        setModalVisible(true);
        setTabContentVisible(false);
        document.body.classList.add('no-scroll');

        setTimeout(() => {
            setTabContentVisible(true);
        }, 100);

        // Set temp values to current saved state
        setTempPrice([...price]); // Copy current price to tempPrice
    };

    // Prevent Reload
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const handleTempPriceChange = (index, field, value) => {
        setTempPrice((prevTempPrice) =>
            prevTempPrice.map((item, i) =>
                i === index ? { ...item, [field]: value } : item
            )
        );
    };


    // // Handle input changes (only updating temporary state)
    // const handleTempPriceLabelChange = (e) => {
    //     setTempPrice((prev) => ({ ...prev, label: e.target.value }));
    // };

    // const handleTempPriceValueChange = (e) => {
    //     setTempPrice((prev) => ({ ...prev, value: e.target.value }));
    // };

    // Update Value of Button
    const handleUpdate = () => {
        // Update final state with temp values
        setPrice([...tempPrice]); // Save temporary state to main state

        // console.log("Price Label:", tempPrice.label);
        // console.log("Price Value:", tempPrice.value);

        // Step 1: Hide the modal first
        setModalVisible(false);
        document.body.classList.remove('no-scroll');

        // Step 2: Show the notification
        setTimeout(() => {
            setShowNotification(true);
            setIsReversing(false);

            // Step 3: Reverse animation and hide notification after 3 seconds
            setTimeout(() => {
                setIsReversing(true);
                setTimeout(() => setShowNotification(false), 350);
            }, 3000);
        }, 300);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownVisible(false);
            }
            if (isModalVisible && modalRef.current && !modalRef.current.contains(event.target)) {
                handleCloseModal();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isModalVisible]);
    return (
        <section className='header '>
            {/* Animated Notification */}
            {showNotification && (
                <div
                    className="go4109123758"
                    style={{
                        left: "0px",
                        right: "0px",
                        display: "flex",
                        position: "absolute",
                        transition: "230ms cubic-bezier(0.21, 1.02, 0.73, 1)",
                        transform: "translateY(0px)",
                        top: "16px",
                        justifyContent: "center"
                    }}
                >
                    <div
                        className="go2072408551"
                        style={{
                            animation: `0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards running ${isReversing ? 'goOut3223188581' : 'go3223188581'
                                }  `,
                        }}
                    // style={{
                    //     animation: "0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 alternate-reverse forwards running go3223188581"
                    // }}
                    >

                        <div className="go685806154">
                            <div className="go1858758034"></div>
                            <div className="go1579819456">
                                <div className="go2344853693"></div>
                            </div>
                        </div>
                        <div role="status" aria-live="polite" className="go3958317564">
                            Update Button Value
                        </div>

                    </div>
                </div>
            )}
            <div className="header-top">
                <div className="logo-header">
                    <a className="d-xl-none" href="/home">
                        <i className="fas fa-home me-1"></i>
                    </a>
                    <a href="/home">
                        <img src="https://sitethemedata.com/sitethemes/diamondexch99.com/front/logo.png" alt="Logo" />
                    </a>
                </div>

                <div className="user-details">
                    {/* Search Box for Desktop */}
                    <div className="search-box-container d-none d-xl-block">
                        <div className="search-box">
                            <input
                                type="search"
                                placeholder="Search here"
                                className={`form-control ${isSearchVisible ? 'search-input-show' : ''}`}
                                value={searchValue} // bind the value to the state
                                onChange={handleSearchChange} // update state on change
                            />
                            <a onClick={handleSearchClick}>
                                <i className="fas fa-search-plus"></i>
                            </a>
                        </div>
                    </div>

                    <div className="header-rules ms-3">
                        <div>
                            <a className="rules-link pointer"><b>Rules</b></a>
                        </div>
                    </div>

                    <div className="ms-3 d-none d-xl-flex"></div>

                    <div class="user-balance ms-1 ms-xl-3"><div>
                        <span>Balance:</span>
                        <b>1500</b>
                    </div>
                        <div>
                            <span>Exp:</span>
                            <b class="pointer">0</b>
                            <div class=" show dropdown">
                                <a class={`user-name ms-1 ms-xl-3 d-inline-block d-xl-none dropdown-toggle ${isMobileDropdownVisible ? 'show' : ''}`} id="react-aria5999643902-1" aria-expanded="true" onClick={handleMobileDropdownClick}>ak894<i class="fas fa-chevron-down ms-1"></i>
                                </a>
                                <ul
                                    x-placement="bottom-end"
                                    aria-labelledby="react-aria5999643902-1"
                                    className={`dropdown-menu ${isMobileDropdownVisible ? 'show' : ''}`}
                                    data-popper-reference-hidden="false"
                                    data-popper-escaped="false"
                                    data-popper-placement="bottom-end"
                                    style={{
                                        position: "absolute",
                                        inset: "0px 0px auto auto",
                                        transform: "translate3d(0px, 21px, 0px)"
                                    }}
                                >
                                    <a href="/account-statement">
                                        <li data-rr-ui-dropdown-item="" class="dropdown-item">Account Statement</li>
                                    </a>
                                    <a href="/current-bet">
                                        <li data-rr-ui-dropdown-item="" class="dropdown-item">Current Bet</li>
                                    </a>
                                    <a href="/activity-log">
                                        <li data-rr-ui-dropdown-item="" class="dropdown-item">Activity Logs</li>
                                    </a>
                                    <a href="/casino-results">
                                        <li data-rr-ui-dropdown-item="" class="dropdown-item">Casino Results</li>
                                    </a>
                                    <a href="/live-casino-bets">
                                        <li data-rr-ui-dropdown-item="" class="dropdown-item">Live Casino Bets</li>
                                    </a>
                                    <a>
                                        <li class="dropdown-item">Set Button Values</li>
                                    </a>
                                    <a href="/secure-auth">
                                        <li data-rr-ui-dropdown-item="" class="dropdown-item">Security Auth Verification</li>
                                    </a>
                                    <a href="/change-password">
                                        <li data-rr-ui-dropdown-item="" class="dropdown-item">Change Password</li>
                                    </a>
                                    <a class="d-xl-none"><li class="dropdown-item">Rules</li>
                                    </a>
                                    <a class="dropdown-item d-xl-none">Balance<div class="form-check float-end">
                                        <input class="form-check-input" type="checkbox" checked="" /></div>
                                    </a>
                                    <a class="dropdown-item d-xl-none">Exposure<div class="form-check float-end">
                                        <input class="form-check-input" type="checkbox" checked="" />
                                    </div>
                                    </a>
                                    <hr class="dropdown-divider" role="separator" />
                                    <li data-rr-ui-dropdown-item="" class="dropdown-item">SignOut</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* User Area with Dropdown */}
                    <div className="show dropdown" ref={dropdownRef}>
                        <a
                            className={`user-name ms-3 d-none d-xl-block dropdown-toggle ${isDropdownVisible ? 'show' : ''}`}
                            id="react-aria7679717755-2"
                            aria-expanded={isDropdownVisible ? 'true' : 'false'}
                            onClick={handleDropdownClick}
                        >
                            ak894
                            <i className="fas fa-chevron-down ms-1"></i>
                        </a>
                        <ul
                            x-placement="bottom-end"
                            aria-labelledby="react-aria7679717755-2"
                            className={`dropdown-menu ${isDropdownVisible ? 'show' : ''}`}
                            data-popper-reference-hidden="false"
                            data-popper-escaped="false"
                            data-popper-placement="bottom-end"
                            style={{
                                position: "absolute",
                                inset: "0px 0px auto auto",
                                transform: "translate3d(0px, 21px, 0px)"
                            }}

                        >
                            <Link to="/account-statement" onClick={handleDropdownItemClick}>
                                <li className="dropdown-item">Account Statement</li>
                            </Link>
                            <Link to="/current-bet" onClick={handleDropdownItemClick}>
                                <li className="dropdown-item">Current Bet</li>
                            </Link>
                            <Link to="/activity-log" onClick={handleDropdownItemClick}>
                                <li className="dropdown-item">Activity Logs</li>
                            </Link>
                            <a href="/casino-results" onClick={handleDropdownItemClick}>
                                <li className="dropdown-item">Casino Results</li>
                            </a>
                            <a href="/live-casino-bets" onClick={handleDropdownItemClick}>
                                <li className="dropdown-item">Live Casino Bets</li>
                            </a>
                            <a onClick={handleSetButtonValuesClick}>
                                <li className="dropdown-item ">Set Button Values</li>
                            </a>

                            <a href="/secure-auth" onClick={handleDropdownItemClick}>
                                <li className="dropdown-item">Security Auth Verification</li>
                            </a>
                            <a href="/change-password" onClick={handleDropdownItemClick}>
                                <li className="dropdown-item">Change Password</li>
                            </a>
                            <a className="d-xl-none"><li className="dropdown-item">Rules</li></a>
                            <a className="dropdown-item d-xl-none">Balance<div className="form-check float-end">
                                <input className="form-check-input" type="checkbox" checked="" />
                            </div></a>
                            <a className="dropdown-item d-xl-none">Exposure<div className="form-check float-end">
                                <input className="form-check-input" type="checkbox" checked="" />
                            </div></a>
                            <hr className="dropdown-divider" role="separator" />
                            <li data-rr-ui-dropdown-item="" className="dropdown-item">SignOut</li>
                        </ul>
                    </div>
                </div>
                <div class="search-box-container d-xl-none"><div class="search-box">
                    <input
                        type="search"
                        placeholder="Search here"
                        className={`form-control ${isSearchVisible ? 'search-input-show' : ''}`}
                        value={searchValue} // bind the value to the state
                        onChange={handleSearchChange} // update state on change
                    />
                    <a onClick={handleSearchClick}>
                        <i className="fas fa-search-plus"></i>
                    </a>

                </div>
                </div>
                {/* Modal for Set Button Values */}
                {/* Modal for Set Button Values */}
                {isModalVisible && (
                    <>
                        <div class="fade modal-backdrop show "></div>
                        <div role="dialog" aria-modal="true" class="fade modal show over" tabindex="-1" style={{ display: "block", }} onClick={(e) => e.stopPropagation()}  >
                            <div class="modal-dialog modal-md" ref={modalRef}><div class="modal-content">
                                <div class="modal-header">
                                    <div class="modal-title h4">Set Button Value</div>
                                    <button type="button" class="btn-close" aria-label="Close" onClick={handleCloseModal}>
                                    </button>
                                </div>
                                <div class="p-2 modal-body">
                                    <div class="mt-1 nav nav-pills" role="tablist">
                                        <div class="nav-item">
                                            <button role="tab" data-rr-ui-event-key="1" id="rules-tabs-tab-1" aria-controls="rules-tabs-tabpane-1" aria-selected="true" tabindex="0"
                                                className={`nav-link ${activeTab === "game" ? "active" : ""}`}
                                                onClick={() => handleTabClick("game")}
                                            >Game Buttons</button>
                                        </div><div class="nav-item">
                                            <button role="tab" data-rr-ui-event-key="2" id="rules-tabs-tab-2" aria-controls="rules-tabs-tabpane-2" aria-selected="false" tabindex="-1"
                                                className={`nav-link ${activeTab === "casino" ? "active" : ""}`}
                                                onClick={() => handleTabClick("casino")}
                                            >Casino Buttons</button>
                                        </div>
                                    </div>
                                    <div className="mt-1 tab-content">
                                        {isTabContentVisible && activeTab === "game" && (
                                            <div role="tabpanel" id="rules-tabs-tabpane-1" aria-labelledby="rules-tabs-tab-1" className="fade tab-pane active show">
                                                <form onSubmit={handleSubmit}>
                                                    <div className="row row10">
                                                        <div className="mb-1 col-6">
                                                            <label className="form-label">
                                                                <b>Price Label:</b>
                                                            </label>
                                                        </div>
                                                        <div className="mb-1 col-6">
                                                            <label className="form-label">
                                                                <b>Price Value:</b>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="row row10">
                                                        {tempPrice.map((item, index) => (
                                                            <>
                                                                <div className="mb-3 col-6 position-relative">
                                                                    <input
                                                                        name={`buttons[${index}].btxt`}
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={item.btxt}
                                                                        onChange={(e) => handleTempPriceChange(index, 'btxt', e.target.value)}
                                                                    />
                                                                </div>
                                                                <div className="mb-3 col-6 position-relative">
                                                                    <input
                                                                        name={`buttons[${index}].bval`}
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={item.bval}
                                                                        onChange={(e) => handleTempPriceChange(index, 'bval', e.target.value)}
                                                                    />
                                                                </div>
                                                                <input
                                                                    name={`buttons[${index}].bid`}
                                                                    type="hidden"
                                                                    className="form-control"
                                                                    value={item.bid}
                                                                />
                                                            </>

                                                        ))}
                                                    </div>

                                                    {/* <div className="row row10">

                                                        {tempPrice.map((item, index) => (
                                                            <div className="mb-3 col-12 position-relative" key={item.bid}>
                                                                <div className="row">
                                                                    <div className="mb-3 col-6 position-relative">
                                                                        <input
                                                                            name={`buttons[${index}].btxt`}
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={item.btxt}
                                                                            onChange={(e) => handleTempPriceChange(index, 'btxt', e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <div className="mb-3 col-6 position-relative">
                                                                        <input
                                                                            name={`buttons[${index}].bval`}
                                                                            type="text"
                                                                            className="form-control"
                                                                            value={item.bval}
                                                                            onChange={(e) => handleTempPriceChange(index, 'bval', e.target.value)}
                                                                        />
                                                                    </div>

                                                                    <input
                                                                        name={`buttons[${index}].bid`}
                                                                        type="hidden"
                                                                        className="form-control"
                                                                        value={item.bid}
                                                                    />
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div> */}


                                                    <div className="row row10">
                                                        <div className="mb-3 col-md-6 col-12">
                                                            <button type="submit" className="btn btn-primary btn-block w-100" onClick={handleUpdate}>Update</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        )}

                                        {isTabContentVisible && activeTab === "casino" && (
                                            <div role="tabpanel" id="rules-tabs-tabpane-2" aria-labelledby="rules-tabs-tab-2" className="fade tab-pane active show">
                                                <form>
                                                    <div className="row row10">
                                                        <div className="mb-1 col-6">
                                                            <label className="form-label">
                                                                <b>Price Label:</b>
                                                            </label>
                                                        </div>
                                                        <div className="mb-1 col-6">
                                                            <label className="form-label">
                                                                <b>Price Value:</b>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="row row10">
                                                        <div className="mb-3 col-6 position-relative">
                                                            <input name="buttons[0].btxt" type="text" className="form-control" value="25" />
                                                        </div>
                                                        <div className="mb-3 col-6 position-relative">
                                                            <input name="buttons[0].bval" type="text" className="form-control" value="25" />
                                                        </div>
                                                        <input name="buttons[0].bid" type="hidden" className="form-control" value="53927827" />
                                                    </div>

                                                    <div className="row row10">
                                                        <div className="mb-3 col-md-6 col-12">
                                                            <button type="submit" className="btn btn-primary btn-block w-100" onClick={handleUpdate}>Update</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                    </>

                )}


                {/* Search Box for Mobile */}

            </div>

            <div className="header-bottom d-none d-xl-block">
                <nav className="navbar navbar-expand">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sports-book/33">Lottery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/all-sports/4">Cricket</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/all-sports/2">Tennis</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/all-sports/1">Football</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/all-sports/8">Table Tennis</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/casino-list/LC/4/22">Baccarat</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/casino-list/LC/4/24">32 Cards</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/casino-list/LC/4/20">Teenpatti</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/casino-list/LC/4/21">Poker</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/casino-list/LC/4/27">Lucky 7</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Heade;
