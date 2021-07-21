import React from "react";

const Worker = React.createContext({
    worker: "",
    setWorker: (e: any) => {},
});

export default Worker;