
function jsonDateReviver(key, value) {
  return value;
}

export default async function graphQLFetch(query, variables = {}) {
  try {
    const response = await fetch(window.ENV.UI_API_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });

    const body = await response.text();
    const result = JSON.parse(body, jsonDateReviver);

    return result.data;
  } catch (e) {
    alert(`Error in sending data to server: ${e.message}`);
  }
}