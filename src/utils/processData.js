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
  const words = data.split(/\s+/);
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
  const finalArr = arr.slice(0, 20);
  return finalArr;
};


export const downloadData = (data) => () => {
  const csvData = data.map((item) => {
    return `${item.letter},${item.frequency}`;
  });
  const csv = csvData.join('\n');
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.style.display = 'none';
  link.setAttribute('href', url);
  link.setAttribute('download', 'data.csv');

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};