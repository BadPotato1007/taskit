import React from "react";
import { Button, Center, Heading, Link, Spinner, Text } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div>
      <Heading>
        <Center>PiSpace</Center>
      </Heading>

      {user ? (
        <Center pt="5">
          <Text>
            Logged in user: {user.displayName} <br />
            Email: {user.email} <br />
            <Button colorScheme="twitter" onClick={logout}>
              sign out
            </Button>
          </Text>
        </Center>
      ) : (
        <Center pt="5">
          <Text>
            no one's logged in rn. <Link href="/login">sign in</Link>
          </Text>
        </Center>
      )}
    </div>
  );
};

export default Home;