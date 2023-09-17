import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../../Context/MyContext";

function Search() {
  // Accessing state and context from MyContext
  const { CapsuleData, setFilteredCapsules } = useContext(MyContext);

  // State variables for filtering criteria
  const [status, setStatus] = useState("");
  const [originalLaunch, setOriginalLaunch] = useState("");
  const [type, setType] = useState("");

  // Function to handle filtering based on selected criteria
  const handleFilter = () => {
    // Start with the full CapsuleData and filter based on status
    let filteredData = CapsuleData;
    if (status) {
      filteredData = filteredData.filter((item) => item.status === status);
    }

    // Filter based on type
    if (type) {
      filteredData = filteredData.filter((item) => item.type === type);
    }

    // Filter based on original launch date
    if (originalLaunch) {
      filteredData = filteredData.filter((item) => {
        const itemDate = new Date(item.original_launch);
        const selectedDate = new Date(originalLaunch);
        return (
          itemDate.getUTCFullYear() === selectedDate.getUTCFullYear() &&
          itemDate.getUTCMonth() === selectedDate.getUTCMonth() &&
          itemDate.getUTCDate() === selectedDate.getUTCDate()
        );
      });
    }

    // Update the filtered data in the context
    setFilteredCapsules(filteredData);
  };

  // Call the handleFilter function when any of the filter criteria changes
  useEffect(() => {
    handleFilter();
  }, [status, originalLaunch, type, setFilteredCapsules]);

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-4">
      {/* Filter section header */}
      <h2 className="text-white text-sm sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4">
        Capsules
      </h2>

      {/* Filter options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        {/* Select for status */}
        <select
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded px-4 py-2 w-full sm:w-auto hover:bg-black hover:text-white"
        >
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="retired">Retired</option>
          <option value="unknown">Unknown</option>
          <option value="destroyed">Destroyed</option>
        </select>

        {/* Input for original launch date */}
        <input
          type="date"
          id="dateholder"
          name="originalLaunch"
          value={originalLaunch}
          placeholder="Original Launch Date"
          onChange={(e) => setOriginalLaunch(e.target.value)}
          className="border rounded px-4 py-2 w-full hover:bg-black hover:text-white"
        />

        {/* Select for type */}
        <select
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border rounded px-4 py-2 w-full sm:w-auto hover:bg-black hover:text-white"
        >
          <option value="">All Type</option>
          <option value="Dragon 1.0">Dragon 1.0</option>
          <option value="Dragon 1.1">Dragon 1.1</option>
          <option value="Dragon 2.0">Dragon 2.0</option>
        </select>
      </div>
    </div>
  );
}

export default Search;
