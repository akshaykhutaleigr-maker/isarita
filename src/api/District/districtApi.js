export const getDistrict = async () => {
  try {
    const response = await fetch("http://localhost:8000/districts");
    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
  }
};