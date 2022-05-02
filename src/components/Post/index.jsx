import { gql, useQuery } from "@apollo/client";
import React from "react";

export const POST_QUERY = gql`
  query ($id: String) {
    post(id: $id) {
      id
      author
      description
    }
  }
`;

export default function Post({ id }) {
  const { loading, error, data } = useQuery(POST_QUERY, {
    variables: {
      id,
    },
  });

  console.log(loading, error, data);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  return (
    <h1>
      {data.post.id} - {data.post.author} - {data.post.description}
    </h1>
  );
}
