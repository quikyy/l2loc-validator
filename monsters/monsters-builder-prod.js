function getAllMonstersProd() {
    clearAllMonsters();
    getEnglishMonstersProd();
    getPolishMonstersProd();
    getGermanMonstersProd();
    getSpanishMonstersProd();
    getItalianMonstersProd();
    getFrenchMonstersProd();
    getRussianMonstersProd();
    getPortugeseMonstersProd();
    getJapaneseMonstersProd();
    informAboutGetFinish(sheetName_Monsters, "ALL LANGS", -1);
  }
  
  
  function getKeysMonstersMenuBtnProd(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "PROD"); 
    const lastRow = lockKitMonsters.getLastRow();
    const columnKeys = 1;
    const itemKeys = lockKitMonsters.getRange(firstRowlockKitMonsters, columnKeys, lastRow, 1).getValues();
    validatorMonsters.getRange(firstRowValidatorMonsters, columnKeys, itemKeys.length, 1).setValues(itemKeys)
    informAboutImportDataSource(validatorMonsters, "PROD", importDataRowContracts, columnKeys);
  }
  
  function getKeysMonstersProd(validatorMonsters, lockKitMonsters){
    if(validatorMonsters.getRange(4,1).getValue() == "") {
    const lastRow = lockKitMonsters.getLastRow();
    const columnKeys = 1;
    const monsterKeys = lockKitMonsters.getRange(firstRowlockKitMonsters, columnKeys, lastRow, 1).getValues();
    validatorMonsters.getRange(firstRowValidatorMonsters, columnKeys, monsterKeys.length, 1).setValues(monsterKeys)
    informAboutImportDataSource(validatorMonsters, "PROD", importDataRowContracts, columnKeys);
    }
  }
  
  function getEnglishMonstersProd(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "PROD"); 
    getKeysMonstersProd(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 3;
    const columnValidator = 2;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getPolishMonstersProd(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "PROD"); 
    getKeysMonstersProd(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 4;
    const columnValidator = 6;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getGermanMonstersProd(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "PROD"); 
    getKeysMonstersProd(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 5;
    const columnValidator = 10;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getSpanishMonstersProd(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "PROD"); 
    getKeysMonstersProd(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 6;
    const columnValidator = 14;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getItalianMonstersProd(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "PROD"); 
    getKeysMonstersProd(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 7;
    const columnValidator = 18;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getFrenchMonstersProd(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "PROD"); 
    getKeysMonstersProd(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 8;
    const columnValidator = 22;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getRussianMonstersProd(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "PROD"); 
    getKeysMonstersProd(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 9;
    const columnValidator = 26;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getPortugeseMonstersProd(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "PROD"); 
    getKeysMonstersProd(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 10;
    const columnValidator = 30;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getJapaneseMonstersProd(){
    const lockKitMonsters = getSheetFromL2Loc("MONSTERS", "PROD"); 
    getKeysMonstersProd(validatorMonsters, lockKitMonsters)
  
    const lastRowLoc = lockKitMonsters.getLastRow();
    const columnLoc = 11;
    const columnValidator = 34;
  
    const monstersLanguague = lockKitMonsters.getRange(firstRowlockKitMonsters, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = monstersLanguague.length;
  
    validatorMonsters.getRange(firstRowValidatorMonsters, columnValidator, lastRowValidator, 1).setValues(monstersLanguague)
    informAboutImportDataSource(validatorMonsters, "PROD", importDataRowContracts, columnValidator);
  }