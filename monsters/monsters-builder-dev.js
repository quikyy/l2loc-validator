function getAllMonstersDev() {
    clearAllMonsters();
    getEnglishMonstersDev();
    getPolishMonstersDev();
    getGermanMonstersDev();
    getSpanishMonstersDev();
    getItalianMonstersDev();
    getFrenchMonstersDev();
    getRussianMonstersDev();
    getPortugeseMonstersDev();
    getJapaneseMonstersDev();
    informAboutGetFinish(sheetName_Monsters, "ALL LANGS", -1);
  }
  
  
  function getKeysMonstersMenuBtnDev(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "DEV"); 
    const lastRow = lockKitMonsters.getLastRow();
    const columnKeys = 1;
    const itemKeys = lockKitMonsters.getRange(firstRowlockKitMonsters, columnKeys, lastRow, 1).getValues();
    validatorMonsters.getRange(firstRowValidatorMonsters, columnKeys, itemKeys.length, 1).setValues(itemKeys)
    informAboutImportDataSource(validatorMonsters, "DEV", importDataRowContracts, columnKeys);
  }
  
  function getKeysMonstersDev(validatorMonsters, lockKitMonsters){
    if(validatorMonsters.getRange(4,1).getValue() == "") {
    const lastRow = lockKitMonsters.getLastRow();
    const columnKeys = 1;
    const monsterKeys = lockKitMonsters.getRange(firstRowlockKitMonsters, columnKeys, lastRow, 1).getValues();
    validatorMonsters.getRange(firstRowValidatorMonsters, columnKeys, monsterKeys.length, 1).setValues(monsterKeys)
    informAboutImportDataSource(validatorMonsters, "DEV", importDataRowContracts, columnKeys);
    }
  }
  
  function getEnglishMonstersDev(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "DEV"); 
    getKeysMonstersDev(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 3;
    const columnValidator = 2;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getPolishMonstersDev(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "DEV"); 
    getKeysMonstersDev(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 4;
    const columnValidator = 6;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getGermanMonstersDev(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "DEV"); 
    getKeysMonstersDev(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 5;
    const columnValidator = 10;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getSpanishMonstersDev(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "DEV"); 
    getKeysMonstersDev(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 6;
    const columnValidator = 14;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getItalianMonstersDev(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "DEV"); 
    getKeysMonstersDev(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 7;
    const columnValidator = 18;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getFrenchMonstersDev(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "DEV"); 
    getKeysMonstersDev(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 8;
    const columnValidator = 22;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getRussianMonstersDev(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "DEV"); 
    getKeysMonstersDev(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 9;
    const columnValidator = 26;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getPortugeseMonstersDev(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "DEV"); 
    getKeysMonstersDev(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 10;
    const columnValidator = 30;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getJapaneseMonstersDev(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "DEV"); 
    getKeysMonstersDev(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 11;
    const columnValidator = 34;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "DEV", importDataRowContracts, columnValidator);
  }