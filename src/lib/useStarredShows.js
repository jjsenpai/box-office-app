import { useEffect, useReducer } from 'react';
const starReducer = (currentStarred, action) => {
  switch (action.type) {
    case 'STAR':
      return currentStarred.concat(action.showId);
    case 'UNSTAR':
      return currentStarred.filter(showId => showId !== action.showId);
  }
};

const usePersistedReducer = (reducer, initialState, localStorageKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persestedValue = localStorage.getItem(localStorageKey);
    return persestedValue ? JSON.parse(persestedValue) : initial;
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [localStorageKey, state]);

  return [state, dispatch];
};

export const useStarredShows = () => {
  return usePersistedReducer(starReducer, [], 'starredShows');
};
