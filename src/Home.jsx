import React from "react";
import { Box, Button, Center, Heading, Link, Spinner, Text } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase.config";
import { signOut } from "firebase/auth";
import Taskpage from "./routes/Taskpage";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };

  if (loading) {
    return (
      <div>
        <Center>
        <Spinner />
        </Center>
      </div>
    );
  }

  return (
    <div>


      {user ? (
        // <Center pt="5">
        //   <Text>
        //     Logged in user: {user.displayName} <br />
        //     Email: {user.email} <br />
        //     <Button colorScheme="twitter" onClick={logout}>
        //       sign out
        //     </Button>
        //   </Text>
        // </Center>
        <Box bg='#010409'>
        <Taskpage/>
        </Box>
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
