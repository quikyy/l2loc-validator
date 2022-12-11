const columnValidatorJapanese_l2Loc = 34;  
const columnValidatorJapanese_InGame = columnValidatorJapanese_l2Loc + 1;
const columnValidatorJapanese_Status = columnValidatorJapanese_l2Loc + 2;
const columnValidatorJapanese_Issues = columnValidatorJapanese_l2Loc + 2;
const langIndex_JPN = "JPN";

// CONTRACTS
// CONTRACTS
// CONTRACTS

function validateJapanese_Contracts(){
  issuesCount = 0;
  const lastRow = validatorContracts.getLastRow() - 2;
  const polishValues = getPolishValues();
  const descriptionsWithFormulas = validatorContracts.getRange(firstRowValidatorContracts, columnValidatorJapanese_l2Loc, lastRow, 1).getValues();
  clearFormulasJapanese_Contracts(descriptionsWithFormulas, polishValues);
  informAboutErrors_Contracts(columnValidatorJapanese_Issues);
  informAboutCheckFinish(sheetName_Contracts, langIndex_JPN);
}

function clearFormulasJapanese_Contracts(descriptionsWithFormulas, polishValues){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A" ||
    lockKitDescription == "X" || 
    lockKitDescription == ""){
      setInGameViewJapanese_Contracts_Catch(inputRow,validateErrorMsg);
      continue;
    }
    
    try {
      const s1 = clearNorbs(lockKitDescription)
      const s2 = clearBracketsFormatters(s1);
      setInGameViewJapanese_Contracts(s2, inputRow, polishValues);
    }
    catch (err) {
      setInGameViewJapanese_Contracts_Catch(inputRow, err);
    }
  }
}

function setInGameViewJapanese_Contracts(locKitDescription_Final, inputRow, polishValues){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);
  detailsInfo += checkLastLetterJapanese(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfDoubleDoubleDash(locKitDescription_Final);
  detailsInfo += checkLength(locKitDescription_Final);  
  detailsInfo += compareValuesWithPolish(polishValues, locKitDescription_Final, inputRow, langIndex_JPN);

  if(detailsInfo != "") {
    validatorContracts.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }
  else {
    detailsInfo = "- OK"
    validatorContracts.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorContracts.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusOK)
  }

  validatorContracts.getRange(inputRow, columnValidatorJapanese_InGame).setValue(locKitDescription_Final)
}

function setInGameViewJapanese_Contracts_Catch(inputRow, err) {
  validatorContracts.getRange(inputRow, columnValidatorJapanese_Status).setValue(`Error: ${err}`)
  validatorContracts.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

//ITEMS
//ITEMS
//ITEMS

function validateJapanese_Items(){
  issuesCount = 0;
  const lastRow = validatorItems.getLastRow() - 2;  
  const itemKeys = validatorItems.getRange(firstRowValidatorItems, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorItems.getRange(firstRowValidatorItems, columnValidatorJapanese_l2Loc, lastRow, 1).getValues();
  defineJapanese_ItemsKey(descriptionsWithFormulas, itemKeys);
  informAboutErrorsItems(columnValidatorJapanese_Issues);
  informAboutCheckFinish(sheetName_Items, langIndex_JPN);

}

function defineJapanese_ItemsKey(descriptionsWithFormulas, itemKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]
    try {
    if(lockKitDescription == "N/A"
    || lockKitDescription == "#0"
    || lockKitDescription == "X"
    || lockKitDescription == ""){
      setInGameViewJapanese_Items_Catch(inputRow,validateErrorMsg);
      continue;
    }

    const itemKey = itemKeys[x][0];
    const isNameOrDesc = itemKey.substring(0, 4);

    if(isNameOrDesc == "NAME") setInGameViewJapaneseItems_Name(lockKitDescription, inputRow);  
    else if(isNameOrDesc == "DESC") clearFormulasJapanese_Items_Description(lockKitDescription, inputRow, itemKey)
    }
    catch(err) {
      setInGameViewJapanese_Items_Catch(inputRow, err)
    }
  }
}

function setInGameViewJapanese_Items_Catch(inputRow, err) {
  validatorItems.getRange(inputRow, columnValidatorJapanese_Status).setValue(`Error: ${err}`)
  validatorItems.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewJapaneseItems_Name(lockKitDescription, inputRow) {
  let detailsInfo = checkIfAnyDoubleSpace(lockKitDescription);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorJapanese_InGame).setValue(lockKitDescription)
}

function clearFormulasJapanese_Items_Description(lockKitDescription, inputRow, itemKey){
  const s1 = clearNorbs(lockKitDescription)
  const s2 = setBracketValuesToUpperCase(s1);
  const s3 = clearColorBracketsFormatters(s2);
  const s4 = clearBoldColorFormatters(s3);
  const s5 = clearBold(s4);
  const locKitDescription_Final = clearBracketsFormatters(s5);
  setInGameViewJapanese_Items_Description(locKitDescription_Final, inputRow, itemKey)
}

