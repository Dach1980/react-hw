import React from "react";
import useJsonFetch from "../../hooks/useJsonFetch";

export default function Loading() {
  const url = 'http://localhost:7070/'
  const opts = 'loading'
  const [data, error, loading] = useJsonFetch(url, opts);

  return (
    <div className="component">
      <h1 className="component__title">Индикатор загрузки</h1>
      <p className="component__content">
        {loading ? 'Loading...' : JSON.stringify(data)}
      </p>
      <hr/>
    </div>
  )
}