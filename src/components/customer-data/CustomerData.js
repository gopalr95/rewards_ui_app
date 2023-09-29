import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerData = ({ customerData, fromDate, toDate }) => {
  return (
    <div>
      {customerData && (
        <div>
          <table className="table table-sm table-striped table-dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Duration</th>
                <th>Monthly Rewards</th>
              </tr>
            </thead>
            <tbody>
              {customerData.monthlyRewards.map((monthlyReward, i) => (
                <tr key={i + 1}>
                  <td>{i + 1}</td>
                  <td>{monthlyReward.monthPeriod}</td>
                  <td>{monthlyReward.monthlyRewards}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="table table-sm table-striped table-dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Total Duration</th>
                <th>Total Rewards</th>
              </tr>
            </thead>
            <tbody>
              <tr key="trewards">
                <td>1</td>
                <td>
                  {fromDate} to {toDate}
                </td>
                <td>{customerData.totalRewards}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CustomerData;
