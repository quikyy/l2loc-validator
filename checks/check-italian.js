const columnValidatorItalian_l2Loc = 18;  
const columnValidatorItalian_InGame = columnValidatorItalian_l2Loc + 1;
const columnValidatorItalian_Status = columnValidatorItalian_l2Loc + 2;
const columnValidatorItalian_Issues = columnValidatorItalian_l2Loc + 2;
const langIndex_ITA = "ITA";

// CONTRACTS
// CONTRACTS
// CONTRACTS

function validateItalian_Contracts(){
  issuesCount = 0;
  const lastRow = validatorContracts.getLastRow() - 2;
  const polishValues = getPolishValues();
  const descriptionsWithFormulas = validatorContracts.getRange(firstRowValidatorContracts, columnValidatorItalian_l2Loc, lastRow, 1).getValues();
  clearFormulasItalian_Contracts(descriptionsWithFormulas, polishValues)
  informAboutErrors_Contracts(columnValidatorItalian_Issues);
  informAboutCheckFinish(sheetName_Contracts, langIndex_ITA);
}

function clearFormulasItalian_Contracts(descriptionsWithFormulas, polishValues){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
  const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A" ||
    lockKitDescription == "X" || 
    lockKitDescription == ""){
      setInGameViewItalian_Contracts_Catch(inputRow, validateErrorMsg);
      continue;
    }
    
    try {
      const s1 = clearNorbs(lockKitDescription)
      const s2 = setBracketValuesToUpperCase(s1);
      const s3 = clearBracketsFormatters(s2);
      setInGameViewItalian_Contracts(s3, inputRow, polishValues)
    }
    catch (err) {
      setInGameViewItalian_Contracts_Catch(inputRow, err);
    }
  }
}

function setInGameViewItalian_Contracts(locKitDescription_Final, inputRow, polishValues){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);
  detailsInfo += checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkLastCharacter(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfDoubleDoubleDash(locKitDescription_Final);
  detailsInfo += checkLength(locKitDescription_Final);  
  detailsInfo += compareValuesWithPolish(polishValues, locKitDescription_Final, inputRow, langIndex_ITA);

  if(detailsInfo != "") {
    validatorContracts.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }
  else {
    detailsInfo = "- OK"
    validatorContracts.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusOK)
  }

  validatorContracts.getRange(inputRow, columnValidatorItalian_InGame).setValue(locKitDescription_Final)
}

function setInGameViewItalian_Contracts_Catch(inputRow, err) {
  validatorContracts.getRange(inputRow, columnValidatorItalian_Status).setValue(`Error: ${err}`)
  validatorContracts.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

//ITEMS
//ITEMS
//ITEMS

function validateItalian_Items(){
  issuesCount = 0;
  const lastRow = validatorItems.getLastRow() - 2;  
  const itemKeys = validatorItems.getRange(firstRowValidatorItems, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorItems.getRange(firstRowValidatorItems, columnValidatorItalian_l2Loc, lastRow, 1).getValues();
  defineItalian_ItemsKey(descriptionsWithFormulas, itemKeys);
  informAboutErrorsItems(columnValidatorItalian_Issues);
  informAboutCheckFinish(sheetName_Items, langIndex_ITA);
}

function defineItalian_ItemsKey(descriptionsWithFormulas, itemKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
  const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]
    try {
    if(lockKitDescription == "N/A"
    || lockKitDescription == "#0"
    || lockKitDescription == "X"
    || lockKitDescription == ""){
      setInGameViewItalian_Items_Catch(inputRow, validateErrorMsg);
      continue;
    }

    const itemKey = itemKeys[x][0];
    const isNameOrDesc = itemKey.substring(0, 4);

    if(isNameOrDesc == "NAME") setInGameViewItalianItems_Name(lockKitDescription, inputRow);  
    else if(isNameOrDesc == "DESC") clearFormulasItalian_Items_Description(lockKitDescription, inputRow, itemKey)
    }
    catch(err) {
      setInGameViewItalian_Items_Catch(inputRow, err)
    }
  }
}

function setInGameViewItalian_Items_Catch(inputRow, err) {
  validatorItems.getRange(inputRow, columnValidatorItalian_Status).setValue(`Error: ${err}`)
  validatorItems.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewItalianItems_Name(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescription);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorItalian_InGame).setValue(lockKitDescription)
}

