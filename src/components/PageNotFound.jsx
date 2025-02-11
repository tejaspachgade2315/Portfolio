import React from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.2rem",
    maxWidth: "30rem",
    lineHeight: "1.5",
  },
};

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
    </div>
  );
};

export default PageNotFound;
