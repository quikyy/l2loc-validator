const firstRowlockKitMonsters = 2;
const firstRowValidatorMonsters = 4;
const validatorMonsters = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Monsters');

function validateAllMonsters(){
  validateEnglish_Monsters();
  validatePolish_Monsters();
  validateGerman_Monsters();
  validateSpanish_Monsters();
  validateItalian_Monsters();
  validateFrench_Monsters();
  validateRussian_Monsters();
  validatePortugese_Monsters();
  validateJapanese_Monsters();
  informAboutCheckFinish(sheetName_Monsters, "ALL LANGS", -1);
}

function clearAllMonsters(){
  clearKeysMonsters();
  clearEnglishMonsters();
  clearPolishMonsters();
  clearGermanMonsters();
  clearSpanishMonsters();
  clearItalianMonsters();
  clearFrenchMonsters();
  clearRussianMonsters();
  clearPortugeseMonsters();
  clearJapaneseMonsters();
}

function clearKeysMonsters(){
  const firstColumn = 1;
  const lastRow = validatorMonsters.getLastRow();
  validatorMonsters.getRange(firstRowValidatorItems, firstColumn, lastRow, 1).clearContent().clearContent();
  informAboutImportDataSource(validatorMonsters, "", importDataRowContracts, firstColumn);
}

function clearEnglishMonsters(){
  const firstColumn = 2;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorMonsters.getLastRow();

  validatorMonsters.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorMonsters.getRange(1, errorColumn).setValue(`Issues:`)
   informAboutImportDataSource(validatorMonsters, "", importDataRowContracts, firstColumn);
}

function clearPolishMonsters(){
  const firstColumn = 6;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorMonsters.getLastRow();

  validatorMonsters.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorMonsters.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorMonsters, "", importDataRowContracts, firstColumn);
}


function clearGermanMonsters(){
  const firstColumn = 10;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorMonsters.getLastRow();

  validatorMonsters.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorMonsters.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorMonsters, "", importDataRowContracts, firstColumn);
}

function clearSpanishMonsters(){
  const firstColumn = 14;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorMonsters.getLastRow();

  validatorMonsters.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorMonsters.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorMonsters, "", importDataRowContracts, firstColumn);
}


function clearItalianMonsters(){
  const firstColumn = 18;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorMonsters.getLastRow();

  validatorMonsters.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorMonsters.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorMonsters, "", importDataRowContracts, firstColumn);
}

function clearFrenchMonsters(){
  const firstColumn = 22;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorMonsters.getLastRow();

  validatorMonsters.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorMonsters.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorMonsters, "", importDataRowContracts, firstColumn);
}

function clearRussianMonsters(){
  const firstColumn = 26;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorMonsters.getLastRow();

  validatorMonsters.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorMonsters.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorMonsters, "", importDataRowContracts, firstColumn);
}

function clearPortugeseMonsters(){
  const firstColumn = 30;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorMonsters.getLastRow();

  validatorMonsters.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorMonsters.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorMonsters, "", importDataRowContracts, firstColumn);
}

function clearJapaneseMonsters(){
  const firstColumn = 34;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorMonsters.getLastRow();

  validatorMonsters.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorMonsters.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorMonsters, "", importDataRowContracts, firstColumn);
}

function informAboutErrorsMonsters(issuesColumn){
  const issuesRow = 1;
  validatorMonsters.getRange(issuesRow, issuesColumn).setValue(`Issues: ${issuesCount}`);
}