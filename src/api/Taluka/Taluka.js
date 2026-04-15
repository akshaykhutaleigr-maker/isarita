export const getTaluka = async (districtId) => {
  const response = await fetch("http://127.0.0.1:8000/getTalukaByID", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      district_id: districtId
    })
  });

  if (!response.ok) {
    throw new Error("Failed to fetch taluka data");
  }

  return response.json();
};