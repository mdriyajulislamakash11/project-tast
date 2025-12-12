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
    <div>
        {/* content */}
        <div></div>

        {/* button */}
        <div></div>
    </div>

  </div>;
};

export default Dashboard;
