import React, { Fragment, useState, useEffect, useCallback } from "react";
import { Row, Col } from "reactstrap";
import Loading from "../components/Loading";
import axios from 'axios';
import ProfileCard from "../components/ProfileCard";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Premium = () => {
  const { user } = useAuth0();
  
  let [responseData, setResponseData] = useState('');

  const fetchData = useCallback(() => {
    axios({
      "method": "GET",
      "url": "https://randomuser.me/api/?results=20",
      "headers": {
        "content-type": "application/json",
      }
    })
    .then((response) => {
      console.log("results:", response.data.results);
      setResponseData(response.data.results)     
    })
    .catch((error) => {
      console.log("App: "+ error)
    })
  }, [])

 useEffect(() => {
    fetchData()
  }, [fetchData])


  const handleClick = (e, key) => {
    let newResponseData = [...responseData]
    newResponseData = [...newResponseData.filter((user) => user.login.uuid !== key)]
    console.log(newResponseData);
    setResponseData(newResponseData)
  }

  return (
  <Fragment>
    <h1 className="mb-5">Félicitation, vous faites partie de nos membres</h1>
    <Row>
      <div className="row m-2">
        {responseData && 
          responseData.map((user) =>
          <div className="col-12 col-sm-6 col-md-4 col-xl-3 col-xxl-2 my-2 d-flex justify-content-center">
            <ProfileCard key={user.login.uuid} user={user} handleClick={(e) => handleClick(e, user.login.uuid)} />
          </div>
        )}
      </div>
    </Row>
  </Fragment>
)};

export default withAuthenticationRequired(Premium, {
  onRedirecting: () => <Loading />,
});