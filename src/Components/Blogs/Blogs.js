import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="bg bg-info my-2">
      <h1 className="mx-5">Some Basic Question & Answer</h1>
      <div className="blogs-part">
        <h3>
          What is the difference between authorization and authentication?
        </h3>

        <p>
          The process of verifying and confirming employees ID and passwords in
          an organization is called authentication, but determining which
          employee has access to which floor is called authorization.
          Authentication is done before the authorization process, whereas
          authorization process is done after the authentication process. The
          authorization has priority over authentication. Authorization asks
          what permission does the user have in order to access the system.
        </p>
      </div>
      <div className="blogs-part">
        <h3>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>

        <p>
          Firebase is a free service provided by Google which can be build rich
          and collaborative applications by allowing secure access to the
          database directly from client-side code. Firebase is simple,
          lightweight, friendly, and industrially recognized. It reduces
          development workload and time. Other ways to authenticate can be
          through cards, retina scans, voice recognition, and fingerprints.
        </p>
      </div>
      <div className="blogs-part">
        <h3>
          What other services does firebase provide other than authentication?
        </h3>

        <p>
          There are many services which Firebase provides. Most useful of them
          are: Firebase Realtime Database, Cloud Firestore, Cloud Functions,
          Authentication, Hosting, Cloud Storage, Google Analytics, Predictions
          and Cloud Messaging.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
