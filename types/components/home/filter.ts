export interface FilterProps {
  initialQueries: string[];
  applyFilter: (queries: FilterProps['initialQueries']) => void;
}