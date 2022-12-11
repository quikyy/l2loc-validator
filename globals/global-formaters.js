// NOBR
const startNobr = "<nobr>";
const endNobr = "</nobr>";
const startNobrRegex = /<nobr>/g
const endNobrRegex = /<\/nobr>/g;

function clearNorbs(lockKitDescription) {  
  let l2LocDescription = lockKitDescription;
  const starNobrCount = (l2LocDescription.match(startNobrRegex) || []).length;
  const endNobrCount = (l2LocDescription.match(endNobrRegex) || []).length;   

  if(starNobrCount != endNobrCount) {
    const nobrCount = starNobrCount > endNobrCount ? starNobrCount : endNobrCount;
    let inGameDescription = ""
    for(let x = 0; x < nobrCount; x++) {
      const endNobrIndex = l2LocDescription.search(endNobr) + 7;
      const l2LocSubstring = l2LocDescription.substring(0, endNobrIndex);

      if(l2LocSubstring.includes(startNobr)) {
        inGameDescription += l2LocSubstring.replace(startNobr, "").replace(endNobr, "")
      }

      else {
        inGameDescription += l2LocSubstring;
      }

      l2LocDescription = l2LocDescription.substring(endNobrIndex, l2LocDescription.length);
    }
    return inGameDescription + l2LocDescription;
  }

  else { 
    return l2LocDescription.replace(startNobrRegex, "").replace(endNobrRegex, "");
  }
}

// [2{}2] brackets
const startBracket = "[2{";
const endBracket = "}2]";
const startBracketRegex = /\[2\{/g;
const endBracketRegex = /\}2\]/g;

function setBracketValuesToUpperCase(lockKitDescription){
  let l2LocDescription = lockKitDescription;

  const startBracketCount = (lockKitDescription.match(startBracketRegex) || []).length;
  const endBracketCount = (lockKitDescription.match(endBracketRegex) || []).length; 

  let values = [];
  if(startBracketCount == endBracketCount) {
      for(let x = 0; x < startBracketCount; x++) {
        const endIndex = l2LocDescription.search(endBracketRegex) + 3;
        const startIndex = l2LocDescription.search(startBracketRegex);
        const value = l2LocDescription.substring(startIndex, endIndex);
        l2LocDescription = l2LocDescription.substring(endIndex, l2LocDescription.length);
        values.push(value);
      }
  }
  else if(startBracketCount != endBracketCount) {
      const bracketCount = startBracketCount > endBracketCount ? startBracketCount : endBracketCount;
      for(let x = 0; x < bracketCount; x++) {
        const endIndex = l2LocDescription.search(endBracketRegex) + 3;
        const l2LocSubstring = l2LocDescription.substring(0, endIndex);

        if(l2LocSubstring.includes(startBracket)) {
          const startIndex = l2LocDescription.search(startBracketRegex);
          const value = l2LocDescription.substring(startIndex, endIndex);
          values.push(value);
        }
        l2LocDescription = l2LocDescription.substring(endIndex, l2LocDescription.length);
      }
  }
  let inGameDescription = lockKitDescription;
  values.map(elem => { inGameDescription = inGameDescription.replace(elem, elem.toUpperCase())})
  return inGameDescription;
}

function clearBracketsFormatters(lockKitDescription){
  let l2LocDescription = lockKitDescription;

  const startBracketCount = (l2LocDescription.match(startBracketRegex) || []).length;
  const endBracketCount = (l2LocDescription.match(endBracketRegex) || []).length; 

  if(startBracketCount != endBracketCount) {
    const bracketCount = startBracketCount > endBracketCount ? startBracketCount : endBracketCount;
    let inGameDescription = ""

    for(let x = 0; x < bracketCount; x++) {
      const bracketEndIndex = l2LocDescription.search(endBracket) + 3;
      const l2LocSubstring = l2LocDescription.substring(0, bracketEndIndex);
  
      if(l2LocSubstring.includes(startBracket)) {
        inGameDescription += l2LocSubstring.replace(startBracket, "").replace(endBracket, "");
      }
      else {
        inGameDescription += l2LocSubstring;
      }
      l2LocDescription = l2LocDescription.substring(bracketEndIndex, l2LocDescription.length);
    }
    return inGameDescription + l2LocDescription;
  }
  else{    
    return l2LocDescription.replace(startBracketRegex, "").replace(endBracketRegex, "");
  }
}

// START COLOR BRACKET
const startColorBracket = "[0{";
const endColorBracket = "}0]";
const startColorBracketRegex = /\[0\{/g;
const endColorBracketRegex = /\}0\]/g

