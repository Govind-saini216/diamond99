import React, { useContext } from "react";
import { MainContext } from "../../Context/Main_Context";
import { Tooltip } from "bootstrap";
import '../../css/Hom.css'
const ActivityLogs = () => {
    const {
        selectedType, setSelectedType, setShowNotification, setIsReversing, loading, setLoading,
        handleLogTypeChange, setFilteredData,
        searchQuery, setSearchQuery,
        currentPage, nextPage, prevPage, filteredData, perPage, goToPage, firstPage, lastPage, setPerPage, currentData, showNotification, isReversing
    } = useContext(MainContext);
    // const [selectedType, setSelectedType] = useState(""); // Default to ""
    // const [perPage, setPerPage] = useState(10); // Number of items per page
    // const [currentPage, setCurrentPage] = useState(1); // Current page number
    // const [searchQuery, setSearchQuery] = useState(""); // Search query
    // const [filteredData, setFilteredData] = useState([]); // State to hold filtered data
    // const [showNotification, setShowNotification] = useState(false); // Notification visibility
    // const [searchFilteredData, setSearchFilteredData] = useState([]); // Final data filtered by search
    // const [isReversing, setIsReversing] = useState(false);
    const browserDetails = navigator.userAgent;
    console.log(browserDetails);

    const data = [
        { username: 'ak894', date: '21/02/2025 16:03:53', ip: '2402:e280:2324:32d:854:6f53:46ed:ee56', type: 'login' },
        { username: 'ak894', date: '21/02/2025 16:02:04', ip: '	2402:e280:2324:32d:a86e:a284:c725:65cd', type: 'login' },
        { username: 'ak894', date: '21/02/2025 15:59:20', ip: '2402:e280:2324:32d:44d6:6435:d1b9:967a', type: 'login' },
        { username: 'ak894', date: '21/02/2025 13:03:13', ip: '2402:e280:2324:32d:854:6f53:46ed:ee56', type: 'login' },
        { username: 'ak894', date: '21/02/2025 07:52:02', ip: '2402:e280:2324:4f:b959:c84a:1767:3f33', type: 'login' },
        { username: '2ak895', date: '18/02/2025 10:23:02', ip: '1.1.1.1', type: 'password' },


    ];

    const filterData = () => {
        const query = searchQuery.trim().toLowerCase();
        const filtered = data.filter((item) => {
            const matchesType = selectedType ? item.type === selectedType : true;
            const matchesSearch = query
                ? item.username.toLowerCase().includes(query) ||
                item.date.toLowerCase().includes(query) ||
                item.ip.toLowerCase().includes(query)
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
    // Define the headers dynamically based on log type
    const getTableHeaders = () => {
        if (selectedType === "" || selectedType === "login") {
            return (
                <tr role="row"><th colspan="1" role="columnheader">Username</th><th colspan="1" role="columnheader">Date</th><th colspan="1" role="columnheader">Ip Address</th></tr>
            );
        } else if (selectedType === "password") {
            return (
                <tr role="row"><th colspan="1" role="columnheader">Username</th><th colspan="1" role="columnheader">Date</th><th colspan="1" role="columnheader">Ip Address</th><th colspan="1" role="columnheader">Browser Detail</th></tr>
            );
        }
        return null; // If no type is selected, return null or placeholder
    };
    console.log(selectedType);

    return (
        <> <div className="center-main-container report-page">
            <div className="center-container">
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
                        >
                            <div className="go685806154">
                                <div className="go1858758034"></div>
                                <div className="go1579819456">
                                    <div className="go2534082608"></div>
                                </div>
                            </div>
                            <div role="status" aria-live="polite" className="go3958317564">
                                Select Log Type !
                            </div>
                        </div>
                    </div>
                )}

                <div className="card">
                    <div className="card-header">
                        <h4 className="card-title">Activity Log</h4>
                    </div>
                    <div className="card-body">
                        <div className="report-form">
                            <form className="row row5" onSubmit={handleSubmit}>
                                <div className="col-lg-2 col-md-3 col-6">
                                    <div className="react-datepicker-wrapper">
                                        <div className="react-datepicker__input-container">
                                            <div className="mb-2 custom-datepicker">
                                                <input type="text" className="form-control" disabled="" value="11/02/2025" />
                                                <i className="far fa-calendar"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3 col-6">
                                    <div className="react-datepicker-wrapper">
                                        <div className="react-datepicker__input-container">
                                            <div className="mb-2 custom-datepicker">
                                                <input type="text" className="form-control" disabled="" value="18/02/2025" />
                                                <i className="far fa-calendar"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-3">
                                    <div className="mb-2 input-group position-relative">
                                        <select
                                            className="form-select"
                                            name="type"
                                            value={selectedType}
                                            onChange={handleLogTypeChange} // Handle log type change
                                        >
                                            <option value="" disabled>Select Log Type</option>
                                            <option value="login">Login</option>
                                            <option value="password">Change Password</option>
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
                                        <select className="form-select" value={perPage} onChange={(e) => setPerPage(Number(e.target.value))}>
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

                            <div className="mt-2 table-responsive position-relative">
                                {loading && (
                                    <div id="loader-section">
                                        <div id="load-inner">
                                            <i className="fa fa-spinner fa-spin"></i> {/* Corrected className usage */}
                                        </div>
                                    </div>
                                )}
                                {!loading && filteredData.length > 0 ? (
                                    <table role="table" className="table table-bordered table-striped">
                                        <thead>
                                            {getTableHeaders()} {/* Dynamically render table headers */}
                                        </thead>
                                        <tbody role="rowgroup">
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
                                        </tbody>
                                    </table>
                                ) : (

                                    <table role="table" className="table table-bordered table-striped">
                                        <thead>
                                            {getTableHeaders()} {/* Dynamically render table headers */}
                                        </thead>
                                    </table>

                                )}
                            </div>


                            {filteredData.length > 0 && (
                                <div className="custom-pagination mt-2">
                                    <div onClick={firstPage} disabled>First</div>
                                    <div onClick={prevPage} disabled>Previous</div>
                                    <div onClick={nextPage} disabled>Next</div>
                                    <div onClick={lastPage}>Last</div>
                                    <div>
                                        <span className="me-2">Page <b>{currentPage} of {Math.ceil(filteredData.length / perPage)}</b></span>
                                        <span className="me-2">| Go to Page</span>
                                        <input className="form-control" type="number" value={currentPage} onChange={(e) => goToPage(Number(e.target.value))} />
                                    </div>

                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div></div>
        </>
    );
};

export default ActivityLogs;
