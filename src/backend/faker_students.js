const faker = require('faker');

faker.locale = 'de';
function generateStudents() {
  const students = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 10; i++) {
    const id = faker.random.number(1000000);
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const status = id % 2 ? 'In Chat' : 'In Queue';
    const avatar = faker.image.avatar();
    students.push({
      id,
      firstName,
      lastName,
      email,
      status,
      avatar,
    });
  }
  return { students };
}
module.exports = generateStudents;
