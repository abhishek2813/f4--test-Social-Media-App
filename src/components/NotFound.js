import React from 'react'
import {Link} from "react-router-dom";
import "../App.css"
function NotFound() {
  return (
   <div className="container">
  <h2>404</h2>
  <h3>Oops, nothing here...</h3>
  <p>Please Check the URL</p>
  <p>Otherwise, Click to redirect to homepage.</p>
  <Link className="text-center text-decoration-none" to={`/`}>
          <button className="btn btn-dark">Home</button>
        </Link>
</div>

  )
}

export default NotFound