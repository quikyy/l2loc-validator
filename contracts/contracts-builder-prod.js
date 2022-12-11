function getAllContractsProd(){
    clearAllContracts();
    getEnglishContractsProd();
    getPolishContractsProd();
    getGermanContractsProd();
    getSpanishContractsProd();
    getItalianContractsProd();
    getFrenchContractsProd();
    getRussianContractsProd();
    getPortugeseContractsProd();
    getJapaneseContractsProd();
    informAboutGetFinish(sheetName_Contracts, "ALL LANGS", -1);
  }
  
  function getKeysContractsMenuBtnProd(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "PROD"); 
    const lastRow = lockKitContracts.getLastRow();
    const columnKeys = 1;
    const contractsKeys = lockKitContracts.getRange(firstRowlockKitContracts, columnKeys, lastRow, 1).getValues();
    validatorContracts.getRange(firstRowValidatorContracts, columnKeys, contractsKeys.length, 1).setValues(contractsKeys)
    informAboutImportDataSource(validatorContracts, "PROD", importDataRowContracts, columnKeys);
  }
  
  function getKeysContractsProd(validatorContracts, lockKitContracts){
    if(validatorContracts.getRange(firstRowValidatorContracts,1).getValue() == "") {
      const lastRow = lockKitContracts.getLastRow();
      const columnKeys = 1;
      const contractsKeys = lockKitContracts.getRange(firstRowlockKitContracts, columnKeys, lastRow, 1).getValues();
      validatorContracts.getRange(firstRowValidatorContracts, columnKeys, contractsKeys.length, 1).setValues(contractsKeys);
      informAboutImportDataSource(validatorContracts, "PROD", importDataRowContracts, columnKeys);
    }
  }
  
  function getEnglishContractsProd(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "PROD"); 
    getKeysContractsProd(validatorContracts, lockKitContracts);
    clearEnglishContracts();
  
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 2;
    const columnValidator = 2;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague)
    informAboutImportDataSource(validatorContracts, "PROD", importDataRowContracts, columnValidator)
  }
  
  function getPolishContractsProd(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "PROD"); 
    getKeysContractsProd(validatorContracts, lockKitContracts);
    clearPolishContracts();
  
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 3;
    const columnValidator = 6;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague)
    informAboutImportDataSource(validatorContracts, "PROD", importDataRowContracts, columnValidator)
  }
  
  function getGermanContractsProd(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "PROD"); 
    getKeysContractsProd(validatorContracts, lockKitContracts);
    clearGermanContracts();
  
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 4;
    const columnValidator = 10;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague);
    informAboutImportDataSource(validatorContracts, "PROD", importDataRowContracts, columnValidator)
  }
  
  function getSpanishContractsProd(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "PROD"); 
    getKeysContractsProd(validatorContracts, lockKitContracts);
    clearSpanishContracts();
    
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 5;
    const columnValidator = 14;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague);
    informAboutImportDataSource(validatorContracts, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getItalianContractsProd(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "PROD"); 
    getKeysContractsProd(validatorContracts, lockKitContracts);
    clearItalianContracts();
  
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 6;
    const columnValidator = 18;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague);
    informAboutImportDataSource(validatorContracts, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getFrenchContractsProd(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "PROD"); 
    getKeysContractsProd(validatorContracts, lockKitContracts);
    clearFrenchContracts();
    
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 7;
    const columnValidator = 22;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague);
    informAboutImportDataSource(validatorContracts, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getRussianContractsProd(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "PROD"); 
    getKeysContractsProd(validatorContracts, lockKitContracts);
    clearRussianContracts();
  
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 8;
    const columnValidator = 26;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague);
    informAboutImportDataSource(validatorContracts, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getPortugeseContractsProd(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "PROD"); 
    getKeysContractsProd(validatorContracts, lockKitContracts);
    clearPortgueseContracts();
  
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 9;
    const columnValidator = 30;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague);
    informAboutImportDataSource(validatorContracts, "PROD", importDataRowContracts, columnValidator);
  }
  
  function getJapaneseContractsProd(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "PROD"); 
    getKeysContractsProd(validatorContracts, lockKitContracts);
    clearJapaneseContracts();
  
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 10;
    const columnValidator = 34;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague);
    informAboutImportDataSource(validatorContracts, "PROD", importDataRowContracts, columnValidator);
  }
  