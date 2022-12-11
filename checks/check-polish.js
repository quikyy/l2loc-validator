const columnValidatorPolish_l2Loc = 6;  
const columnValidatorPolish_InGame = columnValidatorPolish_l2Loc + 1;
const columnValidatorPolish_Status = columnValidatorPolish_l2Loc + 2;
const columnValidatorPolish_Issues = columnValidatorPolish_l2Loc + 2;
const langIndex_POL = "POL";

// CONTRACTS
// CONTRACTS
// CONTRACTS

function validatePolish_Contracts(){
  issuesCount = 0;
  const lastRow = validatorContracts.getLastRow() - 2;
  const descriptionsWithFormulas = validatorContracts.getRange(firstRowValidatorContracts, columnValidatorPolish_l2Loc, lastRow, 1).getValues();
  clearFormulasPolish_Contracts(descriptionsWithFormulas)
  informAboutErrors_Contracts(columnValidatorPolish_Issues);
  informAboutCheckFinish(sheetName_Contracts, langIndex_POL);
}

function clearFormulasPolish_Contracts(descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]
    
    if(lockKitDescription == "N/A" ||
    lockKitDescription == "X" ||
    lockKitDescription == ""){
      setInGameViewPolish_Contracts_Catch(inputRow, validateErrorMsg);
      continue;
    }
    
    try {
      const s1 = clearNorbs(lockKitDescription)
      const s2 = setBracketValuesToUpperCase(s1);
      const s3 = clearBracketsFormatters(s2);
      setInGameViewPolish_Contracts(s3, inputRow);
    }
    catch (err){
      setInGameViewPolish_Contracts_Catch(inputRow, err);
    }
  }
}

function setInGameViewPolish_Contracts(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);
  detailsInfo += checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkLastCharacter(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfDoubleDoubleDash(locKitDescription_Final);
  detailsInfo += checkLength(locKitDescription_Final);  

  if(detailsInfo != "") {
    validatorContracts.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }
  else {
    detailsInfo = "- OK"
    validatorContracts.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorContracts.getRange(inputRow, columnValidatorPolish_InGame).setValue(locKitDescription_Final)
}

function setInGameViewPolish_Contracts_Catch(inputRow, err) {
    validatorContracts.getRange(inputRow, columnValidatorPolish_Status).setValue(`Error: ${err}`)
    validatorContracts.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
}

//ITEMS
//ITEMS
//ITEMS

function validatePolish_Items(){
  issuesCount = 0;
  const lastRow = validatorItems.getLastRow() - 2;  
  const itemKeys = validatorItems.getRange(firstRowValidatorItems, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorItems.getRange(firstRowValidatorItems, columnValidatorPolish_l2Loc, lastRow, 1).getValues();
  definePolish_ItemsKey(descriptionsWithFormulas, itemKeys);
  informAboutErrorsItems(columnValidatorPolish_Issues);
  informAboutCheckFinish(sheetName_Items, langIndex_POL);
}

function definePolish_ItemsKey(descriptionsWithFormulas, itemKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]
    try {
    if(lockKitDescription == "N/A"
    || lockKitDescription == "#0"
    || lockKitDescription == "X"
    || lockKitDescription == ""){
      setInGameViewPolish_Items_Catch(inputRow, validateErrorMsg);
      continue;
    }

    const itemKey = itemKeys[x][0];
    const isNameOrDesc = itemKey.substring(0, 4);

    if(isNameOrDesc == "NAME") setInGameViewPolish_Items_Name(lockKitDescription, inputRow);  
    else if(isNameOrDesc == "DESC") clearFormulasPolish_Items_Description(lockKitDescription, inputRow, itemKey)
    }
    catch(err) {
      setInGameViewPolish_Items_Catch(inputRow, err)
    }
  }
}

function setInGameViewPolish_Items_Catch(inputRow, err) {
  validatorItems.getRange(inputRow, columnValidatorPolish_Status).setValue(`Error: ${err}`)
  validatorItems.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewPolish_Items_Name(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescription);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorPolish_InGame).setValue(lockKitDescription)
}

