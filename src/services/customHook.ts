import { useState, useEffect } from 'react';

export function useFilter(input: string, keyItem: string, array: object[]) {
  const [filteredArray, setFilteredArray] = useState<object[]>([]);

  useEffect(() => {
    const lowerCaseInput = input.toLowerCase();
    const result = array.filter((item) => {
      const itemValue = item[keyItem].toLowerCase();
      return itemValue.includes(lowerCaseInput);
    });
    setFilteredArray(result);
  }, [input, array, keyItem]);

  return filteredArray;
}

export function useSecondFilter(
  column: string,
  operator: string,
  value: number,
  array: object[],
) {
  const [filteredArray, setFilteredArray] = useState<object[]>([]);

  useEffect(() => {
    const result = array.filter((item) => {
      const itemValue = item[column];
      const num = Number(value);

      switch (operator) {
        case 'menor que':
          return itemValue < num;
        case 'maior que':
          return itemValue > num;
        case 'igual a':
          return itemValue === value;
        default:
          return true;
      }
    });
    setFilteredArray(result);
  }, [column, operator, value, array]);

  return filteredArray;
}
