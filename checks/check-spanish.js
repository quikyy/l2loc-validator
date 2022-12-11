const columnValidatorSpanish_l2Loc = 14;  
const columnValidatorSpanish_InGame = columnValidatorSpanish_l2Loc + 1;
const columnValidatorSpanish_Status = columnValidatorSpanish_l2Loc + 2;
const columnValidatorSpanish_Issues = columnValidatorSpanish_l2Loc + 2;
const langIndex_ESP = "ESP";

// CONTRACTS
// CONTRACTS
// CONTRACTS

function validateSpanish_Contracts(){
  issuesCount = 0;
  const lastRow = validatorContracts.getLastRow() - 2;
  const polishValues = getPolishValues();
  const descriptionsWithFormulas = validatorContracts.getRange(firstRowValidatorContracts, columnValidatorSpanish_l2Loc, lastRow, 1).getValues();
  clearFormulasSpanish_Contracts(descriptionsWithFormulas, polishValues)
  informAboutErrors_Contracts(columnValidatorSpanish_Issues);
  informAboutCheckFinish(sheetName_Contracts, langIndex_ESP);
}

function clearFormulasSpanish_Contracts(descriptionsWithFormulas, polishValues){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A" ||
    lockKitDescription == "X" ||
    lockKitDescription == ""){
      setInGameViewSpanish_Contracts_Catch(inputRow, validateErrorMsg);
      continue;
    }
    
    try {
      const s1 = clearNorbs(lockKitDescription)
      const s2 = setBracketValuesToUpperCase(s1);
      const s3 = clearBracketsFormatters(s2);
      setInGameViewSpanish_Contracts(s3, inputRow, polishValues)
    }
    catch (err) {
      setInGameViewSpanish_Contracts_Catch(inputRow, err);
    }
  }
}

function setInGameViewSpanish_Contracts(locKitDescription_Final, inputRow, polishValues){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);
  detailsInfo += checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkLastCharacter(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfDoubleDoubleDash(locKitDescription_Final);
  detailsInfo += checkLength(locKitDescription_Final);  
  detailsInfo += compareValuesWithPolish(polishValues, locKitDescription_Final, inputRow, langIndex_ESP);

  if(detailsInfo != "") {
    validatorContracts.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }
  else {
    detailsInfo = "- OK"
    validatorContracts.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusOK)
  }

  validatorContracts.getRange(inputRow, columnValidatorSpanish_InGame).setValue(locKitDescription_Final)
}

function setInGameViewSpanish_Contracts_Catch(inputRow, err) {
  validatorContracts.getRange(inputRow, columnValidatorSpanish_Status).setValue(`Error: ${err}`)
  validatorContracts.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

//ITEMS
//ITEMS
//ITEMS

function validateSpanish_Items(){
  issuesCount = 0;
  const lastRow = validatorItems.getLastRow() - 2;  
  const itemKeys = validatorItems.getRange(firstRowValidatorItems, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorItems.getRange(firstRowValidatorItems, columnValidatorSpanish_l2Loc, lastRow, 1).getValues();
  defineSpanish_ItemsKey(descriptionsWithFormulas, itemKeys);
  informAboutErrorsItems(columnValidatorSpanish_Issues);
  informAboutCheckFinish(sheetName_Items, langIndex_ESP);
}

function defineSpanish_ItemsKey(descriptionsWithFormulas, itemKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]
    try {
    if(lockKitDescription == "N/A"
    || lockKitDescription == "#0"
    || lockKitDescription == "X"
    || lockKitDescription == ""){
      setInGameViewSpanish_Items_Catch(inputRow, validateErrorMsg);
      continue;
    }

    const itemKey = itemKeys[x][0];
    const isNameOrDesc = itemKey.substring(0, 4);

    if(isNameOrDesc == "NAME") setInGameViewSpanishItems_Name(lockKitDescription, inputRow);  
    else if(isNameOrDesc == "DESC") clearFormulasSpanish_Items_Description(lockKitDescription, inputRow, itemKey)
    }
    catch(err) {
      setInGameViewSpanish_Items_Catch(inputRow, err)
    }
  }
}

