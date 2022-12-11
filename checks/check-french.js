const columnValidatorFrench_l2Loc = 22;  
const columnValidatorFrench_InGame = columnValidatorFrench_l2Loc + 1;
const columnValidatorFrench_Status = columnValidatorFrench_l2Loc + 2;
const columnValidatorFrench_Issues = columnValidatorFrench_l2Loc + 2;
const langIndex_FRE = "FRE";

// CONTRACTS
// CONTRACTS
// CONTRACTS

function validateFrench_Contracts(){
  issuesCount = 0;
  const lastRow = validatorContracts.getLastRow() - 2;
  const polishValues = getPolishValues();
  const descriptionsWithFormulas = validatorContracts.getRange(firstRowValidatorContracts, columnValidatorFrench_l2Loc, lastRow, 1).getValues();
  clearFormulasFrench_Contracts(descriptionsWithFormulas, polishValues)
  informAboutErrors_Contracts(columnValidatorFrench_Issues);
  informAboutCheckFinish(sheetName_Contracts, langIndex_FRE);
}

function clearFormulasFrench_Contracts(descriptionsWithFormulas, polishValues){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A" ||
    lockKitDescription == "X" || 
    lockKitDescription == ""){
      setInGameViewFrench_Contracts_Catch(inputRow, validateErrorMsg);
      continue;
    }
    
    try {
      const s1 = clearNorbs(lockKitDescription)
      const s2 = setBracketValuesToUpperCase(s1);
      const s3 = clearBracketsFormatters(s2);
      setInGameViewFrench_Contracts(s3, inputRow, polishValues);
    }
    catch (err) {
      setInGameViewFrench_Contracts_Catch(inputRow, err);
    }
  }
}

function setInGameViewFrench_Contracts(locKitDescription_Final, inputRow, polishValues){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);
  detailsInfo += checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkLastCharacter(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfDoubleDoubleDash(locKitDescription_Final);
  detailsInfo += checkLength(locKitDescription_Final);  
  detailsInfo += compareValuesWithPolish(polishValues, locKitDescription_Final, inputRow, langIndex_FRE);

  if(detailsInfo != "") {
    validatorContracts.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }
  else {
    detailsInfo = "- OK"
    validatorContracts.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusOK)
  }

  validatorContracts.getRange(inputRow, columnValidatorFrench_InGame).setValue(locKitDescription_Final)
}

function setInGameViewFrench_Contracts_Catch(inputRow, err) {
  validatorContracts.getRange(inputRow, columnValidatorFrench_Status).setValue(`Error: ${err}`)
  validatorContracts.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

//ITEMS
//ITEMS
//ITEMS

function validateFrench_Items(){
  issuesCount = 0;
  const lastRow = validatorItems.getLastRow() - 2;  
  const itemKeys = validatorItems.getRange(firstRowValidatorItems, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorItems.getRange(firstRowValidatorItems, columnValidatorFrench_l2Loc, lastRow, 1).getValues();
  defineFrench_ItemsKey(descriptionsWithFormulas, itemKeys);
  informAboutErrorsItems(columnValidatorFrench_Issues);
  informAboutCheckFinish(sheetName_Items, langIndex_FRE);
}

function defineFrench_ItemsKey(descriptionsWithFormulas, itemKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]
    try {
    if(lockKitDescription == "N/A"
    || lockKitDescription == "#0"
    || lockKitDescription == "X"
    || lockKitDescription == ""){
      setInGameViewFrench_Items_Catch(inputRow, validateErrorMsg);
      continue;
    }

    const itemKey = itemKeys[x][0];
    const isNameOrDesc = itemKey.substring(0, 4);

    if(isNameOrDesc == "NAME") setInGameViewFrenchItems_Name(lockKitDescription, inputRow);  
    else if(isNameOrDesc == "DESC") clearFormulasFrench_Items_Description(lockKitDescription, inputRow, itemKey)
    }
    catch(err) {
      setInGameViewFrench_Items_Catch(inputRow, err)
    }
  }
}

