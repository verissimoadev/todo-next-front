import ClientOnly from "./ClientOnly";
import { NewUser } from "./components/NewUser";
import Users from "./Users";
import styles from "../styles/Home.module.css";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack alignItems="center" padding="2.5rem">
      <h1 className={styles.title}>To Do List</h1>
      <ClientOnly>
        <Users />
      </ClientOnly>
      <NewUser />
    </Stack>
  );
}
