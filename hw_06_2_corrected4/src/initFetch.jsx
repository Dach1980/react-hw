export default function initFetch(baseUrl) {
  function handleResponse(response) {
    if (!response.ok) {
      return Promise.reject(new Error('Network response was not ok'));
    }
    // Проверяем, есть ли тело ответа
    if (response.status === 204) {
      // Если статус 204 (No Content), возвращаем пустой объект или null
      return {};
    }
    // Если тело есть, пытаемся его распарсить
    return response.json();
  }

  function request(method, url, body = null) {
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    return fetch(baseUrl + url, options)
      .then(handleResponse)
      .catch(error => {
        console.error('Fetch error:', error);
        return Promise.reject(error);
      });
  }

  function post(url, body) {
    return request("POST", url, body);
  }

  function get(url) {
    return request("GET", url);
  }

  function del(url) {
    return request("DELETE", url);
  }

  return { get, post, del };
}
