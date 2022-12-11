const validatorItems = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Items')
const firstRowlockKitItems = 2;
const firstRowValidatorItems = 4;

// CHECK ALL 
function validateAllItems(){
  validateEnglish_Items();
  validatePolish_Items();
  validateGerman_Items();
  validateSpanish_Items();
  validateItalian_Items();
  validateFrench_Items();
  validateRussian_Items();
  validatePortugese_Items();
  validateJapanese_Items();
  informAboutCheckFinish(sheetName_Items, 'ALL LANGS', -1)
}

function clearAllItems(){
  clearKeysItems();
  clearEnglishItems();
  clearPolishItems();
  clearGermanItems();
  clearSpanishItems();
  clearItalianItems();
  clearFrenchItems();
  clearRussianItems();
  clearPortugeseItems();
  clearJapaneseItems();
}

function getMasterConfigValue(locKitDescription_Final, itemKey) {
  const importTag = "#0%"
  const importTag2 = "#0 %"
  const bombImportTag_0 = "#0";
  const bombImportTag_1 = "#1";
  const masterConfig = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1gQCkduXxWe6MVciqLXZ__T48Ae20L0rc42wlhLvVWrU/edit#gid=833192515').getSheets();
  const itemKeyParsed = itemKey.toLowerCase();
  let lockKitWithMasterConfigValue = locKitDescription_Final;

  if(itemKeyParsed.includes("armor") && locKitDescription_Final.includes(importTag)) {
    const armor = itemKeyParsed.substring(itemKeyParsed.search("/armors/") + 8, itemKeyParsed.length);
    const armorsConfig = masterConfig.find(sheet => {if(sheet.getName() == "ArmorEffects") return sheet});
    const armors = armorsConfig.getRange(2, 1, armorsConfig.getLastRow() - 1, 3).getValues();
    let value = 0;
    armors.find(elem => {
      const armor_2 = elem[0]
      if(armor_2 == armor) {
        value = `${elem[2]}%`;
        return value;
      }
    })
    return lockKitWithMasterConfigValue.replace(importTag, value)
  }

  
  else if(itemKeyParsed.includes("sword") && locKitDescription_Final.includes(importTag)) {
    const sword = itemKeyParsed.substring(itemKeyParsed.search("/swords/") + 8, itemKeyParsed.length);
    const swordsConfig = masterConfig.find(sheet => {if(sheet.getName() == "SwordEffects") return sheet});
    const swords = swordsConfig.getRange(2, 1, swordsConfig.getLastRow() - 1, 3).getValues();
    let value = 0;
    swords.find(elem => {
      const sword_2 = elem[0]
      if(sword_2 == sword) {
        value = `${elem[2]}%`;
        return value;
      }
    })
    return lockKitWithMasterConfigValue.replace(importTag, value);
  }

  else if(itemKeyParsed.includes("oil") && locKitDescription_Final.includes(importTag)) {
    const oil = itemKeyParsed.substring(itemKeyParsed.search("/oils/") + 6, itemKeyParsed.length);
    const oilsCofig = masterConfig.find(sheet => {if(sheet.getName() == "OilEffects") return sheet});
    const oils = oilsCofig.getRange(2, 1, oilsCofig.getLastRow() - 1, 3).getValues();
    let value = 0;
    oils.find(elem => {
      const oil_2 = elem[0]
      if(oil_2 == oil) {
        value = `${elem[2]}%`;
        return value;
      }
    })
    return lockKitWithMasterConfigValue.replace(importTag, value);
  }

  else if(itemKeyParsed.includes("potion") && locKitDescription_Final.includes(importTag)) {
    const potion = itemKeyParsed.substring(itemKeyParsed.search("/potions/") + 9, itemKeyParsed.length);
    const potionsConfig = masterConfig.find(sheet => {if(sheet.getName() == "PotionEffects") return sheet});
    const potions = potionsConfig.getRange(2, 1, potionsConfig.getLastRow() - 1, 3).getValues();
    let value = 0;
    potions.find(elem => {
      const potion_2 = elem[0]
      if(potion_2 == potion) {
        value = `${elem[2]}%`;
        return value;
      }
    })
    return lockKitWithMasterConfigValue.replace(importTag, value);
  }

  else if(itemKeyParsed.includes("brewer") && locKitDescription_Final.includes(bombImportTag_0)) {
    const brewer = itemKeyParsed.substring(itemKeyParsed.search("/brewers/") + 9, itemKeyParsed.length);
    const brewersConfig = masterConfig.find(sheet => {if(sheet.getName() == "Brewers") return sheet});
    const brewers = brewersConfig.getRange(2, 1, brewersConfig.getLastRow() - 1, 3).getValues();
    let value = 0;
    brewers.find(elem => {
      const brewer_2 = elem[1]
      if(brewer_2 == brewer) {
        value = `${elem[2]}`;
        return value;
      }
    })
    return lockKitWithMasterConfigValue.replace(bombImportTag_0, value);
  }
  
    else if(itemKeyParsed.includes("bomb") && locKitDescription_Final.includes(bombImportTag_1) && locKitDescription_Final.includes(bombImportTag_0)) {
    const bomb = itemKeyParsed.substring(itemKeyParsed.search("/bombs/") + 7, itemKeyParsed.length);
    const bombsConfig = masterConfig.find(sheet => {if(sheet.getName() == "BombDamageType") return sheet});
    const bombs = bombsConfig.getRange(2, 1, bombsConfig.getLastRow() - 1, 3).getValues();
    const values = [];
    bombs.map(elem => {
      const bomb_2 = elem[0];
      if(bomb_2 == bomb) {
        const value = elem[2];
        values.push(value)
      }
    })
    return lockKitWithMasterConfigValue.replace(bombImportTag_1, values[0]).replace(bombImportTag_0, values[1]);
  }

  else if(itemKeyParsed.includes("bomb") && locKitDescription_Final.includes(bombImportTag_0)) {
    const bomb = itemKeyParsed.substring(itemKeyParsed.search("/bombs/") + 7, itemKeyParsed.length);
    const bombsConfig = masterConfig.find(sheet => {if(sheet.getName() == "BombDamageType") return sheet});
    const bombs = bombsConfig.getRange(2, 1, bombsConfig.getLastRow() - 1, 3).getValues();
    let value = 0;
    bombs.find(elem => {
      const bomb_2 = elem[0]
      if(bomb_2 == bomb) {
        value = elem[2];
        return value;
      }
    })
    return lockKitWithMasterConfigValue.replace(bombImportTag_0, value);
  }

    else if(itemKeyParsed.includes("bomb") && locKitDescription_Final.includes(bombImportTag_1)) {
    const bomb = itemKeyParsed.substring(itemKeyParsed.search("/bombs/") + 7, itemKeyParsed.length);
    const bombsConfig = masterConfig.find(sheet => {if(sheet.getName() == "BombDamageType") return sheet});
    const bombs = bombsConfig.getRange(2, 1, bombsConfig.getLastRow() - 1, 3).getValues();
    let value = 0;
    bombs.find(elem => {
      const bomb_2 = elem[0]
      if(bomb_2 == bomb) {
        value = elem[2];
        return value;
      }
    })
    return lockKitWithMasterConfigValue.replace(bombImportTag_1, value);
  }

  else if(itemKeyParsed.includes("armor") && locKitDescription_Final.includes(importTag2)) {
    const armor = itemKeyParsed.substring(itemKeyParsed.search("/armors/") + 8, itemKeyParsed.length);
    const armorsConfig = masterConfig.find(sheet => {if(sheet.getName() == "ArmorEffects") return sheet});
    const armors = armorsConfig.getRange(2, 1, armorsConfig.getLastRow() - 1, 3).getValues();
    let value = 0;
    armors.find(elem => {
      const armor_2 = elem[0]
      if(armor_2 == armor) {
        value = `${elem[2]}%`;
        return value;
      }
    })
    return lockKitWithMasterConfigValue.replace(importTag2, value)
  }

  
  else if(itemKeyParsed.includes("sword") && locKitDescription_Final.includes(importTag2)) {
    const sword = itemKeyParsed.substring(itemKeyParsed.search("/swords/") + 8, itemKeyParsed.length);
    const swordsConfig = masterConfig.find(sheet => {if(sheet.getName() == "SwordEffects") return sheet});
    const swords = swordsConfig.getRange(2, 1, swordsConfig.getLastRow() - 1, 3).getValues();
    let value = 0;
    swords.find(elem => {
      const sword_2 = elem[0]
      if(sword_2 == sword) {
        value = `${elem[2]}%`;
        return value;
      }
    })
    return lockKitWithMasterConfigValue.replace(importTag2, value);
  }

  else if(itemKeyParsed.includes("oil") && locKitDescription_Final.includes(importTag2)) {
    const oil = itemKeyParsed.substring(itemKeyParsed.search("/oils/") + 6, itemKeyParsed.length);
    const oilsCofig = masterConfig.find(sheet => {if(sheet.getName() == "OilEffects") return sheet});
    const oils = oilsCofig.getRange(2, 1, oilsCofig.getLastRow() - 1, 3).getValues();
    let value = 0;
    oils.find(elem => {
      const oil_2 = elem[0]
      if(oil_2 == oil) {
        value = `${elem[2]}%`;
        return value;
      }
    })
    return lockKitWithMasterConfigValue.replace(importTag2, value);
  }

  else if(itemKeyParsed.includes("potion") && locKitDescription_Final.includes(importTag2)) {
    const potion = itemKeyParsed.substring(itemKeyParsed.search("/potions/") + 9, itemKeyParsed.length);
    const potionsConfig = masterConfig.find(sheet => {if(sheet.getName() == "PotionEffects") return sheet});
    const potions = potionsConfig.getRange(2, 1, potionsConfig.getLastRow() - 1, 3).getValues();
    let value = 0;
    potions.find(elem => {
      const potion_2 = elem[0]
      if(potion_2 == potion) {
        value = `${elem[2]}%`;
        return value;
      }
    })
    return lockKitWithMasterConfigValue.replace(importTag2, value);
  }
  else {
    return locKitDescription_Final;
  }
}

