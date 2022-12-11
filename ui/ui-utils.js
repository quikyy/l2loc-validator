const validatorUI = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('UI');
const firstRowlockKitUI = 2;
const firstRowValidatorUI = 4;

function validateAllUI(){
  validateEnglish_UI();
  validatePolish_UI();
  validateGerman_UI();
  validateSpanish_UI();
  validateItalian_UI();
  validateFrench_UI();
  validateRussian_UI();
  validatePortugese_UI();
  validateJapanese_UI();
  informAboutCheckFinish(sheetName_UI, "ALL LANGS", -1);
}

function clearAllUI(){
  clearKeysUI();
  clearEnglishUI();
  clearPolishUI();
  clearGermanUI();
  clearSpanishUI();
  clearItalianUI();
  clearFrenchUI();
  clearRussianUI();
  clearPortugeseUI();
  clearRussianUI();
  clearJapaneseUI();
}

function clearKeysUI(){
  const lastRow = validatorUI.getLastRow();
  const columnKeys = 1;
  validatorUI.getRange(firstRowValidatorUI, columnKeys, lastRow, 1).clearContent();
  informAboutImportDataSource(validatorUI, "", importDataRowContracts, columnKeys);
}

function clearEnglishUI(){
  const firstColumn = 2;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorUI.getLastRow();

  validatorUI.getRange(firstRowValidatorUI, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorUI.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorUI, "", importDataRowContracts, firstColumn);
}

function clearPolishUI(){
  const firstColumn = 6;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorUI.getLastRow();

  validatorUI.getRange(firstRowValidatorUI, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorUI.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorUI, "", importDataRowContracts, firstColumn);
}

function clearGermanUI(){
  const firstColumn = 10;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorUI.getLastRow();

  validatorUI.getRange(firstRowValidatorUI, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorUI.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorUI, "", importDataRowContracts, firstColumn);
}

function clearSpanishUI(){
  const firstColumn = 14;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorUI.getLastRow();

  validatorUI.getRange(firstRowValidatorUI, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorUI.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorUI, "", importDataRowContracts, firstColumn);
}

function clearItalianUI(){
  const firstColumn = 18;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorUI.getLastRow();

  validatorUI.getRange(firstRowValidatorUI, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorUI.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorUI, "", importDataRowContracts, firstColumn);
}

function clearFrenchUI(){
  const firstColumn = 22;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorUI.getLastRow();

  validatorUI.getRange(firstRowValidatorUI, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorUI.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorUI, "", importDataRowContracts, firstColumn);
}

function clearRussianUI(){
  const firstColumn = 26;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorUI.getLastRow();

  validatorUI.getRange(firstRowValidatorUI, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorUI.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorUI, "", importDataRowContracts, firstColumn);
}

function clearPortugeseUI(){
  const firstColumn = 30;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorUI.getLastRow();

  validatorUI.getRange(firstRowValidatorUI, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorUI.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorUI, "", importDataRowContracts, firstColumn);
}

function clearJapaneseUI(){
  const firstColumn = 34;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorUI.getLastRow();

  validatorUI.getRange(firstRowValidatorUI, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorUI.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorUI, "", importDataRowContracts, firstColumn);
}

function informAboutErrorsUI(issuesColumn){
  const issuesRow = 1;
  validatorUI.getRange(issuesRow, issuesColumn).setValue(`Issues: ${issuesCount}`);
}