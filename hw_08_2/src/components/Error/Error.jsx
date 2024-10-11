import useJsonFetch from "../../hooks/useJsonFetch"

export default function Error() {
  const url = 'http://localhost:7070/'
  const opts = 'error'
  const [data, error, loading] = useJsonFetch(url, opts);

  return (
    <div className="component">
      <h1 className="component__title">Получение 500 ошибки</h1>
      <p className="component__content">
        {error && `{"status":"${error}"}`}
      </p>
      <hr/>
    </div>
  )
}