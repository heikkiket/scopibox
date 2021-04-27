const endpoint = "http://localhost:8081/graphql/";

const buildGeneral = (payload) => JSON.stringify(payload);

const buildQuery = (query) => buildGeneral({ query: query });
const buildMutation = (mutation, variables) =>
  buildGeneral({ query: mutation, variables: variables });

const doFetch = async (fn) =>
  await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer ".concat(window.token),
    },
    body: fn,
  });

export default async (query, variables) => {
  if (variables) return doFetch(buildMutation(query, variables));
  return doFetch(buildQuery(query));
};
