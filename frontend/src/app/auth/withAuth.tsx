import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface TypeProps {
  children: React.ReactNode;
}

const withAuth = (WrappedComponent: React.ComponentType<any>) => {
  const Wrapper = (props: TypeProps) => {
    const router = useRouter();
    const isAuthenticated = JSON.parse(localStorage.getItem("userStore") || "");
    console.log(isAuthenticated);
    useEffect(() => {
      if (!isAuthenticated?.state.user.token) {
        router.push("/login");
      }
    }, [isAuthenticated]);

    if (!isAuthenticated?.state.user.token) {
      return <h1>"Cargando"</h1>;
    }

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