function setInGameViewJapanese_Items_Description(locKitDescription_Final, inputRow, itemKey){
  const lockKitDescriptionWithConfigValues = getMasterConfigValue(locKitDescription_Final, itemKey)

  let detailsInfo = checkIfAnyNobr(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBracket(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyDoubleSpace(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyBold(lockKitDescriptionWithConfigValues);
  detailsInfo += checkIfAnyColorBracket(lockKitDescriptionWithConfigValues);

  if(detailsInfo != "") {
    validatorItems.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorItems.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorItems.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorItems.getRange(inputRow, columnValidatorJapanese_InGame).setValue(lockKitDescriptionWithConfigValues)
}

// UI
// UI
// UI

function validateJapanese_UI(){
  issuesCount = 0;
  const lastRow = validatorUI.getLastRow() - 2;
  const descriptionsWithFormulas = validatorUI.getRange(firstRowValidatorUI, columnValidatorJapanese_l2Loc, lastRow, 1).getValues();
  clearFormulasJapanese_UI(descriptionsWithFormulas)
  informAboutErrorsUI(columnValidatorJapanese_Issues);
  informAboutCheckFinish(sheetName_UI, langIndex_JPN);
}

function clearFormulasJapanese_UI (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription.includes("[i2p") ||
    lockKitDescription == "X"||
    lockKitDescription == "x"||
    lockKitDescription == "{[#0 **COMMON/HARD_CURRENCY**]}"|| 
    lockKitDescription == "???" || 
    lockKitDescription == "") {
      setInGameViewJapanese_UI_Catch(inputRow, validateErrorMsg)
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
      setInGameViewJapanese_UI(s12, inputRow)
    }
    catch (err) {
       setInGameViewJapanese_UI_Catch(inputRow, err)
    }
  }
}


function setInGameViewJapanese_UI_Catch(inputRow, err) {
  validatorUI.getRange(inputRow, columnValidatorJapanese_Status).setValue(`Error: ${err}`)
  validatorUI.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewJapanese_UI(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(locKitDescription_Final);
  detailsInfo += checkIfAnyDoubleSpace(locKitDescription_Final);
  detailsInfo += checkIfAnyNobr(locKitDescription_Final);
  detailsInfo += checkIfAnyBold(locKitDescription_Final);
  detailsInfo += checkIfAnyItalic(locKitDescription_Final);
  detailsInfo += checkIfAnyBracket(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorUI.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorUI.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorUI.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusOK)
  }
   validatorUI.getRange(inputRow, columnValidatorJapanese_InGame).setValue(locKitDescription_Final)
}

// MONSTERS
// MONSTERS
// MONSTERS

function validateJapanese_Monsters(){
  issuesCount = 0;
  const lastRow = validatorMonsters.getLastRow() - 2;
  const monsterKeys = validatorMonsters.getRange(firstRowValidatorMonsters, keyColumn, lastRow, 1).getValues();
  const descriptionsWithFormulas = validatorMonsters.getRange(firstRowValidatorMonsters, columnValidatorJapanese_l2Loc, lastRow, 1).getValues();
  defineJapanese_MonsterKey(descriptionsWithFormulas, monsterKeys);
  informAboutErrorsMonsters(columnValidatorJapanese_Issues);
  informAboutCheckFinish(sheetName_Monsters, langIndex_JPN);
}

function defineJapanese_MonsterKey(descriptionsWithFormulas, monsterKeys){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "N/A" ||
    lockKitDescription == "#0" ||
    lockKitDescription == "X" ||
    lockKitDescription == ""){
      setInGameViewJapanese_Monsters_Catch(inputRow, validateErrorMsg)
      continue;
    }
    try {
      const monsterKey = monsterKeys[x][0];
      const defineKey = monsterKey.substring(0, 4);

      if(defineKey == "RARI" || defineKey == "FAMI" || defineKey == "DIFF"){
        setInGameViewJapanese_MonstersBasics(lockKitDescription, inputRow)
      }

      else if(defineKey == "OCCU" || defineKey == "NAME") clearFormulasJapanese_MonstersOccuranceOrName(lockKitDescription, inputRow)
      else if(defineKey == "BEST") clearFormulasJapanese_MonstersBestiary(lockKitDescription, inputRow)
    }
    catch (err) {
    setInGameViewJapanese_Monsters_Catch(inputRow, err)   
    }
  }
}

function setInGameViewJapanese_Monsters_Catch(inputRow, err) {
  validatorMonsters.getRange(inputRow, columnValidatorJapanese_Status).setValue(`Error: ${err}`)
  validatorMonsters.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function clearFormulasJapanese_MonstersOccuranceOrName(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;
  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearBold(s1);
  const s3 = clearItalic(s2);
  setInGameViewJapanese_MonstersOccuranceOrName(s3, inputRow);  
}

function clearFormulasJapanese_MonstersBestiary(lockKitDescription, inputRow){
  const l2LocDescription = lockKitDescription;

  const s1 = clearNorbs(l2LocDescription);
  const s2 = clearItalic(s1);
  setInGameViewJapanese_MonstersBestiary(s2, inputRow);
}

function setInGameViewJapanese_MonstersBasics(lockKitDescription, inputRow){
  let detailsInfo = checkIfFirstLetterUpperCase(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusOK)
  }

  validatorMonsters.getRange(inputRow, columnValidatorJapanese_InGame).setValue(lockKitDescription)
}

