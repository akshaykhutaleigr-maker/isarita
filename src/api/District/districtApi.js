export const getDistrict = async () => {
  const response = await fetch("http://localhost:4000/getDistrict");
  return response.json();
};
