export const getTaluka = async (districtId) => {
  const response = await fetch(`http://localhost:4000/getTalukaByID/${districtId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  return response.json();
};
