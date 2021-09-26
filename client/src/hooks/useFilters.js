export default function useFilters() {
  const filterGuitars = ({ target }, {
    setState, state, guitarFiltered, setGuitarFiltered, guitars,
  }) => {
    const names = ['min', 'max'];
    const { name } = target;
    const value = target.type === 'radio' ? target.id : target.value;

    setState({ ...state, [name]: value });

    if (value !== '' && target.type !== 'radio') {
      const results = (guitarFiltered.length ? guitarFiltered : guitars).filter((gt) => {
        if (name === 'min') {
          return gt.price >= +value;
        }
        if (name === 'max') {
          return state.min ? gt.price > +state.min && gt.price <= +value : gt.price <= +value;
        }
        if (state.filter && !names.includes(name)) {
          return gt[state.filter].toLowerCase().startsWith(value.toLowerCase());
        }
        return guitarFiltered;
      });
      setGuitarFiltered(results);
    } else {
      setGuitarFiltered(guitars);
    }
  };

  return { filterGuitars };
}