function clearFormulasPolish_Items_Description(lockKitDescription, inputRow, itemKey){
  const s1 = clearNorbs(lockKitDescription)
  const s2 = setBracketValuesToUpperCase(s1);
  const s3 = clearColorBracketsFormatters(s2);
  const s4 = clearBoldColorFormatters(s3);
  const s5 = clearBold(s4);
  const locKitDescription_Final = clearBracketsFormatters(s5);
  setInGameViewPolishItems_Description(locKitDescription_Final, inputRow, itemKey)
}

function setInGameViewPolishItems_Description(locKitDescription_Final, inputRow, itemKey){
  const lockKitDescriptionWithConfigValues = getMasterConfigValue(locKitDescription_Final, itemKey)
  let detailsInfo = checkIfAnyNobr(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBracket(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfFirstLetterUpperCase(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBold(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyColorBracket(lockKitDescriptionWithConfigValues);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorPolish_InGame).setValue(lockKitDescriptionWithConfigValues)
}

// UI
// UI
// UI

function validatePolish_UI(){
  issuesCount = 0;
  const lastRow = validatorUI.getLastRow() - 2;
  const descriptionsWithFormulas = validatorUI.getRange(firstRowValidatorUI, columnValidatorPolish_l2Loc, lastRow, 1).getValues();
  clearFormulasPolish_UI(descriptionsWithFormulas)
  informAboutErrorsUI(columnValidatorPolish_Issues);
  informAboutCheckFinish(sheetName_UI, langIndex_POL);
}

function clearFormulasPolish_UI (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

     if(lockKitDescription.includes("[i2p_") ||
    lockKitDescription == "{[#0 **COMMON/HARD_CURRENCY**]}"|| 
    lockKitDescription == "???" || 
    lockKitDescription == "X"|| 
    lockKitDescription == "x"||
    lockKitDescription == "") {
      setInGameViewPolish_UI_Catch(inputRow,validateErrorMsg)
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
      setInGameViewPolish_UI(s12, inputRow)
    }
    catch(err){
      setInGameViewPolish_UI_Catch(inputRow,validateErrorMsg)
    }
  }
}

function setInGameViewPolish_UI_Catch(inputRow, err) {
  validatorUI.getRange(inputRow, columnValidatorPolish_Status).setValue(`Error: ${err}`)
  validatorUI.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewPolish_UI(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBold(locKitDescription_Final);
  detailsInfo += checkIfAnyItalic(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorUI.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorUI.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusOK)
  }
   validatorUI.getRange(inputRow, columnValidatorPolish_InGame).setValue(locKitDescription_Final)
}

// MONSTERS
// MONSTERS
// MONSTERS

function validatePolish_Monsters(){
  issuesCount = 0;
  const lastRow = validatorMonsters.getLastRow() - 2;
  const monsterKeys = validatorMonsters.getRange(firstRowValidatorMonsters, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorMonsters.getRange(firstRowValidatorMonsters, columnValidatorPolish_l2Loc, lastRow, 1).getValues();
  definePolish_MonsterKey(descriptionsWithFormulas, monsterKeys);
  informAboutErrorsMonsters(columnValidatorPolish_Issues);
  informAboutCheckFinish(sheetName_Monsters, langIndex_POL);
}

function definePolish_MonsterKey(descriptionsWithFormulas, monsterKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A" ||
    lockKitDescription == "#0" ||
    lockKitDescription == "X" ||
    lockKitDescription == ""){
      setInGameViewPolish_Monsters_Catch(inputRow, validateErrorMsg);
      continue;
    }

    try {
      const monsterKey = monsterKeys[x][0];
      const defineKey = monsterKey.substring(0, 4);

      if(defineKey == "RARI" || defineKey == "FAMI" || defineKey == "DIFF"){
        setInGameViewPolish_MonstersBasics(lockKitDescription, inputRow)
      }

      else if(defineKey == "OCCU" || defineKey == "NAME") clearFormulasPolish_MonstersOccuranceOrName(lockKitDescription, inputRow)
      else if(defineKey == "BEST") clearFormulasPolish_MonstersBestiary(lockKitDescription, inputRow)
    }
    catch (err) {
      setInGameViewPolish_Monsters_Catch(inputRow, err);
    }
  }
}

function setInGameViewPolish_Monsters_Catch(inputRow, err) {
  validatorMonsters.getRange(inputRow, columnValidatorPolish_Status).setValue(`Error: ${err}`)
  validatorMonsters.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function clearFormulasPolish_MonstersOccuranceOrName(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;
  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearBold(s1);
  const s3 = clearItalic(s2);
  setInGameViewPolish_MonstersOccuranceOrName(s3, inputRow);  
}

function clearFormulasPolish_MonstersBestiary(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;

  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearItalic(s1);
  setInGameViewPolish_MonstersBestiary(s2, inputRow);
}

function setInGameViewPolish_MonstersBasics(lockKitDescription, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkLastCharacterNotDot(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo);
    validatorMonsters.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusProblem);
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo);
    validatorMonsters.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusOK);
  }
  validatorMonsters.getRange(inputRow, columnValidatorPolish_InGame).setValue(lockKitDescription);
}

