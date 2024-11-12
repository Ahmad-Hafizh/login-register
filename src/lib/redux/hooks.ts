import { useDispatch, useSelector, useStore } from 'react-redux';
import type { AppStore, AppDispatch, RootState } from './store';

// redefine react hooks for action, actions excecutor
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
// redefine react hooks for state reducer, get method for the data
export const useAppSelector = useSelector.withTypes<RootState>();
// redefine react hooks for access all data in store
export const useAppStore = useStore.withTypes<AppStore>();
