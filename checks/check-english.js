const columnValidatorEnglish_l2Loc = 2;
const columnValidatorEnglish_InGame = columnValidatorEnglish_l2Loc + 1;
const columnValidatorEnglish_Status = columnValidatorEnglish_l2Loc + 2;
const columnValidatorEnglish_Issues = columnValidatorEnglish_l2Loc + 2;
const langIndex_ENG  = "ENG";

// CONTRACTS
// CONTRACTS
// CONTRACTS

function validateEnglish_Contracts(){
  issuesCount = 0;
  const lastRow = validatorContracts.getLastRow() - 2;
  const polishValues = getPolishValues();
  const descriptionsWithFormulas = validatorContracts.getRange(firstRowValidatorContracts, columnValidatorEnglish_l2Loc, lastRow, 1).getValues();
  clearFormulasEnglish_Contracts(descriptionsWithFormulas, polishValues)
  informAboutErrors_Contracts(columnValidatorEnglish_Issues);
  informAboutCheckFinish(sheetName_Contracts, langIndex_ENG);
}

function clearFormulasEnglish_Contracts(descriptionsWithFormulas, polishValues){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A" ||
    lockKitDescription == "X" ||
    lockKitDescription == ""){
      setInGameViewEnglish_Contracts_Catch(inputRow, validateErrorMsg);
      continue;
    }

    try {
      const s1 = clearNorbs(lockKitDescription)
      const s2 = setBracketValuesToUpperCase(s1);
      const s3 = clearBracketsFormatters(s2);
      setInGameViewEnglish_Contracts(s3, inputRow, polishValues)
    }
    catch (err){
      setInGameViewEnglish_Contracts_Catch(inputRow, err);
    }
  }
}

function setInGameViewEnglish_Contracts(locKitDescription_Final, inputRow, polishValues){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);
  detailsInfo += checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkLastCharacter(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfDoubleDoubleDash(locKitDescription_Final);
  detailsInfo += checkLength(locKitDescription_Final);
  detailsInfo += compareValuesWithPolish(polishValues, locKitDescription_Final, inputRow, langIndex_ENG);
  
  if(detailsInfo != "") {
    validatorContracts.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }
  else {
    detailsInfo = "- OK"
    validatorContracts.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorContracts.getRange(inputRow, columnValidatorEnglish_InGame).setValue(locKitDescription_Final)
}

function setInGameViewEnglish_Contracts_Catch(inputRow, err) {
    validatorContracts.getRange(inputRow, columnValidatorEnglish_Status).setValue(`Error: ${err}`)
    validatorContracts.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
}

//ITEMS
//ITEMS
//ITEMS

function validateEnglish_Items(){
  issuesCount = 0;
  const lastRow = validatorItems.getLastRow() - 2;
  const itemKeys = validatorItems.getRange(firstRowValidatorItems, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorItems.getRange(firstRowValidatorItems, columnValidatorEnglish_l2Loc, lastRow, 1).getValues();
  defineEnglish_ItemsKey(descriptionsWithFormulas, itemKeys);
  informAboutErrorsItems(columnValidatorEnglish_Issues);
  informAboutCheckFinish(sheetName_Items, langIndex_ENG);
}

function defineEnglish_ItemsKey(descriptionsWithFormulas, itemKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]
    try {
    if(lockKitDescription == "N/A"
    || lockKitDescription == "#0"
    || lockKitDescription == "X"
    || lockKitDescription == ""){
      setInGameViewEnglish_Items_Catch(inputRow, validateErrorMsg);
      continue;
    }

    const itemKey = itemKeys[x][0];
    const isNameOrDesc = itemKey.substring(0, 4);

    if(isNameOrDesc == "NAME") setInGameViewEnglish_Items_Name(lockKitDescription, inputRow);  
    else if(isNameOrDesc == "DESC") clearFormulasEnglish_Items_Description(lockKitDescription, inputRow, itemKey)
    }
    catch(err) {
      setInGameViewEnglish_Items_Catch(inputRow, err)
    }
  }
}

function setInGameViewEnglish_Items_Catch(inputRow, err) {
    validatorItems.getRange(inputRow, columnValidatorEnglish_Status).setValue(`Error: ${err}`)
    validatorItems.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
}

