import loadSchema from "./loadSchema.js";
import { gql } from "apollo-server"

const rootSchema = gql`
type Query {
_empty: String
}
type Mutation {
_empty: String
}
`;
const videoSchema = loadSchema("video.graphql");
const userSchema = loadSchema("user.graphql");

export default [rootSchema, videoSchema, userSchema];
