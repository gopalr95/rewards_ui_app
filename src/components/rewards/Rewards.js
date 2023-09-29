import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Rewards.css";
import CustomerData from "../customer-data/CustomerData";
import RewardsError from "../rewards-error/RewardsError";

function Rewards() {
  const [customerId, setCustomerId] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [customerData, setCustomerData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      // Fetch customer data based on customerId, startDate, and endDate
      axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
      axios.defaults.headers.get["Content-Type"] = "application/json";
      axios.defaults.headers.get["Accept"] = "application/json";
      const response = await axios.get(
        `http://localhost:8082/rewards/customer/${customerId}`,
        {
          params: {
            startDate,
            endDate,
          },
        }
      );

      setCustomerData(await response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error.response.data.errorMessage);
      setError(error);
      setCustomerData(null);
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="header">
          <div className="text">Rewards Application</div>
        </div>
        <div className="inputs">
          <div className="input">
            <label> Customer ID </label>
            <input
              type="text"
              placeholder="Customer ID Number"
              value={customerId}
              required="true"
              maxLength={6}
              onChange={(e) => setCustomerId(e.target.value)}
            />
            <span>"length should be b/w 4 to 6"</span>
          </div>
          <div className="input">
            <label> Start Date </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required="true"
            />
            <span>"start date is required"</span>
          </div>
          <div className="input">
            <label> End Date </label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required="true"
            />
            <span>"end date is required"</span>
          </div>
          <div className="submit-container">
            <div className="btn btn-secondary" onClick={fetchData}>
              Submit
            </div>
          </div>
        </div>

        <CustomerData
          customerData={customerData}
          fromDate={startDate}
          toDate={endDate}
        />
        <RewardsError error={error} />
      </div>
    </div>
  );
}

export default Rewards;
