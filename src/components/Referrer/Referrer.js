import React from "react";
import { ReferrerData } from "../../config/ReferrerData";
import './Referrer.scss';

function Referrer() {
  return (
    <div className="Referrer BoxShadow">
    <h3>Referrer</h3>
      <table className="Table">
        <tr className="Table__Header">
          <th>Location</th>
          <th>Views</th>
          <th>Sales</th>
          <th>Conversion</th>
          <th>Total</th>
        </tr>
        {ReferrerData.map((data, index) => (
          <tr key={index}>
            <td>{data.location}</td>
            <td>{data.views}</td>
            <td>{data.sales}</td>
            <td>{data.conversion}</td>
            <td>{data.total}</td>
          </tr>
        ))}
      <tr>
        <td><a className="ShowMore" href="#show">Show more</a></td>
      </tr>
      </table>
    </div>
  );
}

export default Referrer;
