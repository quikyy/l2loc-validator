const columnValidatorPortugese_l2Loc = 30;  
const columnValidatorPortugese_InGame = columnValidatorPortugese_l2Loc + 1;
const columnValidatorPortugese_Status = columnValidatorPortugese_l2Loc + 2;
const columnValidatorPortugese_Issues = columnValidatorPortugese_l2Loc + 2;
const langIndex_POR = "POR";

// CONTRACTS
// CONTRACTS
// CONTRACTS

function validatePortugese_Contracts(){
  issuesCount = 0;
  const lastRow = validatorContracts.getLastRow() - 2;
  const polishValues = getPolishValues();
  const descriptionsWithFormulas = validatorContracts.getRange(firstRowValidatorContracts, columnValidatorPortugese_l2Loc, lastRow, 1).getValues();
  clearFormulasPortugese_Contracts(descriptionsWithFormulas, polishValues)
  informAboutErrors_Contracts(columnValidatorPortugese_Issues);
  informAboutCheckFinish(sheetName_Contracts, langIndex_POR);
}

function clearFormulasPortugese_Contracts(descriptionsWithFormulas, polishValues){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A" ||
    lockKitDescription == "X" || 
    lockKitDescription == ""){
      setInGameViewPortugese_Contracts_Catch(inputRow, validateErrorMsg);
      continue;
    }
    
    try {
      const s1 = clearNorbs(lockKitDescription)
      const s2 = setBracketValuesToUpperCase(s1);
      const s3 = clearBracketsFormatters(s2);
      setInGameViewPortugese_Contracts(s3, inputRow, polishValues)
    }
    catch (err) {
      setInGameViewPortugese_Contracts_Catch(inputRow, err);
    }
  }
}

function setInGameViewPortugese_Contracts(locKitDescription_Final, inputRow, polishValues){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);
  detailsInfo += checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkLastCharacter(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfDoubleDoubleDash(locKitDescription_Final);
  detailsInfo += checkLength(locKitDescription_Final);  
  detailsInfo += compareValuesWithPolish(polishValues, locKitDescription_Final, inputRow, langIndex_POR);

  if(detailsInfo != "") {
    validatorContracts.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }
  else {
    detailsInfo = "- OK"
    validatorContracts.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorContracts.getRange(inputRow, columnValidatorPortugese_InGame).setValue(locKitDescription_Final)
}

function setInGameViewPortugese_Contracts_Catch(inputRow, err) {
  validatorContracts.getRange(inputRow, columnValidatorPortugese_Status).setValue(`Error: ${err}`)
  validatorContracts.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

//ITEMS
//ITEMS
//ITEMS

function validatePortugese_Items(){
  issuesCount = 0;
  const lastRow = validatorItems.getLastRow() - 2;  
  const itemKeys = validatorItems.getRange(firstRowValidatorItems, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorItems.getRange(firstRowValidatorItems, columnValidatorPortugese_l2Loc, lastRow, 1).getValues();
  definePortugese_ItemsKey(descriptionsWithFormulas, itemKeys);
  informAboutErrorsItems(columnValidatorPortugese_Issues);
  informAboutCheckFinish(sheetName_Items, langIndex_POR);
}

function definePortugese_ItemsKey(descriptionsWithFormulas, itemKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]
    try {
    if(lockKitDescription == "N/A"
    || lockKitDescription == "#0"
    || lockKitDescription == "X"
    || lockKitDescription == ""){
      setInGameViewPortugese_Items_Catch(inputRow, validateErrorMsg);
      continue;
    }

    const itemKey = itemKeys[x][0];
    const isNameOrDesc = itemKey.substring(0, 4);

    if(isNameOrDesc == "NAME") setInGameViewPortugeseItems_Name(lockKitDescription, inputRow);  
    else if(isNameOrDesc == "DESC") clearFormulasPortugese_Items_Description(lockKitDescription, inputRow, itemKey)
    }
    catch(err) {
      setInGameViewPortugese_Items_Catch(inputRow, err)
    }
  }
}

function setInGameViewPortugese_Items_Catch(inputRow, err) {
  validatorItems.getRange(inputRow, columnValidatorPortugese_Status).setValue(`Error: ${err}`)
  validatorItems.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewPortugeseItems_Name(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescription);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorPortugese_InGame).setValue(lockKitDescription)
}

