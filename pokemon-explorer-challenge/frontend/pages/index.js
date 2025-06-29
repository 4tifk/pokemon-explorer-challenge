import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * TODO: Implement this function to:
   * 1. move functions to its own components (not neccessary as small project)
   * 2. Styling (css file)
   * 3. tests
   */

  // clean input to be read properly
  function cleanInput(input) {
    let cleaned;
    // regex to remove punctuation except "-"
    cleaned = input.replace(/[^\w\s-]/g, "");
    // remove trailing spaces
    cleaned = cleaned.trim();   
    cleaned = cleaned.toLowerCase();
    // replace spaces with dashes so it can be searched
    cleaned = cleaned.replace(" ", "-");
    return cleaned;
  }

  const fetchPokemon = async () => {
    // fetch and return pokemon
    try {
      setLoading(true);
      const cleanQuery = cleanInput(query);
      const url = "http://localhost:3001/api/pokemon/" + cleanQuery;
      const response = await fetch (url);
      const data = await response.json();
      
      // error checking
      if (response.ok) {
        setError(null);
        setPokemon(data);

      } else {
        setError(data.error);
        setPokemon(null);
      }

    } catch (err) {
      console.log("Frontend Error", err)
      setError("Connection refused (Backend may be down)");
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial, Helvetica, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1 style={{ marginBottom: "24px", fontWeight: "700" }}>Pokémon Explorer</h1>

      <div style={{ marginBottom: "30px", display: "flex", alignItems: "center" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a Pokémon name"
          style={{
            padding: "10px 14px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginRight: "12px",
            width: "250px",
            boxShadow: "inset 0 1px 3px #ddd",
          }}
        />
        <button
          onClick={fetchPokemon}
          disabled={loading || !query.trim()}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "4px",
            border: "none",
            backgroundColor: loading || !query.trim() ? "#aaa" : "#0070f3",
            color: "white",
            cursor: loading || !query.trim() ? "not-allowed" : "pointer",
            boxShadow: loading || !query.trim() ? "none" : "0 2px 6px rgba(0,118,255,0.5)",
            transition: "background-color 0.3s ease",
          }}
          // hover over search button
          onMouseEnter={e => {
            if (!loading && query.trim()) e.target.style.backgroundColor = "#005bb5";
          }}
          onMouseLeave={e => {
            if (!loading && query.trim()) e.target.style.backgroundColor = "#0070f3";
          }}
        >
          {loading ? "Loading..." : "Search"}
        </button>
      </div>

      {error && (
        <div style={{ color: "red", marginBottom: "20px", fontWeight: "600" }}>{error}</div>
      )}

      {pokemon && (
        <div
          style={{
            width: "320px",
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <h2 style={{ textTransform: "capitalize", marginBottom: "16px" }}>{pokemon.name}</h2>
          {pokemon.sprite && (
            <img
              src={pokemon.sprite}
              alt={pokemon.name}
              style={{ maxWidth: "150px", marginBottom: "16px" }}
            />
          )}
          <div style={{ fontSize: "16px", color: "#555" }}>
            <strong>Types:</strong> {pokemon.types?.join(", ")}
          </div>
        </div>
      )}
    </div>
  );
}
