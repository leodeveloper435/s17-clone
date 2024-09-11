"use cliente";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface TypeProps {
  children?: React.ReactNode;
}

const withAuth =
  (WrappedComponent: React.ComponentType<any>) => (props: any) => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
      const getToken = JSON.parse(localStorage.getItem("userStore") || "{}");

      getToken?.state?.user.token ? setIsLogin(true) : router.push("/login");
    }, [router]);

    return isLogin ? <WrappedComponent {...props} /> : <h1>Cargando</h1>;
  };

export default withAuth;
