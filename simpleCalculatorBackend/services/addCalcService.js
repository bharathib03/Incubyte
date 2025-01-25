export const addCalcService = async (userData) => {
    //Business logic to remove backslashes, delimiters, and new lines  
    userData = userData.replace(/[/\\*]/g, "").replace(/[^\w\s]/gi, '').replace(/[^\x20-\x7E]/gmi, '').trim()

    //After removing all delimiters, backslashes, and new lines trim it and convert it to array
    let newUserArray = userData.split('');

    //Reduce function to sum all the elements in an array
    let total = newUserArray.reduce(function(sum, value) {
      return sum + (+value);
  }, 0);
    return total;
  };