const filterAlphabet = (obj) => {
    const filteredObj = Object.keys(obj).reduce((acc, key) => {
        if (key.match(/[a-z]/i)) {
            acc[key] = obj[key];
        }
        return acc;

    }, {});
    return filteredObj;
};

const objToArr = (obj) => {
    const arr = Object.keys(obj).map((key) => {
        return {
            letter: key,
            frequency: obj[key]
        };
    });
    arr.sort((a, b) => {
        return b.frequency - a.frequency;
    });
    return arr;
};

export const calculateWordFrequencies = (data) => {
  const words = data.split('');
  let wordFrequencies = words.reduce((acc, word) => {
    if (acc[word]) {
      acc[word] += 1;
    } else {
      acc[word] = 1;
    }
    return acc;
  }, {});
  const filteredData = filterAlphabet(wordFrequencies);
  const arr = objToArr(filteredData);
  return arr;
};
