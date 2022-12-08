/**
 * Utility function to filter the searched data out of the array of state
 * @param {Array} Data
 * @param {string} parameter
 * @returns {Array}
 */
export const filterValues = (Data, parameter) => {
  const searchParam = parameter.toLowerCase();
  const searchParamRegex = new RegExp(searchParam, "g"); // adding global regex expression

  return Data.filter((singleData) =>
    searchParamRegex.test(singleData.name.toLowerCase())
  );
};
