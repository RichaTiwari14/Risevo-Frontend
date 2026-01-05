import API from "./API";

/* ===============================
   AUTH
================================ */

// LOGIN (NO TOKEN)
export const AdminLogin = async (formData) => {
  try {
    const response = await API.post("admin/login/", formData);
    return response.data;
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
};

// LOGOUT
export const AdminLogout = async () => {
  const access = JSON.parse(localStorage.getItem("access"));
  const refresh = JSON.parse(localStorage.getItem("refresh"));

  try {
    const response = await API.post(
      "admin/logout/",
      { refresh },
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }
    );
    return response.data;
  } catch (err) {
    console.error("Logout error:", err);
  }
};

// PROFILE
export const GetProfile = async () => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    const response = await API.get("admin/profile/", {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Profile fetch error:", err);
    return null;
  }
};

/* ===============================
   ADMIN CRUD (SUPERUSER)
================================ */

export const CreateAdmin = async (formData) => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    const response = await API.post("admin/register/", formData, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Create admin error:", err);
    throw err;
  }
};

export const GetAdmins = async () => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    const response = await API.get("admin/register/", {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Get admins error:", err);
    return [];
  }
};

export const UpdateAdmin = async (id, formData) => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    const response = await API.patch(`admin/register/${id}/`, formData, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Update admin error:", err);
    throw err;
  }
};

export const DeleteAdmin = async (id) => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    const response = await API.delete(`admin/register/${id}/`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Delete admin error:", err);
    throw err;
  }
};

/* ===============================
   EMPLOYEE CRUD
================================ */

export const CreateEmployee = async (formData) => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    const response = await API.post("employee/", formData, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Create employee error:", err);
    throw err;
  }
};

export const GetEmployees = async () => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    const response = await API.get("employee/", {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Get employees error:", err);
    return [];
  }
};

export const UpdateEmployee = async (id, formData) => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    const response = await API.patch(`employee/${id}/`, formData, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Update employee error:", err);
    throw err;
  }
};

export const DeleteEmployee = async (id) => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    const response = await API.delete(`employee/${id}/`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Delete employee error:", err);
    throw err;
  }
};

/* ===============================
   ENQUIRY
================================ */

// PUBLIC – NO TOKEN
export const CreateEnquiry = async (formData) => {
  try {
    const response = await API.post("enquiry/", formData);
    return response.data;
  } catch (err) {
    console.error("Create enquiry error:", err);
    throw err;
  }
};

// ADMIN – TOKEN REQUIRED
export const GetEnquiries = async () => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    const response = await API.get("enquiry/", {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Get enquiries error:", err);
    return [];
  }
};

export const DeleteEnquiry = async (id) => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    const response = await API.delete(`enquiry/${id}/`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Delete enquiry error:", err);
    throw err;
  }
};

/* ===============================
   DASHBOARD
================================ */

export const GetDashboardData = async () => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    const response = await API.get("dashboard/", {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Dashboard error:", err);
    return null;
  }
};

export const GetCareers  = async () => {

  try {
    const response = await API.get("career/");
    return response.data;
  } catch (err) {
    console.error("Dashboard error:", err);
    return null;
  }
};

export const CreateCareer  = async (formData) => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    const response = await API.post("career/", formData, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Dashboard error:", err);
    return null;
  }
};

export const UpdateCareer  = async (id, formData) => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    const response = await API.patch(`career/${id}/`, formData, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Dashboard error:", err);
    return null;
  }
};

export const DeleteCareer  = async (id) => {
  const access = JSON.parse(localStorage.getItem("access"));

  try {
    const response = await API.delete(`career/${id}/`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Dashboard error:", err);
    return null;
  }
};

export const ApplyJob  = async (formData) => {
  const access = JSON.parse(localStorage.getItem("access"));
  try {
    const response = await API.post("job-apply/", formData, {
      headers: {
        Authorization: `Bearer ${access}`,
         "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (err) {
    console.error("Dashboard error:", err);
    return null;
  }
};

export const GetApplications  = async () => {
  const access = JSON.parse(localStorage.getItem("access"));
  try {
    const response = await API.get("job-apply/", {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Dashboard error:", err);
    return null;
  }
};

export const DeleteApplication  = async (id) => {
  const access = JSON.parse(localStorage.getItem("access"));
  try {
    const response = await API.delete(`job-apply/${id}/`, {
      headers: {
        Authorization: `Bearer ${access}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Dashboard error:", err);
    return null;
  }
};