function setInGameViewEnglish_Items_Name(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescription);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusOK)
  }

  validatorItems.getRange(inputRow, columnValidatorEnglish_InGame).setValue(lockKitDescription)
}

function clearFormulasEnglish_Items_Description(lockKitDescription, inputRow, itemKey){
  const s1 = clearNorbs(lockKitDescription)
  const s2 = setBracketValuesToUpperCase(s1);
  const s3 = clearColorBracketsFormatters(s2);
  const s4 = clearBoldColorFormatters(s3);
  const s5 = clearBold(s4);
  const s6 = clearBracketsFormatters(s5);
  setInGameViewEnglish_Items_Description(s6, inputRow, itemKey)
}

function setInGameViewEnglish_Items_Description(locKitDescription_Final, inputRow, itemKey){
  const lockKitDescriptionWithConfigValues = getMasterConfigValue(locKitDescription_Final, itemKey)

  let detailsInfo = checkIfAnyNobr(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBracket(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfFirstLetterUpperCase(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBold(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyColorBracket(lockKitDescriptionWithConfigValues);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorEnglish_InGame).setValue(lockKitDescriptionWithConfigValues)
}

// UI
// UI
// UI

function validateEnglish_UI(){
  issuesCount = 0;
  const lastRow = validatorUI.getLastRow() - 2;
  const descriptionsWithFormulas = validatorUI.getRange(firstRowValidatorUI, columnValidatorEnglish_l2Loc, lastRow, 1).getValues();
  clearFormulasEnglish_UI(descriptionsWithFormulas)
  informAboutErrorsUI(columnValidatorEnglish_Issues);
  informAboutCheckFinish(sheetName_UI, langIndex_ENG);
}

function clearFormulasEnglish_UI (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription.includes("[i2p_") ||
    lockKitDescription == "X" || 
    lockKitDescription == "x"||
    lockKitDescription == "{[#0 **COMMON/HARD_CURRENCY**]}" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewEnglish_UI_Catch(inputRow,validateErrorMsg)
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
      setInGameViewEnglish_UI(s12, inputRow)
    }
    catch (err) {
      setInGameViewEnglish_UI_Catch(inputRow, err);
    }
  }
}

function setInGameViewEnglish_UI_Catch(inputRow, err) {
  validatorUI.getRange(inputRow, columnValidatorEnglish_Status).setValue(`Error: ${err}`)
  validatorUI.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}


function setInGameViewEnglish_UI(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBold(locKitDescription_Final);
  detailsInfo += checkIfAnyItalic(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorUI.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorUI.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusOK)

  }

   validatorUI.getRange(inputRow, columnValidatorEnglish_InGame).setValue(locKitDescription_Final)
}

// MONSTERS
// MONSTERS
// MONSTERS

function validateEnglish_Monsters(){
  issuesCount = 0;
  const lastRow = validatorMonsters.getLastRow() - 2;
  const monsterKeys = validatorMonsters.getRange(firstRowValidatorMonsters, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorMonsters.getRange(firstRowValidatorMonsters, columnValidatorEnglish_l2Loc, lastRow, 1).getValues();
  defineEnglish_MonsterKey(descriptionsWithFormulas, monsterKeys);
  informAboutErrorsMonsters(columnValidatorEnglish_Issues);
  informAboutCheckFinish(sheetName_Monsters, langIndex_ENG);
}

function defineEnglish_MonsterKey(descriptionsWithFormulas, monsterKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A"
    || lockKitDescription == "#0"
    || lockKitDescription == "X"
    || lockKitDescription == ""){
      setInGameViewEnglish_Monsters_Catch(inputRow, validateErrorMsg)
      continue;
    }

    try {
      const monsterKey = monsterKeys[x][0];
      const defineKey = monsterKey.substring(0, 4);

      if(defineKey == "RARI" || defineKey == "FAMI" || defineKey == "DIFF"){
        setInGameViewEnglish_MonstersBasics(lockKitDescription, inputRow)
      }
      else if(defineKey == "OCCU" || defineKey == "NAME") clearFormulasEnglish_MonstersOccuranceOrName(lockKitDescription, inputRow)
      else if(defineKey == "BEST") clearFormulasEnglish_MonstersBestiary(lockKitDescription, inputRow)
    }
    catch (err) {
       setInGameViewEnglish_Monsters_Catch(inputRow, err)
    }
  }
}

