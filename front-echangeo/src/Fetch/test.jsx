export async function getExperiences() {
  try {
    const response = await fetch("http://localhost:8001/api") 
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
     const  data = await response.json()
     return data;
  } catch (error) {
    console.log(error)
  }
}