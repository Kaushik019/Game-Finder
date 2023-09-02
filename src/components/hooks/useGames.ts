import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { CanceledError } from "axios";

interface Game {
  id: number;
  name: String;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    // Put your side effect logic here. For example, data fetching:
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        console.error("Error:", err.message);
      });

    return () => controller.abort();
  }, []);

  return { error, games };
};

export default useGames;
