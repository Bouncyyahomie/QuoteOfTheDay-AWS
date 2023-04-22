import { useEffect } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Link from 'next/link';
import { useRouter } from 'next/router';

export function getServerSideProps() {
  const renderedAt = new Date();
  const formattedBuildDate = renderedAt.toLocaleDateString("en-US", {
    dateStyle: "long",
  });
  const formattedBuildTime = renderedAt.toLocaleTimeString("en-US", {
    timeStyle: "long",
  });
  return {
    props: {
      renderedAt: `${formattedBuildDate} at ${formattedBuildTime}`,
    },
  };
}

function Home({ signOut, user, renderedAt }) {
  const router = useRouter();

  useEffect(() => {
    if(user) {
      router.push('/quote');
    }
  }, [user])

  return (
    <div style={{ padding: 50 }}>
      <h1>Logged in as {user.username}.</h1>
      <div>
        <button onClick={signOut}>Sign out</button>
      </div>
      <p>This page was server-side rendered on {renderedAt}.</p>
    </div>
  );
}

export default withAuthenticator(Home);