function clearColorBracketsFormatters(lockKitDescription){
  let l2LocDescription = lockKitDescription;

  const startBracketCount = (l2LocDescription.match(startColorBracketRegex) || []).length;
  const endBracketCount = (l2LocDescription.match(endColorBracketRegex) || []).length; 

  if(startBracketCount != endBracketCount) {
    const bracketCount = startBracketCount > endBracketCount ? startBracketCount : endBracketCount;
    let inGameDescription = ""

    for(let x = 0; x < bracketCount; x++) {
      const bracketEndIndex = l2LocDescription.search(endColorBracket) + 3;
      const l2LocSubstring = l2LocDescription.substring(0, bracketEndIndex);
  
      if(l2LocSubstring.includes(startColorBracket)) {
        inGameDescription += l2LocSubstring.replace(startColorBracket, "").replace(endColorBracket, "");
      }
      else {
        inGameDescription += l2LocSubstring;
      }
      l2LocDescription = l2LocDescription.substring(bracketEndIndex, l2LocDescription.length);
    }
    return inGameDescription + l2LocDescription;
  }
  else{    
    return l2LocDescription.replace(startColorBracketRegex, "").replace(endColorBracketRegex, "");
  }
}

// COLOR + BOLD 
const startBoldColor = "{[<b><color=#A15F2D>"
const endBoldColor = "</color></b> **COMMON/DAMAGE_POINT**]}"
const startBoldColorRegex = /\{\[<b><color=#A15F2D>/g;
const endBoldColorRegex = /<\/color><\/b> \*\*COMMON\/DAMAGE_POINT\*\*\]\}/g;

function clearBoldColorFormatters(lockKitDescription){
  let l2LocDescription = lockKitDescription;

  const startBracketCount = (l2LocDescription.match(startBoldColorRegex) || []).length;
  const endBracketCount = (l2LocDescription.match(endBoldColorRegex) || []).length; 

  if(startBracketCount != endBracketCount) {
    const bracketCount = startBracketCount > endBracketCount ? startBracketCount : endBracketCount;
    let inGameDescription = ""

    for(let x = 0; x < bracketCount; x++) {
      const bracketEndIndex = l2LocDescription.search(endBoldColor) + 38;
      const l2LocSubstring = l2LocDescription.substring(0, bracketEndIndex);
  
      if(l2LocSubstring.includes(startColorBracket)) {
        inGameDescription += l2LocSubstring.replace(startBoldColor, "").replace(endBoldColor, "");
      }
      else {
        inGameDescription += l2LocSubstring;
      }
      l2LocDescription = l2LocDescription.substring(bracketEndIndex, l2LocDescription.length);
    }
    return inGameDescription + l2LocDescription;
  }
  else{    
    return l2LocDescription.replace(startBoldColorRegex, "").replace(endBoldColorRegex, "");
  }
}

// BOLD
const startBold = "<b>";
const endBold = "</b>";
const startBoldRegex = /<b>/g;
const endBoldRegex = /<\/b>/g;

function clearBold(lockKitDescription) {  
  let l2LocDescription = lockKitDescription;
  const starNobrCount = (l2LocDescription.match(startBoldRegex) || []).length;
  const endNobrCount = (l2LocDescription.match(endBoldRegex) || []).length;   

  if(starNobrCount != endNobrCount) {
    const nobrCount = starNobrCount > endNobrCount ? starNobrCount : endNobrCount;
    let inGameDescription = ""
    for(let x = 0; x < nobrCount; x++) {
      const endNobrIndex = l2LocDescription.search(endBold) + 4;
      const l2LocSubstring = l2LocDescription.substring(0, endNobrIndex);

      if(l2LocSubstring.includes(startBold)) {
        inGameDescription += l2LocSubstring.replace(startBold, "").replace(endBold, "")
      }

      else {
        inGameDescription += l2LocSubstring;
      }

      l2LocDescription = l2LocDescription.substring(endNobrIndex, l2LocDescription.length);
    }
    return inGameDescription + l2LocDescription;
  }

  else { 
    return l2LocDescription.replace(startBoldRegex, "").replace(endBoldRegex, "");
  }
}

// ONE ZERO
const oneZeroBracketStart = "[0{"
const oneZeroBracketEnd = "}0]";
const oneZeroBracketStartRegex = /\[0\{/g;
const oneZeroBracketEndRegex = /\}0\]/g

