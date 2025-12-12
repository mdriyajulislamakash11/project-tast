import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInvoices(data)
      });
  }, []);



  console.log(invoices);

  return <div>
    <div className="flex justify-between ">
        {/* content */}
        <div>
            <h2 className="text-4xl font-bold ">Good afternoon, Alex </h2>
            <p>Today is Thursday, June 19, 2025</p>
        </div>

        {/* button */}
        <div>
            <button>+ Create Invoices</button>
        </div>
    </div>

  </div>;
};

export default Dashboard;
