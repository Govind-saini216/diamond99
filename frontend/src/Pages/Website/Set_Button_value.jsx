import React, { useEffect, useRef, useState } from 'react';

const SetButtonModal = ({ isModalVisible, handleCloseModal, activeTab, handleTabClick, handleSubmit, handleUpdate }) => {
    const modalRef = useRef(null);
    const [isTabContentVisible, setTabContentVisible] = useState(false);

    useEffect(() => {
        if (isModalVisible) {
            document.body.classList.add('no-scroll');
            setTimeout(() => {
                setTabContentVisible(true);
            }, 100);
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isModalVisible]);

    const handleClickOutside = (event) => {
        if (isModalVisible && modalRef.current && !modalRef.current.contains(event.target)) {
            handleCloseModal();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalVisible]);

    if (!isModalVisible) return null;

    return (
        <> <div class="fade modal-backdrop show "></div>
            <div role="dialog" aria-modal="true" class="fade modal show over" tabindex="-1" style={{ display: "block", paddingRight: "17px", }} onClick={(e) => e.stopPropagation()}  >
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
                                            <div className="mb-3 col-6 position-relative">
                                                <input name="buttons[0].btxt" type="text" className="form-control" value="1k" />
                                            </div>
                                            <div className="mb-3 col-6 position-relative">
                                                <input name="buttons[0].bval" type="text" className="form-control" value="1000" />
                                            </div>
                                            <input name="buttons[0].bid" type="hidden" className="form-control" value="72592949" />
                                        </div>

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
    );
};

export default SetButtonModal;
