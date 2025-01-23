/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useCallback } from "react";

function PokemonMoves({ pokemon }) {
  const [groupedMoves, setGroupedMoves] = useState({});
  const [filteredMoves, setFilteredMoves] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filtros
  const [typeFilter, setTypeFilter] = useState("");
  const [methodFilter, setMethodFilter] = useState("");
  const [powerRange, setPowerRange] = useState([0, 150]); // Rango de poder
  const [accuracyRange, setAccuracyRange] = useState([0, 100]); // Rango de precisión

  useEffect(() => {
    const fetchMoveDetails = async () => {
      try {
        const movesByMethod = {};

        for (const move of pokemon.moves) {
          for (const detail of move.version_group_details) {
            const method = detail.move_learn_method.name;

            if (!movesByMethod[method]) movesByMethod[method] = [];

            if (movesByMethod[method].some((m) => m.name === move.move.name)) {
              continue;
            }

            const response = await fetch(move.move.url);
            const moveData = await response.json();

            const descriptionEntry =
              moveData.flavor_text_entries.find(
                (entry) => entry.language.name === "es"
              ) || moveData.flavor_text_entries[0];

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
              method,
            });
          }
        }

        setGroupedMoves(movesByMethod);
        setFilteredMoves(Object.values(movesByMethod).flat());
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

  // Aplicar filtros
  const applyFilters = useCallback(() => {
    const allMoves = Object.values(groupedMoves).flat();
    const filtered = allMoves.filter((move) => {
      const matchesType = typeFilter ? move.type === typeFilter : true;
      const matchesMethod = methodFilter ? move.method === methodFilter : true;
      const matchesPower =
        move.power !== "N/A" &&
        move.power >= powerRange[0] &&
        move.power <= powerRange[1];
      const matchesAccuracy =
        move.accuracy !== "N/A" &&
        move.accuracy >= accuracyRange[0] &&
        move.accuracy <= accuracyRange[1];
      return matchesType && matchesMethod && matchesPower && matchesAccuracy;
    });
    setFilteredMoves(filtered);
  }, [typeFilter, methodFilter, powerRange, accuracyRange, groupedMoves]);

  useEffect(() => {
    applyFilters();
  }, [typeFilter, methodFilter, powerRange, accuracyRange, groupedMoves, applyFilters]);

  return (
    <>
      <div className="containerMoves">
        {loading ? (
          <p>Cargando movimientos...</p>
        ) : (
          <>
            {/* Filtros */}
            <div>
              <h3>Filtros</h3>
              {/* Filtro por tipo */}
              <div>
                <button onClick={() => setTypeFilter("")}>Todos</button>
                <button onClick={() => setTypeFilter("fire")}>Fuego</button>
                <button onClick={() => setTypeFilter("water")}>Agua</button>
                <button onClick={() => setTypeFilter("grass")}>Planta</button>
                {/* Agrega más tipos */}
              </div>

              {/* Filtro por método */}
              <div>
                <button onClick={() => setMethodFilter("")}>Todos</button>
                <button onClick={() => setMethodFilter("level-up")}>
                  Por Nivel
                </button>
                <button onClick={() => setMethodFilter("machine")}>
                  Por MT/MO
                </button>
                <button onClick={() => setMethodFilter("egg")}>Por Huevo</button>
              </div>

              {/* Rango de Poder */}
              <div>
                <label>
                  Poder mínimo:
                  <input
                    type="number"
                    value={powerRange[0]}
                    onChange={(e) =>
                      setPowerRange([Number(e.target.value), powerRange[1]])
                    }
                  />
                </label>
                <label>
                  Poder máximo:
                  <input
                    type="number"
                    value={powerRange[1]}
                    onChange={(e) =>
                      setPowerRange([powerRange[0], Number(e.target.value)])
                    }
                  />
                </label>
              </div>

              {/* Rango de Precisión */}
              <div>
                <label>
                  Precisión mínima:
                  <input
                    type="number"
                    value={accuracyRange[0]}
                    onChange={(e) =>
                      setAccuracyRange([
                        Number(e.target.value),
                        accuracyRange[1],
                      ])
                    }
                  />
                </label>
                <label>
                  Precisión máxima:
                  <input
                    type="number"
                    value={accuracyRange[1]}
                    onChange={(e) =>
                      setAccuracyRange([
                        accuracyRange[0],
                        Number(e.target.value),
                      ])
                    }
                  />
                </label>
              </div>
            </div>

            {/* Lista de movimientos filtrados */}
            <div>
              {Object.entries(
                filteredMoves.reduce((acc, move) => {
                  acc[move.method] = acc[move.method] || [];
                  acc[move.method].push(move);
                  return acc;
                }, {})
              ).map(([method, moves]) => (
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
                      <li
                        key={move.name}
                        style={{ marginBottom: "10px" }}
                        className={move.type + " move"}
                      >
                        <strong className="nameMove">{move.name}</strong>{" "}
                        <span className={move.type}>
                          ({move.type.toUpperCase()})
                        </span>
                        {move.levelLearnedAt > 0 && (
                          <span> - Nivel {move.levelLearnedAt}</span>
                        )}
                        <p>
                          <em>{move.description}</em>
                        </p>
                        <ul>
                          <li>
                            <strong>Poder:</strong>{" "}
                            {move.power !== null && move.power !== "N/A"
                              ? move.power
                              : "Sin Poder"}
                          </li>
                          <li>
                            <strong>Precisión:</strong>{" "}
                            {move.accuracy !== null && move.accuracy !== "N/A"
                              ? move.accuracy
                              : "Sin Precisión"}
                          </li>
                          <li>
                            <strong>PP:</strong>{" "}
                            {move.pp !== null && move.pp !== "N/A"
                              ? move.pp
                              : "Sin PP"}
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default PokemonMoves;