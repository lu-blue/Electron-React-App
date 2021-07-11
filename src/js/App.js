import React from "react";

export default function App() {
  return (
    <>
      <h1>My first Electron App Component!!!</h1>
      <button
        onClick={() => {
          electron.notificationApi.sendNotification("Hello there!");
        }}
      >
        Notify
      </button>
    </>
  );
}
