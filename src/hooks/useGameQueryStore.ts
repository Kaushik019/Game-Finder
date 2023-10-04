import { create } from "zustand";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string | null;
    searchText?: string | null;
  }

interface gameQueryStore {
    gameQuery: GameQuery
    setSearchText: (searchText: string) => void;
    setGenreId: (genreId: number) => void;
    setPlaftformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void
}

const useGameQueryStore = create<gameQueryStore>(set => ({
    gameQuery : {},
    setSearchText: (searchText) => set(() => ({gameQuery : {searchText}})),
    setGenreId: (genreId)=> set(store => ({gameQuery: {...store.gameQuery, genreId}})),
    setPlaftformId: (platformId) => set(store => ({gameQuery: {...store.gameQuery, platformId}})),
    setSortOrder: (sortOrder) => set(store => ({gameQuery: {...store.gameQuery, sortOrder}}))
}));

export default useGameQueryStore;