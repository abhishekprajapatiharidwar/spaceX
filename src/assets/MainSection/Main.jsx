import React, { useContext, useEffect, useState } from 'react';
import './Main.css';
import Search from './SearchSection/Search';
import { MyContext } from '../Context/MyContext';
import DataCart from './DataCart/DataCart';

export default function Main() {
  const { CapsuleData, setCapsuleData, filteredCapsules, setFilteredCapsules } = useContext(MyContext);
  const AuthenticationKey = 7777;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const calculateTotalPages = () => {
    return Math.ceil(filteredCapsules.length / itemsPerPage);
  };

  useEffect(() => {
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
        setCapsuleData(result);
        setFilteredCapsules(result);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [setCapsuleData]);

  const totalPages = calculateTotalPages();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredCapsules.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <section className='Main'>
        <Search />
        {currentItems.length > 0 ? (
          <div className='DisplayArea'>
            {currentItems.map((data) => (
              <DataCart key={data.capsule_serial} data={data} />
            ))}
          </div>
        ) : (
          <h1 className="text-2xl font-semibold mt-6 text-center">Data not available</h1>
        )}

        <div className="Pagination mt-4 flex justify-center">
          <ul className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index}
                className={`cursor-pointer rounded-full w-8 h-8 flex items-center justify-center border border-gray-300 ${currentPage === index + 1 ? 'bg-blue-500 text-white font-bold' : 'hover:bg-blue-200'}`}
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
