export const getMobile = async (mobile_no) => {
   const response = await fetch(`http://localhost:4000/CheckMobileNo?mobile_no=${mobile_no}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

export const getUsername = async (user_name) => {
   const response = await fetch(`http://localhost:4000/CheckUsername?email_id=${user_name}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

export const getEmail = async (email) => {
  const response = await fetch(`http://localhost:4000/CheckEmail?email_id=${email}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

