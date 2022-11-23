import React from "react";
import { useSelector } from "react-redux";
import DormCard from "../DormCard/DormCard";

const DormList = () => {
  const dorms = useSelector((state) => state.foyerReducer.foyers);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: 20,
          flexWrap: "wrap",
        }}
      >
        {dorms.map((dorm) => (
          <DormCard dorm={dorm} key={dorm._id} />
        ))}
      </div>
    </div>
  );
};

export default DormList;
