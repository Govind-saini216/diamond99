import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const AccStatement = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartCalendar, setShowStartCalendar] = useState(false); // Track calendar visibility for start date
    const [showEndCalendar, setShowEndCalendar] = useState(false); // Track calendar visibility for end date

    const handleStartDateChange = (date) => {
        setStartDate(date); // Update start date
    };

    const handleEndDateChange = (date) => {
        setEndDate(date); // Update end date
    };

    const toggleStartCalendar = () => {
        setShowStartCalendar(!showStartCalendar); // Toggle calendar visibility for start date
    };

    const toggleEndCalendar = () => {
        setShowEndCalendar(!showEndCalendar); // Toggle calendar visibility for end date
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h4 className="card-title">Account Statement</h4>
                </div>
                <div className="card-body">
                    <div className="report-form">
                        <form className="row row5">
                            {/* Start Date Input */}
                            <div className="col-lg-2 col-md-3 col-6">
                                <div className="react-datepicker-wrapper">
                                    <div className="react-datepicker__input-container ">
                                        <div className='mb-2 custom-datepicker'>
                                            <input
                                                type="text"
                                                className="form-control "
                                                disabled
                                                value={startDate ? startDate.toLocaleDateString() : ""}
                                            />
                                            <i
                                                className="far fa-calendar"
                                                onClick={toggleStartCalendar} // Toggle calendar visibility
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="react-datepicker__tab-loop">
                                    <div class="react-datepicker__tab-loop__start" tabindex="0"></div>
                                </div>
                                {/* <div className="react-datepicker__tab-loop">
                                        {showStartCalendar && (
                                            <DatePicker
                                                selected={startDate}
                                                onChange={handleStartDateChange}
                                                className="form-control"
                                                dateFormat="dd/MM/yyyy"
                                                inline
                                            />
                                        )}
                                    </div> */}
                                {/* </div> */}
                            </div>

                            {/* End Date Input */}
                            <div className="col-lg-2 col-md-3 col-6">
                                <div className="react-datepicker-wrapper">
                                    <div className="react-datepicker__input-container">
                                        <input
                                            type="text"
                                            className="form-control date-input"
                                            disabled
                                        // value={endDate ? endDate.toLocaleDateString() : ""}
                                        />
                                        <i
                                            className="far fa-calendar calendar-icon" style={{ position: "absolute", inset: "0px auto auto 0px", transform: "translate3d(10px, 97px, 0px)" }}
                                            onClick={toggleEndCalendar} // Toggle calendar visibility
                                        ></i>
                                    </div>
                                    <div class="react-datepicker__tab-loop">
                                        <div class="react-datepicker__tab-loop__start" tabindex="0">
                                        </div>
                                        <div class="react-datepicker-popper" data-placement="bottom-start" >
                                            <div style={{ display: "contents" }}><div class="react-datepicker">
                                                <div class="react-datepicker__triangle" style={{ position: "absolute", left: "0px", transform: "translate3d(86px, 0px, 0px)" }}></div>
                                                <span role="alert" aria-live="polite" class="react-datepicker__aria-live"></span>
                                                <button type="button" class="react-datepicker__navigation react-datepicker__navigation--previous" aria-label="Previous Month">
                                                    <span class="react-datepicker__navigation-icon react-datepicker__navigation-icon--previous">Previous Month</span>
                                                </button>
                                                <div class="react-datepicker__month-container">

                                                    <div class="react-datepicker__header ">
                                                        <div class="react-datepicker__current-month">February 2025</div>
                                                        <div class="react-datepicker__header__dropdown react-datepicker__header__dropdown--scroll">
                                                        </div>
                                                        <div class="react-datepicker__day-names">
                                                            <div class="react-datepicker__day-name">Su</div>
                                                            <div class="react-datepicker__day-name">Mo</div>
                                                            <div class="react-datepicker__day-name">Tu</div>
                                                            <div class="react-datepicker__day-name">We</div>
                                                            <div class="react-datepicker__day-name">Th</div>
                                                            <div class="react-datepicker__day-name">Fr</div>
                                                            <div class="react-datepicker__day-name">Sa</div>
                                                        </div>
                                                    </div>
                                                    <div class="react-datepicker__month" aria-label="month  2025-02" role="listbox">
                                                        <div class="react-datepicker__week">
                                                            <div class="react-datepicker__day react-datepicker__day--026 react-datepicker__day--weekend react-datepicker__day--outside-month" tabindex="-1" aria-label="Choose Sunday, January 26th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">26</div>
                                                            <div class="react-datepicker__day react-datepicker__day--027 react-datepicker__day--outside-month" tabindex="-1" aria-label="Choose Monday, January 27th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">27</div>
                                                            <div class="react-datepicker__day react-datepicker__day--028 react-datepicker__day--outside-month" tabindex="-1" aria-label="Choose Tuesday, January 28th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">28</div>
                                                            <div class="react-datepicker__day react-datepicker__day--029 react-datepicker__day--outside-month" tabindex="-1" aria-label="Choose Wednesday, January 29th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">29</div>
                                                            <div class="react-datepicker__day react-datepicker__day--030 react-datepicker__day--outside-month" tabindex="-1" aria-label="Choose Thursday, January 30th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">30</div>
                                                            <div class="react-datepicker__day react-datepicker__day--031 react-datepicker__day--outside-month" tabindex="-1" aria-label="Choose Friday, January 31st, 2025" role="option" title="" aria-disabled="false" aria-selected="false">31</div>
                                                            <div class="react-datepicker__day react-datepicker__day--001 react-datepicker__day--weekend" tabindex="-1" aria-label="Choose Saturday, February 1st, 2025" role="option" title="" aria-disabled="false" aria-selected="false">1</div>
                                                        </div>
                                                        <div class="react-datepicker__week">
                                                            <div class="react-datepicker__day react-datepicker__day--002 react-datepicker__day--weekend" tabindex="-1" aria-label="Choose Sunday, February 2nd, 2025" role="option" title="" aria-disabled="false" aria-selected="false">2</div>
                                                            <div class="react-datepicker__day react-datepicker__day--003" tabindex="-1" aria-label="Choose Monday, February 3rd, 2025" role="option" title="" aria-disabled="false" aria-selected="false">3</div>
                                                            <div class="react-datepicker__day react-datepicker__day--004" tabindex="-1" aria-label="Choose Tuesday, February 4th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">4</div>
                                                            <div class="react-datepicker__day react-datepicker__day--005" tabindex="-1" aria-label="Choose Wednesday, February 5th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">5</div>
                                                            <div class="react-datepicker__day react-datepicker__day--006" tabindex="-1" aria-label="Choose Thursday, February 6th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">6</div>
                                                            <div class="react-datepicker__day react-datepicker__day--007" tabindex="-1" aria-label="Choose Friday, February 7th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">7</div>
                                                            <div class="react-datepicker__day react-datepicker__day--008 react-datepicker__day--weekend" tabindex="-1" aria-label="Choose Saturday, February 8th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">8</div>
                                                        </div>
                                                        <div class="react-datepicker__week">
                                                            <div class="react-datepicker__day react-datepicker__day--009 react-datepicker__day--weekend" tabindex="-1" aria-label="Choose Sunday, February 9th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">9</div>
                                                            <div class="react-datepicker__day react-datepicker__day--010 react-datepicker__day--selected" tabindex="0" aria-label="Choose Monday, February 10th, 2025" role="option" title="" aria-disabled="false" aria-selected="true">10</div>
                                                            <div class="react-datepicker__day react-datepicker__day--011" tabindex="-1" aria-label="Choose Tuesday, February 11th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">11</div>
                                                            <div class="react-datepicker__day react-datepicker__day--012" tabindex="-1" aria-label="Choose Wednesday, February 120th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">12</div>
                                                            <div class="react-datepicker__day react-datepicker__day--013" tabindex="-1" aria-label="Choose Thursday, February 13th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">13</div>
                                                            <div class="react-datepicker__day react-datepicker__day--014" tabindex="-1" aria-label="Choose Friday, February 14th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">14</div>
                                                            <div class="react-datepicker__day react-datepicker__day--015 react-datepicker__day--weekend" tabindex="-1" aria-label="Choose Saturday, February 15th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">15</div>
                                                        </div>
                                                        <div class="react-datepicker__week">
                                                            <div class="react-datepicker__day react-datepicker__day--016 react-datepicker__day--weekend" tabindex="-1" aria-label="Choose Sunday, February 16th, 2025" role="option" title="" aria-disabled="false" aria-selected="false">16</div>
                                                            <div class="react-datepicker__day react-datepicker__day--017 react-datepicker__day--today" tabindex="-1" aria-label="Choose Monday, February 17th, 2025" role="option" title="" aria-disabled="false" aria-current="date" aria-selected="false">17</div>
                                                            <div class="react-datepicker__day react-datepicker__day--018 react-datepicker__day--disabled" tabindex="-1" aria-label="Not available Tuesday, February 18th, 2025" role="option" title="" aria-disabled="true" aria-selected="false">18</div>
                                                            <div class="react-datepicker__day react-datepicker__day--019 react-datepicker__day--disabled" tabindex="-1" aria-label="Not available Wednesday, February 19th, 2025" role="option" title="" aria-disabled="true" aria-selected="false">19</div>
                                                            <div class="react-datepicker__day react-datepicker__day--020 react-datepicker__day--disabled" tabindex="-1" aria-label="Not available Thursday, February 20th, 2025" role="option" title="" aria-disabled="true" aria-selected="false">20</div>
                                                            <div class="react-datepicker__day react-datepicker__day--021 react-datepicker__day--disabled" tabindex="-1" aria-label="Not available Friday, February 21st, 2025" role="option" title="" aria-disabled="true" aria-selected="false">21</div>
                                                            <div class="react-datepicker__day react-datepicker__day--022 react-datepicker__day--disabled react-datepicker__day--weekend" tabindex="-1" aria-label="Not available Saturday, February 22nd, 2025" role="option" title="" aria-disabled="true" aria-selected="false">22</div>
                                                        </div>
                                                        <div class="react-datepicker__week">
                                                            <div class="react-datepicker__day react-datepicker__day--023 react-datepicker__day--disabled react-datepicker__day--weekend" tabindex="-1" aria-label="Not available Sunday, February 23rd, 2025" role="option" title="" aria-disabled="true" aria-selected="false">23</div>
                                                            <div class="react-datepicker__day react-datepicker__day--024 react-datepicker__day--disabled" tabindex="-1" aria-label="Not available Monday, February 24th, 2025" role="option" title="" aria-disabled="true" aria-selected="false">24</div>
                                                            <div class="react-datepicker__day react-datepicker__day--025 react-datepicker__day--disabled" tabindex="-1" aria-label="Not available Tuesday, February 25th, 2025" role="option" title="" aria-disabled="true" aria-selected="false">25</div>
                                                            <div class="react-datepicker__day react-datepicker__day--026 react-datepicker__day--disabled" tabindex="-1" aria-label="Not available Wednesday, February 26th, 2025" role="option" title="" aria-disabled="true" aria-selected="false">26</div>
                                                            <div class="react-datepicker__day react-datepicker__day--027 react-datepicker__day--disabled" tabindex="-1" aria-label="Not available Thursday, February 27th, 2025" role="option" title="" aria-disabled="true" aria-selected="false">27</div>
                                                            <div class="react-datepicker__day react-datepicker__day--028 react-datepicker__day--disabled" tabindex="-1" aria-label="Not available Friday, February 28th, 2025" role="option" title="" aria-disabled="true" aria-selected="false">28</div>
                                                            <div class="react-datepicker__day react-datepicker__day--001 react-datepicker__day--disabled react-datepicker__day--weekend react-datepicker__day--outside-month" tabindex="-1" aria-label="Not available Saturday, March 1st, 2025" role="option" title="" aria-disabled="true" aria-selected="false">1</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="react-datepicker__tab-loop__end" tabindex="0"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="mb-2 input-group position-relative">
                                    <select className="form-select" name="type">
                                        <option value="" disabled>Select Report Type</option>
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

                            <div className="col-lg-2 col-6">
                                <div className="mb-2 input-group position-relative">
                                    <span className="me-2">Search:</span>
                                    <input type="search" className="form-control" placeholder="1 records..." />
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
                                    <tr role="row">
                                        <td className="report-date">17/02/2025 13:26:00</td>
                                        <td className="report-sr text-end">1</td>
                                        <td className="report-amount text-end">
                                            <span className="text-success">1,500</span>
                                        </td>
                                        <td className="report-amount text-end">
                                            <span></span>
                                        </td>
                                        <td className="report-amount text-end">
                                            <span className="text-success">1,500</span>
                                        </td>
                                        <td>Opening Pts</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccStatement;
