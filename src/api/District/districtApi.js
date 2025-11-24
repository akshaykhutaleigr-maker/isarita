export const getDistrict = async () => {
  const response = await fetch("http://localhost:4000/getDistrict",{
 method:"POST",
  headers: { "Content-Type": "application/json" },
  
  });
  
  return response.json();
};

