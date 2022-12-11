const validatorContracts = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Contracts')
const firstRowlockKitContracts = 100;
const firstRowValidatorContracts = 4;
const importDataRowContracts = firstRowValidatorContracts - 1;

function validateAllContracts() {
  validatePolish_Contracts();
  validateEnglish_Contracts();
  validateGerman_Contracts();
  validateSpanish_Contracts();
  validateItalian_Contracts();
  validateFrench_Contracts();
  validateRussian_Contracts();
  validatePortugese_Contracts();
  validateJapanese_Contracts();
  informAboutCheckFinish(sheetName_Contracts, 'ALL LANGS', -1)
}

function clearAllContracts(){
  clearKeysContracts();
  clearEnglishContracts();
  clearPolishContracts();
  clearGermanContracts();
  clearSpanishContracts();
  clearItalianContracts();
  clearFrenchContracts();
  clearRussianContracts();
  clearPortgueseContracts();
  clearJapaneseContracts();
}

function informAboutErrors_Contracts(issuesColumn){
  const issuesRow = 1;
  validatorContracts.getRange(issuesRow, issuesColumn).setValue(`Issues: ${issuesCount}`);
}

function clearKeysContracts(){
  const lastRow = validatorContracts.getLastRow();
  const columnKeys = 1;
  validatorContracts.getRange(firstRowValidatorContracts, columnKeys, lastRow, 1).clearContent();
  informAboutImportDataSource(validatorContracts, "", importDataRowContracts, columnKeys);
}

function clearEnglishContracts(){
  const firstColumn = 2;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorContracts.getLastRow();

  validatorContracts.getRange(firstRowValidatorContracts, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorContracts.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorContracts, "", importDataRowContracts, firstColumn);
}

function clearPolishContracts(){
  const firstColumn = 6;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorContracts.getLastRow();

  validatorContracts.getRange(firstRowValidatorContracts, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorContracts.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorContracts, "", importDataRowContracts, firstColumn);
}

function clearGermanContracts(){
  const firstColumn = 10;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorContracts.getLastRow();

  validatorContracts.getRange(firstRowValidatorContracts, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorContracts.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorContracts, "", importDataRowContracts, firstColumn);
}

function clearSpanishContracts(){
  const firstColumn = 14;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorContracts.getLastRow();

  validatorContracts.getRange(firstRowValidatorContracts, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorContracts.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorContracts, "", importDataRowContracts, firstColumn);
}

function clearItalianContracts(){
  const firstColumn = 18;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorContracts.getLastRow();

  validatorContracts.getRange(firstRowValidatorContracts, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorContracts.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorContracts, "", importDataRowContracts, firstColumn);
}

function clearFrenchContracts(){
  const firstColumn = 22;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorContracts.getLastRow();

  validatorContracts.getRange(firstRowValidatorContracts, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorContracts.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorContracts, "", importDataRowContracts, firstColumn);
}

function clearRussianContracts(){
  const firstColumn = 26;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorContracts.getLastRow();

  validatorContracts.getRange(firstRowValidatorContracts, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorContracts.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorContracts, "", importDataRowContracts, firstColumn);
}

function clearPortgueseContracts(){
  const firstColumn = 30;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorContracts.getLastRow();

  validatorContracts.getRange(firstRowValidatorContracts, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorContracts.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorContracts, "", importDataRowContracts, firstColumn);
}

function clearJapaneseContracts(){
  const firstColumn = 34;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorContracts.getLastRow();

  validatorContracts.getRange(firstRowValidatorContracts, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorContracts.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorContracts, "", importDataRowContracts, firstColumn);
}

// Contracts values are related to Polish Values. For more info please ask loco team. (Not a big fan of this idea but have to be done like this)
function getPolishValues(){
  const inGameColumn = 7;
  const lastRow = validatorContracts.getLastRow() - 2;
  const allPolishValues_1 = validatorContracts.getRange(4, inGameColumn, lastRow, 1).getValues();
  let polishValues = [];

  if(allPolishValues_1[0][0] != ""){   
    for(let x = 0; x < allPolishValues_1.length; x++){
      const elem = allPolishValues_1[x][0];
      const hasNumber = /\d+/g;
      if(hasNumber.test(elem)) {
        polishValues.push(elem.match(hasNumber))
      }
      else {
        const values = ["1"];
        polishValues.push(values)
      }
    }
    return polishValues;
  }


  else {
    getPolishContractsDev();  
    validatePolish_Contracts();
    const allPolishValues_2 = validatorContracts.getRange(4, inGameColumn, lastRow, 1).getValues();
    for(let x = 0; x < allPolishValues_2.length; x++){
      const elem = allPolishValues_2[x][0];
      const hasNumber = /\d+/g;
      if(hasNumber.test(elem)) {
        polishValues.push(elem.match(hasNumber))
      }
      else {
        const values = ["1"];
        polishValues.push(values)
      }
    }
    return polishValues;
  }
}

// As above ^^.
function compareValuesWithPolish(polishValues, locKitDescription_Final, inputRow, langIndex) {
  const row = inputRow - 4;
  const valuesPolish = polishValues[row];
  let valuesLang = [];
  const hasNumber = /\d+/g;

  if(hasNumber.test(locKitDescription_Final)){
    valuesLang = (locKitDescription_Final.match(hasNumber))
  }
  else {
    valuesLang = ['1'];
  }

  const diffrences1 = valuesPolish.diff(valuesLang)
  const diffrences2 = valuesLang.diff(valuesPolish) 

  if(diffrences1.length != 0 && diffrences2.length != 0){
    return `- CONTRACT Values in PL: ${valuesPolish};\n- CONTRACT Values in ${langIndex}: ${valuesLang};\n`
  }

  else {
    return ""
  }
}