function setInGameViewFrench_Items_Catch(inputRow, err) {
  validatorItems.getRange(inputRow, columnValidatorFrench_Status).setValue(`Error: ${err}`)
  validatorItems.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewFrenchItems_Name(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescription);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorFrench_InGame).setValue(lockKitDescription)
}

function clearFormulasFrench_Items_Description(lockKitDescription, inputRow, itemKey){
  const s1 = clearNorbs(lockKitDescription)
  const s2 = setBracketValuesToUpperCase(s1);
  const s3 = clearColorBracketsFormatters(s2);
  const s4 = clearBoldColorFormatters(s3);
  const s5 = clearBold(s4);
  const locKitDescription_Final = clearBracketsFormatters(s5);
  setInGameViewFrench_Items_Description(locKitDescription_Final, inputRow, itemKey)
}

function setInGameViewFrench_Items_Description(locKitDescription_Final, inputRow, itemKey){
  const lockKitDescriptionWithConfigValues = getMasterConfigValue(locKitDescription_Final, itemKey)

  let detailsInfo = checkIfAnyNobr(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBracket(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfFirstLetterUpperCase(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBold(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyColorBracket(lockKitDescriptionWithConfigValues);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorFrench_InGame).setValue(lockKitDescriptionWithConfigValues)
}

// UI
// UI
// UI

function validateFrench_UI(){
  issuesCount = 0;
  const lastRow = validatorUI.getLastRow() - 2;
  const descriptionsWithFormulas = validatorUI.getRange(firstRowValidatorUI, columnValidatorFrench_l2Loc, lastRow, 1).getValues();
  clearFormulasFrench_UI(descriptionsWithFormulas)
  informAboutErrorsUI(columnValidatorFrench_Issues);
  informAboutCheckFinish(sheetName_UI, langIndex_FRE);
}

function clearFormulasFrench_UI (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription.includes("[i2p") ||
    lockKitDescription == "X"||
    lockKitDescription == "x"||
    lockKitDescription == "{[#0 **COMMON/HARD_CURRENCY**]}"|| 
    lockKitDescription == "???" || 
    lockKitDescription == "") {
      setInGameViewFrench_UI_Catch(inputRow, validateErrorMsg)
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
      setInGameViewFrench_UI(s12, inputRow)
    }
    catch (err) {
       setInGameViewFrench_UI_Catch(inputRow, err)
    }
  }
}

function setInGameViewFrench_UI_Catch(inputRow, err) {
  validatorUI.getRange(inputRow, columnValidatorFrench_Status).setValue(`Error: ${err}`)
  validatorUI.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewFrench_UI(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBold(locKitDescription_Final);
  detailsInfo += checkIfAnyItalic(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorUI.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorUI.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorUI.getRange(inputRow, columnValidatorFrench_InGame).setValue(locKitDescription_Final)
}

// MONSTERS
// MONSTERS
// MONSTERS

function validateFrench_Monsters(){
  issuesCount = 0;
  const lastRow = validatorMonsters.getLastRow() - 2;
  const monsterKeys = validatorMonsters.getRange(firstRowValidatorMonsters, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorMonsters.getRange(firstRowValidatorMonsters, columnValidatorFrench_l2Loc, lastRow, 1).getValues();
  defineFrench_MonsterKey(descriptionsWithFormulas, monsterKeys);
  informAboutErrorsMonsters(columnValidatorFrench_Issues);
  informAboutCheckFinish(sheetName_Monsters, langIndex_FRE);
}

function defineFrench_MonsterKey(descriptionsWithFormulas, monsterKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A" ||
    lockKitDescription == "#0" ||
    lockKitDescription == "X" ||
    lockKitDescription == ""){
       setInGameViewFrench_Monsters_Catch(inputRow, validateErrorMsg)
      continue;
    }
    try {
      const monsterKey = monsterKeys[x][0];
      const defineKey = monsterKey.substring(0, 4);

      if(defineKey == "RARI" || defineKey == "FAMI" || defineKey == "DIFF"){
        setInGameViewFrench_MonstersBasics(lockKitDescription, inputRow)
      }

      else if(defineKey == "OCCU" || defineKey == "NAME") clearFormulasFrench_MonstersOccuranceOrName(lockKitDescription, inputRow)
      else if(defineKey == "BEST") clearFormulasFrench_MonstersBestiary(lockKitDescription, inputRow)
    }
    catch (err) {
       setInGameViewFrench_Monsters_Catch(inputRow, err)
    }
  }
}

function setInGameViewFrench_Monsters_Catch(inputRow, err) {
  validatorMonsters.getRange(inputRow, columnValidatorFrench_Status).setValue(`Error: ${err}`)
  validatorMonsters.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function clearFormulasFrench_MonstersOccuranceOrName(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;
  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearBold(s1);
  const s3 = clearItalic(s2);
  setInGameViewFrench_MonstersOccuranceOrName(s3, inputRow);  
}

function clearFormulasFrench_MonstersBestiary(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;

  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearItalic(s1);
  setInGameViewFrench_MonstersBestiary(s2, inputRow);
}

function setInGameViewFrench_MonstersBasics(lockKitDescription, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkLastCharacterNotDot(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorFrench_InGame).setValue(lockKitDescription)
}

function setInGameViewFrench_MonstersOccuranceOrName(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyNobr(lockKitDescription);
  detailsInfo + checkIfAnyBold(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorFrench_InGame).setValue(lockKitDescription)
}

function setInGameViewFrench_MonstersBestiary(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyNobr(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorFrench_InGame).setValue(lockKitDescription)
}

// ACHIEVEMENTS
// ACHIEVEMENTS
// ACHIEVEMENTS

function validateFrench_Achievements(){
  issuesCount = 0;
  const lastRow = validatorAchievements.getLastRow() - 2;
  const descriptionsWithFormulas = validatorAchievements.getRange(firstRowValidatorAchievements, columnValidatorFrench_l2Loc, lastRow, 1).getValues();
  clearFormulasFrench_Achievements(descriptionsWithFormulas);
  informAboutErrors_Achievements(columnValidatorFrench_Issues);
  informAboutCheckFinish(sheetName_Achievements, langIndex_FRE);
}

function clearFormulasFrench_Achievements (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewFrench_Achievements_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      setInGameViewFrench_Achievements(s1, inputRow)
    }
    catch (err) {
      setInGameViewFrench_Achievements_Catch(inputRow, err);
    }
  }
}

function setInGameViewFrench_Achievements_Catch(inputRow, err) {
  validatorAchievements.getRange(inputRow, columnValidatorFrench_Status).setValue(`Error: ${err}`)
  validatorAchievements.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewFrench_Achievements(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorAchievements.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorAchievements.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorAchievements.getRange(inputRow, columnValidatorFrench_InGame).setValue(locKitDescription_Final)
}

function validateFrench_Hints(){
  issuesCount = 0;
  const lastRow = validatorHints.getLastRow() - 2;
  const descriptionsWithFormulas = validatorHints.getRange(firstRowValidatorHints, columnValidatorFrench_l2Loc, lastRow, 1).getValues();
  clearFormulasFrench_Hints(descriptionsWithFormulas);
  informAboutErrors_Hints(columnValidatorFrench_Issues);
  informAboutCheckFinish(sheetName_Hints, langIndex_FRE);
}

function clearFormulasFrench_Hints (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewFrench_Hints_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      const s2 = setBracketValuesToUpperCase(s1);
      const s3 = clearBracketsFormatters(s2);
      setInGameViewFrench_Hints(s3, inputRow)
    }
    catch (err) {
      setInGameViewFrench_Hints_Catch(inputRow, err);
    }
  }
}

function setInGameViewFrench_Hints_Catch(inputRow, err) {
  validatorHints.getRange(inputRow, columnValidatorFrench_Status).setValue(`Error: ${err}`)
  validatorHints.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewFrench_Hints(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorHints.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorHints.getRange(inputRow, columnValidatorFrench_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorFrench_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorHints.getRange(inputRow, columnValidatorFrench_InGame).setValue(locKitDescription_Final)
}