import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function ClientOnly({ children, ...delegated }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <Stack w={{ base: "80%", md: "60vw" }} {...delegated}>
      {children}
    </Stack>
  );
}