function setInGameViewEnglish_Monsters_Catch(inputRow, err) {
    validatorMonsters.getRange(inputRow, columnValidatorEnglish_Status).setValue(`Error: ${err}`)
    validatorMonsters.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
}

function clearFormulasEnglish_MonstersOccuranceOrName(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;
  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearBold(s1);
  const s3 = clearItalic(s2);
  setInGameViewEnglish_MonstersOccuranceOrName(s3, inputRow);  
}

function clearFormulasEnglish_MonstersBestiary(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;

  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearItalic(s1);
  setInGameViewEnglish_MonstersBestiary(s2, inputRow);
}

function setInGameViewEnglish_MonstersBasics(lockKitDescription, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkLastCharacterNotDot(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusOK)
  }

  validatorMonsters.getRange(inputRow, columnValidatorEnglish_InGame).setValue(lockKitDescription)
}

function setInGameViewEnglish_MonstersOccuranceOrName(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyNobr(lockKitDescription);
  detailsInfo + checkIfAnyBold(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorEnglish_InGame).setValue(lockKitDescription)
}

function setInGameViewEnglish_MonstersBestiary(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyNobr(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorEnglish_InGame).setValue(lockKitDescription)
}

// ACHIEVEMENTS
// ACHIEVEMENTS
// ACHIEVEMENTS

function validateEnglish_Achievements(){
  issuesCount = 0;
  const lastRow = validatorAchievements.getLastRow() - 2;
  const descriptionsWithFormulas = validatorAchievements.getRange(firstRowValidatorAchievements, columnValidatorEnglish_l2Loc, lastRow, 1).getValues();
  clearFormulasEnglish_Achievements(descriptionsWithFormulas);
  informAboutErrors_Achievements(columnValidatorEnglish_Issues);
  informAboutCheckFinish(sheetName_Achievements, langIndex_ENG);
}

function clearFormulasEnglish_Achievements (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewEnglish_Achievements_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      setInGameViewEnglish_Achievements(s1, inputRow)
    }
    catch (err) {
      setInGameViewEnglish_Achievements_Catch(inputRow, err);
    }
  }
}

function setInGameViewEnglish_Achievements_Catch(inputRow, err) {
  validatorAchievements.getRange(inputRow, columnValidatorEnglish_Status).setValue(`Error: ${err}`)
  validatorAchievements.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewEnglish_Achievements(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorAchievements.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorAchievements.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorAchievements.getRange(inputRow, columnValidatorEnglish_InGame).setValue(locKitDescription_Final)
}

function validateEnglish_Hints(){
  issuesCount = 0;
  const lastRow = validatorHints.getLastRow() - 2;
  const descriptionsWithFormulas = validatorHints.getRange(firstRowValidatorHints, columnValidatorEnglish_l2Loc, lastRow, 1).getValues();
  clearFormulasEnglish_Hints(descriptionsWithFormulas);
  informAboutErrors_Hints(columnValidatorEnglish_Issues);
  informAboutCheckFinish(sheetName_Hints, langIndex_ENG);
}

function clearFormulasEnglish_Hints (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewEnglish_Hints_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      const s2 = setBracketValuesToUpperCase(s1);
      const s3 = clearBracketsFormatters(s2);
      setInGameViewEnglish_Hints(s3, inputRow)
    }
    catch (err) {
      setInGameViewEnglish_Hints_Catch(inputRow, err);
    }
  }
}

function setInGameViewEnglish_Hints_Catch(inputRow, err) {
  validatorHints.getRange(inputRow, columnValidatorEnglish_Status).setValue(`Error: ${err}`)
  validatorHints.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewEnglish_Hints(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorHints.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorHints.getRange(inputRow, columnValidatorEnglish_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorEnglish_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorHints.getRange(inputRow, columnValidatorEnglish_InGame).setValue(locKitDescription_Final)
}