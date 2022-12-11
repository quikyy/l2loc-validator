function getAllContractsDev(){
    clearAllContracts();
    getEnglishContractsDev();
    getPolishContractsDev();
    getGermanContractsDev();
    getSpanishContractsDev();
    getItalianContractsDev();
    getFrenchContractsDev();
    getRussianContractsDev();
    getPortugeseContractsDev();
    getJapaneseContractsDev();
    informAboutGetFinish(sheetName_Contracts, "ALL LANGS", -1);
  }
  
  function getKeysContractsMenuBtnDev(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "DEV"); 
    const lastRow = lockKitContracts.getLastRow();
    const columnKeys = 1;
    const contractsKeys = lockKitContracts.getRange(firstRowlockKitContracts, columnKeys, lastRow, 1).getValues();
    validatorContracts.getRange(firstRowValidatorContracts, columnKeys, contractsKeys.length, 1).setValues(contractsKeys)
    informAboutImportDataSource(validatorContracts, "DEV", importDataRowContracts, columnKeys);
  }
  
  function getKeysContractsDev(validatorContracts, lockKitContracts){
    if(validatorContracts.getRange(firstRowValidatorContracts,1).getValue() == "") {
      const lastRow = lockKitContracts.getLastRow();
      const columnKeys = 1;
      const contractsKeys = lockKitContracts.getRange(firstRowlockKitContracts, columnKeys, lastRow, 1).getValues();
      validatorContracts.getRange(firstRowValidatorContracts, columnKeys, contractsKeys.length, 1).setValues(contractsKeys);
      informAboutImportDataSource(validatorContracts, "DEV", importDataRowContracts, columnKeys);
    }
  }
  
  function getEnglishContractsDev(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "DEV"); 
    getKeysContractsDev(validatorContracts, lockKitContracts);
    clearEnglishContracts();
  
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 3;
    const columnValidator = 2;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague)
    informAboutImportDataSource(validatorContracts, "DEV", importDataRowContracts, columnValidator)
  }
  
  function getPolishContractsDev(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "DEV"); 
    getKeysContractsDev(validatorContracts, lockKitContracts);
    clearPolishContracts();
  
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 4;
    const columnValidator = 6;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague)
    informAboutImportDataSource(validatorContracts, "DEV", importDataRowContracts, columnValidator)
  }
  
  function getGermanContractsDev(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "DEV"); 
    getKeysContractsDev(validatorContracts, lockKitContracts);
    clearGermanContracts();
  
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 5;
    const columnValidator = 10;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague);
    informAboutImportDataSource(validatorContracts, "DEV", importDataRowContracts, columnValidator)
  }
  
  function getSpanishContractsDev(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "DEV"); 
    getKeysContractsDev(validatorContracts, lockKitContracts);
    clearSpanishContracts();
    
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 6;
    const columnValidator = 14;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague);
    informAboutImportDataSource(validatorContracts, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getItalianContractsDev(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "DEV"); 
    getKeysContractsDev(validatorContracts, lockKitContracts);
    clearItalianContracts();
  
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 7;
    const columnValidator = 18;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague);
    informAboutImportDataSource(validatorContracts, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getFrenchContractsDev(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "DEV"); 
    getKeysContractsDev(validatorContracts, lockKitContracts);
    clearFrenchContracts();
    
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 8;
    const columnValidator = 22;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague);
    informAboutImportDataSource(validatorContracts, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getRussianContractsDev(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "DEV"); 
    getKeysContractsDev(validatorContracts, lockKitContracts);
    clearRussianContracts();
  
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 9;
    const columnValidator = 26;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague);
    informAboutImportDataSource(validatorContracts, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getPortugeseContractsDev(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "DEV"); 
    getKeysContractsDev(validatorContracts, lockKitContracts);
    clearPortgueseContracts();
  
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 10;
    const columnValidator = 30;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague);
    informAboutImportDataSource(validatorContracts, "DEV", importDataRowContracts, columnValidator);
  }
  
  function getJapaneseContractsDev(){
    const lockKitContracts = getSheetFromL2Loc("CONTRACTS", "DEV"); 
    getKeysContractsDev(validatorContracts, lockKitContracts);
    clearJapaneseContracts();
  
    const lastRowLoc = lockKitContracts.getLastRow();
    const columnLoc = 11;
    const columnValidator = 34;
  
    const contractsLanguague = lockKitContracts.getRange(firstRowlockKitContracts, columnLoc, lastRowLoc, 1).getValues();
    const lastRowValidator = contractsLanguague.length;
  
    validatorContracts.getRange(firstRowValidatorContracts, columnValidator, lastRowValidator, 1).setValues(contractsLanguague);
    informAboutImportDataSource(validatorContracts, "DEV", importDataRowContracts, columnValidator);
  }
  