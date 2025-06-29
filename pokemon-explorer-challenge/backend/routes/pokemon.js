import express from "express";
import fetch from "node-fetch";

const router = express.Router();

/**
 * GET /api/pokemon/:name
 *
 * Fetches Pokemon data from the PokeAPI and returns a simplified response
 * containing only the name, sprite, and types.
 *
 * TODO: Implement this route handler to:
 * 1. Fetch Pokemon data from https://pokeapi.co/api/v2/pokemon/{name}
 * 2. Extract only the name, sprite (front_default), and types
 * 3. Return a simplified JSON response
 * 4. Handle errors appropriately (404 for Pokemon not found, 500 for server errors)
 */
router.get("/:name", async (req, res) => {

  const { name } = req.params;
  const url = "https://pokeapi.co/api/v2/pokemon/" + name.toLowerCase();
  let response;

  // fetch data
  try {
    response = await fetch (url);

    // return error if pokemon not found
    if(response.status === 404){
      return res.status(404).json({error: "Pokemon not found"});
    }

    // return error if server error
    if(response.status === 500){
      return res.status(500).json({error: "Server Error"});
    }

  const data = await response.json();
  
  } catch (error) {
    console.log("fetch error", error);
    return res.status(500).json({error: "Error"});
  }


// process and send data
try {
  const pokemonData = {
    name: data.name,
    img: data.sprites.front_default,
    types: data.types.map(types => types.type.name)
  };

  res.json(pokemonData);

} catch (error) {
  console.log(" error", error);
  return res.status(500).json({ error: "Error processing data" });
}
});

export default router;
