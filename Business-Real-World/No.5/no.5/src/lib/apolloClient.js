import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://trusty-mustang-72.hasura.app/v1/graphql",
    headers: {
      "x-hasura-admin-secret":
        "r9ikh3NT2Mb1piC15xiB96iqMj49lOdGyi35lCegxHt2xw2hmUUJXMwmslH4bERT",
    },
  }),
  cache: new InMemoryCache(),
});
