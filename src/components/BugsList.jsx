import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUnresolveBugs, loadBugs } from "../store/bugs";

const BugsList = () => {
  const dispatch = useDispatch();
  const bugs = useSelector(getUnresolveBugs);

  useEffect(() => {
    dispatch(loadBugs());
  }, []);
  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug.id}>{bug.description}</li>
      ))}
    </ul>
  );
};

export default BugsList;
