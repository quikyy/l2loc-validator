const validatorAchievements = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Achievements')
const firstRowlockKitAchievements = 2;
const firstRowValidatorAchievements = 4;

function validateAllAchievements(){
  validateEnglish_Achievements();
  validatePolish_Achievements();
  validateGerman_Achievements();
  validateSpanish_Achievements();
  validateItalian_Achievements();
  validateFrench_Achievements();
  validateRussian_Achievements();
  validatePortugese_Achievements();
  validateJapanese_Achievements();
  informAboutCheckFinish(sheetName_Achievements, "ALL LANGS", -1);
}

function clearAllAchievements(){
  clearKeysAchievements();
  clearEnglishAchievements();
  clearPolishAchievements();
  clearGermanAchievements();
  clearSpanishAchievements();
  clearItalianAchievements();
  clearFrenchAchievements();
  clearRussianAchievements();
  clearPortgueseAchievements();
  clearJapaneseAchievements();
}

function clearKeysAchievements(){
  const lastRow = validatorAchievements.getLastRow();
  const columnKeys = 1;
  validatorAchievements.getRange(firstRowValidatorAchievements, columnKeys, lastRow, 1).clearContent();
  informAboutImportDataSource(validatorAchievements, "", importDataRowContracts, columnKeys);
}

function clearEnglishAchievements(){
  const firstColumn = 2;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorAchievements.getLastRow();

  validatorAchievements.getRange(firstRowValidatorAchievements, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorAchievements.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorAchievements, "", importDataRowContracts, firstColumn);
}

function clearPolishAchievements(){
  const firstColumn = 6;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorAchievements.getLastRow();

  validatorAchievements.getRange(firstRowValidatorAchievements, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorAchievements.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorAchievements, "", importDataRowContracts, firstColumn);
}

function clearGermanAchievements(){
  const firstColumn = 10;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorAchievements.getLastRow();

  validatorAchievements.getRange(firstRowValidatorAchievements, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorAchievements.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorAchievements, "", importDataRowContracts, firstColumn);
}

function clearSpanishAchievements(){
  const firstColumn = 14;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorAchievements.getLastRow();

  validatorAchievements.getRange(firstRowValidatorAchievements, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorAchievements.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorAchievements, "", importDataRowContracts, firstColumn);
}

function clearItalianAchievements(){
  const firstColumn = 18;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorAchievements.getLastRow();

  validatorAchievements.getRange(firstRowValidatorAchievements, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorAchievements.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorAchievements, "", importDataRowContracts, firstColumn);
}

function clearFrenchAchievements(){
  const firstColumn = 22;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorAchievements.getLastRow();

  validatorAchievements.getRange(firstRowValidatorAchievements, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorAchievements.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorAchievements, "", importDataRowContracts, firstColumn);
}

function clearRussianAchievements(){
  const firstColumn = 26;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorAchievements.getLastRow();

  validatorAchievements.getRange(firstRowValidatorAchievements, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorAchievements.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorAchievements, "", importDataRowContracts, firstColumn);
}

function clearPortgueseAchievements(){
  const firstColumn = 30;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorAchievements.getLastRow();

  validatorAchievements.getRange(firstRowValidatorAchievements, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorAchievements.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorAchievements, "", importDataRowContracts, firstColumn);
}

function clearJapaneseAchievements(){
  const firstColumn = 34;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorAchievements.getLastRow();

  validatorAchievements.getRange(firstRowValidatorAchievements, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorAchievements.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorAchievements, "", importDataRowContracts, firstColumn);
}
