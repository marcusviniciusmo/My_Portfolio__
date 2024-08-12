import { useEffect, useState } from 'react';
import { Search } from '@mui/icons-material';

import { FilterProps } from '../../@types/Filter';

import { FilterContainer, InputSearch, Results } from './styles';

export function Filter<T extends { name: string }>({
  list,
  setListFiltered,
}: FilterProps<T>) {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [results, setResults] = useState<T[]>([]);

  useEffect(() => {
    const filteredList = list.filter((item) => {
      return String(item.name)
        .toLowerCase()
        .includes(inputSearch.toLowerCase());
    });

    setListFiltered(filteredList);
    setResults(filteredList);
  }, [inputSearch, list, setListFiltered]);

  return (
    <div>
      <FilterContainer>
        <Search fontSize="large" />
        <InputSearch
          type="text"
          placeholder="Search by name"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
      </FilterContainer>

      <Results>{`Found ${results.length} result(s)`}</Results>
    </div>
  );
}
