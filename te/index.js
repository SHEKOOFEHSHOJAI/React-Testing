const getFullName = (fname, lname) => {
  return `${fname} ${lname}`;
};

const actualFulName = getFullName("shekoofeh", "shojai");
const expectedFulName = "brace wayne";

if (actualFulName !== expectedFulName) {
  throw new Error(`${actualFulName} is not equal to ${expectedFulName}`);
}
