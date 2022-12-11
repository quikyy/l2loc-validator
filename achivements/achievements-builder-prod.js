function getAllAchievementsProd(){
    clearAllAchievements();
    getEnglishAchievementsProd();
    getPolishAchievementsProd();
    getGermanAchievementsProd();
    getSpanishAchievementsProd();
    getItalianAchievementsProd();
    getFrenchAchievementsProd();
    getRussianAchievementsProd();
    getPortugeseAchievementsProd();
    getJapaneseAchievementsProd();
    informAboutGetFinish(sheetName_Achievements, "ALL LANGS", -1);
  }
  
  function getKeysAchievementsMenuBtnProd(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "PROD"); 
    const lastRow = lockKitAchievements.getLastRow();
    const columnKeys = 1;
  
    const achievementsKeys = lockKitAchievements.getRange(firstRowlockKitAchievements, columnKeys, lastRow, 1).getValues();
    validatorAchievements.getRange(firstRowValidatorAchievements, columnKeys, achievementsKeys.length, 1).setValues(achievementsKeys)
    informAboutImportDataSource(validatorAchievements, "PROD", importDataRowContracts, columnKeys);
  }
  
  function getKeysAchievementsProd(validatorAchievements, lockKitAchievements){
    if(validatorAchievements.getRange(4,1).getValue() == "") {
      const lastRow = lockKitAchievements.getLastRow();
      const columnKeys = 1;
  
      const achievementsKeys = lockKitAchievements.getRange(firstRowlockKitAchievements, columnKeys, lastRow, 1).getValues();
      validatorAchievements.getRange(firstRowValidatorAchievements, columnKeys, achievementsKeys.length, 1).setValues(achievementsKeys)
      informAboutImportDataSource(validatorAchievements, "PROD", importDataRowContracts, columnKeys);
    }
  }
  
  function getEnglishAchievementsProd(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "PROD"); 
    getKeysAchievementsProd(validatorAchievements, lockKitAchievements);
    clearEnglishAchievements();
  
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 2;
    const columnValidator = 2;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague)
    informAboutImportDataSource(validatorAchievements, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getPolishAchievementsProd(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "PROD"); 
    getKeysAchievementsProd(validatorAchievements, lockKitAchievements);
    clearPolishAchievements();
  
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 3;
    const columnValidator = 6;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague)
    informAboutImportDataSource(validatorAchievements, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getGermanAchievementsProd(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "PROD"); 
    getKeysAchievementsProd(validatorAchievements, lockKitAchievements);
    clearGermanAchievements();
  
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 4;
    const columnValidator = 10;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague)
    informAboutImportDataSource(validatorAchievements, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getSpanishAchievementsProd(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "PROD"); 
    getKeysAchievementsProd(validatorAchievements, lockKitAchievements);
    clearSpanishAchievements();
    
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 5;
    const columnValidator = 14;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague)
    informAboutImportDataSource(validatorAchievements, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getItalianAchievementsProd(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "PROD"); 
    getKeysAchievementsProd(validatorAchievements, lockKitAchievements);
    clearItalianAchievements();
  
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 6;
    const columnValidator = 18;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague);
    informAboutImportDataSource(validatorAchievements, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getFrenchAchievementsProd(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "PROD"); 
    getKeysAchievementsProd(validatorAchievements, lockKitAchievements);
    clearFrenchAchievements();
    
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 7;
    const columnValidator = 22;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague);
    informAboutImportDataSource(validatorAchievements, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getRussianAchievementsProd(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "PROD"); 
    getKeysAchievementsProd(validatorAchievements, lockKitAchievements);
    clearRussianAchievements();
  
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 8;
    const columnValidator = 26;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague);
    informAboutImportDataSource(validatorAchievements, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getPortugeseAchievementsProd(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "PROD"); 
    getKeysAchievementsProd(validatorAchievements, lockKitAchievements);
    clearPortgueseAchievements();
  
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 9;
    const columnValidator = 30;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague);
    informAboutImportDataSource(validatorAchievements, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getJapaneseAchievementsProd(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "PROD"); 
    getKeysAchievementsProd(validatorAchievements, lockKitAchievements);
    clearJapaneseAchievements();
  
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 10;
    const columnValidator = 34;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague);
    informAboutImportDataSource(validatorAchievements, "PROD", importDataRowContracts, columnValidator);
  }