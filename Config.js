// Sheet Names:

const SHEET_LEADS = "Leads";

// Allowed Stages:

const STAGES = [

  "NEW",
  "CONTACTED",
  "QUALIFIED",
  "PROPOSAL_SENT",
  "NEGOTIATION",
  "WON",
  "LOST",
  "DISQUALIFIED",
  "NOT_INTERESTED"

];

// Column Indexes

const COL_LEAD_ID = 0;
const COL_CREATED_AT = 1;
const COL_NAME = 2;
const COL_COMPANY = 3;
const COL_EMAIL = 4;
const COL_PHONE = 5;
const COL_SERVICE = 6;
const COL_BUDGET = 7;
const COL_SOURCE = 8;
const COL_STAGE = 9;
const COL_OWNER = 10;
const COL_NEXT_FOLLOWUP = 11;
const COL_LAST_ACTIVITY = 12;
const COL_NOTES = 13;


// TEAM SHEET
const SHEET_TEAM = "Team";

// COLUMN INDEXES
const COL_TEAM_NAME = 0;
const COL_TEAM_EMAIL = 1;
const COL_TEAM_SPECIALIZATION = 2;
const COL_TEAM_STATUS = 3;
const COL_TEAM_ACTIVE_LEADS = 4;


// FOLLOW-UP SHEET

const SHEET_FOLLOWUPS = "FollowUps";

// COLUMN INDEXES

const COL_FU_ID = 0;
const COL_FU_LEAD_ID = 1;
const COL_FU_DUE_DATE = 2;
const COL_FU_TYPE = 3;
const COL_FU_STATUS = 4;
const COL_FU_OWNER = 5;


// --- EMAIL TEMPLATES SHEET ---

const SHEET_EMAIL_TEMPLATES = "EmailTemplates";
const COL_TEMPLATE_NAME = 0;
const COL_TEMPLATE_SUBJECT = 1;
const COL_TEMPLATE_BODY = 2;


// --- DOCUMENT TEMPLATES ---
const TEMPLATE_PROPOSAL_ID = "PASTE_YOUR_DOCUMENT_ID_HERE";

// --- PROPOSALS SHEET ---
const SHEET_PROPOSALS = "Proposals";
const COL_PROP_ID = 0;           // A: Proposal ID
const COL_PROP_LEAD_ID = 1;      // B: Lead ID
const COL_PROP_DATE = 2;         // C: Date Generated
const COL_PROP_FILE_URL = 3;     // D: Google Drive URL of the PDF
const COL_PROP_STATUS = 4;       // E: DRAFT, SENT, APPROVED





































































