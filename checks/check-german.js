const columnValidatorGerman_l2Loc = 10;  
const columnValidatorGerman_InGame = columnValidatorGerman_l2Loc + 1;
const columnValidatorGerman_Status = columnValidatorGerman_l2Loc + 2;
const columnValidatorGerman_Issues = columnValidatorGerman_l2Loc + 2;
const langIndex_GER = "GER";

// CONTRACTS
// CONTRACTS
// CONTRACTS

function validateGerman_Contracts(){
  issuesCount = 0;
  const lastRow = validatorContracts.getLastRow() - 2;
  const polishValues = getPolishValues();
  const descriptionsWithFormulas = validatorContracts.getRange(firstRowValidatorContracts, columnValidatorGerman_l2Loc, lastRow, 1).getValues();
  clearFormulasGerman_Contracts(descriptionsWithFormulas, polishValues)
  informAboutErrors_Contracts(columnValidatorGerman_Issues);
  informAboutCheckFinish(sheetName_Contracts, langIndex_GER);
}

function clearFormulasGerman_Contracts(descriptionsWithFormulas, polishValues){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A" ||
    lockKitDescription == "X" ||
    lockKitDescription == ""){
      setInGameViewGerman_Contracts_Catch(inputRow, validateErrorMsg);
      continue;
    }
    
    try {
      const s1 = clearNorbs(lockKitDescription)
      const s2 = setBracketValuesToUpperCase(s1);
      const s3 = clearBracketsFormatters(s2);
      setInGameViewGerman_Contracts(s3, inputRow, polishValues)
    }
    catch (err) {
      setInGameViewGerman_Contracts_Catch(inputRow, err);
    }
  }
}

function setInGameViewGerman_Contracts(locKitDescription_Final, inputRow, polishValues){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);
  detailsInfo += checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkLastCharacter(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfDoubleDoubleDash(locKitDescription_Final);
  detailsInfo += checkLength(locKitDescription_Final);
  detailsInfo += compareValuesWithPolish(polishValues, locKitDescription_Final, inputRow, langIndex_GER);

  if(detailsInfo != "") {
    validatorContracts.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }
  else {
    detailsInfo = "- OK"
    validatorContracts.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusOK)
  }

  validatorContracts.getRange(inputRow, columnValidatorGerman_InGame).setValue(locKitDescription_Final)
}

function setInGameViewGerman_Contracts_Catch(inputRow, err) {
  validatorContracts.getRange(inputRow, columnValidatorGerman_Status).setValue(`Error: ${err}`)
  validatorContracts.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

//ITEMS
//ITEMS
//ITEMS

function validateGerman_Items(){
  issuesCount = 0;
  const lastRow = validatorItems.getLastRow() - 2;  
  const itemKeys = validatorItems.getRange(firstRowValidatorItems, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorItems.getRange(firstRowValidatorItems, columnValidatorGerman_l2Loc, lastRow, 1).getValues();
  defineGerman_ItemsKey(descriptionsWithFormulas, itemKeys);
  informAboutErrorsItems(columnValidatorGerman_Issues);
  informAboutCheckFinish(sheetName_Items, langIndex_GER);
}

function defineGerman_ItemsKey(descriptionsWithFormulas, itemKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]
    try {
    if(lockKitDescription == "N/A"
    || lockKitDescription == "#0"
    || lockKitDescription == "X"
    || lockKitDescription == ""){
      setInGameViewGerman_Items_Catch(inputRow, validateErrorMsg);
      continue;
    }

    const itemKey = itemKeys[x][0];
    const isNameOrDesc = itemKey.substring(0, 4);

    if(isNameOrDesc == "NAME") setInGameViewGerman_Items_Name(lockKitDescription, inputRow);  
    else if(isNameOrDesc == "DESC") clearFormulasGerman_Items_Description(lockKitDescription, inputRow, itemKey)
    }
    catch(err) {
      setInGameViewGerman_Items_Catch(inputRow, err)
    }
  }
}

