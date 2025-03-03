import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

const CurrentBet = () => {

    const [selectedType, setSelectedType] = useState(); // Default to "Sports
    const [selectedFilter, setSelectedFilter] = useState("all"); // Default to "All"
    return (
        <div className="center-main-container report-page">
            <div className="center-container">
                <div class="card">
                    <div class="card-header">
                        <h4 class="card-title">Current Bets</h4>
                    </div><div class="card-body">
                        <div class="report-form">
                            <form class="row row5">
                                <div class="col-lg-2 col-md-3">
                                    <div class="mb-2 input-group position-relative">
                                        <select class="form-select" name="gtype" value={selectedType}
                                            onChange={(e) => setSelectedType(e.target.value)}>
                                            <option value="" disabled>Select Report Type</option>
                                            <option value="1">Sports</option>
                                            <option value="2">Casino</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-2 d-grid">
                                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                                </div>
                            </form>
                            <div class="row row5 mt-2 justify-content-between align-items-center">
                                <div class="col-lg-2 col-5">
                                    <div class="mb-2 input-group position-relative">
                                        <span class="me-2">Show</span>
                                        <select class="form-select">
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="30">30</option>
                                            <option value="40">40</option>
                                            <option value="50">50</option>
                                        </select><span class="ms-2">Entries</span>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6 col-7 text-center">
                                    <div className="form-check form-check-inline">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            id="all"
                                            name="filter"
                                            value="all"
                                            checked={selectedFilter === "all"}
                                            onChange={() => setSelectedFilter("all")}
                                        />
                                        <label className="form-check-label" htmlFor="all">All</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            id="back"
                                            name="filter"
                                            value="back"
                                            checked={selectedFilter === "back"}
                                            onChange={() => setSelectedFilter("back")}
                                        />
                                        <label className="form-check-label" htmlFor="back">Back</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            type="radio"
                                            className="form-check-input"
                                            id="lay"
                                            name="filter"
                                            value="lay"
                                            checked={selectedFilter === "lay"}
                                            onChange={() => setSelectedFilter("lay")}
                                        />
                                        <label className="form-check-label" htmlFor="lay">Lay</label>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 text-left col-7">
                                    <div>Total Bets: <span class="me-2">0</span> Total Amount: <span class="me-2">0</span>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-5">
                                    <div class="mb-2 input-group position-relative"
                                    ><span class="me-2">Search:</span>
                                        <input type="search" class="form-control" placeholder="0 records..." value="" /></div>
                                </div>
                            </div>
                            <div class="mt-2 table-responsive">
                                {selectedType === "1" ? (
                                    <table role="table" class="table table-bordered table-striped">
                                        <thead>
                                            <tr role="row">
                                                <th colspan="1" role="columnheader" class="report-sport">Sports</th>
                                                <th colspan="1" role="columnheader">Event Name</th>
                                                <th colspan="1" role="columnheader">Market Name</th>
                                                <th colspan="1" role="columnheader">Nation</th>
                                                <th colspan="1" role="columnheader" class="report-amount text-end">User Rate</th>
                                                <th colspan="1" role="columnheader" class="report-amount text-end">Amount</th>
                                                <th colspan="1" role="columnheader" class="report-date">Place Date</th>
                                                <th colspan="1" role="columnheader" class="report-action">
                                                    <div class="text-end"><div class="form-check form-check-inline">
                                                        <input type="checkbox" class="form-check-input" title="Toggle All Current Page Rows Selected" style={{ cursor: "pointer;" }} />
                                                    </div>
                                                    </div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody role="rowgroup">
                                        </tbody>
                                    </table>
                                ) : (
                                    <table role="table" class="table table-bordered table-striped"><thead>
                                        <tr role="row"><th colspan="1" role="columnheader">Event Name </th>
                                            <th colspan="1" role="columnheader">Nation</th>
                                            <th colspan="1" role="columnheader" class="report-amount text-end">User Rate</th>
                                            <th colspan="1" role="columnheader" class="report-amount text-end">Amount</th>
                                            <th colspan="1" role="columnheader" class="report-date">Place Date</th>
                                            <th colspan="1" role="columnheader" class="report-action">
                                                <div class="text-end">
                                                    <div class="form-check form-check-inline">
                                                        <input type="checkbox" class="form-check-input" title="Toggle All Current Page Rows Selected" style={{ cursor: "pointer;" }} />
                                                    </div>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                        <tbody role="rowgroup"></tbody>
                                    </table>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentBet;
