"use client";

import React from "react";
import PropTypes from "prop-types";
import { getRole } from "@/libs/roles";

/**
 * RequireRole: render children only when user's role is in allowed list.
 * - allowed: string or array of role strings
 * - session: optional session object; if omitted uses provided session prop
 * - fallback: optional node to render when unauthorized (default: null)
 */
export default function RequireRole({ allowed, session, fallback = null, children }) {
  const allowList = Array.isArray(allowed) ? allowed : [allowed];
  const role = getRole(session);

  if (allowList.includes(role)) return <>{children}</>;
  return fallback ? <>{fallback}</> : null;
}

RequireRole.propTypes = {
  allowed: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  session: PropTypes.object,
  fallback: PropTypes.node,
  children: PropTypes.node,
};
