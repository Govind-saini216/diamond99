// MainContext.js
import React, { createContext, useState, useEffect } from "react";
import { Tooltip } from "bootstrap";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
    const [selectedType, setSelectedType] = useState(""); // Report Type
    const [perPage, setPerPage] = useState(10); // Pagination: items per page
    const [currentPage, setCurrentPage] = useState(1); // Pagination: current page
    const [searchQuery, setSearchQuery] = useState(""); // Search query
    const [filteredData, setFilteredData] = useState([]); // Data after filtering
    const [searchFilteredData, setSearchFilteredData] = useState([]); // Data after search
    const [showNotification, setShowNotification] = useState(false); // Notification visibility
    const [isReversing, setIsReversing] = useState(false); // Reverse animation
    const [loading, setLoading] = useState(false); // Add loading state
    // const browserDetails = navigator.userAgent;

    // const data = [
    //     { username: 'ak894', date: '21/02/2025 16:03:53', ip: '2402:e280:2324:32d:854:6f53:46ed:ee56', type: 'login' },
    //     { username: 'ak894', date: '21/02/2025 16:02:04', ip: '2402:e280:2324:32d:a86e:a284:c725:65cd', type: 'login' },
    //     { username: 'ak894', date: '21/02/2025 15:59:20', ip: '2402:e280:2324:32d:44d6:6435:d1b9:967a', type: 'login' },
    //     { username: 'ak894', date: '21/02/2025 13:03:13', ip: '2402:e280:2324:32d:854:6f53:46ed:ee56', type: 'login' },
    //     { username: 'ak894', date: '21/02/2025 07:52:02', ip: '2402:e280:2324:4f:b959:c84a:1767:3f33', type: 'password' },
    // ];

    useEffect(() => {
        const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        tooltips.forEach((tooltipEl) => {
            const tooltipInstance = Tooltip.getInstance(tooltipEl);
            if (tooltipInstance) {
                tooltipInstance.dispose();
            }
            new Tooltip(tooltipEl);
        });
    }, [filteredData]);


    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    const currentData = searchFilteredData.slice(indexOfFirst, indexOfLast);

    const nextPage = () => {
        if (currentPage < Math.ceil(filteredData.length / perPage)) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
    const goToPage = (page) => page >= 1 && setCurrentPage(page);
    const firstPage = () => setCurrentPage(1);
    const lastPage = () => setCurrentPage(Math.ceil(filteredData.length / perPage));

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!selectedType) {
    //         setIsReversing(false);
    //         setShowNotification(true);
    //         setTimeout(() => {
    //             setIsReversing(true);
    //             setTimeout(() => setShowNotification(false), 350);
    //         }, 3000);
    //     } else {
    //         filterData();
    //     }
    // };

    const handleLogTypeChange = (e) => {
        setSelectedType(e.target.value);
        setFilteredData([]);
    };

    useEffect(() => {
        const searchLower = searchQuery.toLowerCase();
        const searchFiltered = filteredData.filter((item) =>
            item.username.toLowerCase().includes(searchLower) ||
            item.date.toLowerCase().includes(searchLower) ||
            item.ip.toLowerCase().includes(searchLower)
        );
        setSearchFilteredData(searchFiltered);
    }, [searchQuery, filteredData]);

    return (
        <MainContext.Provider
            value={{
                selectedType, setSelectedType,
                perPage, setPerPage,
                currentPage, setCurrentPage,
                searchQuery, setSearchQuery,
                filteredData, setFilteredData,
                searchFilteredData, setSearchFilteredData,
                showNotification, setShowNotification,
                isReversing, setIsReversing,
                currentData,
                nextPage, prevPage, goToPage,
                firstPage, lastPage,
                handleLogTypeChange, loading, setLoading
            }}
        >
            {children}
        </MainContext.Provider>
    );
};
