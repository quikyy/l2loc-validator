function getAllItemsProd(){
    getEnglishItemsProd();
    getPolishItemsProd();
    getGermanItemsProd();
    getSpanishItemsProd();
    getItalianItemsProd();
    getFrenchItemsProd();
    getRussianItemsProd();
    getPortugeseItemsProd();
    getJapaneseItemsProd();
    informAboutGetFinish(sheetName_Items, "ALL LANGS", -1);
  }
  
  function getKeysItemsMenuBtnProd(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "PROD"); 
    const lastRow = lockKitItems.getLastRow();
    const columnKeys = 1;
    const itemKeys = lockKitItems.getRange(firstRowlockKitUI, columnKeys, lastRow, 1).getValues();
    validatorItems.getRange(firstRowValidatorItems, columnKeys, itemKeys.length, 1).setValues(itemKeys)
    informAboutImportDataSource(validatorItems, "PROD", importDataRowContracts, columnKeys);
  }
  
  function getKeysItemsProd(validatorItems, lockKitItems){
    if(validatorItems.getRange(4,1).getValue() == "") {
    const lastRow = lockKitItems.getLastRow();
    const columnKeys = 1;
    const contractsKeys = lockKitItems.getRange(firstRowlockKitItems, columnKeys, lastRow, 1).getValues();
    validatorItems.getRange(firstRowValidatorItems, columnKeys, contractsKeys.length, 1).setValues(contractsKeys)
    informAboutImportDataSource(validatorItems, "PROD", importDataRowContracts, columnKeys);
    }
  }
  
  function getEnglishItemsProd(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "PROD"); 
    getKeysItemsProd(validatorItems, lockKitItems);
    clearEnglishItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 2;
    const columnValidator = 2;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getPolishItemsProd(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "PROD"); 
    getKeysItemsProd(validatorItems, lockKitItems);
    clearPolishItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 3;
    const columnValidator = 6;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getGermanItemsProd(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "PROD"); 
    getKeysItemsProd(validatorItems, lockKitItems);
    clearGermanItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 4;
    const columnValidator = 10;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getSpanishItemsProd(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "PROD"); 
    getKeysItemsProd(validatorItems, lockKitItems);
    clearSpanishItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 5;
    const columnValidator = 14;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getItalianItemsProd(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "PROD"); 
    getKeysItemsProd(validatorItems, lockKitItems);
    clearItalianItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 6;
    const columnValidator = 18;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getFrenchItemsProd(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "PROD"); 
    getKeysItemsProd(validatorItems, lockKitItems);
    clearFrenchItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 7;
    const columnValidator = 22;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getRussianItemsProd(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "PROD"); 
    getKeysItemsProd(validatorItems, lockKitItems);
    clearRussianItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 8;
    const columnValidator = 26;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getPortugeseItemsProd(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "PROD"); 
    getKeysItemsProd(validatorItems, lockKitItems);
    clearPortugeseItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 9;
    const columnValidator = 30;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getJapaneseItemsProd(){
    const lockKitItems = getSheetFromL2Loc("ITEMS", "PROD"); 
    getKeysItemsProd(validatorItems, lockKitItems);
    clearJapaneseItems();
  
    const lastRowLoc = lockKitItems.getLastRow();
    const columnLoc = 10;
    const columnValidator = 34;
  
    const itemsLanguague = lockKitItems.getRange(firstRowlockKitItems, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = itemsLanguague.length;
  
    validatorItems.getRange(firstRowValidatorItems, columnValidator, lastRowValidator, 1).setValues(itemsLanguague)
    informAboutImportDataSource(validatorItems, "PROD", importDataRowContracts, columnValidator);
  }