import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocalData } from "../Redux/actions";

const CourseListing = () => {
  const dispatch = useDispatch();
  const { localData, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchLocalData());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!localData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {localData.map((item) => {
        return (
          <div>
            <h1>{item.id}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default CourseListing;
