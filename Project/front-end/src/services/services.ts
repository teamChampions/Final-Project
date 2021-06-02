import axios from "axios";
const loginUser = async (data: any) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/api/users/login",
      JSON.stringify(data),
      { headers: { "Content-Type": "application/json" } }
    );
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", response.data.user);
    localStorage.setItem("userID", response.data.userId);
    return { type: "LOGGED_IN", payload:response.data.user };
  } catch (err) {
    console.log(err.message);
    return null;
  }
};

const signupUser = async (data: any) => {
  try {
    let response = await axios.post(
      "http://localhost:5000/api/users",
      JSON.stringify(data),
      { headers: { "Content-Type": "application/json" } }
    );
    return response
  } catch (err) {
    return null;
  }
};

export { loginUser,signupUser };