function setInGameViewSpanish_Items_Catch(inputRow, err) {
  validatorItems.getRange(inputRow, columnValidatorSpanish_Status).setValue(`Error: ${err}`)
  validatorItems.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewSpanishItems_Name(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescription);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorSpanish_InGame).setValue(lockKitDescription)
}

function clearFormulasSpanish_Items_Description(lockKitDescription, inputRow, itemKey){
  const s1 = clearNorbs(lockKitDescription)
  const s2 = setBracketValuesToUpperCase(s1);
  const s3 = clearColorBracketsFormatters(s2);
  const s4 = clearBoldColorFormatters(s3);
  const s5 = clearBold(s4);
  const locKitDescription_Final = clearBracketsFormatters(s5);
  setInGameViewSpanish_Items_Description(locKitDescription_Final, inputRow, itemKey)
}

function setInGameViewSpanish_Items_Description(locKitDescription_Final, inputRow, itemKey){
  const lockKitDescriptionWithConfigValues = getMasterConfigValue(locKitDescription_Final, itemKey)

  let detailsInfo = checkIfAnyNobr(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBracket(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfFirstLetterUpperCase(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBold(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyColorBracket(lockKitDescriptionWithConfigValues);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorSpanish_InGame).setValue(lockKitDescriptionWithConfigValues)
}

// UI
// UI
// UI

function validateSpanish_UI(){
  issuesCount = 0;
  const lastRow = validatorUI.getLastRow() - 2;
  const descriptionsWithFormulas = validatorUI.getRange(firstRowValidatorUI, columnValidatorSpanish_l2Loc, lastRow, 1).getValues();
  clearFormulasSpanish_UI(descriptionsWithFormulas)
  informAboutErrorsUI(columnValidatorSpanish_Issues);
  informAboutCheckFinish(sheetName_UI, langIndex_ESP);
}

function clearFormulasSpanish_UI (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription.includes("[i2p") ||
    lockKitDescription == "X"||
    lockKitDescription == "x"||
    lockKitDescription == "{[#0 **COMMON/HARD_CURRENCY**]}"|| 
    lockKitDescription == "???" || 
    lockKitDescription == "") {
      setInGameViewSpanish_UI_Catch(inputRow, validateErrorMsg)
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
      setInGameViewSpanish_UI(s12, inputRow)
    }
    catch (err) {
       setInGameViewSpanish_UI_Catch(inputRow, err)
    }
  }
}


function setInGameViewSpanish_UI_Catch(inputRow, err) {
  validatorUI.getRange(inputRow, columnValidatorSpanish_Status).setValue(`Error: ${err}`)
  validatorUI.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewSpanish_UI(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBold(locKitDescription_Final);
  detailsInfo += checkIfAnyItalic(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorUI.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorUI.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorUI.getRange(inputRow, columnValidatorSpanish_InGame).setValue(locKitDescription_Final)
}

// MONSTERS
// MONSTERS
// MONSTERS

function validateSpanish_Monsters(){
  issuesCount = 0;
  const lastRow = validatorMonsters.getLastRow() - 2;
  const monsterKeys = validatorMonsters.getRange(firstRowValidatorMonsters, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorMonsters.getRange(firstRowValidatorMonsters, columnValidatorSpanish_l2Loc, lastRow, 1).getValues();
  defineSpanish_MonsterKey(descriptionsWithFormulas, monsterKeys);
  informAboutErrorsMonsters(columnValidatorSpanish_Issues);
  informAboutCheckFinish(sheetName_Monsters, langIndex_ESP);
}

function defineSpanish_MonsterKey(descriptionsWithFormulas, monsterKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A" ||
    lockKitDescription == "#0" ||
    lockKitDescription == "X" ||
    lockKitDescription == ""){
     setInGameViewSpanish_Monsters_Catch(inputRow, validateErrorMsg);
      continue;
    }
    try {
      const monsterKey = monsterKeys[x][0];
      const defineKey = monsterKey.substring(0, 4);

      if(defineKey == "RARI" || defineKey == "FAMI" || defineKey == "DIFF"){
        setInGameViewSpanish_MonstersBasics(lockKitDescription, inputRow)
      }

      else if(defineKey == "OCCU" || defineKey == "NAME") clearFormulasSpanish_MonstersOccuranceOrName(lockKitDescription, inputRow)
      else if(defineKey == "BEST") clearFormulasSpanish_MonstersBestiary(lockKitDescription, inputRow)
    }
    catch (err) {
      setInGameViewSpanish_Monsters_Catch(inputRow, err);
    }
  }
}

function setInGameViewSpanish_Monsters_Catch(inputRow, err) {
  validatorMonsters.getRange(inputRow, columnValidatorSpanish_Status).setValue(`Error: ${err}`)
  validatorMonsters.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function clearFormulasSpanish_MonstersOccuranceOrName(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;
  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearBold(s1);
  const s3 = clearItalic(s2);
  setInGameViewSpanish_MonstersOccuranceOrName(s3, inputRow);  
}

function clearFormulasSpanish_MonstersBestiary(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;

  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearItalic(s1);
  setInGameViewSpanish_MonstersBestiary(s2, inputRow);
}

function setInGameViewSpanish_MonstersBasics(lockKitDescription, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkLastCharacterNotDot(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, range).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, range).setBackground(statusOK)
  }

  validatorMonsters.getRange(inputRow, columnValidatorSpanish_InGame).setValue(lockKitDescription)
}

function setInGameViewSpanish_MonstersOccuranceOrName(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyNobr(lockKitDescription);
  detailsInfo + checkIfAnyBold(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorSpanish_InGame).setValue(lockKitDescription)
}

function setInGameViewSpanish_MonstersBestiary(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyNobr(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorSpanish_InGame).setValue(lockKitDescription)
}

// ACHIEVEMENTS
// ACHIEVEMENTS
// ACHIEVEMENTS

function validateSpanish_Achievements(){
  issuesCount = 0;
  const lastRow = validatorAchievements.getLastRow() - 2;
  const descriptionsWithFormulas = validatorAchievements.getRange(firstRowValidatorAchievements, columnValidatorSpanish_l2Loc, lastRow, 1).getValues();
  clearFormulasSpanish_Achievements(descriptionsWithFormulas);
  informAboutErrors_Achievements(columnValidatorSpanish_Issues);
  informAboutCheckFinish(sheetName_Achievements, langIndex_ESP);
}

function clearFormulasSpanish_Achievements (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewSpanish_Achievements_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      setInGameViewSpanish_Achievements(s1, inputRow)
    }
    catch (err) {
      setInGameViewSpanish_Achievements_Catch(inputRow, err);
    }
  }
}

