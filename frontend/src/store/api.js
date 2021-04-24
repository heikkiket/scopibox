const endpoint = "http://localhost:8081/graphql/";

const buildQuery = (query) =>
  JSON.stringify({
    query: query,
    variables: {},
  });

export default async (query) => {
  return await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: buildQuery(query),
  });
}