function clearFormulasPortugese_Items_Description(lockKitDescription, inputRow, itemKey){
  const s1 = clearNorbs(lockKitDescription)
  const s2 = setBracketValuesToUpperCase(s1);
  const s3 = clearColorBracketsFormatters(s2);
  const s4 = clearBoldColorFormatters(s3);
  const s5 = clearBold(s4);
  const locKitDescription_Final = clearBracketsFormatters(s5);
  setInGameViewPortugese_Items_Description(locKitDescription_Final, inputRow, itemKey)
}

function setInGameViewPortugese_Items_Description(locKitDescription_Final, inputRow, itemKey){
  const lockKitDescriptionWithConfigValues = getMasterConfigValue(locKitDescription_Final, itemKey)

  let detailsInfo = checkIfAnyNobr(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBracket(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfFirstLetterUpperCase(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBold(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyColorBracket(lockKitDescriptionWithConfigValues);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorPortugese_InGame).setValue(lockKitDescriptionWithConfigValues)
}

// UI
// UI
// UI

function validatePortugese_UI(){
  issuesCount = 0;
  const lastRow = validatorUI.getLastRow() - 2;
  const descriptionsWithFormulas = validatorUI.getRange(firstRowValidatorUI, columnValidatorPortugese_l2Loc, lastRow, 1).getValues();
  clearFormulasPortugese_UI(descriptionsWithFormulas)
  informAboutErrorsUI(columnValidatorPortugese_Issues);
  informAboutCheckFinish(sheetName_UI, langIndex_POR);
}

function clearFormulasPortugese_UI (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription.includes("[i2p") ||
    lockKitDescription == "X"||
    lockKitDescription == "x"||
    lockKitDescription == "{[#0 **COMMON/HARD_CURRENCY**]}"|| 
    lockKitDescription == "???" || 
    lockKitDescription == "") {
      setInGameViewPortugese_UI_Catch(inputRow, validateErrorMsg)
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
      setInGameViewPortugese_UI(s12, inputRow)
    }
    catch (err) {
       setInGameViewPortugese_UI_Catch(inputRow, err)
    }
  }
}

function setInGameViewPortugese_UI_Catch(inputRow, err) {
  validatorUI.getRange(inputRow, columnValidatorPortugese_Status).setValue(`Error: ${err}`)
  validatorUI.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewPortugese_UI(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBold(locKitDescription_Final);
  detailsInfo += checkIfAnyItalic(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorUI.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorUI.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorUI.getRange(inputRow, columnValidatorPortugese_InGame).setValue(locKitDescription_Final)
}

// MONSTERS
// MONSTERS
// MONSTERS

function validatePortugese_Monsters(){
  issuesCount = 0;
  const lastRow = validatorMonsters.getLastRow() - 2;
  const monsterKeys = validatorMonsters.getRange(firstRowValidatorMonsters, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorMonsters.getRange(firstRowValidatorMonsters, columnValidatorPortugese_l2Loc, lastRow, 1).getValues();
  definePortugese_MonsterKey(descriptionsWithFormulas, monsterKeys);
  informAboutErrorsMonsters(columnValidatorPortugese_Issues);
  informAboutCheckFinish(sheetName_Monsters, langIndex_POR);
}

function definePortugese_MonsterKey(descriptionsWithFormulas, monsterKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A" ||
    lockKitDescription == "#0" ||
    lockKitDescription == "X" ||
    lockKitDescription == ""){
      setInGameViewPortugese_Monsters_Catch(inputRow, validateErrorMsg)
      continue;
    }
    try {
      const monsterKey = monsterKeys[x][0];
      const defineKey = monsterKey.substring(0, 4);

      if(defineKey == "RARI" || defineKey == "FAMI" || defineKey == "DIFF"){
        setInGameViewPortugese_MonstersBasics(lockKitDescription, inputRow)
      }

      else if(defineKey == "OCCU" || defineKey == "NAME") clearFormulasPortugese_MonstersOccuranceOrName(lockKitDescription, inputRow)
      else if(defineKey == "BEST") clearFormulasPortugese_MonstersBestiary(lockKitDescription, inputRow)
    }
    catch (err) {
      setInGameViewPortugese_Monsters_Catch(inputRow, err)
    }
  }
}

function setInGameViewPortugese_Monsters_Catch(inputRow, err) {
  validatorMonsters.getRange(inputRow, columnValidatorPortugese_Status).setValue(`Error: ${err}`)
  validatorMonsters.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function clearFormulasPortugese_MonstersOccuranceOrName(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;
  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearBold(s1);
  const s3 = clearItalic(s2);
  setInGameViewPortugese_MonstersOccuranceOrName(s3, inputRow);  
}

function clearFormulasPortugese_MonstersBestiary(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;

  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearItalic(s1);
  setInGameViewPortugese_MonstersBestiary(s2, inputRow);
}

function setInGameViewPortugese_MonstersBasics(lockKitDescription, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkLastCharacterNotDot(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, range).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, range).setBackground(statusOK)
  }

  validatorMonsters.getRange(inputRow, columnValidatorPortugese_InGame).setValue(lockKitDescription)
}

function setInGameViewPortugese_MonstersOccuranceOrName(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyNobr(lockKitDescription);
  detailsInfo + checkIfAnyBold(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorPortugese_InGame).setValue(lockKitDescription)
}

function setInGameViewPortugese_MonstersBestiary(lockKitDescription, inputRow) {
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);
  detailsInfo += checkIfAnyNobr(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorPortugese_InGame).setValue(lockKitDescription)
}

