function getAllHintsProd(){
    clearAllHints();
    getEnglishHintsProd();
    getPolishHintsProd();
    getGermanHintsProd();
    getSpanishHintsProd();
    getItalianHintsProd();
    getFrenchHintsProd();
    getRussianHintsProd();
    getPortugeseHintsProd();
    getJapaneseHintsProd();
    informAboutGetFinish(sheetName_Hints, "ALL LANGS", -1);
  }
  
  function getKeysHintsMenuBtProd(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "PROD"); 
    const lastRow = lockKitHints.getLastRow();
    const columnKeys = 1;
  
    const hintsKeys = lockKitHints.getRange(firstRowlockKitHints, columnKeys, lastRow, 1).getValues();
    validatorHints.getRange(firstRowValidatorHints, columnKeys, hintsKeys.length, 1).setValues(hintsKeys)
    informAboutImportDataSource(validatorHints, "PROD", importDataRowContracts, columnKeys);
  }
  
  function getKeysHintsProd(validatorHints, lockKitHints){
    if(validatorHints.getRange(4,1).getValue() == "") {
      const lastRow = lockKitHints.getLastRow();
      const columnKeys = 1;
  
      const hintsKeys = lockKitHints.getRange(firstRowlockKitHints, columnKeys, lastRow, 1).getValues();
      validatorHints.getRange(firstRowValidatorHints, columnKeys, hintsKeys.length, 1).setValues(hintsKeys)
      informAboutImportDataSource(validatorHints, "PROD", importDataRowContracts, columnKeys);
    }
  }
  
  function getEnglishHintsProd(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "PROD"); 
    getKeysHintsProd(validatorHints, lockKitHints);
    clearEnglishHints();
  
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 2;
    const columnValidator = 2;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague)
    informAboutImportDataSource(validatorHints, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getPolishHintsProd(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "PROD"); 
    getKeysHintsProd(validatorHints, lockKitHints);
    clearPolishHints();
  
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 3;
    const columnValidator = 6;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague)
    informAboutImportDataSource(validatorHints, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getGermanHintsProd(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "PROD"); 
    getKeysHintsProd(validatorHints, lockKitHints);
    clearGermanHints();
  
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 4;
    const columnValidator = 10;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague)
    informAboutImportDataSource(validatorHints, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getSpanishHintsProd(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "PROD"); 
    getKeysHintsProd(validatorHints, lockKitHints);
    clearSpanishHints();
    
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 5;
    const columnValidator = 14;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague)
    informAboutImportDataSource(validatorHints, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getItalianHintsProd(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "PROD"); 
    getKeysHintsProd(validatorHints, lockKitHints);
    clearItalianHints();
  
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 6;
    const columnValidator = 18;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague);
    informAboutImportDataSource(validatorHints, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getFrenchHintsProd(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "PROD"); 
    getKeysHintsProd(validatorHints, lockKitHints);
    clearFrenchHints();
    
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 7;
    const columnValidator = 22;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague);
    informAboutImportDataSource(validatorHints, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getRussianHintsProd(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "PROD"); 
    getKeysHintsProd(validatorHints, lockKitHints);
    clearRussianHints();
  
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 8;
    const columnValidator = 26;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague);
    informAboutImportDataSource(validatorHints, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getPortugeseHintsProd(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "PROD"); 
    getKeysHintsProd(validatorHints, lockKitHints);
    clearPortgueseHints();
  
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 9;
    const columnValidator = 30;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague);
    informAboutImportDataSource(validatorHints, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getJapaneseHintsProd(){
    const lockKitHints = getSheetFromL2Loc("HINTS", "PROD"); 
    getKeysHintsProd(validatorHints, lockKitHints);
    clearJapaneseHints();
  
    const lastRowLoc = lockKitHints.getLastRow();
    const columnLoc = 10;
    const columnValidator = 34;
  
    const hintsLanguague = lockKitHints.getRange(firstRowlockKitHints, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = hintsLanguague.length;
  
    validatorHints.getRange(firstRowValidatorHints, columnValidator, lastRowValidator, 1).setValues(hintsLanguague);
    informAboutImportDataSource(validatorHints, "PROD", importDataRowContracts, columnValidator);
  }
  
  