function clearOneZero(lockKitDescription) {  
  let l2LocDescription = lockKitDescription;
  const startOneZeroCount = (l2LocDescription.match(oneZeroBracketStartRegex) || []).length;
  const endOneZeroCount = (l2LocDescription.match(oneZeroBracketEndRegex) || []).length;   

  if(startOneZeroCount != endOneZeroCount) {
    const count = startOneZeroCount > endOneZeroCount ? startOneZeroCount : endOneZeroCount;
    let inGameDescription = ""
    for(let x = 0; x < count; x++) {
      const endIndex = l2LocDescription.search(oneZeroBracketEnd) + 3;
      const l2LocSubstring = l2LocDescription.substring(0, endIndex);

      if(l2LocSubstring.includes(oneZeroBracketStart)) {
        inGameDescription += l2LocSubstring.replace(oneZeroBracketStart, "").replace(oneZeroBracketEnd, "")
      }

      else {
        inGameDescription += l2LocSubstring;
      }

      l2LocDescription = l2LocDescription.substring(endIndex, l2LocDescription.length);
    }
    return inGameDescription + l2LocDescription;
  }

  else { 
    return l2LocDescription.replace(oneZeroBracketStartRegex, "").replace(oneZeroBracketEndRegex, "");
  }
}

// CLEAR ONE
const oneBracketStart = "[1{"
const oneBracketEnd = "}1]";
const oneBracketStartRegex = /\[1\{/g;
const oneBracketEndRegex = /\}1\]/g;

function clearOne(lockKitDescription) {  
  let l2LocDescription = lockKitDescription;
  const startOneCount = (l2LocDescription.match(oneBracketStartRegex) || []).length;
  const endOneCount = (l2LocDescription.match(oneBracketEndRegex) || []).length;   

  if(startOneCount != endOneCount) {
    const count = startOneCount > endOneCount ? startOneCount : endOneCount;
    let inGameDescription = ""
    for(let x = 0; x < count; x++) {
      const endIndex = l2LocDescription.search(oneBracketEnd) + 3;
      const l2LocSubstring = l2LocDescription.substring(0, endIndex);

      if(l2LocSubstring.includes(oneBracketStart)) {
        inGameDescription += l2LocSubstring.replace(oneBracketStart, "").replace(oneBracketEnd, "")
      }

      else {
        inGameDescription += l2LocSubstring;
      }

      l2LocDescription = l2LocDescription.substring(endIndex, l2LocDescription.length);
    }
    return inGameDescription + l2LocDescription;
  }

  else { 
    return l2LocDescription.replace(oneBracketStartRegex, "").replace(oneBracketEndRegex, "");
  }
}

// ITALIC
const italicStart = "<i>";
const italicEnd = "</i>";
const italicStartRegex = /<i>/g;
const italicEndRegex = /<\/i>/g;

function clearItalic(lockKitDescription) {  
  let l2LocDescription = lockKitDescription;
  const startCount = (l2LocDescription.match(italicStartRegex) || []).length;
  const endCount = (l2LocDescription.match(italicEndRegex) || []).length;   

  if(startCount != endCount) {
    const count = startCount > endCount ? startCount : endCount;
    let inGameDescription = ""
    for(let x = 0; x < count; x++) {
      const endIndex = l2LocDescription.search(italicEnd) + 4;
      const l2LocSubstring = l2LocDescription.substring(0, endIndex);

      if(l2LocSubstring.includes(italicStart)) {
        inGameDescription += l2LocSubstring.replace(italicStart, "").replace(italicEnd, "")
      }

      else {
        inGameDescription += l2LocSubstring;
      }

      l2LocDescription = l2LocDescription.substring(endIndex, l2LocDescription.length);
    }
    return inGameDescription + l2LocDescription;
  }

  else { 
    return l2LocDescription.replace(italicStartRegex, "").replace(italicEndRegex, "");
  }
}

// UNDERLINE
const underlineStart = "<u>";
const underlineEnd = "</u>";
const underlineStartRegex = /<u>/g;
const underlineEndRegex = /<\/u>/g;

function clearUnderline(lockKitDescription) {  
  let l2LocDescription = lockKitDescription;
  const startCount = (l2LocDescription.match(underlineStartRegex) || []).length;
  const endCount = (l2LocDescription.match(underlineEndRegex) || []).length;   

  if(startCount != endCount) {
    const count = startCount > endCount ? startCount : endCount;
    let inGameDescription = ""
    for(let x = 0; x < count; x++) {
      const endIndex = l2LocDescription.search(underlineEnd) + 4;
      const l2LocSubstring = l2LocDescription.substring(0, endIndex);

      if(l2LocSubstring.includes(underlineStart)) {
        inGameDescription += l2LocSubstring.replace(underlineStart, "").replace(underlineEnd, "")
      }

      else {
        inGameDescription += l2LocSubstring;
      }

      l2LocDescription = l2LocDescription.substring(endIndex, l2LocDescription.length);
    }
    return inGameDescription + l2LocDescription;
  }

  else { 
    return l2LocDescription.replace(underlineStartRegex, "").replace(underlineEndRegex, "");
  }
}

