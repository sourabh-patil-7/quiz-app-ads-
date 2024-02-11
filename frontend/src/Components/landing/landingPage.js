import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-center pt-16 text-4xl font-bold">
        Welcome to Walchand College of Engineering
      </h1>
      <div className="flex justify-center items-center">
        <div className="mt-10">
          <Link
            to="/studentLogin"
            className="m-4 bg-gray-500 text-white rounded-md px-4 py-2"
          >
            Student Login
          </Link>
          <Link
            to="/facultyLogin"
            className="m-4 bg-gray-500 text-white rounded-md px-4 py-2"
          >
            Faculty Login
          </Link>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-10 px-4">
        <p className="text-gray-700 text-justify">
          Walchand College of Engineering is situated midway between Sangli and
          Miraj cities at Vishrambag, Sangli. The WCE campus is located on about
          90 acres of land on the southern side of Sangli – Miraj road. In 1947,
          the college made a modest beginning as New Engineering College, with a
          single program leading to B.E. (Civil) degree. In the year 1955, the
          College was renamed as Walchand College of Engineering as part of the
          new arrangements and pursuant to the Rehabilitation and Development
          Program mainly funded by Seth Walchand Hirachand Memorial Trust and
          the Government. The Government appointed an Ad Hoc Committee for
          conducting the college from May 1955, later replaced by the
          Administrative Council in 1956. The Ad Hoc Committee added two more
          degree programs in B.E. (Mechanical) and B.E. (Electrical) in 1955
          with the intake of 20 each. Three Diploma programs also started in
          1955 – Civil (40 intake), Mechanical (20), and Electrical (20).
        </p>
      </div>
    </div>
  );
}

export default Landing;
