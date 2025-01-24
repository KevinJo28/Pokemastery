/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

function PokemonAbilities({ pokemon }) {
  const [abilities, setAbilities] = useState([]);

  // Función para obtener los detalles de cada habilidad
  useEffect(() => {
    const fetchAbilityDetails = async () => {
      try {
        const abilitiesWithDetails = await Promise.all(
          pokemon.abilities.map(async (ability) => {
            const response = await fetch(ability.ability.url);
            const data = await response.json();
        
            // Extraer el primer efecto en español (si está disponible)
            const effect = data.effect_entries.find(
              (entry) => entry.language.name === "en"
            ) || data.effect_entries[0];
            return { 
              name: ability.ability.name, 
              isHidden: ability.is_hidden, 
              effect: effect ? effect.effect : "Sin descripción disponible" 
            };
          })
        );
        setAbilities(abilitiesWithDetails);
      } catch (error) {
        console.error("Error al cargar habilidades:", error);
      }
    };

    if (pokemon) fetchAbilityDetails();
  }, [pokemon]);

  // Renderizar habilidades
  return (
    <div className="containerSkills">
      <h2>Skills</h2>
      <ul>
        {abilities.length > 0 ? (
          abilities.map((ability) => (
            <li key={ability.name}>
              <strong className="NameSkill">{ability.name}</strong>{" "}
              {ability.isHidden && <span>(Hidden)</span>}: {ability.effect}
            </li>
          ))
        ) : (
          <p>Cargando habilidades...</p>
        )}
      </ul>
    </div>
  );
}

export default PokemonAbilities;