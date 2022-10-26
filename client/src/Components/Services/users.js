const baseUrl = "http://localhost:8000/users";

const createFetchOptions = (method, data = null) => {
  return {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
};

export const getallUsers = async () => {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const addNewUser = async (user) => {
  try {
    const options = createFetchOptions("POST", user);
    const response = await fetch(baseUrl, options);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

export const updateUser = async (id, newUser) => {
  try {
    const options = createFetchOptions("PUT", newUser);
    const response = await fetch(`${baseUrl}/${id}`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};

const deleteUser = async (id) => {
  try {
    const options = createFetchOptions("DELETE");
    const response = await fetch(`${baseUrl}/${id}`, options);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
};
