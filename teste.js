const arr = [
  { name: 'Steven Tyler' },
  { name: 'Karen Carpenter' },
  { name: 'Kurt Cobain' },
  { name: 'Stevie Nicks' },
];

const nominho = 'name';

// const sortido = arr.sort((a, b) => {
//   if (a[nominho] < b[nominho]) return -1;
//   if (a[nominho] > b[nominho]) return 1;
//   return 0;
// });

function compare(a, b) {
  // Use toUpperCase() to ignore character casing
  const bandA = a[nominho].toUpperCase();
  const bandB = b[nominho].toUpperCase();

  let comparison = 0;
  if (bandA > bandB) {
    comparison = 1;
  } else if (bandA < bandB) {
    comparison = -1;
  }
  return comparison;
}

const sortido = arr.sort(compare);

console.log(sortido);
