const columnValidatorRussian_l2Loc = 26;  
const columnValidatorRussian_InGame = columnValidatorRussian_l2Loc + 1;
const columnValidatorRussian_Status = columnValidatorRussian_l2Loc + 2;
const columnValidatorRussian_Issues = columnValidatorRussian_l2Loc + 2;
const langIndex_RUS = "RUS";

// CONTRACTS
// CONTRACTS
// CONTRACTS

function validateRussian_Contracts(){
  issuesCount = 0;
  const lastRow = validatorContracts.getLastRow() - 2;
  const polishValues = getPolishValues();
  const descriptionsWithFormulas = validatorContracts.getRange(firstRowValidatorContracts, columnValidatorRussian_l2Loc, lastRow, 1).getValues();
  clearFormulasRussian_Contracts(descriptionsWithFormulas, polishValues)
  informAboutErrors_Contracts(columnValidatorRussian_Issues);
  informAboutCheckFinish(sheetName_Contracts, langIndex_RUS);
}

function clearFormulasRussian_Contracts(descriptionsWithFormulas, polishValues){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A" ||
    lockKitDescription == "X" || 
    lockKitDescription == ""){
      setInGameViewRussian_Contracts_Catch(inputRow, validateErrorMsg);
      continue;
    }
    
    try {
      const s1 = clearNorbs(lockKitDescription)
      const s2 = setBracketValuesToUpperCase(s1);
      const s3 = clearBracketsFormatters(s2);
      setInGameViewRussian_Contracts(s3, inputRow, polishValues)
    }
    catch (err) {
      setInGameViewRussian_Contracts_Catch(inputRow, err);
    }
  }
}

function setInGameViewRussian_Contracts(locKitDescription_Final, inputRow, polishValues){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);
  detailsInfo += checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkLastCharacter(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfDoubleDoubleDash(locKitDescription_Final);
  detailsInfo += checkLength(locKitDescription_Final);  
  detailsInfo += compareValuesWithPolish(polishValues, locKitDescription_Final, inputRow, langIndex_RUS);

  if(detailsInfo != "") {
    validatorContracts.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }
  else {
    detailsInfo = "- OK"
    validatorContracts.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorContracts.getRange(inputRow, columnValidatorRussian_InGame).setValue(locKitDescription_Final)
}

function setInGameViewRussian_Contracts_Catch(inputRow, err) {
  validatorContracts.getRange(inputRow, columnValidatorRussian_Status).setValue(`Error: ${err}`)
  validatorContracts.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

//ITEMS
//ITEMS
//ITEMS

function validateRussian_Items(){
  issuesCount = 0;
  const lastRow = validatorItems.getLastRow() - 2;  
  const itemKeys = validatorItems.getRange(firstRowValidatorItems, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorItems.getRange(firstRowValidatorItems, columnValidatorRussian_l2Loc, lastRow, 1).getValues();
  defineRussian_ItemsKey(descriptionsWithFormulas, itemKeys);
  informAboutErrorsItems(columnValidatorRussian_Issues);
  informAboutCheckFinish(sheetName_Items, langIndex_RUS);
}

function defineRussian_ItemsKey(descriptionsWithFormulas, itemKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]
    try {
    if(lockKitDescription == "N/A"
    || lockKitDescription == "#0"
    || lockKitDescription == "X"
    || lockKitDescription == ""){
      setInGameViewRussian_Items_Catch(inputRow, validateErrorMsg);
      continue;
    }

    const itemKey = itemKeys[x][0];
    const isNameOrDesc = itemKey.substring(0, 4);

    if(isNameOrDesc == "NAME") setInGameViewRussianItems_Name(lockKitDescription, inputRow);  
    else if(isNameOrDesc == "DESC") clearFormulasRussian_Items_Description(lockKitDescription, inputRow, itemKey)
    }
    catch(err) {
      setInGameViewRussian_Items_Catch(inputRow, err)
    }
  }
}

function setInGameViewRussian_Items_Catch(inputRow, err) {
  validatorItems.getRange(inputRow, columnValidatorRussian_Status).setValue(`Error: ${err}`)
  validatorItems.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewRussianItems_Name(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescription);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorRussian_InGame).setValue(lockKitDescription)
}

