function getAllUIDev(){
    getEnglishUIDev();
    getPolishUIDev();
    getGermanUIDev();
    getSpanishUIDev();
    getItalianUIDev();
    getFrenchUIDev();
    getRussianUIDev();
    getPortgueseUIDev();
    getJapaneseUIDev();
    informAboutGetFinish(sheetName_UI, "ALL LANGS", -1);
  }
  
  function getKeysUIMenuBtnDev(){
    const lockKitUI = getSheetFromL2Loc("UI", "DEV"); 
    const lastRow = lockKitUI.getLastRow();
    const columnKeys = 1;
    const uiKeys = lockKitUI.getRange(firstRowlockKitUI, columnKeys, lastRow, 1).getValues();
    validatorUI.getRange(firstRowValidatorUI, columnKeys, uiKeys.length, 1).setValues(uiKeys)
    informAboutImportDataSource(validatorUI, "DEV", importDataRowContracts, columnKeys);
  }
  
  function getKeysUIDev(validatorUI, lockKitUI){
    if(validatorUI.getRange(4, 1).getValue() == "") {
      const lastRow = lockKitUI.getLastRow();
      const columnKeys = 1;
      const uiKeys = lockKitUI.getRange(firstRowlockKitUI, columnKeys, lastRow, 1).getValues();
      validatorUI.getRange(firstRowValidatorUI, columnKeys, uiKeys.length, 1).setValues(uiKeys)
      informAboutImportDataSource(validatorUI, "DEV", importDataRowContracts, columnKeys);
    }
  }
  
  function getEnglishUIDev(){
    const lockKitUI = getSheetFromL2Loc("UI", "DEV"); 
    getKeysUIDev(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 3;
    const columnValidator = 2;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getPolishUIDev(){
    const lockKitUI = getSheetFromL2Loc("UI", "DEV"); 
    getKeysUIDev(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 4;
    const columnValidator = 6;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getGermanUIDev(){
    const lockKitUI = getSheetFromL2Loc("UI", "DEV"); 
    getKeysUIDev(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 9;
    const columnValidator = 10;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getSpanishUIDev(){
    const lockKitUI = getSheetFromL2Loc("UI", "DEV"); 
    getKeysUIDev(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 10;
    const columnValidator = 14;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getItalianUIDev(){
    const lockKitUI = getSheetFromL2Loc("UI", "DEV"); 
    getKeysUIDev(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 11;
    const columnValidator = 18;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getFrenchUIDev(){
    const lockKitUI = getSheetFromL2Loc("UI", "DEV"); 
    getKeysUIDev(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 12;
    const columnValidator = 22;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getRussianUIDev(){
    const lockKitUI = getSheetFromL2Loc("UI", "DEV"); 
    getKeysUIDev(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 13;
    const columnValidator = 26;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getPortgueseUIDev(){
    const lockKitUI = getSheetFromL2Loc("UI", "DEV"); 
    getKeysUIDev(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 14;
    const columnValidator = 30;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getJapaneseUIDev(){
    const lockKitUI = getSheetFromL2Loc("UI", "DEV"); 
    getKeysUIDev(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 15;
    const columnValidator = 34;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "DEV", importDataRowContracts, columnValidator);
  }
  
  