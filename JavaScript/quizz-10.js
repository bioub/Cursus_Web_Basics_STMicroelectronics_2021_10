const data = [
  {
    id: 123,
    name: 'Pierre',
  },
  {
    id: 456,
    name: 'Paul',
  },
  {
    id: 789,
    name: 'Jacques',
  },
];

data
  .filter((v) => v.id > 400)
  .map((v) => ({
    ...v,
    name: v.name.toUpperCase(),
  }))
  .forEach((v) => console.log(v.name));