// ERRORS
// Inform about error count 
function informAboutErrorsItems(issuesColumn){
  const issuesRow = 1;
  validatorItems.getRange(issuesRow, issuesColumn).setValue(`Issues: ${issuesCount}`);
}

function clearKeysItems(){
  const lastRow = validatorItems.getLastRow();
  const columnKeys = 1;
  validatorItems.getRange(firstRowValidatorItems, columnKeys, lastRow, 1).clearContent();
  informAboutImportDataSource(validatorItems, "", importDataRowContracts, columnKeys);
}

function clearEnglishItems(){
  const firstColumn = 2;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorItems.getLastRow();

  validatorItems.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorItems.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorItems, "", importDataRowContracts, firstColumn);
}

function clearPolishItems(){
  const firstColumn = 6;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorItems.getLastRow();

  validatorItems.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorItems.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorItems, "", importDataRowContracts, firstColumn);
}

function clearGermanItems(){
  const firstColumn = 10;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorItems.getLastRow();

  validatorItems.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorItems.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorItems, "", importDataRowContracts, firstColumn);
}

function clearSpanishItems(){
  const firstColumn = 14;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorItems.getLastRow();

  validatorItems.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorItems.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorItems, "", importDataRowContracts, firstColumn);
}

function clearItalianItems(){
  const firstColumn = 18;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorItems.getLastRow();
 
  validatorItems.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorItems.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorItems, "", importDataRowContracts, firstColumn);
}

function clearFrenchItems(){
  const firstColumn = 22;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorItems.getLastRow();

  validatorItems.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorItems.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorItems, "", importDataRowContracts, firstColumn);
}

function clearRussianItems(){
  const firstColumn = 26;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorItems.getLastRow();

  validatorItems.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorItems.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorItems, "", importDataRowContracts, firstColumn);
}

function clearPortugeseItems(){
  const firstColumn = 30;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorItems.getLastRow();

  validatorItems.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorItems.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorItems, "", importDataRowContracts, firstColumn);
}

function clearJapaneseItems(){
  const firstColumn = 34;
  const errorColumn = firstColumn + 2;
  const lastRow = validatorItems.getLastRow();

  validatorItems.getRange(firstRowValidatorItems, firstColumn, lastRow, clearRange).clearContent().setBackground('white')
  validatorItems.getRange(1, errorColumn).setValue(`Issues:`)
  informAboutImportDataSource(validatorItems, "", importDataRowContracts, firstColumn);
}
