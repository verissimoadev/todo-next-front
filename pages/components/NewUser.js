import { gql, useMutation } from "@apollo/client";
import { Button, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import { GET_USERS } from "../Users";

const CREATE_USER = gql`
  mutation ($name: String!) {
    createUser(name: $name) {
      name
      id
    }
  }
`;

export function NewUser() {
  const [name, setName] = useState("");
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER);
  async function handleCreateUser(event) {
    event.preventDefault();

    if (!name) {
      return;
    }
    setName("");

    await createUser({
      variables: {
        name,
      },
      refetchQueries: [GET_USERS],
    });
    console.log(data);
  }
  return (
    <form onSubmit={handleCreateUser} style={{ display: "flex" }}>
      <Input
        type="text"
        value={name}
        variant="outline"
        placeholder="Próximo Tarefa"
        onChange={(e) => setName(e.target.value)}
      />
      <Button onChange={(e) => setName(e.target.value)} colorScheme="whatsapp">
        +
      </Button>
    </form>
  );
}
