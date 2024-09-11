import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface TypeProps {
  children?: React.ReactNode;
}

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const userDataString = localStorage.getItem("userStore");
    const userDataJson = userDataString ? JSON.parse(userDataString) : null;

    useEffect(() => {
      if (!userDataJson?.state.user.token) {
        router.push("/login");
      }
    }, [userDataJson, router]);

    if (!userDataJson?.state.user.token) {
      return <h1>Cargando</h1>;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
