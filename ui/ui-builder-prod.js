function getAllUIProd(){
    getEnglishUIProd();
    getPolishUIProd();
    getGermanUIProd();
    getSpanishUIProd();
    getItalianUIProd();
    getFrenchUIProd();
    getRussianUIProd();
    getPortgueseUIProd();
    getJapaneseUIProd();
    informAboutGetFinish(sheetName_UI, "ALL LANGS", -1);
  }
  
  function getKeysUIMenuBtnProd(){
    const lockKitUI = getSheetFromL2Loc("UI", "PROD"); 
    const lastRow = lockKitUI.getLastRow();
    const columnKeys = 1;
    const uiKeys = lockKitUI.getRange(firstRowlockKitUI, columnKeys, lastRow, 1).getValues();
    validatorUI.getRange(firstRowValidatorUI, columnKeys, uiKeys.length, 1).setValues(uiKeys)
    informAboutImportDataSource(validatorUI, "PROD", importDataRowContracts, columnKeys);
  }
  
  function getKeysUIProd(validatorUI, lockKitUI){
    if(validatorUI.getRange(4, 1).getValue() == "") {
      const lastRow = lockKitUI.getLastRow();
      const columnKeys = 1;
      const uiKeys = lockKitUI.getRange(firstRowlockKitUI, columnKeys, lastRow, 1).getValues();
      validatorUI.getRange(firstRowValidatorUI, columnKeys, uiKeys.length, 1).setValues(uiKeys)
      informAboutImportDataSource(validatorUI, "PROD", importDataRowContracts, columnKeys);
    }
  }
  
  function getEnglishUIProd(){
    const lockKitUI = getSheetFromL2Loc("UI", "Prod"); 
    getKeysUIProd(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 2;
    const columnValidator = 2;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getPolishUIProd(){
    const lockKitUI = getSheetFromL2Loc("UI", "PROD"); 
    getKeysUIProd(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 3;
    const columnValidator = 6;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getGermanUIProd(){
    const lockKitUI = getSheetFromL2Loc("UI", "PROD"); 
    getKeysUIProd(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 4;
    const columnValidator = 10;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getSpanishUIProd(){
    const lockKitUI = getSheetFromL2Loc("UI", "PROD"); 
    getKeysUIProd(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 5;
    const columnValidator = 14;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getItalianUIProd(){
    const lockKitUI = getSheetFromL2Loc("UI", "PROD"); 
    getKeysUIProd(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 6;
    const columnValidator = 18;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getFrenchUIProd(){
    const lockKitUI = getSheetFromL2Loc("UI", "PROD"); 
    getKeysUIProd(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 7;
    const columnValidator = 22;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getRussianUIProd(){
    const lockKitUI = getSheetFromL2Loc("UI", "PROD"); 
    getKeysUIProd(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 8;
    const columnValidator = 26;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getPortgueseUIProd(){
    const lockKitUI = getSheetFromL2Loc("UI", "PROD"); 
    getKeysUIProd(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 9;
    const columnValidator = 30;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getJapaneseUIProd(){
    const lockKitUI = getSheetFromL2Loc("UI", "PROD"); 
    getKeysUIProd(validatorUI, lockKitUI);
  
    const lastRowLoc = lockKitUI.getLastRow();
    const columnLoc = 10;
    const columnValidator = 34;
  
    const itemsLanguague = lockKitUI.getRange(firstRowlockKitUI, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorUI.getRange(firstRowValidatorUI, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorUI, "PROD", importDataRowContracts, columnValidator);
  }