export const SURVEY_VERSION="2026-10-plain-v1";
export const LIKERT=[
  "Strongly Agree",
  "Somewhat Agree",
  "Neutral / Undecided",
  "Somewhat Disagree",
  "Strongly Disagree"
];
export type Question={key:string,title:string,text:string,options:string[],help?:string,original?:string};
export const demographics:Question[]=[
  {
    "key": "demo_age",
    "title": "Age",
    "text": "How old are you?",
    "options": [
      "18–24",
      "25–34",
      "35–49",
      "50–64",
      "65+"
    ]
  },
  {
    "key": "demo_gender",
    "title": "Gender",
    "text": "How do you describe your gender?",
    "options": [
      "Male",
      "Female",
      "Prefer not to say"
    ]
  },
  {
    "key": "demo_education",
    "title": "Education",
    "text": "What is the highest level of education you have completed?",
    "options": [
      "High School / GED",
      "Some College / Associate Degree",
      "Bachelor’s Degree",
      "Graduate / Professional Degree"
    ]
  },
  {
    "key": "demo_income",
    "title": "Household income",
    "text": "What is your household’s annual income?",
    "options": [
      "Under $35,000",
      "$35,000–$69,999",
      "$70,000–$109,999",
      "$110,000–$149,999",
      "$150,000+"
    ]
  },
  {
    "key": "demo_ideology",
    "title": "Political outlook",
    "text": "Which best describes your political or economic outlook?",
    "options": [
      "Strongly Conservative",
      "Lean Conservative",
      "Independent / Centrist",
      "Lean Liberal",
      "Strongly Liberal",
      "Libertarian / Free Market",
      "Non-affiliated"
    ]
  },
  {
    "key": "demo_employment",
    "title": "Employment",
    "text": "Which best describes your main employment situation?",
    "options": [
      "Private Sector Employee",
      "Small Business Owner / Self-Employed",
      "Public Sector / Government / Education",
      "Student",
      "Retired",
      "Not Currently Employed"
    ]
  },
  {
    "key": "demo_news",
    "title": "News source",
    "text": "Where do you mainly get news and information?",
    "options": [
      "Broadcast / Local News",
      "Cable Television",
      "Digital Newspapers / Academic Journals",
      "Social Media / Online Forums",
      "Podcasts / Independent Media"
    ]
  },
  {
    "key": "demo_community",
    "title": "Community",
    "text": "Which best describes where you live?",
    "options": [
      "Urban",
      "Suburban",
      "Rural"
    ]
  }
];
export const topics:Question[]=[
  {
    "key": "q01_bailout_equity",
    "title": "Public ownership during bailouts",
    "text": "Corporations receiving taxpayer-funded financial rescues or disaster bailouts should give the U.S. Treasury ownership shares without voting rights until all assistance is repaid.",
    "help": "Ownership shares give a stake in a company. Non-voting shares do not give a vote in company decisions. The U.S. Treasury handles federal government finances.",
    "original": "Corporations receiving taxpayer-funded financial rescues or disaster bailouts should be required to issue non-voting equity shares to the U.S. Treasury until all assistance is repaid.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q02_clawbacks",
    "title": "Repayment of executive bonuses",
    "text": "When a federally insured financial institution or critical carrier receives emergency government funding to meet immediate financial needs, federal regulators should require executives to repay performance bonuses from the preceding three fiscal years.",
    "help": "A clawback means repaying money already received. A fiscal year is a yearly accounting period. The statement refers to a carrier considered essential.",
    "original": "When a federally insured financial institution or critical carrier receives emergency government liquidity, federal regulators should mandate clawbacks on executive performance bonuses from the preceding three fiscal years.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q03_board_oversight",
    "title": "Public oversight during rescues",
    "text": "When the federal government keeps a private company operating because it cannot pay its debts, the company’s board should temporarily include public watchdogs without voting rights to monitor how the funds are used.",
    "help": "A board oversees a company. These public watchdogs, called ombudsmen, would monitor rescue funds without voting on board decisions.",
    "original": "Federal intervention to keep insolvent private firms operating should require temporary, non-voting public ombudsman seats on corporate boards to oversee fund utilization.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q04_tax_abatements",
    "title": "Selected corporate tax breaks",
    "text": "State and local tax breaks offered to selected multinational corporations put local small businesses at an unfair economic disadvantage.",
    "help": "A tax break reduces or removes a tax obligation. A multinational corporation operates in more than one country.",
    "original": "Targeted state and local tax abatements offered to select multinational corporations create unfair economic disadvantages for local small businesses.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q05_buyback_restrictions",
    "title": "Stock buybacks after federal support",
    "text": "Private corporations that accept direct federal subsidies or grants for commercial research should be banned from buying back their own stock for five years.",
    "help": "A subsidy is government financial support. A stock buyback happens when a company purchases its own shares.",
    "original": "Private corporations that accept direct federal subsidies or commercial research grants should be barred from executing corporate stock buybacks for a mandatory 5-year period.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q06_ag_subsidies",
    "title": "Farm subsidy priorities",
    "text": "Federal farm subsidies should give priority to farms owned and operated by families over large agricultural business groups.",
    "help": "Farm subsidies are government financial support for agriculture.",
    "original": "Federal agricultural subsidy programs should prioritize family-owned and operated farms rather than large commercial agribusiness conglomerates.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q07_monopoly_divestiture",
    "title": "Competition in essential markets",
    "text": "When one private company or organization controls more than 60% of an essential market, competition regulators should require it to sell parts of its business to restore competition.",
    "help": "Selling parts of a business is called divestiture. Market examples include meat processing, digital advertising exchanges, and ticketing.",
    "original": "When a single private entity controls over 60% of an essential market sector (e.g., meat processing, digital ad exchanges, ticketing), antitrust regulators should enforce structural divestiture to restore market competition.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q08_platform_neutrality",
    "title": "Marketplace search results",
    "text": "Dominant online marketplaces should be banned from placing their own-brand products ahead of products from independent sellers in unpaid search results.",
    "help": "Own-brand products carry the marketplace’s own brand. Unpaid search results are separate from paid advertisements.",
    "original": "Dominant online marketplace platforms should be prohibited from prioritizing their own private-label products over independent third-party merchants in organic search results.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q09_pharma_consolidation",
    "title": "Medical mergers and prices",
    "text": "Mergers and other combinations of drug companies and hospital networks artificially raise the medical costs consumers pay for everyday care.",
    "help": "A merger combines companies. Consolidation brings businesses under fewer owners. This statement asks for your view on their effect on prices.",
    "original": "Corporate consolidation and mergers in the pharmaceutical and hospital network sectors contribute to artificial price inflation for everyday consumer medical costs.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q10_revolving_door",
    "title": "Jobs after regulatory service",
    "text": "Senior federal regulatory officials should be required to wait five years before taking paid lobbying or executive jobs in industries they directly supervised.",
    "help": "Regulatory agencies oversee industries. Lobbying means trying to influence government decisions. Examples include the FDA, SEC, and Department of Defense.",
    "original": "Senior officials from federal regulatory agencies (e.g., FDA, SEC, DOD) should be subject to a strict 5-year moratorium before accepting paid lobbying or executive roles in industries they directly supervised.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q11_contractor_donations",
    "title": "Contractors and political contributions",
    "text": "Corporations with major federal purchasing contracts awarded without competition should be banned from contributing to political action committees connected to congressional defense and purchasing committees.",
    "help": "Procurement means government purchasing. A political action committee, or PAC, collects and spends money to influence elections.",
    "original": "Corporations holding major non-competitive federal procurement contracts should be prohibited from contributing to political action committees tied to congressional defense and procurement committees.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q12_agency_funding",
    "title": "Funding government oversight",
    "text": "To prevent industries from controlling the agencies that oversee them, key oversight agencies should receive all their funding directly from Congress and none from industry user fees.",
    "help": "Regulatory capture means an agency serves the interests of the industry it oversees. User fees are charges paid by regulated businesses.",
    "original": "To prevent regulatory capture, key oversight bodies should be funded exclusively through direct congressional appropriations rather than industry user-fees.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q13_nih_pricing",
    "title": "Prices for publicly researched drugs",
    "text": "Prescription drugs developed through taxpayer-funded basic research, such as NIH grants, should have U.S. consumer prices capped at the median price charged in comparable developed countries.",
    "help": "Basic research builds scientific knowledge. NIH is the National Institutes of Health. The median is the middle price when prices are ordered from lowest to highest.",
    "original": "Prescription drugs developed through taxpayer-funded basic research (such as NIH grants) should have domestic consumer prices capped at the median price charged in peer developed nations.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q14_compulsory_licensing",
    "title": "Medical patents during emergencies",
    "text": "During a national emergency, if a patent holder cannot produce enough of a critical medical treatment for the United States, the government should require it to license the treatment for production in the United States.",
    "help": "A patent gives exclusive rights to an invention for a limited time. Compulsory licensing lets others use it without the patent holder’s voluntary agreement.",
    "original": "Patent monopolies on critical medical treatments should be subject to compulsory domestic licensing if the patent holder cannot produce an adequate domestic supply during a national emergency.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q15_cost_plus_audits",
    "title": "Audits of defense contracts",
    "text": "Defense contractors with federal cost-plus contracts should face independent, detailed financial audits and mandatory financial penalties for costs that exceed the approved amount without authorization.",
    "help": "A cost-plus contract pays allowable costs plus an additional fee. An audit examines financial records. A cost overrun means spending above the approved amount.",
    "original": "Federal defense contractors operating under 'cost-plus' contracts should be subject to independent forensic audits with mandatory financial penalties for unapproved cost overruns.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q16_right_to_repair",
    "title": "Repair information for public equipment",
    "text": "The federal government should require defense and infrastructure contractors to provide complete repair diagrams and diagnostic software so equipment can be serviced without depending on the original supplier’s proprietary tools or information.",
    "help": "Diagnostic software finds equipment problems. Vendor lock-in means dependence on a particular supplier.",
    "original": "The federal government should require defense and infrastructure contractors to deliver full repair schematics and diagnostic software so equipment can be serviced without proprietary vendor lock-in.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q17_noncompetes",
    "title": "Non-compete rules for workers",
    "text": "Employer-required non-compete agreements for wage-earning workers who are not executives unfairly interfere with free-market competition for labor.",
    "help": "A non-compete agreement restricts a worker from taking certain competing jobs or starting a competing business.",
    "original": "Employer-mandated non-compete clauses for non-executive wage earners unfairly distort free-market labor competition.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q18_subsidy_parity",
    "title": "Public reporting of pay ratios",
    "text": "Companies receiving federal grants for regional development should be required to publicly report the ratio of executive compensation to median employee compensation.",
    "help": "Compensation includes pay and other forms of payment. The median is the middle amount when employee compensation is ordered from lowest to highest. A ratio compares the two amounts.",
    "original": "Companies receiving federal regional development grants should be required to publicly report executive-to-median employee compensation ratios.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q19_public_utilities",
    "title": "Local oversight of utilities",
    "text": "Essential utility infrastructure, such as municipal water treatment systems and electric grids, should remain under local government oversight instead of long-term agreements giving private companies the right to operate it.",
    "help": "Municipal means belonging to a city or town. A private concession agreement gives a private company operating rights.",
    "original": "Critical public utility infrastructure (such as municipal water treatment and electric grids) should remain under municipal public oversight rather than long-term private concession agreements.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  },
  {
    "key": "q20_toll_monopolies",
    "title": "Ending tolls after construction debt",
    "text": "Toll facilities built using public debt or taxpayer subsidies should become toll-free once the original construction bonds have been fully paid off.",
    "help": "A toll is a charge to use a facility. Construction bonds are debt used to finance construction. This statement refers to the original construction bonds.",
    "original": "Toll facilities constructed using public debt or taxpayer subsidies should transition to toll-free operations once original capital construction bonds are fully retired.",
    "options": [
      "Strongly Agree",
      "Somewhat Agree",
      "Neutral / Undecided",
      "Somewhat Disagree",
      "Strongly Disagree"
    ]
  }
];
export function validateAnswers(value:unknown,questions:Question[]):Record<string,number>{
 if(!value||typeof value!=="object"||Array.isArray(value))throw new Error("Please answer every question.");
 const v=value as Record<string,unknown>;
 if(Object.keys(v).length!==questions.length)throw new Error("Please answer every question.");
 const result:Record<string,number>={};
 for(const q of questions){const x=v[q.key];if(!Number.isInteger(x)||typeof x!=="number"||x<0||x>=q.options.length)throw new Error("Please choose one answer for every question.");result[q.key]=x;}
 return result;
}