function setInGameViewGerman_Items_Catch(inputRow, err) {
  validatorItems.getRange(inputRow, columnValidatorGerman_Status).setValue(`Error: ${err}`)
  validatorItems.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewGerman_Items_Name(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescription);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorGerman_InGame).setValue(lockKitDescription)
}

function clearFormulasGerman_Items_Description(lockKitDescription, inputRow, itemKey){
  const s1 = clearNorbs(lockKitDescription)
  const s2 = setBracketValuesToUpperCase(s1);
  const s3 = clearColorBracketsFormatters(s2);
  const s4 = clearBoldColorFormatters(s3);
  const s5 = clearBold(s4);
  const locKitDescription_Final = clearBracketsFormatters(s5);
  setInGameViewGerman_Items_Description(locKitDescription_Final, inputRow, itemKey)
}

function setInGameViewGerman_Items_Description(locKitDescription_Final, inputRow, itemKey){
  const lockKitDescriptionWithConfigValues = getMasterConfigValue(locKitDescription_Final, itemKey)

  let detailsInfo = checkIfAnyNobr(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBracket(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfFirstLetterUpperCase(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBold(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyColorBracket(lockKitDescriptionWithConfigValues);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorGerman_InGame).setValue(lockKitDescriptionWithConfigValues)
}

// UI
// UI
// UI

function validateGerman_UI(){
  issuesCount = 0;
  const lastRow = validatorUI.getLastRow() - 2;
  const descriptionsWithFormulas = validatorUI.getRange(firstRowValidatorUI, columnValidatorGerman_l2Loc, lastRow, 1).getValues();
  clearFormulasGerman_UI(descriptionsWithFormulas)
  informAboutErrorsUI(columnValidatorGerman_Issues);
  informAboutCheckFinish(sheetName_UI, langIndex_GER);
}

function clearFormulasGerman_UI (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription.includes("[i2p") ||
    lockKitDescription == "X"||
    lockKitDescription == "x"||
    lockKitDescription == "{[#0 **COMMON/HARD_CURRENCY**]}"|| 
    lockKitDescription == "???" || 
    lockKitDescription == "") {
      setInGameViewGerman_UI_Catch(inputRow, validateErrorMsg)
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
      setInGameViewGerman_UI(s12, inputRow)
    }
    catch (err) {
       setInGameViewGerman_UI_Catch(inputRow, err)
    }
  }
}

function setInGameViewGerman_UI_Catch(inputRow, err) {
  validatorUI.getRange(inputRow, columnValidatorGerman_Status).setValue(`Error: ${err}`)
  validatorUI.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewGerman_UI(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBold(locKitDescription_Final);
  detailsInfo += checkIfAnyItalic(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorUI.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorUI.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorUI.getRange(inputRow, columnValidatorGerman_InGame).setValue(locKitDescription_Final)
}

// MONSTERS
// MONSTERS
// MONSTERS

function validateGerman_Monsters(){
  issuesCount = 0;
  const lastRow = validatorMonsters.getLastRow() - 2;
  const monsterKeys = validatorMonsters.getRange(firstRowValidatorMonsters, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorMonsters.getRange(firstRowValidatorMonsters, columnValidatorGerman_l2Loc, lastRow, 1).getValues();
  defineGerman_MonsterKey(descriptionsWithFormulas, monsterKeys);
  informAboutErrorsMonsters(columnValidatorGerman_Issues);
  informAboutCheckFinish(sheetName_Monsters, langIndex_GER);
}

function defineGerman_MonsterKey(descriptionsWithFormulas, monsterKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A" ||
    lockKitDescription == "#0" ||
    lockKitDescription == "X" ||
    lockKitDescription == ""){
      setInGameViewGerman_Monsters_Catch(inputRow, validateErrorMsg);
      continue;
    }
    try {
      const monsterKey = monsterKeys[x][0];
      const defineKey = monsterKey.substring(0, 4);

      if(defineKey == "RARI" || defineKey == "FAMI" || defineKey == "DIFF"){
        setInGameViewGerman_MonstersBasics(lockKitDescription, inputRow)
      }

      else if(defineKey == "OCCU" || defineKey == "NAME") clearFormulasGerman_MonstersOccuranceOrName(lockKitDescription, inputRow)
      else if(defineKey == "BEST") clearFormulasGerman_MonstersBestiary(lockKitDescription, inputRow)
    }
    catch (err) {
      setInGameViewGerman_Monsters_Catch(inputRow, err);
    }
  }
}

function setInGameViewGerman_Monsters_Catch(inputRow, err) {
  validatorMonsters.getRange(inputRow, columnValidatorGerman_Status).setValue(`Error: ${err}`)
  validatorMonsters.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}


function clearFormulasGerman_MonstersOccuranceOrName(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;
  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearBold(s1);
  const s3 = clearItalic(s2);
  setInGameViewGerman_MonstersOccuranceOrName(s3, inputRow);  
}

function clearFormulasGerman_MonstersBestiary(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;

  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearItalic(s1);
  setInGameViewGerman_MonstersBestiary(s2, inputRow);
}

function setInGameViewGerman_MonstersBasics(lockKitDescription, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkLastCharacterNotDot(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusOK)
  }

  validatorMonsters.getRange(inputRow, columnValidatorGerman_InGame).setValue(lockKitDescription)
}

function setInGameViewGerman_MonstersOccuranceOrName(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyNobr(lockKitDescription);
  detailsInfo + checkIfAnyBold(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorGerman_InGame).setValue(lockKitDescription)
}

function setInGameViewGerman_MonstersBestiary(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyNobr(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorGerman_InGame).setValue(lockKitDescription)
}

// ACHIEVEMENTS
// ACHIEVEMENTS
// ACHIEVEMENTS

function validateGerman_Achievements(){
  issuesCount = 0;
  const lastRow = validatorAchievements.getLastRow() - 2;
  const descriptionsWithFormulas = validatorAchievements.getRange(firstRowValidatorAchievements, columnValidatorGerman_l2Loc, lastRow, 1).getValues();
  clearFormulasGerman_Achievements(descriptionsWithFormulas);
  informAboutErrors_Achievements(columnValidatorGerman_Issues);
  informAboutCheckFinish(sheetName_Achievements, langIndex_GER);
}

function clearFormulasGerman_Achievements (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
   const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewGerman_Achievements_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      setInGameViewGerman_Achievements(s1, inputRow)
    }
    catch (err) {
      setInGameViewGerman_Achievements_Catch(inputRow, err);
    }
  }
}

