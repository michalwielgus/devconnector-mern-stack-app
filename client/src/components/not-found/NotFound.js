import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1 className="display-4">Page Not Found</h1>
      <p>Sorry, this page does not exists.</p>
      <a href="/profiles" className="btn btn-light">
        Back to Profiles List
      </a>
    </div>
  );
};

export default NotFound;
