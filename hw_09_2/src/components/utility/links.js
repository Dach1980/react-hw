const url = new URL(window.location.href);

url.hostname === 'localhost'
url.port = '7070';

const root = url;
root.pathname = '';

const links = root.origin;

export default links;