function setInGameViewGerman_Achievements_Catch(inputRow, err) {
  validatorAchievements.getRange(inputRow, columnValidatorGerman_Status).setValue(`Error: ${err}`)
  validatorAchievements.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewGerman_Achievements(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorAchievements.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorAchievements.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorAchievements.getRange(inputRow, columnValidatorGerman_InGame).setValue(locKitDescription_Final)
}

function validateGerman_Hints(){
  issuesCount = 0;
  const lastRow = validatorHints.getLastRow() - 2;
  const descriptionsWithFormulas = validatorHints.getRange(firstRowValidatorHints, columnValidatorGerman_l2Loc, lastRow, 1).getValues();
  clearFormulasGerman_Hints(descriptionsWithFormulas);
  informAboutErrors_Hints(columnValidatorGerman_Issues);
  informAboutCheckFinish(sheetName_Hints, langIndex_GER);
}

function clearFormulasGerman_Hints (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewGerman_Hints_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      const s2 = setBracketValuesToUpperCase(s1);
      const s3 = clearBracketsFormatters(s2);
      setInGameViewGerman_Hints(s3, inputRow)
    }
    catch (err) {
      setInGameViewGerman_Hints_Catch(inputRow, err);
    }
  }
}

function setInGameViewGerman_Hints_Catch(inputRow, err) {
  validatorHints.getRange(inputRow, columnValidatorGerman_Status).setValue(`Error: ${err}`)
  validatorHints.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewGerman_Hints(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorHints.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorHints.getRange(inputRow, columnValidatorGerman_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorGerman_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorHints.getRange(inputRow, columnValidatorGerman_InGame).setValue(locKitDescription_Final)
}