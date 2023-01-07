import { gql, useMutation } from "@apollo/client";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { GET_USERS } from "../Users";

const DELETE_USER = gql`
  mutation ($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export function DeleteUser({ id }) {
  const [deleteUser, { data }] = useMutation(DELETE_USER);
  async function handleDeleteUser() {
    await deleteUser({
      variables: {
        id,
      },
      refetchQueries: [GET_USERS],
    });
    console.log(data);
  }
  return (
    <Button onClick={() => handleDeleteUser(id)} colorScheme="red">
      X
    </Button>
  );
}
