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
        ? a[mySubString].join('').toUpperCase() : a[mySubString].toUpperCase();
      const valueB = Array.isArray(b[mySubString])
        ? b[mySubString].join('').toUpperCase() : b[mySubString].toUpperCase();

      if (valueA < valueB) return order ? 1 : -1;
      if (valueA > valueB) return order ? -1 : 1;
      return 0;
    });
    return newState;
  };

  const handleSort = (e, guitarTable, order, setGuitarTable) => {
    let stateSort = [];
    const numbers = ['year', 'price', 'likeCount'];
    const mySubString = e.target.outerHTML.substring(
      e.target.outerHTML.indexOf('"') + 1,
      e.target.outerHTML.lastIndexOf('"'),
    );
    if (mySubString === 'id') return null;
    if (numbers.includes(mySubString)) {
      stateSort = sortNumber(guitarTable, mySubString, order);
    } else {
      stateSort = sortName(guitarTable, mySubString, order);
    }
    setGuitarTable(stateSort);
  };

  return { sortNumber, sortName, handleSort };
}
