import React, { FunctionComponent } from "react";
import loading from "../assets/loading.svg";

type Props = {
  fullscreen: boolean
}

const Loading:FunctionComponent<Props> = ({fullscreen = true}) => {

  return (
    <div className={fullscreen ? "spinner-fullscreen" : "spinner-container"}>
      <img src={loading} alt="Loading" />
    </div>
  )};

export default Loading;
