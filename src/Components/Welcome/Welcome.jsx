import React from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
        {location.state?.message && (
                              <div className="alert alert-success">
                                {location.state.message}
                              </div>
                            )}
      <h1>Welcome</h1>
    </div>
  )
}

export default Welcome
