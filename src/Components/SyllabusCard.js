import React from "react";

const SyllabusCard = ({ item }) => {
  return (
    <div className="pt-2">
      <h1 className="text-xl leading-tight">
        Week {item.week} <br />{" "}
        <span className="text-lg text-gray-600">{item.topic}</span>
      </h1>

      <p className="pl-1 text-gray-500">- {item.content}</p>
    </div>
  );
};

export default SyllabusCard;
