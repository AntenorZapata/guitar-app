function paginate(guitars, numberOfPages) {
  const itemsPerPage = numberOfPages;
  const pages = Math.ceil(guitars.length / itemsPerPage);

  const newGuitars = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return guitars.slice(start, start + itemsPerPage);
  });
  return newGuitars;
}

export default paginate;
