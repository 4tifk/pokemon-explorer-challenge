export default async function (res, url){
    let data;
  try {
    const response = await fetch (url);

    // return error if pokemon not found
    if (response.status === 404) {
      return res.status(404).json({error: "Pokemon not found"});
    }

    // return error if server error
    if (response.status === 500) {
      return res.status(500).json({error: "Server Error"});
    }

    return data = await response.json();

  } catch (error) {
    return res.status(500).json({error: "Error"});
  }    
}