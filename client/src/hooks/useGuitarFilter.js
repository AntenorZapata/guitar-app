import React from 'react';

function useGuitarFilter() {
  const handleGuitarFilter = (e, el, guitarTable, setValueFilter) => {
    const { state } = el;
    const { target: { value } } = e;

    if (value !== '') {
      const results = guitarTable.filter((gt) => {
        if (Array.isArray(gt[state])) {
          const field = gt[state].join('');
          return field.toLowerCase().startsWith(value.toLowerCase());
        }
        if (typeof gt[state] === 'number') {
          return gt[state].toString().startsWith(value.toLowerCase());
        }
        return gt[state].toLowerCase().startsWith(value.toLowerCase());
      });
      setValueFilter(results);
    } else {
      setValueFilter(guitarTable);
    }
  };

  return { handleGuitarFilter };
}

export default useGuitarFilter;
