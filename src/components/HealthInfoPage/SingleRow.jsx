import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import UserHealthForm from "./UserHealthForm";
import ReadOnly from "./ReadOnly";
function HealthInfoPage() {
  const user = useSelector((store) => store.user);

  const [editHealthInfo, setEditHealthInfo] = useState();

  function toggleEdit() {
    setEditHealthInfo(!editHealthInfo);
  }

  return (
    <>
      <Fragment>
        {editHealthInfo === true ? (
          <UserHealthForm />
        ) : (
          <ReadOnly toggleEdit={toggleEdit} />
        )}
      </Fragment>
    </>
  );
}

export default HealthInfoPage;