// ACHIEVEMENTS
// ACHIEVEMENTS
// ACHIEVEMENTS

function validatePortugese_Achievements(){
  issuesCount = 0;
  const lastRow = validatorAchievements.getLastRow() - 2;
  const descriptionsWithFormulas = validatorAchievements.getRange(firstRowValidatorAchievements, columnValidatorPortugese_l2Loc, lastRow, 1).getValues();
  clearFormulasPortugese_Achievements(descriptionsWithFormulas);
  informAboutErrors_Achievements(columnValidatorPortugese_Issues);
  informAboutCheckFinish(sheetName_Achievements, langIndex_POR);
}

function clearFormulasPortugese_Achievements (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewPortugese_Achievements_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      setInGameViewPortugese_Achievements(s1, inputRow)
    }
    catch (err) {
      setInGameViewPortugese_Achievements_Catch(inputRow, err);
    }
  }
}

function setInGameViewPortugese_Achievements_Catch(inputRow, err) {
  validatorAchievements.getRange(inputRow, columnValidatorPortugese_Status).setValue(`Error: ${err}`)
  validatorAchievements.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewPortugese_Achievements(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorAchievements.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorAchievements.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorAchievements.getRange(inputRow, columnValidatorPortugese_InGame).setValue(locKitDescription_Final)
}

function validatePortugese_Hints(){
  issuesCount = 0;
  const lastRow = validatorHints.getLastRow() - 2;
  const descriptionsWithFormulas = validatorHints.getRange(firstRowValidatorHints, columnValidatorPortugese_l2Loc, lastRow, 1).getValues();
  clearFormulasPortugese_Hints(descriptionsWithFormulas);
  informAboutErrors_Hints(columnValidatorPortugese_Issues);
  informAboutCheckFinish(sheetName_Hints, langIndex_POR);
}

function clearFormulasPortugese_Hints (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewPortugese_Hints_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      const s2 = setBracketValuesToUpperCase(s1);
      const s3 = clearBracketsFormatters(s2);
      setInGameViewPortugese_Hints(s3, inputRow)
    }
    catch (err) {
      setInGameViewPortugese_Hints_Catch(inputRow, err);
    }
  }
}

function setInGameViewPortugese_Hints_Catch(inputRow, err) {
  validatorHints.getRange(inputRow, columnValidatorPortugese_Status).setValue(`Error: ${err}`)
  validatorHints.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewPortugese_Hints(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorHints.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorHints.getRange(inputRow, columnValidatorPortugese_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorPortugese_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorHints.getRange(inputRow, columnValidatorPortugese_InGame).setValue(locKitDescription_Final)
}
