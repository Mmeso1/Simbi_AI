// src/components/ClientAuthProvider.tsx
"use client";

import { ReactNode, useEffect } from "react";
import useAuthStore from "@/store/authStore";

export default function ClientAuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { getUser } = useAuthStore();

  useEffect(() => {
    getUser();
  }, [getUser]);

  return <>{children}</>;
}
