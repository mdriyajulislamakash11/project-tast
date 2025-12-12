import React, { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";

const Dashboard = () => {
  const [invoices, setInvoices] = useState([]);
 

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setInvoices(data);
      });
  }, []);

  //   handle edit
  const handleEdit = (id) => {
    console.log(id);
  };

  //   handle Delete
  const handleDelete = (id) => {
    const remainingData = invoices.filter((invoice) => invoice.invoiceId !== id)
    setInvoices(remainingData)
  };

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
            <button className="rounded btn btn-outline flex items-center gap-3">
              {" "}
              <FaCalendar /> Last 7 Days
            </button>
          </div>
          <p className="text-xl font-semibold mt-2">Total Sales</p>
          <h1 className="text-2xl font-bold">$1,637</h1>
        </div>
        {/* card 1 */}
        <div className="shadow-md p-4 my-4 w-80 bg-white">
          <div className="flex justify-end">
            <button className="rounded btn btn-outline flex items-center gap-3">
              {" "}
              <FaCalendar /> Last 7 Days
            </button>
          </div>
          <p className="text-xl font-semibold mt-2">
            Total Outstanding Balance
          </p>
          <h1 className="text-2xl font-bold">$1,637</h1>
        </div>
        {/* card 1 */}
        <div className="shadow-md p-4 my-4 w-80 bg-white">
          <div className="flex justify-end">
            <button className="rounded btn btn-outline flex items-center gap-3">
              {" "}
              <FaCalendar /> Last 7 Days
            </button>
          </div>
          <p className="text-xl mt-2 font-semibold">Total Estimate</p>
          <h1 className="text-2xl font-bold">$1,637</h1>
        </div>
        {/* card 1 */}
        <div className="shadow-md bg-white p-4 my-4 w-80">
          <div className="flex justify-end">
            <button className="rounded btn btn-outline flex items-center gap-3">
              {" "}
              <FaCalendar /> Last 7 Days
            </button>
          </div>
          <p className="text-xl mt-2 font-semibold">Total Refunds</p>
          <h1 className="text-2xl font-bold">$1,637</h1>
        </div>
      </div>

      {/* fillet sort etc */}
      <div></div>

      {/* Table */}
      <div className="overflow-x-auto mt-5">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th className="font-bold text-black">No</th>
              <th className="font-bold text-black">Invoice</th>
              <th className="font-bold text-black">Customer Name</th>
              <th className="font-bold text-black">Status</th>
              <th className="font-bold text-black">Order Number</th>
              <th className="font-bold text-black">Amount </th>
              <th className="font-bold text-black">Tender Type</th>
              <th className="font-bold text-black">Date</th>
              <th className="font-bold text-black">Action </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {invoices.map((invoice, index) => (
              <tr key={invoice.invoiceId}>
                <th>{index + 1}</th>
                <td>{invoice.invoiceId}</td>
                <td>{invoice.customerName}</td>
                <td>
                  <span
                    className={
                      invoice.status.toLowerCase() === "paid"
                        ? "text-green-600 bg-green-200 px-7 border-2 rounded-lg"
                        : "text-red-600  bg-red-200 px-5 border-2 rounded-lg"
                    }
                  >
                    {invoice.status}
                  </span>
                </td>
                <td>{invoice.invoiceId}</td>
                <td>{invoice.amount}</td>
                <td>{invoice.paymentType}</td>
                <td>{invoice.issueDate}</td>
                <td>
                  <div className="dropdown dropdown-top dropdown-end">
                    <div tabIndex={0} role="button" className=" m-1">
                      ...
                    </div>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                    >
                      <li>
                        <button onClick={() => handleEdit(invoice.invoiceId)}>
                          Edit
                        </button>
                      </li>
                      <li>
                        <button onClick={() => handleDelete(invoice.invoiceId)}>
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
