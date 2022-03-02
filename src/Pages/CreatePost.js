import React, { Fragment, useContext } from "react";
import Create from "../components/Create/Create";
import Login from "../components/SignIn/SignIn";

const CreatePage = () => {
  const user=true;

  return (
    <Fragment>
      {user ? (
        <Create />
      ) : (
        <>          
          {alert("You must login first")} <Login />
        </>
      )}
    </Fragment>
  );
};

export default CreatePage;