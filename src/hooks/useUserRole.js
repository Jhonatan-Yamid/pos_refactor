"use client";

import { useSession } from "next-auth/react";
import { getRole, ROLE_ADMIN, ROLE_EMPLOYEE, ROLE_GUEST } from "@/libs/roles";

export default function useUserRole(providedSession) {
  const { data: session } = useSession();
  const sess = providedSession || session;
  const role = getRole(sess);

  return {
    session: sess,
    role,
    isAdmin: role === ROLE_ADMIN,
    isEmployee: role === ROLE_EMPLOYEE,
    isGuest: role === ROLE_GUEST,
  };
}
