function importPermission(){
    const l2LocId = SpreadsheetApp.openByUrl(`URL_HIDDEN_DUE_TO_SERCURITY_REASONS`).getId();
    fetchPermissions(l2LocId);
  }

  function fetchPermissions(sheetId) {
    const configID = 'ID_HIDDEN_DUE_TO_SERCURITY_REASONS';
    const url = `URL_HIDDEN_DUE_TO_SERCURITY_REASONS=${sheetId}`;
    const token = ScriptApp.getOAuthToken();
    const params = {
      method: 'post',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      muteHttpExceptions: true
    };
    const response = UrlFetchApp.fetch(url, params);
    const responseStatus = response.getResponseCode();
    informAboutAuthorize(responseStatus);
  }
  
  function informAboutAuthorize(responseStatus){
    const userEmail = Session.getActiveUser().getEmail();
    if(responseStatus == 200){
      SpreadsheetApp.getActive().toast(`${userEmail} authorized.`, 'SUCCESS 🔐', -1)
    }
    else {
      SpreadsheetApp.getActive().toast(`${userEmail} error code: ${responseStatus}`, ' ERROR ❌', -1)
    }
  }
  
  
  
  