function setInGameViewJapanese_MonstersOccuranceOrName(lockKitDescription, inputRow) {
  let detailsInfo = checkIfAnyNobr(lockKitDescription);
  detailsInfo + checkIfAnyBold(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorJapanese_InGame).setValue(lockKitDescription)
}

function setInGameViewJapanese_MonstersBestiary(lockKitDescription, inputRow) {
  let detailsInfo = checkIfAnyNobr(lockKitDescription);
  detailsInfo += checkIfAnyItalic(lockKitDescription);

  if(detailsInfo != "") {
    validatorMonsters.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorMonsters.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorMonsters.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusOK)
  }
  validatorMonsters.getRange(inputRow, columnValidatorJapanese_InGame).setValue(lockKitDescription)
}

// ACHIEVEMENTS
// ACHIEVEMENTS
// ACHIEVEMENTS

function validateJapanese_Achievements(){
  issuesCount = 0;
  const lastRow = validatorAchievements.getLastRow() - 2;
  const descriptionsWithFormulas = validatorAchievements.getRange(firstRowValidatorAchievements, columnValidatorJapanese_l2Loc, lastRow, 1).getValues();
  clearFormulasJapanese_Achievements(descriptionsWithFormulas);
  informAboutErrors_Achievements(columnValidatorJapanese_Issues);
  informAboutCheckFinish(sheetName_Achievements, langIndex_JPN);
}

function clearFormulasJapanese_Achievements (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewJapanese_Achievements_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      setInGameViewJapanese_Achievements(s1, inputRow)
    }
    catch (err) {
      setInGameViewJapanese_Achievements_Catch(inputRow, err);
    }
  }
}

function setInGameViewJapanese_Achievements_Catch(inputRow, err) {
  validatorAchievements.getRange(inputRow, columnValidatorJapanese_Status).setValue(`Error: ${err}`)
  validatorAchievements.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewJapanese_Achievements(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorAchievements.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorAchievements.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorAchievements.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorAchievements.getRange(inputRow, columnValidatorJapanese_InGame).setValue(locKitDescription_Final)
}

function validateJapanese_Hints(){
  issuesCount = 0;
  const lastRow = validatorHints.getLastRow() - 2;
  const descriptionsWithFormulas = validatorHints.getRange(firstRowValidatorHints, columnValidatorJapanese_l2Loc, lastRow, 1).getValues();
  clearFormulasJapanese_Hints(descriptionsWithFormulas);
  informAboutErrors_Hints(columnValidatorJapanese_Issues);
  informAboutCheckFinish(sheetName_Hints, langIndex_POL);
}

function clearFormulasJapanese_Hints (descriptionsWithFormulas){
  for(let x = 0; x  < descriptionsWithFormulas.length; x++) {
    const inputRow = x + 4;
    const lockKitDescription = descriptionsWithFormulas[x][0]

    if(lockKitDescription == "X" || 
    lockKitDescription == "x" || 
    lockKitDescription == "???"  ||
    lockKitDescription == "") {
      setInGameViewJapanese_Hints_Catch(inputRow,validateErrorMsg)
      continue;
    }
    try {
      const s1 = clearNorbs(lockKitDescription);
      const s2 = clearBracketsFormatters(s1);
      setInGameViewJapanese_Hints(s2, inputRow)
    }
    catch (err) {
      setInGameViewJapanese_Hints_Catch(inputRow, err);
    }
  }
}

function setInGameViewJapanese_Hints_Catch(inputRow, err) {
  validatorHints.getRange(inputRow, columnValidatorJapanese_Status).setValue(`Error: ${err}`)
  validatorHints.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusProblem)
  issuesCount++;
}

function setInGameViewJapanese_Hints(locKitDescription_Final, inputRow){
  let detailsInfo = checkIfAnyNobr(locKitDescription_Final);

  if(detailsInfo != "") {
    validatorHints.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusProblem)
    issuesCount++;
  }

  else {
    detailsInfo = "- OK"
    validatorHints.getRange(inputRow, columnValidatorJapanese_Status).setValue(detailsInfo)
    validatorHints.getRange(inputRow, columnValidatorJapanese_l2Loc, 1, checkRange).setBackground(statusOK)

  }
  validatorHints.getRange(inputRow, columnValidatorJapanese_InGame).setValue(locKitDescription_Final)
}

// Check if last letter of Japanese string is correct.
function checkLastLetterJapanese(locKitDescription_Final) {
  const lastLetterIndex = locKitDescription_Final.length - 1;
  const lastLetter = locKitDescription_Final[lastLetterIndex];

  if(lastLetter != "。" && lastLetter == " "  && lastLetter != "！") return `- Last character: " " (space);\n`;
  else if(lastLetter != "。" && lastLetter != " " && lastLetter != "！") return `- Last character: "${lastLetter}";\n`;
  else return "";
}

