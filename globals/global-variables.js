const sheetName_Contracts = "CONTRACTS";
const sheetName_Items = "ITEMS";
const sheetName_UI = "UI";
const sheetName_Monsters = "MONSTERS";
const sheetName_Achievements = "ACHIEVEMENTS";
const sheetName_Hints = "HINTS";

const validateErrorMsg = "String can not be validated";

const keyColumn = 1;
const checkRange = 3;
const clearRange = 3;

let issuesCount = 0;

const statusProblem = "#f4cccc";
const statusOK = "#d9ead3";

Array.prototype.diff = function(a) {
  return this.filter(function(i) {return a.indexOf(i) < 0;});
}

function informAboutImportDataSource(validator, source, row, column) {
  validator.getRange(row, column).setValue(`IMPORT DATA: ${source}`);
}

function getSheetFromL2Loc(sheetName, source){
  if(source == "DEV") {
    const lockKitSheets = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/19sj4Aj3-nkPedhHdWN4jBPpKNt0USLnkU1bjtMYyc5s/').getSheets();
    const l2LocSheet = lockKitSheets.find(sheet => {if(sheet.getName() == sheetName) return sheet});
    return l2LocSheet;
  }
  else {
    const lockKitSheets = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1QRcUfCia6gejpuMI0hV5_cMPI9pomHK8-xtIvI2nrjE/edit#gid=1511899238').getSheets();
    const l2LocSheet = lockKitSheets.find(sheet => {if(sheet.getName() == sheetName) return sheet});
    return l2LocSheet;
  }
}

function informAboutCheckFinish(tabName, lang, time){
  let time_2 = 15;
  if(time != null) {time_2 = time};
  SpreadsheetApp.getActive().toast(`${tabName} - ${lang}`, `CHECK DONE 🎉`, time_2)
}

function informAboutGetFinish(tabName, lang, time){
  let time_2 = 15;
  if(time != null) {time_2 = time};
  SpreadsheetApp.getActive().toast(`${tabName} - ${lang}`, `IMPORT DONE 🎉`, time_2)
}

function informAboutErrors_Contracts(issuesColumn){
  const issuesRow = 1;
  validatorContracts.getRange(issuesRow, issuesColumn).setValue(`Issues: ${issuesCount}`);
}

function informAboutErrors_Achievements(issuesColumn){
  const issuesRow = 1;
  validatorAchievements.getRange(issuesRow, issuesColumn).setValue(`Issues: ${issuesCount}`);
}

function informAboutErrors_Hints(issuesColumn){
  const issuesRow = 1;
  validatorHints.getRange(issuesRow, issuesColumn).setValue(`Issues: ${issuesCount}`);
}s