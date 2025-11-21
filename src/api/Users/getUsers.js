export const getEmail = async (email) => {
  const response = await fetch(`http://localhost:4000/CheckEmail?email_id=${email}`);
  return response.json();
};

export const getMobile = async (mobile_no) => {
  const response = await fetch(`http://localhost:4000/CheckMobileNo?mobile_no=${mobile_no}`);
  return response.json();
};


export const getUsername = async (user_name) => {
  const response = await fetch(`http://localhost:4000/CheckUsername?user_name=${user_name}`);
  return response.json();
};


