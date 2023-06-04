// node index.js from this projects root directory to run.

const jsonfile = require('jsonfile');
const moment = require ('moment');
const simpleGit = require('simple-git');
const random = require('random');
const FILE_PATH = './data.json';

const getRandomDate = () => {
  const startDate = moment('2022-11-11', 'YYYY-MM-DD');
  const today = moment().startOf('day');
  const diffDays = today.diff(startDate, 'days');
  const randomDays = random.int(0, diffDays);
  return startDate.add(randomDays, 'days');
};

const easyComm = n => {
  if (n === 0) return simpleGit().push();
  const DATE = getRandomDate().format();

  const data = {
    date: DATE
  };

  console.log(DATE);
  
  jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit().add([FILE_PATH]).commit(DATE, { '--date': DATE }, easyComm.bind(this, --n));
  });
};

easyComm(500);
