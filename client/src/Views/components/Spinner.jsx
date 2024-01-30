import React from "react";

export default function Spinner({ showingApologoies }) {
  return (
    <div className="vh-100"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backdropFilter: "blur(5px)"
        }}
      ></div>
      <div
        style={{
          zIndex: 1,
          textAlign: "center",
        }}
      >
        {showingApologoies ? (
        <div className="bg-secondary text-white rounded p-3 mb-3" style={{ maxWidth: "200px" }}>
          <p>
            Since, I am using free hosting services, so you might have to wait 
            <b> 1 minute </b>
             or so. If it still continues to spin then <a className="text-white" href="/#/">refresh</a>.
          </p>
        </div>
      ) : null}
        <div
          className="spinner-border text-secondary"
          role="status"
          
         />
      </div>
    </div>
  );
}