function clearFormulasItalian_Items_Description(lockKitDescription, inputRow, itemKey){
  const s1 = clearNorbs(lockKitDescription)
  const s2 = setBracketValuesToUpperCase(s1);
  const s3 = clearColorBracketsFormatters(s2);
  const s4 = clearBoldColorFormatters(s3);
  const s5 = clearBold(s4);
  const locKitDescription_Final = clearBracketsFormatters(s5);
  setInGameViewItalian_Items_Description(locKitDescription_Final, inputRow, itemKey)
}

function setInGameViewItalian_Items_Description(locKitDescription_Final, inputRow, itemKey){
  const lockKitDescriptionWithConfigValues = getMasterConfigValue(locKitDescription_Final, itemKey)

  let detailsInfo = checkIfAnyNobr(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBracket(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfFirstLetterUpperCase(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBold(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyColorBracket(lockKitDescriptionWithConfigValues);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorItalian_InGame).setValue(lockKitDescriptionWithConfigValues)
}

// UI
// UI
// UI

function validateItalian_UI(){
  issuesCount = 0;
  const lastRow = validatorUI.getLastRow() - 2;
  const descriptionsWithFormulas = validatorUI.getRange(firstRowValidatorUI, columnValidatorItalian_l2Loc, lastRow, 1).getValues();
  clearFormulasItalian_UI(descriptionsWithFormulas)
  informAboutErrorsUI(columnValidatorItalian_Issues);
  informAboutCheckFinish(sheetName_UI, langIndex_ITA);
}

function clearFormulasItalian_UI (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
  const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription.includes("[i2p") ||
    lockKitDescription == "X"||
    lockKitDescription == "x"||
    lockKitDescription == "{[#0 **COMMON/HARD_CURRENCY**]}"|| 
    lockKitDescription == "???" || 
    lockKitDescription == "") {
      setInGameViewItalian_UI_Catch(inputRow, validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      const s2 = setBracketValuesToUpperCase(s1);
      const s3 = clearBracketsFormatters(s2);
      const s4 = clearOneZero(s3);
      const s5 = clearItalic(s4);
      const s6 = clearBold(s5);
      const s7 = clearColor_1(s6);
      const s8 = clearColor_2(s7);
      const s9 = clearColor_3(s8);
      const s10 = clearOne(s9);
      const s11 = clearUnderline(s10);
      const s12 = clearSprite(s11);
      setInGameViewItalian_UI(s12, inputRow)
    }
    catch (err) {
      setInGameViewItalian_UI_Catch(inputRow, err)
    }
  }
}

function setInGameViewItalian_UI_Catch(inputRow, err) {
  validatorUI.getRange(inputRow, columnValidatorItalian_Status).setValue(`Error: ${err}`)
  validatorUI.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewItalian_UI(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBold(locKitDescription_Final);
  detailsInfo += checkIfAnyItalic(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorUI.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorUI.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorUI.getRange(inputRow, columnValidatorItalian_InGame).setValue(locKitDescription_Final)
}

// MONSTERS
// MONSTERS
// MONSTERS

function validateItalian_Monsters(){
  issuesCount = 0;
  const lastRow = validatorMonsters.getLastRow() - 2;
  const monsterKeys = validatorMonsters.getRange(firstRowValidatorMonsters, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorMonsters.getRange(firstRowValidatorMonsters, columnValidatorItalian_l2Loc, lastRow, 1).getValues();
  defineItalian_MonsterKey(descriptionsWithFormulas, monsterKeys);
  informAboutErrorsMonsters(columnValidatorItalian_Issues);
  informAboutCheckFinish(sheetName_Monsters, langIndex_ITA);
}

function defineItalian_MonsterKey(descriptionsWithFormulas, monsterKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
  const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A" ||
    lockKitDescription == "#0" ||
    lockKitDescription == "X" ||
    lockKitDescription == ""){
      setInGameViewItalian_Monsters_Catch(inputRow, validateErrorMsg);
      continue;
    }
    try {
      const monsterKey = monsterKeys[x][0];
      const defineKey = monsterKey.substring(0, 4);

      if(defineKey == "RARI" || defineKey == "FAMI" || defineKey == "DIFF"){
        setInGameViewItalian_MonstersBasics(lockKitDescription, inputRow)
      }

      else if(defineKey == "OCCU" || defineKey == "NAME") clearFormulasItalian_MonstersOccuranceOrName(lockKitDescription, inputRow)
      else if(defineKey == "BEST") clearFormulasItalian_MonstersBestiary(lockKitDescription, inputRow)
    }
    catch (err) {
      setInGameViewItalian_Monsters_Catch(inputRow, err)
    }
  }
}

function setInGameViewItalian_Monsters_Catch(inputRow, err) {
  validatorMonsters.getRange(inputRow, columnValidatorItalian_Status).setValue(`Error: ${err}`)
  validatorMonsters.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function clearFormulasItalian_MonstersOccuranceOrName(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;
  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearBold(s1);
  const s3 = clearItalic(s2);
  setInGameViewItalian_MonstersOccuranceOrName(s3, inputRow);  
}

function clearFormulasItalian_MonstersBestiary(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;

  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearItalic(s1);
  setInGameViewItalian_MonstersBestiary(s2, inputRow);
}

function setInGameViewItalian_MonstersBasics(lockKitDescription, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkLastCharacterNotDot(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusOK)
  }

  validatorMonsters.getRange(inputRow, columnValidatorItalian_InGame).setValue(lockKitDescription)
}

function setInGameViewItalian_MonstersOccuranceOrName(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyNobr(lockKitDescription);
  detailsInfo + checkIfAnyBold(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorItalian_InGame).setValue(lockKitDescription)
}

function setInGameViewItalian_MonstersBestiary(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyNobr(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorItalian_InGame).setValue(lockKitDescription)
}

// ACHIEVEMENTS
// ACHIEVEMENTS
// ACHIEVEMENTS

function validateItalian_Achievements(){
  issuesCount = 0;
  const lastRow = validatorAchievements.getLastRow() - 2;
  const descriptionsWithFormulas = validatorAchievements.getRange(firstRowValidatorAchievements, columnValidatorItalian_l2Loc, lastRow, 1).getValues();
  clearFormulasItalian_Achievements(descriptionsWithFormulas);
  informAboutErrors_Achievements(columnValidatorItalian_Issues);
  informAboutCheckFinish(sheetName_Achievements, langIndex_ITA);
}

function clearFormulasItalian_Achievements (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
  const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewItalian_Achievements_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      setInGameViewItalian_Achievements(s1, inputRow)
    }
    catch (err) {
      setInGameViewItalian_Achievements_Catch(inputRow, err);
    }
  }
}

function setInGameViewItalian_Achievements_Catch(inputRow, err) {
  validatorAchievements.getRange(inputRow, columnValidatorItalian_Status).setValue(`Error: ${err}`)
  validatorAchievements.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewItalian_Achievements(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorAchievements.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorAchievements.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorAchievements.getRange(inputRow, columnValidatorItalian_InGame).setValue(locKitDescription_Final)
}

function validateItalian_Hints(){
  issuesCount = 0;
  const lastRow = validatorHints.getLastRow() - 2;
  const descriptionsWithFormulas = validatorHints.getRange(firstRowValidatorHints, columnValidatorItalian_l2Loc, lastRow, 1).getValues();
  clearFormulasItalian_Hints(descriptionsWithFormulas);
  informAboutErrors_Hints(columnValidatorItalian_Issues);
  informAboutCheckFinish(sheetName_Hints, langIndex_ITA);
}

function clearFormulasItalian_Hints (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
  const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewItalian_Hints_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      const s2 = setBracketValuesToUpperCase(s1);
      const s3 = clearBracketsFormatters(s2);
      setInGameViewItalian_Hints(s3, inputRow)
    }
    catch (err) {
      setInGameViewItalian_Hints_Catch(inputRow, err);
    }
  }
}

function setInGameViewItalian_Hints_Catch(inputRow, err) {
  validatorHints.getRange(inputRow, columnValidatorItalian_Status).setValue(`Error: ${err}`)
  validatorHints.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewItalian_Hints(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorHints.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorHints.getRange(inputRow, columnValidatorItalian_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorItalian_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorHints.getRange(inputRow, columnValidatorItalian_InGame).setValue(locKitDescription_Final)
}
