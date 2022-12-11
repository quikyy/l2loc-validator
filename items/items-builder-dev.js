function getAllItemsDev(){
    getEnglishItemsDev();
    getPolishItemsDev();
    getGermanItemsDev();
    getSpanishItemsDev();
    getItalianItemsDev();
    getFrenchItemsDev();
    getRussianItemsDev();
    getPortugeseItemsDev();
    getJapaneseItemsDev();
    informAboutGetFinish(sheetName_Items, "ALL LANGS", -1);
  }
  
  function getKeysItemsMenuBtnDev(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "DEV"); 
    const lastRow = lockKitItems.getLastRow();
    const columnKeys = 1;
    const itemKeys = lockKitItems.getRange(firstRowlockKitUI, columnKeys, lastRow, 1).getValues();
    validatorItems.getRange(firstRowValidatorItems, columnKeys, itemKeys.length, 1).setValues(itemKeys)
    informAboutImportDataSource(validatorItems, "DEV", importDataRowContracts, columnKeys);
  }
  
  function getKeysItemsDev(validatorItems, lockKitItems){
    if(validatorItems.getRange(4,1).getValue() == "") {
    const lastRow = lockKitItems.getLastRow();
    const columnKeys = 1;
    const contractsKeys = lockKitItems.getRange(firstRowlockKitItems, columnKeys, lastRow, 1).getValues();
    validatorItems.getRange(firstRowValidatorItems, columnKeys, contractsKeys.length, 1).setValues(contractsKeys)
    informAboutImportDataSource(validatorItems, "DEV", importDataRowContracts, columnKeys);
    }
  }
  
  function getEnglishItemsDev(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "DEV"); 
    getKeysItemsDev(validatorItems, lockKitItems);
    clearEnglishItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 3;
    const columnValidator = 2;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getPolishItemsDev(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "DEV"); 
    getKeysItemsDev(validatorItems, lockKitItems);
    clearPolishItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 4;
    const columnValidator = 6;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getGermanItemsDev(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "DEV"); 
    getKeysItemsDev(validatorItems, lockKitItems);
    clearGermanItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 5;
    const columnValidator = 10;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getSpanishItemsDev(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "DEV"); 
    getKeysItemsDev(validatorItems, lockKitItems);
    clearSpanishItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 6;
    const columnValidator = 14;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getItalianItemsDev(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "DEV"); 
    getKeysItemsDev(validatorItems, lockKitItems);
    clearItalianItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 7;
    const columnValidator = 18;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getFrenchItemsDev(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "DEV"); 
    getKeysItemsDev(validatorItems, lockKitItems);
    clearFrenchItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 8;
    const columnValidator = 22;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getRussianItemsDev(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "DEV"); 
    getKeysItemsDev(validatorItems, lockKitItems);
    clearRussianItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 9;
    const columnValidator = 26;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getPortugeseItemsDev(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "DEV"); 
    getKeysItemsDev(validatorItems, lockKitItems);
    clearPortugeseItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 10;
    const columnValidator = 30;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getJapaneseItemsDev(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "DEV"); 
    getKeysItemsDev(validatorItems, lockKitItems);
    clearJapaneseItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 11;
    const columnValidator = 34;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "DEV", importDataRowContracts, columnValidator);
  }