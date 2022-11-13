function getOrdinalNum(num) {
  const pluralRule = new Intl.PluralRules('en-US', {
    type: 'ordinal'
  });
  const suffix = {
    'one': 'st',
    'two': 'nd',
    'few': 'rd',
    'other': 'th'
  }
  return `${num}${suffix[pluralRule.select(num)]}`;
};

getOrdinalNum(0); //0th
getOrdinalNum(1); //1st
getOrdinalNum(2); //2nd
getOrdinalNum(3); //3rd
getOrdinalNum(11); //11th
getOrdinalNum(21); //21st
getOrdinalNum(207); //207th
