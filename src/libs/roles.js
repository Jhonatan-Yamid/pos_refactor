export const ROLE_ADMIN = 'admin';
export const ROLE_EMPLOYEE = 'employee';
export const ROLE_GUEST = 'guest';

/**
 * Normalize role value from session object.
 * session?.user?.image === 1 -> admin
 * session?.user?.image === null -> employee
 * session is undefined -> guest
 */
export function getRole(session) {
  if (!session) return ROLE_GUEST;
  const val = session?.user?.image;
  if (val === 1) return ROLE_ADMIN;
  if (val === null) return ROLE_EMPLOYEE;
  // Fallback: treat other values as employee for safety
  return ROLE_EMPLOYEE;
}

export function isAdmin(session) {
  return getRole(session) === ROLE_ADMIN;
}

export function isEmployee(session) {
  return getRole(session) === ROLE_EMPLOYEE;
}

export function isGuest(session) {
  return getRole(session) === ROLE_GUEST;
}

export default {
  ROLE_ADMIN,
  ROLE_EMPLOYEE,
  ROLE_GUEST,
  getRole,
  isAdmin,
  isEmployee,
  isGuest,
};