function setInGameViewSpanish_Achievements_Catch(inputRow, err) {
  validatorAchievements.getRange(inputRow, columnValidatorSpanish_Status).setValue(`Error: ${err}`)
  validatorAchievements.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewSpanish_Achievements(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorAchievements.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorAchievements.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorAchievements.getRange(inputRow, columnValidatorSpanish_InGame).setValue(locKitDescription_Final)
}

function validateSpanish_Hints(){
  issuesCount = 0;
  const lastRow = validatorHints.getLastRow() - 2;
  const descriptionsWithFormulas = validatorHints.getRange(firstRowValidatorHints, columnValidatorSpanish_l2Loc, lastRow, 1).getValues();
  clearFormulasSpanish_Hints(descriptionsWithFormulas);
  informAboutErrors_Hints(columnValidatorSpanish_Issues);
  informAboutCheckFinish(sheetName_Hints, langIndex_ESP);
}

function clearFormulasSpanish_Hints (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewSpanish_Hints_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      const s2 = setBracketValuesToUpperCase(s1);
      const s3 = clearBracketsFormatters(s2);
      setInGameViewSpanish_Hints(s3, inputRow)
    }
    catch (err) {
      setInGameViewSpanish_Hints_Catch(inputRow, err);
    }
  }
}

function setInGameViewSpanish_Hints_Catch(inputRow, err) {
  validatorHints.getRange(inputRow, columnValidatorSpanish_Status).setValue(`Error: ${err}`)
  validatorHints.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewSpanish_Hints(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorHints.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorHints.getRange(inputRow, columnValidatorSpanish_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorSpanish_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorHints.getRange(inputRow, columnValidatorSpanish_InGame).setValue(locKitDescription_Final)
}