// COLORS
const color_1Start = "<color=#590101>";
const color_2Start = "<color=#edc707>";
const color_3Start = "<#f70d0d>";
const colorEnd = "</color>";
const color_1StartRegex = /<color\=\#590101>/g
const color_2StartRegex = /<color\=\#edc707>/g
const color_3StartRegex = /<\#f70d0d>/g;
const colorEndRegex = /<\/color>/g;

function clearColor_1(lockKitDescription) {  
  let l2LocDescription = lockKitDescription;
  const startCount = (l2LocDescription.match(color_1StartRegex) || []).length;
  const endCount = (l2LocDescription.match(colorEndRegex) || []).length;   

  if(startCount != endCount) {
    const count = startCount > endCount ? startCount : endCount;
    let inGameDescription = ""
    for(let x = 0; x < count; x++) {
      const endIndex = l2LocDescription.search(colorEnd) + 8;
      const l2LocSubstring = l2LocDescription.substring(0, endIndex);

      if(l2LocSubstring.includes(color_1Start)) {
        inGameDescription += l2LocSubstring.replace(color_1Start, "").replace(colorEnd, "")
      }

      else {
        inGameDescription += l2LocSubstring;
      }

      l2LocDescription = l2LocDescription.substring(endIndex, l2LocDescription.length);
    }
    return inGameDescription + l2LocDescription;
  }

  else { 
    return l2LocDescription.replace(color_1StartRegex, "").replace(colorEndRegex, "");
  }
}

function clearColor_2(lockKitDescription) {  
  let l2LocDescription = lockKitDescription;
  const startCount = (l2LocDescription.match(color_2StartRegex) || []).length;
  const endCount = (l2LocDescription.match(colorEndRegex) || []).length;   

  if(startCount != endCount) {
    const count = startCount > endCount ? startCount : endCount;
    let inGameDescription = ""
    for(let x = 0; x < count; x++) {
      const endIndex = l2LocDescription.search(colorEnd) + 8;
      const l2LocSubstring = l2LocDescription.substring(0, endIndex);

      if(l2LocSubstring.includes(color_2Start)) {
        inGameDescription += l2LocSubstring.replace(color_2Start, "").replace(colorEnd, "")
      }

      else {
        inGameDescription += l2LocSubstring;
      }

      l2LocDescription = l2LocDescription.substring(endIndex, l2LocDescription.length);
    }
    return inGameDescription + l2LocDescription;
  }

  else { 
    return l2LocDescription.replace(color_2StartRegex, "").replace(colorEndRegex, "");
  }
}

function clearColor_3(lockKitDescription) {  
  let l2LocDescription = lockKitDescription;
  const startCount = (l2LocDescription.match(color_3StartRegex) || []).length;
  const endCount = (l2LocDescription.match(colorEndRegex) || []).length;   

  if(startCount != endCount) {
    const count = startCount > endCount ? startCount : endCount;
    let inGameDescription = ""
    for(let x = 0; x < count; x++) {
      const endIndex = l2LocDescription.search(colorEnd) + 8;
      const l2LocSubstring = l2LocDescription.substring(0, endIndex);

      if(l2LocSubstring.includes(color_3Start)) {
        inGameDescription += l2LocSubstring.replace(color_3Start, "").replace(colorEnd, "")
      }

      else {
        inGameDescription += l2LocSubstring;
      }

      l2LocDescription = l2LocDescription.substring(endIndex, l2LocDescription.length);
    }
    return inGameDescription + l2LocDescription;
  }

  else { 
    return l2LocDescription.replace(color_3StartRegex, "").replace(colorEndRegex, "");
  }
}

// SPRITE
const spriteStart = '<sprite name="tmp_label_decor_lt">';
const spriteStart2 = '<sprite name="tmp_durability">';
const spriteEnd = '<sprite name="tmp_label_decor_rt">';

function clearSprite(lockKitDescription){
  let l2LocDescription = lockKitDescription;
  return l2LocDescription.replace(spriteStart, "").replace(spriteEnd, "").replace(spriteStart2, "");
}
