import React from 'react';

export default function useSort() {
  let newState = [];
  const sortNumber = (guitarTable, mySubString, order) => {
    newState = [...guitarTable].sort((a, b) => {
      if (order) {
        return +a[mySubString] - +b[mySubString];
      }
      return +b[mySubString] - +a[mySubString];
    });

    return newState;
  };

  const sortName = (guitarTable, mySubString, order) => {
    newState = [...guitarTable].sort((a, b) => {
      const valueA = Array.isArray(a[mySubString])
        ? a[mySubString].join('')[0].toUpperCase() : a[mySubString].toUpperCase();
      const valueB = Array.isArray(b[mySubString])
        ? b[mySubString].join('')[0].toUpperCase() : b[mySubString].toUpperCase();

      if (valueA < valueB) return order ? 1 : -1;
      if (valueA > valueB) return order ? -1 : 1;
      return 0;
    });
    return newState;
  };
  return { sortNumber, sortName };
}
