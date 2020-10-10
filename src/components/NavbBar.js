import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <Link className="link" to="/" exact="true">
          Take Me Home
        </Link>
        <a
          href="https://apod.nasa.gov/apod/archivepix.html"
          target="_blank noopener nonreferrer"
        >
          Apod Archive
        </a>
      </ul>
    </div>
  );
}
