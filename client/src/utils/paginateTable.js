function paginateTable(guitars) {
  const itemsPerPage = 5;
  const pages = Math.ceil(guitars.length / itemsPerPage);

  const newGuitars = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return guitars.slice(start, start + itemsPerPage);
  });
  return newGuitars;
}

export default paginateTable;
