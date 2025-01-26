export const addCalcService = async (userData) => {
    const negativeCheck = getNegativeNumbers(userData);

    if(negativeCheck != null){
      return  `negative numbers not allowed ${negativeCheck}`
    }
    else{
        //Business logic to remove backslashes, delimiters, and new lines  
        userData = userData.replace(/[/\\*]/g, "").replace(/[^\w\s]/gi, '').replace(/[^\x20-\x7E]/gmi, '').trim();

        //After removing all delimiters, backslashes, and new lines trim it and convert it to array
        let newUserArray = userData.split('');
        //Reduce function to sum all the elements in an array
        let total = newUserArray.reduce(function(sum, value) {
          return sum + (+value);
          }, 0);
        return total;
    }
  };

  function getNegativeNumbers(input){
    const regex = /-?\d+/g;

    const matches = input.match(regex);
    if (matches) {
      for (const match of matches) {
        const number = parseInt(match, 10);
        if (number < 0) {
          return number;
        }
      }
    }
    return null;
  }