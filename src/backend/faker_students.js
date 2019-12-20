const faker = require('faker');
const bcrypt = require('bcryptjs');
const User = require('./models/user');

faker.locale = 'de';
const generateUse = async () => {
  const salt = await bcrypt.genSalt(10);
  const id = faker.random.number(1000000);
  const name = faker.name.firstName();
  const email = faker.internet.email();
  const like = faker.random.number(1000);
  const status = id % 3 ? 'Offline' : 'In Queue';
  const roomStatus = id % 3 ? 'on' : 'off';
  const type = id % 3 ? 'Tutor' : 'Student';
  const room = id % 3 ? faker.random.number(1000) : 0;
  const avatar = faker.image.avatar();

  const useFake = new User({
    name,
    email,
    status,
    avatar,
    password: '123456',
    roomStatus,
    room,
    like,
    type,
  });
  useFake.password = await bcrypt.hash('123456', salt);
  useFake.save();
};
module.exports = generateUse;
