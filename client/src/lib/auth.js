export const STORAGE_KEY = "rt_super_admin";

export function getCurrentUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function loginSuperAdmin({ phone, otp }) {
  // Mocked login: accept any non-empty phone+otp and mark as superAdmin
  if (!phone || !otp) return { success: false, error: "Phone and OTP required" };
  const user = {
    id: "super-admin-1",
    role: "superAdmin",
    name: "Super Admin",
    phone,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  return { success: true, user };
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY);
}

export function isAuthenticated() {
  const user = getCurrentUser();
  return Boolean(user && user.role === "superAdmin");
}


