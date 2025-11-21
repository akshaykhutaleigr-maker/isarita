export const getTaluka = async (districtId) => {
  const response = await fetch(`http://localhost:4000/getTalukaByID/${districtId}`);
  return response.json();
};
