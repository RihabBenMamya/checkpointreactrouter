import React, { Component } from "react";

export default function Footer() {
  return (
    <>
      <footer>
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © {new Date().getFullYear()}{" "}
                <h3>checkpoint Movie App</h3>
              </div>
           
      </footer>
    </>
  );
}
