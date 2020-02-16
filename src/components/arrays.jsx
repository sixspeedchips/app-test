import React from "react";

const Arrays = props => {
  return (
    <ul>
      {this.data.map(s => (
        <p>
          {s.code + " "}
          {s.diagnosis}
        </p>
      ))}
    </ul>
  );
};

export default Arrays;