function clearFormulasRussian_Items_Description(lockKitDescription, inputRow, itemKey){
  const s1 = clearNorbs(lockKitDescription)
  const s2 = setBracketValuesToUpperCase(s1);
  const s3 = clearColorBracketsFormatters(s2);
  const s4 = clearBoldColorFormatters(s3);
  const s5 = clearBold(s4);
  const locKitDescription_Final = clearBracketsFormatters(s5);
  setInGameViewRussian_Items_Description(locKitDescription_Final, inputRow, itemKey)
}

function setInGameViewRussian_Items_Description(locKitDescription_Final, inputRow, itemKey){
  const lockKitDescriptionWithConfigValues = getMasterConfigValue(locKitDescription_Final, itemKey)

  let detailsInfo = checkIfAnyNobr(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBracket(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfFirstLetterUpperCase(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBold(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyColorBracket(lockKitDescriptionWithConfigValues);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorRussian_InGame).setValue(lockKitDescriptionWithConfigValues)
}

// UI
// UI
// UI

function validateRussian_UI(){
  issuesCount = 0;
  const lastRow = validatorUI.getLastRow() - 2;
  const descriptionsWithFormulas = validatorUI.getRange(firstRowValidatorUI, columnValidatorRussian_l2Loc, lastRow, 1).getValues();
  clearFormulasRussian_UI(descriptionsWithFormulas)
  informAboutErrorsUI(columnValidatorRussian_Issues);
  informAboutCheckFinish(sheetName_UI, langIndex_RUS);
}

function clearFormulasRussian_UI (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription.includes("[i2p") ||
    lockKitDescription == "X"||
    lockKitDescription == "x"||
    lockKitDescription == "{[#0 **COMMON/HARD_CURRENCY**]}"|| 
    lockKitDescription == "???" || 
    lockKitDescription == "") {
      setInGameViewRussian_UI_Catch(inputRow, validateErrorMsg)
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
      setInGameViewRussian_UI(s12, inputRow)
    }
    catch (err) {
       setInGameViewRussian_UI_Catch(inputRow, err)
    }
  }
}

function setInGameViewRussian_UI_Catch(inputRow, err) {
  validatorUI.getRange(inputRow, columnValidatorRussian_Status).setValue(`Error: ${err}`)
  validatorUI.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewRussian_UI(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBold(locKitDescription_Final);
  detailsInfo += checkIfAnyItalic(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorUI.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorUI.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorUI.getRange(inputRow, columnValidatorRussian_InGame).setValue(locKitDescription_Final)
}

// MONSTERS
// MONSTERS
// MONSTERS

function validateRussian_Monsters(){
  issuesCount = 0;
  const lastRow = validatorMonsters.getLastRow() - 2;
  const monsterKeys = validatorMonsters.getRange(firstRowValidatorMonsters, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorMonsters.getRange(firstRowValidatorMonsters, columnValidatorRussian_l2Loc, lastRow, 1).getValues();
  defineRussian_MonsterKey(descriptionsWithFormulas, monsterKeys);
  informAboutErrorsMonsters(columnValidatorRussian_Issues);
  informAboutCheckFinish(sheetName_Monsters, langIndex_RUS);
}

function defineRussian_MonsterKey(descriptionsWithFormulas, monsterKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A" ||
    lockKitDescription == "#0" ||
    lockKitDescription == "X" ||
    lockKitDescription == ""){
      setInGameViewRussian_Monsters_Catch(inputRow, validateErrorMsg)
      continue;
    }
    try {
      const monsterKey = monsterKeys[x][0];
      const defineKey = monsterKey.substring(0, 4);

      if(defineKey == "RARI" || defineKey == "FAMI" || defineKey == "DIFF"){
        setInGameViewRussian_MonstersBasics(lockKitDescription, inputRow)
      }

      else if(defineKey == "OCCU" || defineKey == "NAME") clearFormulasRussian_MonstersOccuranceOrName(lockKitDescription, inputRow)
      else if(defineKey == "BEST") clearFormulasRussian_MonstersBestiary(lockKitDescription, inputRow)
    }
    catch (err) {
      setInGameViewRussian_Monsters_Catch(inputRow, err)
    }
  }
}

function setInGameViewRussian_Monsters_Catch(inputRow, err) {
  validatorMonsters.getRange(inputRow, columnValidatorRussian_Status).setValue(`Error: ${err}`)
  validatorMonsters.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function clearFormulasRussian_MonstersOccuranceOrName(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;
  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearBold(s1);
  const s3 = clearItalic(s2);
  setInGameViewRussian_MonstersOccuranceOrName(s3, inputRow);  
}

function clearFormulasRussian_MonstersBestiary(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;

  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearItalic(s1);
  setInGameViewRussian_MonstersBestiary(s2, inputRow);
}

function setInGameViewRussian_MonstersBasics(lockKitDescription, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkLastCharacterNotDot(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorRussian_InGame).setValue(lockKitDescription)
}

function setInGameViewRussian_MonstersOccuranceOrName(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyNobr(lockKitDescription);
  detailsInfo + checkIfAnyBold(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorRussian_InGame).setValue(lockKitDescription)
}

function setInGameViewRussian_MonstersBestiary(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyNobr(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorRussian_InGame).setValue(lockKitDescription)
}

// ACHIEVEMENTS
// ACHIEVEMENTS
// ACHIEVEMENTS

function validateRussian_Achievements(){
  issuesCount = 0;
  const lastRow = validatorAchievements.getLastRow() - 2;
  const descriptionsWithFormulas = validatorAchievements.getRange(firstRowValidatorAchievements, columnValidatorRussian_l2Loc, lastRow, 1).getValues();
  clearFormulasRussian_Achievements(descriptionsWithFormulas);
  informAboutErrors_Achievements(columnValidatorRussian_Issues);
  informAboutCheckFinish(sheetName_Achievements, langIndex_RUS);
}

function clearFormulasRussian_Achievements (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewRussian_Achievements_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      setInGameViewRussian_Achievements(s1, inputRow)
    }
    catch (err) {
      setInGameViewRussian_Achievements_Catch(inputRow, err);
    }
  }
}

function setInGameViewRussian_Achievements_Catch(inputRow, err) {
  validatorAchievements.getRange(inputRow, columnValidatorRussian_Status).setValue(`Error: ${err}`)
  validatorAchievements.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewRussian_Achievements(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorAchievements.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorAchievements.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorAchievements.getRange(inputRow, columnValidatorRussian_InGame).setValue(locKitDescription_Final)
}

function validateRussian_Hints(){
  issuesCount = 0;
  const lastRow = validatorHints.getLastRow() - 2;
  const descriptionsWithFormulas = validatorHints.getRange(firstRowValidatorHints, columnValidatorRussian_l2Loc, lastRow, 1).getValues();
  clearFormulasRussian_Hints(descriptionsWithFormulas);
  informAboutErrors_Hints(columnValidatorRussian_Issues);
  informAboutCheckFinish(sheetName_Hints, langIndex_RUS);
}

function clearFormulasRussian_Hints (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewRussian_Hints_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      const s2 = clearBracketsFormatters(s1);
      setInGameViewRussian_Hints(s2, inputRow)
    }
    catch (err) {
      setInGameViewRussian_Hints_Catch(inputRow, err);
    }
  }
}

function setInGameViewRussian_Hints_Catch(inputRow, err) {
  validatorHints.getRange(inputRow, columnValidatorRussian_Status).setValue(`Error: ${err}`)
  validatorHints.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewRussian_Hints(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorHints.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorHints.getRange(inputRow, columnValidatorRussian_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorRussian_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorHints.getRange(inputRow, columnValidatorRussian_InGame).setValue(locKitDescription_Final)
}
