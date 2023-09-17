import React, { useContext, useEffect, useState } from "react";
import "./Main.css";
import Search from "./SearchSection/Search";
import { MyContext } from "../Context/MyContext";
import DataCart from "./DataCart/DataCart";

export default function Main() {
  // Accessing state and context from MyContext
  const { CapsuleData, setCapsuleData, filteredCapsules, setFilteredCapsules } =
    useContext(MyContext);

  // Authentication key for fetching data
  const AuthenticationKey = 7777;

  // State for current page and items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Function to calculate total number of pages based on filtered data
  const calculateTotalPages = () => {
    return Math.ceil(filteredCapsules.length / itemsPerPage);
  };

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("https://spacexapi.onrender.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: AuthenticationKey }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();

        // Set the fetched data to CapsuleData and filteredCapsules
        setCapsuleData(result);
        setFilteredCapsules(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [setCapsuleData]);

  // Calculate total number of pages
  const totalPages = calculateTotalPages();

  // Calculate the index of the last and first item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the current items to display based on the current page
  const currentItems = filteredCapsules.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <>
      <section className="Main">
        <Search />
        {currentItems.length > 0 ? (
          <div className="DisplayArea">
            {currentItems.map((data) => (
              <DataCart key={data.capsule_serial} data={data} />
            ))}
          </div>
        ) : (
          <div className="NodataClass">
            <div id="nodata"></div>
          </div>
        )}
        {/* Pagination */}
        <div className="Pagination mt-4 flex justify-center">
          <ul className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`cursor-pointer rounded-full w-8 h-8 flex items-center justify-center border border-gray-700 ${
                  currentPage === index + 1
                    ? "bg-gray-800 text-white font-bold"
                    : "hover:bg-gray-600"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
