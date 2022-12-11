const validatorHints = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Hints')
const firstRowlockKitHints = 2;
const firstRowValidatorHints = 4;

function validateAllHints(){
  validateEnglish_Hints();
  validatePolish_Hints();
  validateGerman_Hints();
  validateSpanish_Hints();
  validateItalian_Hints();
  validateFrench_Hints();
  validateRussian_Hints();
  validatePortugese_Hints();
  validateJapanese_Hints();
  informAboutCheckFinish(sheetName_Hints, "ALL LANGS", -1);
}

function clearAllHints(){
  clearKeysHints();
  clearEnglishHints();
  clearPolishHints();
  clearGermanHints();
  clearSpanishHints();
  clearItalianHints();
  clearFrenchHints();
  clearRussianHints();
  clearPortgueseHints();
  clearJapaneseHints();
}

function clearKeysHints(){
  const lastRow = validatorHints.getLastRow();
  const columnKeys = 1;
  validatorHints.getRange(firstRowValidatorHints, columnKeys, lastRow, 1).clearContent();
  informAboutImportDataSource(validatorHints, "", importDataRowContracts, columnKeys);
}

function clearEnglishHints(){
  const firstColumn = 2;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorHints.getLastRow();

  validatorHints.getRange(firstRowValidatorHints, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorHints.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorHints, "", importDataRowContracts, firstColumn);
}

function clearPolishHints(){
  const firstColumn = 6;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorHints.getLastRow();

  validatorHints.getRange(firstRowValidatorHints, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorHints.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorHints, "", importDataRowContracts, firstColumn);
}

function clearGermanHints(){
  const firstColumn = 10;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorHints.getLastRow();

  validatorHints.getRange(firstRowValidatorHints, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorHints.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorHints, "", importDataRowContracts, firstColumn);
}

function clearSpanishHints(){
  const firstColumn = 14;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorHints.getLastRow();

  validatorHints.getRange(firstRowValidatorHints, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorHints.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorHints, "", importDataRowContracts, firstColumn);
}

function clearItalianHints(){
  const firstColumn = 18;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorHints.getLastRow();

  validatorHints.getRange(firstRowValidatorHints, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorHints.getRange(1, errorColumn).setValue(`Issues:`)
}

function clearFrenchHints(){
  const firstColumn = 22;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorHints.getLastRow();

  validatorHints.getRange(firstRowValidatorHints, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorHints.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorHints, "", importDataRowContracts, firstColumn);
}

function clearRussianHints(){
  const firstColumn = 26;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorHints.getLastRow();

  validatorHints.getRange(firstRowValidatorHints, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorHints.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorHints, "", importDataRowContracts, firstColumn);
}

function clearPortgueseHints(){
  const firstColumn = 30;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorHints.getLastRow();

  validatorHints.getRange(firstRowValidatorHints, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorHints.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorHints, "", importDataRowContracts, firstColumn);
}

function clearJapaneseHints(){
  const firstColumn = 34;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorHints.getLastRow();

  validatorHints.getRange(firstRowValidatorHints, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorHints.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorHints, "", importDataRowContracts, firstColumn);
}
