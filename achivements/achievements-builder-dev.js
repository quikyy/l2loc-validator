function getAllAchievementsDev(){
    clearAllAchievements();
    getEnglishAchievementsDev();
    getPolishAchievementsDev();
    getGermanAchievementsDev();
    getSpanishAchievementsDev();
    getItalianAchievementsDev();
    getFrenchAchievementsDev();
    getRussianAchievementsDev();
    getPortugeseAchievementsDev();
    getJapaneseAchievementsDev();
    informAboutGetFinish(sheetName_Achievements, "ALL LANGS", -1);
  }
  
  function getKeysAchievementsMenuBtnDev(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "DEV"); 
    const lastRow = lockKitAchievements.getLastRow();
    const columnKeys = 1;
  
    const achievementsKeys = lockKitAchievements.getRange(firstRowlockKitAchievements, columnKeys, lastRow, 1).getValues();
    validatorAchievements.getRange(firstRowValidatorAchievements, columnKeys, achievementsKeys.length, 1).setValues(achievementsKeys)
    informAboutImportDataSource(validatorAchievements, "DEV", importDataRowContracts, columnKeys);
  }
  
  function getKeysAchievementsDev(validatorAchievements, lockKitAchievements){
    if(validatorAchievements.getRange(4,1).getValue() == "") {
      const lastRow = lockKitAchievements.getLastRow();
      const columnKeys = 1;
  
      const achievementsKeys = lockKitAchievements.getRange(firstRowlockKitAchievements, columnKeys, lastRow, 1).getValues();
      validatorAchievements.getRange(firstRowValidatorAchievements, columnKeys, achievementsKeys.length, 1).setValues(achievementsKeys)
      informAboutImportDataSource(validatorAchievements, "DEV", importDataRowContracts, columnKeys);
    }
  }
  
  function getEnglishAchievementsDev(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "DEV"); 
    getKeysAchievementsDev(validatorAchievements, lockKitAchievements);
    clearEnglishAchievements();
  
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 3;
    const columnValidator = 2;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague)
    informAboutImportDataSource(validatorAchievements, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getPolishAchievementsDev(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "DEV"); 
    getKeysAchievementsDev(validatorAchievements, lockKitAchievements);
    clearPolishAchievements();
  
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 4;
    const columnValidator = 6;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague)
    informAboutImportDataSource(validatorAchievements, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getGermanAchievementsDev(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "DEV"); 
    getKeysAchievementsDev(validatorAchievements, lockKitAchievements);
    clearGermanAchievements();
  
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 5;
    const columnValidator = 10;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague)
    informAboutImportDataSource(validatorAchievements, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getSpanishAchievementsDev(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "DEV"); 
    getKeysAchievementsDev(validatorAchievements, lockKitAchievements);
    clearSpanishAchievements();
    
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 6;
    const columnValidator = 14;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague)
    informAboutImportDataSource(validatorAchievements, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getItalianAchievementsDev(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "DEV"); 
    getKeysAchievementsDev(validatorAchievements, lockKitAchievements);
    clearItalianAchievements();
  
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 7;
    const columnValidator = 18;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague);
    informAboutImportDataSource(validatorAchievements, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getFrenchAchievementsDev(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "DEV"); 
    getKeysAchievementsDev(validatorAchievements, lockKitAchievements);
    clearFrenchAchievements();
    
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 8;
    const columnValidator = 22;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague);
    informAboutImportDataSource(validatorAchievements, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getRussianAchievementsDev(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "DEV"); 
    getKeysAchievementsDev(validatorAchievements, lockKitAchievements);
    clearRussianAchievements();
  
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 9;
    const columnValidator = 26;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague);
    informAboutImportDataSource(validatorAchievements, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getPortugeseAchievementsDev(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "DEV"); 
    getKeysAchievementsDev(validatorAchievements, lockKitAchievements);
    clearPortgueseAchievements();
  
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 10;
    const columnValidator = 30;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague);
    informAboutImportDataSource(validatorAchievements, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getJapaneseAchievementsDev(){
    const lockKitAchievements = getSheetFromL2Loc("ACHIEVEMENTS", "DEV"); 
    getKeysAchievementsDev(validatorAchievements, lockKitAchievements);
    clearJapaneseAchievements();
  
    const lastRowLoc = lockKitAchievements.getLastRow();
    const columnLoc = 11;
    const columnValidator = 34;
  
    const achievementsLanguague = lockKitAchievements.getRange(firstRowlockKitAchievements, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = achievementsLanguague.length;
  
    validatorAchievements.getRange(firstRowValidatorAchievements, columnValidator, lastRowValidator, 1).setValues(achievementsLanguague);
    informAboutImportDataSource(validatorAchievements, "DEV", importDataRowContracts, columnValidator);
  }
  
  