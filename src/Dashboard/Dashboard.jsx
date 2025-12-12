import React, { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";

const Dashboard = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInvoices(data);
      });
  }, []);

  console.log(invoices);

  return (
    <div>
      <div className="flex justify-between ">
        {/* content */}
        <div>
          <h2 className="text-4xl font-bold ">Good afternoon, Alex </h2>
          <p>Today is Thursday, June 19, 2025</p>
        </div>

        {/* button */}
        <div>
          <button className="py-2 px-8 bg-green-700 rounded text-white">
            + Create Invoices
          </button>
        </div>
      </div>

      {/* KPI Card */}
      <div className="flex gap-2   px-2">
        {/* card 1 */}
        <div className="shadow-md p-4 my-4 w-80 bg-white">
            <div className="flex justify-end">
                <button className="rounded btn btn-outline flex items-center gap-3"> <FaCalendar /> Last 7 Days</button>
            </div>
            <p className="text-xl font-semibold mt-2">Total Sales</p>
            <h1 className="text-2xl font-bold">$1,637</h1>
        </div>
        {/* card 1 */}
        <div className="shadow-md p-4 my-4 w-80 bg-white">
            <div className="flex justify-end">
                <button className="rounded btn btn-outline flex items-center gap-3"> <FaCalendar /> Last 7 Days</button>
            </div>
            <p className="text-xl font-semibold mt-2">Total Outstanding Balance</p>
            <h1 className="text-2xl font-bold">$1,637</h1>
        </div>
        {/* card 1 */}
        <div className="shadow-md p-4 my-4 w-80 bg-white">
            <div className="flex justify-end">
                <button className="rounded btn btn-outline flex items-center gap-3"> <FaCalendar /> Last 7 Days</button>
            </div>
            <p className="text-xl mt-2 font-semibold">Total Estimate</p>
            <h1 className="text-2xl font-bold">$1,637</h1>
        </div>
        {/* card 1 */}
        <div className="shadow-md bg-white p-4 my-4 w-80">
            <div className="flex justify-end">
                <button className="rounded btn btn-outline flex items-center gap-3"> <FaCalendar /> Last 7 Days</button>
            </div>
            <p className="text-xl mt-2 font-semibold">Total Refunds</p>
            <h1 className="text-2xl font-bold">$1,637</h1>
        </div>


      </div>

    </div>
  );
};

export default Dashboard;
