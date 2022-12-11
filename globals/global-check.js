// Check if all <nobr> and </nobr> tags are cleared.
function checkIfAnyNobr(locKitDescription_Final){
    if(locKitDescription_Final.includes(startNobr) || locKitDescription_Final.includes(endNobr)) return`- Issue with "${startNobr}" and "${endNobr}" tag;\n`;
    else return "";
  }
  
  // Check if all <[2{ AND }2]> tags are cleared.
  function checkIfAnyBracket(locKitDescription_Final){
    if(locKitDescription_Final.includes(startBracket) || locKitDescription_Final.includes(endBracket)) return `- Issue with "${startBracket}" and "${endBracket}" tag;\n`;
    else return "";
  }
  
  // Check if first letter of string is uppercase.
  function checkIfFirstLetterUpperCase(locKitDescription_Final){
    const firstLetter = locKitDescription_Final[0];
    if(firstLetter != firstLetter.toUpperCase()) return `- First letter is not upper case;\n`
    else return ""; 
  }
  
  // Check if last letter of string is correct.
  function checkLastCharacter(locKitDescription_Final) {
    const lastLetterIndex = locKitDescription_Final.length - 1;
    const lastLetter = locKitDescription_Final[lastLetterIndex];
  
    if(lastLetter != "." && lastLetter == " ") return `- Last character: "${lastLetter}". Space (" ") after ".";\n`;
    else if(lastLetter != "." && lastLetter != " ") return `- Last character: "${lastLetter}";\n`;
    else return "";
  }
  
  // Check if string contains double spaces.
  function checkIfAnyDoubleSpace(locKitDescription_Final) {
    if(locKitDescription_Final.includes("  ")) return `- Contains double spaces;\n`
    else return ""; 
  }
  
  // Check if string contains double dashes.
  function checkIfDoubleDoubleDash(locKitDescription_Final) {
    if(locKitDescription_Final.includes("--")) return `- Contains double dash (--);\n`
    else return "";
  }
  
  // Check if string exceeded max length.
  function checkLength(locKitDescription_Final) {
    const maxLength = 110;
    const inGameLenght = locKitDescription_Final.length;
    if(inGameLenght > maxLength) return `- Length: ${inGameLenght} characters. Max is: ${maxLength};\n`
    else
    return "";
  }
  
  function checkLastCharacterNotDot(locKitDescription_Final) {
    const lastLetterIndex = locKitDescription_Final.length - 1;
    const lastLetter = locKitDescription_Final[lastLetterIndex];
  
    const regex = /[a-zA-Z]/
    const regexRussian = /^[аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]+$/
    const regexJapanese = /[一-龠]+|[ぁ-ゔ]+|[ァ-ヴー]+|[a-zA-Z0-9]+|[ａ-ｚＡ-Ｚ０-９]+|[々〆〤ヶ]+|[。]+/u;
    if(regex.test(lastLetter) == false &&
    regexRussian.test(lastLetter) == false &&
    regexJapanese.test(lastLetter) == false &&
    lastLetter != "é" &&
    lastLetter != "ã" &&
    lastLetter != "。"){
      return `- Last character: "${lastLetter}";\n`;
    }
    else return "";
  }
  
  function checkIfAnyItalic(locKitDescription_Final){
    if(locKitDescription_Final.includes(italicStart) || locKitDescription_Final.includes(italicEnd)) return`- Issue with "${italicStart}" and "${italicEnd}" tag;\n`;
    else return "";
  }
  
  function checkLastCharacterItems(locKitDescription_Final) {
    const lastLetterIndex = locKitDescription_Final.length - 1;
    const lastLetter = locKitDescription_Final[lastLetterIndex];
  
    if(lastLetter != "." && lastLetter != "!" && lastLetter == " ") return `Last letter is SPACE.`
    else if(lastLetter != "." && lastLetter != "!" && lastLetter != " ") return `Last letter: ${lastLetter}`
    else return "";
  }
  
  function checkIfAnyBold(locKitDescription_Final) {
    if(locKitDescription_Final.includes(startBold) || locKitDescription_Final.includes(endBold)) return `- Issue with "${startBold}" and "${endBold}" tag;\n`;
    else return "";
  }
  
  function checkIfAnyColorBracket(locKitDescription_Final) {
    if(locKitDescription_Final.includes(startColorBracket) || locKitDescription_Final.includes(endColorBracket)) return `- Issue with "${startColorBracket}" and "${endColorBracket}" tag;\n`;
    else return "";
  }