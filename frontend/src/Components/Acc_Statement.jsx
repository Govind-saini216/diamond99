import React, { useState, useContext } from 'react';

import { MainContext } from '../Context/Main_Context';

const AccStatement = () => {
    const {
        selectedType, setSelectedType, setShowNotification, setIsReversing, loading, setLoading,
        handleLogTypeChange, setFilteredData,
        searchQuery, setSearchQuery,
        currentPage, nextPage, prevPage, filteredData, perPage, goToPage, firstPage, lastPage, setPerPage, currentData, showNotification, isReversing
    } = useContext(MainContext);


    const data = [
        { date: '21/02/2025 16:03:53', sr: '1', credit: '1500', debit: '1500', pts: '1', remark: 'w', type: 'login' },
        { date: '21/02/2025 16:02:04', sr: '2', credit: '2000', debit: '500', pts: '2', remark: 'x', type: 'deposit/withdraw' },
        { date: '21/02/2025 15:59:20', sr: '3', credit: '3000', debit: '1500', pts: '1.5', remark: 'y', type: 'casino' },
        { date: '21/02/2025 13:03:13', sr: '4', credit: '1000', debit: '1000', pts: '1', remark: 'z', type: 'sport' },
        { date: '21/02/2025 07:52:02', sr: '5', credit: '500', debit: '500', pts: '0.5', remark: 'a', type: 'deposit/withdraw' },
        { date: '18/02/2025 10:23:02', sr: '6', credit: '2500', debit: '1500', pts: '1', remark: 'b', type: 'third-party casino' }
    ];

    // const filterData = () => {
    //     const query = searchQuery.trim().toLowerCase();
    //     const filtered = data.filter((item) => {
    //         const matchesType = selectedType ? item.type === selectedType : true;
    //         const matchesSearch = query
    //             ? item.username.toLowerCase().includes(query) ||
    //             item.date.toLowerCase().includes(query) ||
    //             item.ip.toLowerCase().includes(query)
    //             : true;
    //         return matchesType && matchesSearch;
    //     });
    //     setFilteredData(filtered);
    // };
    // Filter data based on selected type and search query
    const filterData = () => {
        const query = searchQuery.trim().toLowerCase();
        const filtered = data.filter((item) => {
            const matchesType = selectedType ? item.type === selectedType : true;
            const matchesSearch = query
                ? item.sr.toLowerCase().includes(query) ||
                item.date.toLowerCase().includes(query) ||
                item.remark.toLowerCase().includes(query)
                : true;
            return matchesType && matchesSearch;
        });
        setFilteredData(filtered);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedType) {
            setIsReversing(false);
            setShowNotification(true);
            setTimeout(() => {
                setIsReversing(true);
                setTimeout(() => setShowNotification(false), 350);
            }, 3000);
        } else {
            setLoading(true); // Show loader
            console.log("Loader should show now:", loading);

            // Simulate a delay to see the loader (1 seconds)
            setTimeout(() => {
                filterData(); // Filter data after the delay
                setLoading(false); // Hide loader
                console.log("Loader should hide now:", loading);
            }, 500);
        }
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Account Statement</h4>
                </div>
                <div className="card-body">
                    <div className="report-form">
                        <form className="row row5" onSubmit={handleSubmit}>
                            {/* Start Date Input */}
                            <div className="col-lg-2 col-md-3 col-6">
                                <div className="react-datepicker-wrapper">
                                    <div className="react-datepicker__input-container ">
                                        <div className='mb-2 custom-datepicker'>
                                            <input
                                                type="text"
                                                className="form-control "
                                                disabled
                                                value
                                            />
                                            <i
                                                className="far fa-calendar"

                                            ></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="react-datepicker__tab-loop">
                                    <div class="react-datepicker__tab-loop__start" tabindex="0"></div>
                                    <div class="react-datepicker-popper" data-placement="bottom-start" style={{ position: "absolute", inset: "0px auto auto 0px", transform: "translate3d(10px, 97px, 0px)" }}>
                                        <div style={{ display: "contents" }}>


                                            (
                                            <div style={{ position: "relative" }}>
                                                {/* Triangle above the calendar */}
                                                <div
                                                    className="react-datepicker__triangle"
                                                    style={{
                                                        position: "absolute",
                                                        // top: "-px", // Adjust this to change the triangle's vertical position
                                                        left: "87px",
                                                        transform: "translateX(-50%)", // Centers the triangle above the calendar
                                                        borderLeft: "10px solid transparent",
                                                        borderRight: "10px solid transparent",
                                                        // borderBottom: "10px solid #000", // Change to desired triangle color
                                                        zIndex: 1, // Ensure triangle is above other elements
                                                    }}
                                                ></div>


                                            </div>
                                            )

                                        </div>
                                    </div>


                                </div>

                            </div>

                            {/* End Date Input */}
                            <div className="col-lg-2 col-md-3 col-6">
                                <div className="react-datepicker-wrapper">
                                    <div className="react-datepicker__input-container ">
                                        <div className='mb-2 custom-datepicker'>
                                            <input
                                                type="text"
                                                className="form-control "
                                                disabled
                                                value
                                            />
                                            <i
                                                className="far fa-calendar"

                                            ></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="react-datepicker__tab-loop">
                                    <div class="react-datepicker__tab-loop__start" tabindex="0"></div>
                                    <div class="react-datepicker-popper" data-placement="bottom-start" style={{ position: "absolute", inset: "0px auto auto 0px", transform: "translate3d(277px, 97px, 0px)" }}>
                                        <div style={{ display: "contents" }}>




                                        </div>
                                    </div>


                                </div>

                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="mb-2 input-group position-relative">
                                    <select
                                        className="form-select"
                                        name="type"
                                        value={selectedType}
                                        onChange={handleLogTypeChange} // Handle log type change
                                    >
                                        <option value="1">Deposite/Withdraw Reports</option>
                                        <option value="2">Sport Report</option>
                                        <option value="3">Casino Reports</option>
                                        <option value="4">Third-Party Casino Reports</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-2 d-grid">
                                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                            </div>
                        </form>

                        <div className="row row10 mt-2 justify-content-between">
                            <div className="col-lg-2 col-6">
                                <div className="mb-2 input-group position-relative">
                                    <span className="me-2">Show</span>
                                    <select className="form-select">
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="30">30</option>
                                        <option value="40">40</option>
                                        <option value="50">50</option>
                                    </select>
                                    <span className="ms-2">Entries</span>
                                </div>
                            </div>

                            {/* Search Box */}
                            <div className="col-lg-2 col-6">
                                <div className="mb-2 input-group position-relative">
                                    <span className="me-2">Search:</span>
                                    <input
                                        type="search"
                                        className="form-control"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        placeholder={`${filteredData.length === 0 ? 0 : filteredData.length} records...`} // Update placeholder based on filtered data
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-2 table-responsive">
                            <table role="table" className="table table-bordered table-striped">
                                <thead>
                                    <tr role="row">
                                        <th colspan="1" role="columnheader" className="report-date">Date</th>
                                        <th colspan="1" role="columnheader" className="report-sr text-end">Sr no</th>
                                        <th colspan="1" role="columnheader" className="report-amount text-end">Credit</th>
                                        <th colspan="1" role="columnheader" className="report-amount text-end">Debit</th>
                                        <th colspan="1" role="columnheader" className="report-amount text-end">Pts</th>
                                        <th colspan="1" role="columnheader">Remark</th>
                                    </tr>
                                </thead>
                                <tbody role="rowgroup">
                                    {filteredData.length > 0 ? (
                                        filteredData.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.date}</td>
                                                <td className="text-end">{item.sr}</td>
                                                <td className="text-end">
                                                    <span className="text-success">{item.credit}</span>
                                                </td>
                                                <td className="text-end">
                                                    <span className="text-danger">{item.debit}</span>
                                                </td>
                                                <td className="text-end">{item.pts}</td>
                                                <td>{item.remark}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="6" className="text-center">No results found</td>
                                        </tr>
                                    )}
                                </tbody>
                                {/* <tbody role="rowgroup">
                                    {currentData.length > 0 ? (
                                        currentData.map((item, index) => (
                                            <tr key={index}>
                                                <td role="cell">{item.username}</td>
                                                <td role="cell">{item.date}</td>
                                                <td role="cell">
                                                    {item.ip}
                                                    <i className="fas fa-eye me-2 ms-2"></i>
                                                </td>
                                                {selectedType === "password" && (
                                                    <td role="cell">
                                                        <span
                                                            style={{ color: "inherit", textDecoration: "underline", cursor: "pointer" }}
                                                            data-bs-toggle="tooltip"
                                                            data-bs-placement="top"
                                                            title={browserDetails || "No details available"}
                                                        >
                                                            Detail
                                                        </span>
                                                    </td>
                                                )}
                                            </tr>
                                        ))
                                    ) : (
                                        <tr><td colSpan="4">No results found</td></tr>
                                    )}
                                </tbody> */}
                            </table>
                        </div>
                        {/* 
                        <div className="custom-pagination mt-2">
                            <div disabled>First</div>
                            <div disabled>Previous</div>
                            <div disabled>Next</div>
                            <div disabled>Last</div>
                            <div>
                                <span className="me-2">Page <b>1 of 1</b></span>
                                <span className="me-2">| Go to Page</span>
                                <input className="form-control" type="number" value="" />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccStatement;
