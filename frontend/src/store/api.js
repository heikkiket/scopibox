const endpoint = process.env.VUE_APP_API_URL;

const buildGeneral = (payload) => JSON.stringify(payload);

const buildQuery = (query) => buildGeneral({ query: query });
const buildMutation = (mutation, variables) =>
  buildGeneral({ query: mutation, variables: variables });

export default function () {
  let token = "";

  const doFetch = async (fn) =>
    await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...authorization(),
      },
      body: fn,
    }).then(async (result) => await result.json());

  const authorization = () => {
    if (token) return { Authorization: "Bearer ".concat(token) };
    else return {};
  };

  const setToken = (incomingToken) => (token = incomingToken);

  return {
    query: async (query) => {
      return doFetch(buildQuery(query));
    },
    mutation: async(query, variables) => {
      if (variables) return doFetch(buildMutation(query, variables));
      return doFetch(buildMutation(query));
    },
    setToken,
    collectCodes: (errors) => errors.map((e) => e.extensions.code),
  };
}
