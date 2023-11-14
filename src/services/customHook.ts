import { useState, useEffect } from 'react';

function useFilter(input: string, keyItem: string, array: object[]) {
  const [filteredArray, setFilteredArray] = useState<object[]>([]);

  useEffect(() => {
    const lowerCaseInput = input.toLowerCase();
    const result = array.filter((item) => {
      const itemValue = item[keyItem].toLowerCase();
      return itemValue.includes(lowerCaseInput);
    });
    setFilteredArray(result);
  }, [input, array]);

  return filteredArray;
}

export default useFilter;
