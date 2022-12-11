function getAllHintsDev(){
    clearAllHints();
    getEnglishHintsDev();
    getPolishHintsDev();
    getGermanHintsDev();
    getSpanishHintsDev();
    getItalianHintsDev();
    getFrenchHintsDev();
    getRussianHintsDev();
    getPortugeseHintsDev();
    getJapaneseHintsDev();
    informAboutGetFinish(sheetName_Hints, "ALL LANGS", -1);
  }
  
  function getKeysHintsMenuBtDev(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "DEV"); 
    const lastRow = lockKitHints.getLastRow();
    const columnKeys = 1;
  
    const hintsKeys = lockKitHints.getRange(firstRowlockKitHints, columnKeys, lastRow, 1).getValues();
    validatorHints.getRange(firstRowValidatorHints, columnKeys, hintsKeys.length, 1).setValues(hintsKeys)
    informAboutImportDataSource(validatorHints, "DEV", importDataRowContracts, columnKeys);
  }
  
  function getKeysHintsDev(validatorHints, lockKitHints){
    if(validatorHints.getRange(4,1).getValue() == "") {
      const lastRow = lockKitHints.getLastRow();
      const columnKeys = 1;
  
      const hintsKeys = lockKitHints.getRange(firstRowlockKitHints, columnKeys, lastRow, 1).getValues();
      validatorHints.getRange(firstRowValidatorHints, columnKeys, hintsKeys.length, 1).setValues(hintsKeys)
      informAboutImportDataSource(validatorHints, "DEV", importDataRowContracts, columnKeys);
    }
  }
  
  function getEnglishHintsDev(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "DEV"); 
    getKeysHintsDev(validatorHints, lockKitHints);
    clearEnglishHints();
  
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 3;
    const columnValidator = 2;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague)
    informAboutImportDataSource(validatorHints, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getPolishHintsDev(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "DEV"); 
    getKeysHintsDev(validatorHints, lockKitHints);
    clearPolishHints();
  
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 4;
    const columnValidator = 6;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague)
    informAboutImportDataSource(validatorHints, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getGermanHintsDev(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "DEV"); 
    getKeysHintsDev(validatorHints, lockKitHints);
    clearGermanHints();
  
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 5;
    const columnValidator = 10;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague)
    informAboutImportDataSource(validatorHints, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getSpanishHintsDev(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "DEV"); 
    getKeysHintsDev(validatorHints, lockKitHints);
    clearSpanishHints();
    
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 6;
    const columnValidator = 14;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague)
    informAboutImportDataSource(validatorHints, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getItalianHintsDev(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "DEV"); 
    getKeysHintsDev(validatorHints, lockKitHints);
    clearItalianHints();
  
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 7;
    const columnValidator = 18;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague);
    informAboutImportDataSource(validatorHints, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getFrenchHintsDev(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "DEV"); 
    getKeysHintsDev(validatorHints, lockKitHints);
    clearFrenchHints();
    
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 8;
    const columnValidator = 22;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague);
    informAboutImportDataSource(validatorHints, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getRussianHintsDev(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "DEV"); 
    getKeysHintsDev(validatorHints, lockKitHints);
    clearRussianHints();
  
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 9;
    const columnValidator = 26;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague);
    informAboutImportDataSource(validatorHints, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getPortugeseHintsDev(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "DEV"); 
    getKeysHintsDev(validatorHints, lockKitHints);
    clearPortgueseHints();
  
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 10;
    const columnValidator = 30;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague);
    informAboutImportDataSource(validatorHints, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getJapaneseHintsDev(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "DEV"); 
    getKeysHintsDev(validatorHints, lockKitHints);
    clearJapaneseHints();
  
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 11;
    const columnValidator = 34;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague);
    informAboutImportDataSource(validatorHints, "DEV", importDataRowContracts, columnValidator);
  }
  
  