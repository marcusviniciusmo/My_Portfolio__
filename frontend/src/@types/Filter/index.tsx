export interface FilterProps<T extends { name: string }> {
  list: Array<T>;
  setListFiltered: (filteredList: T[]) => void;
}
