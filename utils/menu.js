function onOpen(e) {
    const ui = SpreadsheetApp.getUi();
    
    ui.createMenu('Authorize')
    .addItem('Authorize with @spokko', 'importPermission')
    .addToUi()
  
    ui.createMenu('Contracts')
      .addSubMenu(ui.createMenu('Get DEV')
      .addItem('Get Contracts DEV (all languague)', 'getAllContractsDev')
      .addItem('Get English DEV', 'getEnglishContractsDev')
      .addItem('Get Polish DEV', 'getPolishContractsDev')
      .addItem('Get German DEV', 'getGermanContractsDev')
      .addItem('Get Spanish DEV', 'getSpanishContractsDev')
      .addItem('Get Italian DEV', 'getItalianContractsDev')
      .addItem('Get French DEV', 'getFrenchContractsDev')
      .addItem('Get Russian DEV', 'getRussianContractsDev')
      .addItem('Get Portugese DEV', 'getPortugeseContractsDev')
      .addItem('Get Japanese DEV', 'getJapaneseContractsDev')
      .addItem('Get Keys DEV', 'getKeysContractsMenuBtnDev'))
      .addSeparator()
  
          .addSubMenu(ui.createMenu('Get PROD')
      .addItem('Get Contracts PROD (all languague)', 'getAllContractsProd')
      .addItem('Get English PROD', 'getEnglishContractsProd')
      .addItem('Get Polish PROD', 'getPolishContractsProd')
      .addItem('Get German PROD', 'getGermanContractsProd')
      .addItem('Get Spanish PROD', 'getSpanishContractsProd')
      .addItem('Get Italian PROD', 'getItalianContractsProd')
      .addItem('Get French PROD', 'getFrenchContractsProd')
      .addItem('Get Russian PROD', 'getRussianContractsProd')
      .addItem('Get Portugese PROD', 'getPortugeseContractsProd')
      .addItem('Get Japanese PROD', 'getJapaneseContractsProd')
      .addItem('Get Keys PROD', 'getKeysContractsMenuBtnProd'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Check')
      .addItem('Check Contracts (all languague)', 'validateAllContracts')
      .addItem('Check English', 'validateEnglish_Contracts')
      .addItem('Check Polish', 'validatePolish_Contracts')
      .addItem('Check German', 'validateGerman_Contracts')
      .addItem('Check Spanish', 'validateSpanish_Contracts')
      .addItem('Check Italian', 'validateItalian_Contracts')
      .addItem('Check French', 'validateFrench_Contracts')
      .addItem('Check Russian', 'validateRussian_Contracts')
      .addItem('Check Portugese', 'validatePortugese_Contracts')
      .addItem('Check Japanese', 'validateJapanese_Contracts'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Clear')
      .addItem('Clear Contracts (all languague)', 'clearAllContracts')
      .addItem('Clear English', 'clearEnglishContracts')
      .addItem('Clear Polish', 'clearPolishContracts')
      .addItem('Clear German', 'clearGermanContracts')
      .addItem('Clear Spanish', 'clearSpanishContracts')
      .addItem('Clear Italian', 'clearItalianContracts')
      .addItem('Clear French', 'clearFrenchContracts')
      .addItem('Clear Russian', 'clearRussianContracts')
      .addItem('Clear Portugese', 'clearPortgueseContracts')
      .addItem('Clear Japanese', 'clearJapaneseContracts')
      .addItem('Clear Keys', 'clearKeysContracts'))
    .addToUi();
  
    ui.createMenu('Items')
      .addSubMenu(ui.createMenu('Get DEV')
      .addItem('Get Items DEV (all languague)', 'getAllItemsDev')
      .addItem('Get English DEV', 'getEnglishItemsDev')
      .addItem('Get Polish DEV', 'getPolishItemsDev')
      .addItem('Get German DEV', 'getGermanItemsDev')
      .addItem('Get Spanish DEV', 'getSpanishItemsDev')
      .addItem('Get Italian DEV', 'getItalianItemsDev')
      .addItem('Get French DEV', 'getFrenchItemsDev')
      .addItem('Get Russian DEV', 'getRussianItemsDev')
      .addItem('Get Portugese DEV', 'getPortugeseItemsDev')
      .addItem('Get Japanese DEV', 'getJapaneseItemsDev')
      .addItem('Get Keys DEV', 'getKeysItemsMenuBtnDev'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Get PROD')
      .addItem('Get Items PROD (all languague)', 'getAllItemsProd')
      .addItem('Get English PROD', 'getEnglishItemsProd')
      .addItem('Get Polish PROD', 'getPolishItemsProd')
      .addItem('Get German PROD', 'getGermanItemsProd')
      .addItem('Get Spanish PROD', 'getSpanishItemsProd')
      .addItem('Get Italian PROD', 'getItalianItemsProd')
      .addItem('Get French PROD', 'getFrenchItemsProd')
      .addItem('Get Russian PROD', 'getRussianItemsProd')
      .addItem('Get Portugese PROD', 'getPortugeseItemsProd')
      .addItem('Get Japanese PROD', 'getJapaneseItemsProd')
      .addItem('Get Keys PROD', 'getKeysItemsMenuBtnProd'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Check')
      .addItem('Check Items (all languague)', 'validateAllItems')
      .addItem('Check English', 'validateEnglish_Items')
      .addItem('Check Polish', 'validatePolish_Items')
      .addItem('Check German', 'validateGerman_Items')
      .addItem('Check Spanish', 'validateSpanish_Items')
      .addItem('Check Italian', 'validateItalian_Items')
      .addItem('Check French', 'validateFrench_Items')
      .addItem('Check Russian', 'validateRussian_Items')
      .addItem('Check Portugese', 'validatePortugese_Items')
      .addItem('Check Japanese', 'validateJapanese_Items'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Clear')
      .addItem('Clear Items (all languague)', 'clearAllItems')
      .addItem('Clear English', 'clearEnglishItems')
      .addItem('Clear Polish', 'clearPolishItems')
      .addItem('Clear German', 'clearGermanItems')
      .addItem('Clear Spanish', 'clearSpanishItems')
      .addItem('Clear Italian', 'clearItalianItems')
      .addItem('Clear French', 'clearFrenchItems')
      .addItem('Clear Russian', 'clearRussianItems')
      .addItem('Clear Portugese', 'clearPortugeseItems')
      .addItem('Clear Japanese', 'clearJapaneseItems')
      .addItem('Clear Keys', 'clearKeysItems'))
    .addToUi();
  
    
    ui.createMenu('UI')
      .addSubMenu(ui.createMenu('Get DEV')
      .addItem('Get UI DEV (all languague)', 'getAllUIDev')
      .addItem('Get English DEV', 'getEnglishUIDev')
      .addItem('Get Polish DEV', 'getPolishUIDev')
      .addItem('Get German DEV', 'getGermanUIDev')
      .addItem('Get Spanish DEV', 'getSpanishUIDev')
      .addItem('Get Italian DEV', 'getItalianUIDev')
      .addItem('Get French DEV', 'getFrenchUIDev')
      .addItem('Get Russian DEV', 'getRussianUIDev')
      .addItem('Get Portugese DEV', 'getPortugeseUIDev')
      .addItem('Get Japanese DEV', 'getJapaneseUIDev')
      .addItem('Get Keys DEV', 'getKeysUIMenuBtnDev'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Get PROD')
      .addItem('Get UI PROD (all languague)', 'getAllUIProd')
      .addItem('Get English PROD', 'getEnglishUIProd')
      .addItem('Get Polish PROD', 'getPolishUIProd')
      .addItem('Get German PROD', 'getGermanUIProd')
      .addItem('Get Spanish PROD', 'getSpanishUIProd')
      .addItem('Get Italian PROD', 'getItalianUIProd')
      .addItem('Get French PROD', 'getFrenchUIProd')
      .addItem('Get Russian PROD', 'getRussianUIProd')
      .addItem('Get Portugese PROD', 'getPortugeseUIProd')
      .addItem('Get Japanese PROD', 'getJapaneseUIProd')
      .addItem('Get Keys PROD', 'getKeysUIMenuBtnProd'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Check')
      .addItem('Check UI (all languague)', 'validateAllUI')
      .addItem('Check English', 'validateEnglish_UI')
      .addItem('Check Polish', 'validatePolish_UI')
      .addItem('Check German', 'validateGerman_UI')
      .addItem('Check Spanish', 'validateSpanish_UI')
      .addItem('Check Italian', 'validateItalian_UI')
      .addItem('Check French', 'validateFrench_UI')
      .addItem('Check Russian', 'validateRussian_UI')
      .addItem('Check Portugese', 'validatePortugese_UI')
      .addItem('Check Japanese', 'validateJapanese_UI'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Clear')
      .addItem('Clear UI (all languague)', 'clearAllUI')
      .addItem('Clear English', 'clearEnglishUI')
      .addItem('Clear Polish', 'clearPolishUI')
      .addItem('Clear German', 'clearGermanUI')
      .addItem('Clear Spanish', 'clearSpanishUI')
      .addItem('Clear Italian', 'clearItalianUI')
      .addItem('Clear French', 'clearFrenchUI')
      .addItem('Clear Russian', 'clearRussianUI')
      .addItem('Clear Portugese', 'clearPortugeseUI')
      .addItem('Clear Japanese', 'clearJapaneseUI')
      .addItem('Clear Keys', 'clearKeysUI'))
    .addToUi();
  
  ui.createMenu('Monsters')
      .addSubMenu(ui.createMenu('Get DEV')
      .addItem('Get Monsters DEV (all languague)', 'getAllMonstersDev')
      .addItem('Get English DEV', 'getEnglishMonstersDev')
      .addItem('Get Polish DEV', 'getPolishMonstersDev')
      .addItem('Get German DEV', 'getGermanMonstersDev')
      .addItem('Get Spanish DEV', 'getSpanishMonstersDev')
      .addItem('Get Italian DEV', 'getItalianMonstersDev')
      .addItem('Get French DEV', 'getFrenchMonstersDev')
      .addItem('Get Russian DEV', 'getRussianMonstersDev')
      .addItem('Get Portugese DEV', 'getPortugeseMonstersDev')
      .addItem('Get Japanese DEV', 'getJapaneseMonstersDev')
      .addItem('Get Keys DEV', 'getKeysMonstersMenuBtnDev'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Get PROD')
      .addItem('Get Monsters PROD (all languague)', 'getAllMonstersProd')
      .addItem('Get English PROD', 'getEnglishMonstersProd')
      .addItem('Get Polish PROD', 'getPolishMonstersProd')
      .addItem('Get German PROD', 'getGermanMonstersProd')
      .addItem('Get Spanish PROD', 'getSpanishMonstersProd')
      .addItem('Get Italian PROD', 'getItalianMonstersProd')
      .addItem('Get French PROD', 'getFrenchMonstersProd')
      .addItem('Get Russian PROD', 'getRussianMonstersProd')
      .addItem('Get Portugese PROD', 'getPortugeseMonstersProd')
      .addItem('Get Japanese PROD', 'getJapaneseMonstersProd')
      .addItem('Get Keys PROD', 'getKeysMonstersMenuBtnProd'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Check')
      .addItem('Check Monsters (all languague)', 'validateAllMonsters')
      .addItem('Check English', 'validateEnglish_Monsters')
      .addItem('Check Polish', 'validatePolish_Monsters')
      .addItem('Check German', 'validateGerman_Monsters')
      .addItem('Check Spanish', 'validateSpanish_Monsters')
      .addItem('Check Italian', 'validateItalian_Monsters')
      .addItem('Check French', 'validateFrench_Monsters')
      .addItem('Check Russian', 'validateRussian_Monsters')
      .addItem('Check Portugese', 'validatePortugese_Monsters')
      .addItem('Check Japanese', 'validateJapanese_Monsters'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Clear')
      .addItem('Clear Monsters (all languague)', 'clearAllMonsters')
      .addItem('Clear English', 'clearEnglishMonsters')
      .addItem('Clear Polish', 'clearPolishMonsters')
      .addItem('Clear German', 'clearGermanMonsters')
      .addItem('Clear Spanish', 'clearSpanishMonsters')
      .addItem('Clear Italian', 'clearItalianMonsters')
      .addItem('Clear French', 'clearFrenchMonsters')
      .addItem('Clear Russian', 'clearRussianMonsters')
      .addItem('Clear Portugese', 'clearPortugeseMonsters')
      .addItem('Clear Japanese', 'clearJapaneseMonsters')
      .addItem('Clear Keys', 'clearKeysMonsters'))
      .addToUi();
  
  ui.createMenu('Achievements')
      .addSubMenu(ui.createMenu('Get DEV')
      .addItem('Get Achievements DEV (all languague)', 'getAllAchievementsDev')
      .addItem('Get English DEV ', 'getEnglishAchievementsDev')
      .addItem('Get Polish DEV ', 'getPolishAchievementsDev')
      .addItem('Get German DEV ', 'getGermanAchievementsDev')
      .addItem('Get Spanish DEV ', 'getSpanishAchievementsDev')
      .addItem('Get Italian DEV ', 'getItalianAchievementsDev')
      .addItem('Get French DEV ', 'getFrenchAchievementsDev')
      .addItem('Get Russian DEV ', 'getRussianAchievementsDev')
      .addItem('Get Portugese DEV ', 'getPortugeseAchievementsDev')
      .addItem('Get Japanese DEV ', 'getJapaneseAchievementsDev')
      .addItem('Get Keys DEV ', 'getKeysAchievementsMenuBtnDev'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Get PROD')
      .addItem('Get Achievements PROD (all languague)', 'getAllAchievementsProd')
      .addItem('Get English PROD ', 'getEnglishAchievementsProd')
      .addItem('Get Polish PROD ', 'getPolishAchievementsProd')
      .addItem('Get German PROD ', 'getGermanAchievementsProd')
      .addItem('Get Spanish PROD ', 'getSpanishAchievementsProd')
      .addItem('Get Italian PROD ', 'getItalianAchievementsProd')
      .addItem('Get French PROD ', 'getFrenchAchievementsProd')
      .addItem('Get Russian PROD ', 'getRussianAchievementsProd')
      .addItem('Get Portugese PROD ', 'getPortugeseAchievementsProd')
      .addItem('Get Japanese PROD ', 'getJapaneseAchievementsProd')
      .addItem('Get Keys PROD ', 'getKeysAchievementsMenuBtnProd'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Check')
      .addItem('Check Achievements (all languague)', 'validateAllAchievements')
      .addItem('Check English', 'validateEnglish_Achievements')
      .addItem('Check Polish', 'validatePolish_Achievements')
      .addItem('Check German', 'validateGerman_Achievements')
      .addItem('Check Spanish', 'validateSpanish_Achievements')
      .addItem('Check Italian', 'validateItalian_Achievements')
      .addItem('Check French', 'validateFrench_Achievements')
      .addItem('Check Russian', 'validateRussian_Achievements')
      .addItem('Check Portugese', 'validatePortugese_Achievements')
      .addItem('Check Japanese', 'validateJapanese_Achievements'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Clear')
      .addItem('Clear Achievements (all languague)', 'clearAllAchievements')
      .addItem('Clear English', 'clearEnglisAchievements')
      .addItem('Clear Polish', 'clearPolishAchievements')
      .addItem('Clear German', 'clearGermanAchievements')
      .addItem('Clear Spanish', 'clearSpanishAchievements')
      .addItem('Clear Italian', 'clearItalianAchievements')
      .addItem('Clear French', 'clearFrenchAchievements')
      .addItem('Clear Russian', 'clearRussianAchievements')
      .addItem('Clear Portugese', 'clearPortugeseAchievements')
      .addItem('Clear Japanese', 'clearJapaneseAchievements')
      .addItem('Clear Keys', 'clearKeysAchievements'))
      .addToUi();
  
  ui.createMenu('Hints')
      .addSubMenu(ui.createMenu('Get DEV')
      .addItem('Get Hints DEV (all languague)', 'getAllHintsDev')
      .addItem('Get English DEV', 'getEnglishHintsDev')
      .addItem('Get Polish DEV', 'getPolishHintsDev')
      .addItem('Get German DEV', 'getGermanHintsDev')
      .addItem('Get Spanish DEV', 'getSpanishHintsDev')
      .addItem('Get Italian DEV', 'getItalianHintsDev')
      .addItem('Get French DEV', 'getFrenchHintsDev')
      .addItem('Get Russian DEV', 'getRussianHintsDev')
      .addItem('Get Portugese DEV', 'getPortugeseHintsDev')
      .addItem('Get Japanese DEV', 'getJapaneseHintsDev')
      .addItem('Get Keys DEV', 'getKeysHintsMenuBtnDev'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Get PROD')
      .addItem('Get Hints PROD (all languague)', 'getAllHintsProd')
      .addItem('Get English PROD', 'getEnglishHintsProd')
      .addItem('Get Polish PROD', 'getPolishHintsProd')
      .addItem('Get German PROD', 'getGermanHintsProd')
      .addItem('Get Spanish PROD', 'getSpanishHintsProd')
      .addItem('Get Italian PROD', 'getItalianHintsProd')
      .addItem('Get French PROD', 'getFrenchHintsProd')
      .addItem('Get Russian PROD', 'getRussianHintsProd')
      .addItem('Get Portugese PROD', 'getPortugeseHintsProd')
      .addItem('Get Japanese DPRODEV', 'getJapaneseHintsProd')
      .addItem('Get Keys PROD', 'getKeysHintsMenuBtnProd'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Check')
      .addItem('Check Hints (all languague)', 'validateAllHints')
      .addItem('Check English', 'validateEnglish_Hints')
      .addItem('Check Polish', 'validatePolish_Hints')
      .addItem('Check German', 'validateGerman_Hints')
      .addItem('Check Spanish', 'validateSpanish_Hints')
      .addItem('Check Italian', 'validateItalian_Hints')
      .addItem('Check French', 'validateFrench_Hints')
      .addItem('Check Russian', 'validateRussian_Hints')
      .addItem('Check Portugese', 'validatePortugese_Hints')
      .addItem('Check Japanese', 'validateJapanese_Hints'))
      .addSeparator()
  
      .addSubMenu(ui.createMenu('Clear')
      .addItem('Clear Hints (all languague)', 'clearAllHints')
      .addItem('Clear English', 'clearEnglisHints')
      .addItem('Clear Polish', 'clearPolishHints')
      .addItem('Clear German', 'clearGermanHints')
      .addItem('Clear Spanish', 'clearSpanishHints')
      .addItem('Clear Italian', 'clearItalianHints')
      .addItem('Clear French', 'clearFrenchHints')
      .addItem('Clear Russian', 'clearRussianHints')
      .addItem('Clear Portugese', 'clearPortugeseHints')
      .addItem('Clear Japanese', 'clearJapaneseHints')
      .addItem('Clear Keys', 'clearKeysHints'))
      .addToUi();
  }
  