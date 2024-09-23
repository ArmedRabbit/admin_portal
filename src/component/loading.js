import React from "react";
import { Spin } from "antd"

export default function LoadingPage() {
  return (
    <div className="spin">
      <Spin fullscreen={true} wrapperClassName="root" size="large" spin />
    </div>
  )
}