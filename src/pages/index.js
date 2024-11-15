import { React, router } from "react";
import { Button } from "semantic-ui-react";
import { useAuth } from "@/hooks";
import Link from "next/link";

export default function Index() {
  const { user, logout } = useAuth();

  console.log("user", useAuth);
  return (
    <div>
      <h2>Games Shop</h2>

      {user ? (
        <div>
          <p>
            Hola, {user.firtsname} {user.lastname}
          </p>
          <Button onClick={logout}>Cerrar sesión</Button>
        </div>
      ) : (
        <Link href="/join/sign-in">
          <Button primary>Ir al login</Button>
        </Link>
      )}
    </div>
  );
}
