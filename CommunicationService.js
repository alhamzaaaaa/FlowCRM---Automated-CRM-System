function sendTemplatedEmail(templateName, recipientEmail, dataObject) {

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const templateSheet = ss.getSheetByName(SHEET_EMAIL_TEMPLATES);

  if (!templateSheet) {
    Logger.log("Error: EmailTemplates sheet not found.");
    return;
  }

  const templatesData = templateSheet.getDataRange().getValues();


  let subjectTemplate = "";
  let bodyTemplate = "";

  for (let i = 1; i < templatesData.length; i++) {
    if (!templatesData[i]) continue;
    if (templatesData[i][COL_TEMPLATE_NAME] === templateName) {
      subjectTemplate = templatesData[i][COL_TEMPLATE_SUBJECT];
      bodyTemplate = templatesData[i][COL_TEMPLATE_BODY];
      break;
    }
  }

  if (!subjectTemplate || !bodyTemplate) {
    Logger.log("Error: Template Not Found - " + templateName);
    return;
  }

  let finalSubject = subjectTemplate;
  let finalBody = bodyTemplate;
  finalBody = finalBody.replace(/\\n/g, '\n');

  for (let key in dataObject) {
    const placeholder = "{{" + key + "}}";
    const value = dataObject[key] ? dataObject[key].toString() : "";

    finalSubject = finalSubject.split(placeholder).join(value);
    finalBody = finalBody.split(placeholder).join(value);

  }

  try {
    GmailApp.sendEmail(recipientEmail, finalSubject, finalBody);
    Logger.log("Templated email sent successfully to " + recipientEmail);

  } catch (e) {
    Logger.log("Failed to send email: " + e.toString());
  }
}











































