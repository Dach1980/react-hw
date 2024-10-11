// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
import React from "react";
import useJsonFetch from "../../hooks/useJsonFetch"

// const app = express();

// app.use(cors());
// app.use(
//   bodyParser.json({
//     type(req) {
//       return true;
//     },
//   })
// );
// app.use(function (req, res, next) {
//   res.setHeader("Content-Type", "application/json");
//   next();
// });

// app.get("/data", async (req, res) => {
//   res.send(JSON.stringify({ status: "ok" }));
// });


export default function Data() {
  const url = 'http://localhost:7070/'
  const opts = 'data'
  const [data, error, loading] = useJsonFetch(url, opts);

  return (
    data && <div className="component">
      <h1 className="component__title">Успешное получение данных</h1>
      <p className="component__content">
        {data && JSON.stringify(data)}
        {data && `{"status":"${data}"}`}
      </p>
      <hr/>
    </div>
  )
}
