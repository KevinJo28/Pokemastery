/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

function PokemonMoves({ pokemon }) {
  const [groupedMoves, setGroupedMoves] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoveDetails = async () => {
      try {
        const movesByMethod = {};

        for (const move of pokemon.moves) {
          for (const detail of move.version_group_details) {
            const method = detail.move_learn_method.name;

            // Inicializar el grupo si no existe
            if (!movesByMethod[method]) movesByMethod[method] = [];

            // Verificar si el movimiento ya existe en el método
            if (movesByMethod[method].some((m) => m.name === move.move.name)) {
              continue;
            }

            // Obtener detalles del movimiento
            const response = await fetch(move.move.url);
            const moveData = await response.json();

            // Extraer la descripción en español o por defecto
            const descriptionEntry =
              moveData.flavor_text_entries.find(
                (entry) => entry.language.name === "es"
              ) || moveData.flavor_text_entries[0];

            // Agregar el movimiento al método correspondiente
            movesByMethod[method].push({
              name: moveData.name,
              type: moveData.type.name,
              power: moveData.power || "N/A",
              accuracy: moveData.accuracy || "N/A",
              pp: moveData.pp,
              description: descriptionEntry
                ? descriptionEntry.flavor_text
                : "Sin descripción",
              levelLearnedAt: detail.level_learned_at,
            });
          }
        }

        setGroupedMoves(movesByMethod);
        setLoading(false);
      } catch (error) {
        console.error("Error al cargar los movimientos:", error);
        setLoading(false);
      }
    };

    if (pokemon) {
      setLoading(true);
      fetchMoveDetails();
    }
  }, [pokemon]);

  return (
    <>
      <div className="containerMoves">
        {loading ? (
          <p>Cargando movimientos...</p>
        ) : (
          Object.entries(groupedMoves).map(([method, moves]) => (
            <div key={method}>
              <h2>
                {method === "level-up"
                  ? "Por Nivel"
                  : method === "machine"
                  ? "Por MT/MO"
                  : method === "tutor"
                  ? "Por Tutor"
                  : method === "egg"
                  ? "Por Huevo"
                  : "Otro Método"}
              </h2>
              <ul>
                {moves.map((move) => (
                  <li key={move.name} style={{ marginBottom: "10px" }} className={move.type + " move"}>
                    <strong>{move.name}</strong> <span className={move.type} >({move.type.toUpperCase()})</span>
                    {move.levelLearnedAt > 0 && (
                      <span> - Nivel {move.levelLearnedAt}</span>
                    )}
                    <p>
                      <em>{move.description}</em>
                    </p>
                    <ul>
                      <li>
                        <strong>Poder:</strong> {move.power}
                      </li>
                      <li>
                        <strong>Precisión:</strong> {move.accuracy}
                      </li>
                      <li>
                        <strong>PP:</strong> {move.pp}
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default PokemonMoves;