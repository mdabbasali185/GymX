import React from "react";
import './Blogs.css'

const Blogs = () => {
  return (
    <div className="about-title">
      <div className="container">
        <h1>1.Difference Between authentication and authorization. </h1>
        <p>
          Ans:Authentication verifies who the user is. Authorization determines
          what resources a user can access. Authentication works through
          passwords, one-time pins, biometric information, and other information
          provided or entered by the user. Authorization works through settings
          that are implemented and maintained by the organization.Authentication
          is the first step of a good identity and access management process.
          Authorization is the function of specifying access rights/privileges
          to resources, which is related to general information security and
          computer security, and to access control in particular. More formally,
          "to authorize" is to define an access policy.
        </p>
        <h1>
          2.Why are you using firebase?What other options do you have to
          implement authentication?
        </h1>
        <p>
          Ans: Google Firebase is an application development platform that
          allows developers to create iOS, Android, and Web apps. Google
          Firebase offers many features that pitch it as the go-to backend
          development tool for web and mobile apps. It reduces development
          workload and time. And it's a perfect prototyping tool. Firebase is
          simple, lightweight, friendly, and industrially recognized. It
          provides services to android, ios, web, and unity. It provides cloud
          storage. It uses NoSQL for the database for the storage of data.
          Password-based authentication, Two-factor/multifactor authentication,
          Biometric authentication, Single sign-on, Token-based authentication.
        </p>
        <h1>
          
          What other services does firebase provide other than authentication?
        </h1>
        <p>
          In Firebase Authentication, there are two main types of
          authentication. This classification represents the difference in
          authentication timing and active relationship. 1.User Authentication
          2.Anonymous Authentication.User authentication is an active authentication performed by the user. It uses an email address or an authentication provider to authenticate.The timing of anonymous authentication may vary depending on the configuration, but it is basically passive. In most cases, it does not have to be at page load time, and can be done after user interaction 
        </p>
      </div>
    </div>
  );
};

export default Blogs;