function setInGameViewPolish_MonstersOccuranceOrName(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyNobr(lockKitDescription);
  detailsInfo + checkIfAnyBold(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorPolish_InGame).setValue(lockKitDescription)
}

function setInGameViewPolish_MonstersBestiary(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyNobr(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorPolish_InGame).setValue(lockKitDescription)
}

// ACHIEVEMENTS
// ACHIEVEMENTS
// ACHIEVEMENTS

function validatePolish_Achievements(){
  issuesCount = 0;
  const lastRow = validatorAchievements.getLastRow() - 2;
  const descriptionsWithFormulas = validatorAchievements.getRange(firstRowValidatorAchievements, columnValidatorPolish_l2Loc, lastRow, 1).getValues();
  clearFormulasPolish_Achievements(descriptionsWithFormulas);
  informAboutErrors_Achievements(columnValidatorPolish_Issues);
  informAboutCheckFinish(sheetName_Achievements, langIndex_POL);
}

function clearFormulasPolish_Achievements (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewPolish_Achievements_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      setInGameViewPolish_Achievements(s1, inputRow)
    }
    catch (err) {
      setInGameViewPolish_Achievements_Catch(inputRow, err);
    }
  }
}

function setInGameViewPolish_Achievements_Catch(inputRow, err) {
  validatorAchievements.getRange(inputRow, columnValidatorPolish_Status).setValue(`Error: ${err}`)
  validatorAchievements.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewPolish_Achievements(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorAchievements.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorAchievements.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorAchievements.getRange(inputRow, columnValidatorPolish_InGame).setValue(locKitDescription_Final)
}



// HINTS
// HINTS
// HINTS

function validatePolish_Hints(){
  issuesCount = 0;
  const lastRow = validatorHints.getLastRow() - 2;
  const descriptionsWithFormulas = validatorHints.getRange(firstRowValidatorHints, columnValidatorPolish_l2Loc, lastRow, 1).getValues();
  clearFormulasPolish_Hints(descriptionsWithFormulas);
  informAboutErrors_Hints(columnValidatorPolish_Issues);
  informAboutCheckFinish(sheetName_Hints, langIndex_POL);
}

function clearFormulasPolish_Hints (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
   const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewPolish_Hints_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      const s2 = setBracketValuesToUpperCase(s1);
      const s3 = clearBracketsFormatters(s2);
      setInGameViewPolish_Hints(s3, inputRow)
    }
    catch (err) {
      setInGameViewPolish_Hints_Catch(inputRow, err);
    }
  }
}

function setInGameViewPolish_Hints_Catch(inputRow, err) {
  validatorHints.getRange(inputRow, columnValidatorPolish_Status).setValue(`Error: ${err}`)
  validatorHints.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewPolish_Hints(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorHints.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorHints.getRange(inputRow, columnValidatorPolish_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorPolish_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorHints.getRange(inputRow, columnValidatorPolish_InGame).setValue(locKitDescription_Final)
}