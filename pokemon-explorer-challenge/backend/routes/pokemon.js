import express from "express";
import fetch from "node-fetch";

// clean input function
import cleanInput from '../components/utils/cleanInput.js';

const router = express.Router();

/**
 * GET /api/pokemon/:name
 *
 * Fetches Pokemon data from the PokeAPI and returns a simplified response
 * containing only the name, sprite, and types.
 *
 * TODO: Implement this route handler to:
 * 1. fix fetch
 * 2. 
 */
router.get("/:name", async (req, res) => {

  const { name } = req.params;
  const cleanName = cleanInput(name);
  const url = "https://pokeapi.co/api/v2/pokemon/" + cleanName;

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
    
    data = await response.json();

  } catch (error) {
    return res.status(500).json({error: "Error"});
  }

// process and send data
  try {
    const pokemonData = {
      name: data.name,
      sprite: data.sprites.front_default,
      types: data.types.map(types => types.type.name)
  };

  res.json(pokemonData);

} catch (error) {
  return res.status(500).json({ error: "Error processing data" });
}

});

export default router;
