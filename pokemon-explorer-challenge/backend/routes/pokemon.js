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
  // TODO: Implement this route handler
  res.status(501).json({ error: "Not implemented" });
});

export default router;
