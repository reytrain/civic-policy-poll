export const SURVEY_VERSION="2026-10-plain-v1";
export const LIKERT=[
  "Strongly Agree",
  "Somewhat Agree",
  "Neutral / Undecided",
  "Somewhat Disagree",
  "Strongly Disagree"
];
export type Question={key:string,title:string,text:string,options:string[],help?:string,original?:string,displayOptions?:string[]};
export const demographics:Question[]=[
  {
    "key": "demo_age",
    "title": "Age",
    "text": "How old are you?",
    "help": "This survey is for people 18 or older.",
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
    ],
    "displayOptions": [
      "High school diploma or GED",
      "Some college or an associate (two-year) degree",
      "College degree (bachelor’s)",
      "Advanced degree (master’s, doctorate, or professional)"
    ],
    "help": "A GED is a high-school equivalency credential. Graduate degrees include master’s and doctoral degrees."
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
    ],
    "displayOptions": [
      "Strongly conservative",
      "Lean conservative",
      "Independent or politically in the middle",
      "Lean liberal",
      "Strongly liberal",
      "Libertarian / favors free markets",
      "No political affiliation"
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
    ],
    "displayOptions": [
      "Employee of a private business",
      "Small business owner or self-employed",
      "Government, public-sector, or education worker",
      "Student",
      "Retired",
      "Not currently employed"
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
    ],
    "displayOptions": [
      "Broadcast or local news",
      "Cable TV news",
      "Online newspapers or academic journals",
      "Social media or online discussion forums",
      "Podcasts or independent news outlets"
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
    ],
    "displayOptions": [
      "Urban / city",
      "Suburban / suburbs",
      "Rural / countryside"
    ]
  }
];
export const topics:Question[]=[
  {
    "key": "q01_bailout_equity",
    "title": "Public ownership during bailouts",
    "text": "Corporations rescued with taxpayer money, including disaster bailouts, should give the U.S. Treasury ownership shares until all the aid is repaid. These shares should not give the government a vote in company decisions.",
    "help": "Ownership shares give a stake in the company. The Treasury manages federal finances.",
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
    "text": "If a federally insured financial company or an essential carrier gets emergency government money to cover immediate financial needs, federal officials should make its executives pay back performance bonuses from the previous three financial years.",
    "help": "A financial year is a 12-month accounting period. A carrier provides transport or communications services; this statement refers to one considered essential.",
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
    "text": "If the federal government keeps a private company running because it cannot pay its debts, public watchdogs should temporarily join its board to check how the rescue money is used. They should not have voting rights.",
    "help": "A company’s board oversees how it is run.",
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
    "text": "If one private company or organization controls more than 60% of an essential market, competition regulators should make it sell parts of its business so other businesses can compete.",
    "help": "Examples include meat processing, online advertising exchanges, and ticket sales.",
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
    "text": "Companies with major federal purchasing contracts awarded without competition should not be allowed to donate to political action committees connected to congressional committees that handle defense and government purchasing.",
    "help": "A political action committee, or PAC, raises and spends money to influence elections.",
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
    "text": "To keep industries from controlling the key government agencies that oversee them, those agencies should get all their funding directly from Congress. None should come from fees paid by the businesses they oversee.",
    "help": "These agencies oversee business activity and enforce government rules.",
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
    "text": "For prescription drugs developed through taxpayer-funded basic research, U.S. consumer prices should be capped at the middle price charged in comparable developed countries.",
    "help": "Basic research builds scientific knowledge, such as research funded by NIH grants. The median is the middle price when prices are ordered from lowest to highest.",
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
    "text": "During a national emergency, if a patent owner cannot supply enough of a critical medical treatment for the U.S., the government should require it to license the treatment so others can make it in the U.S.",
    "help": "A patent gives exclusive rights to an invention. A license gives others permission to use it.",
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
    "text": "Defense contractors whose federal contracts pay approved costs plus an extra fee should have their financial records checked in detail by independent auditors. They should face mandatory financial penalties for spending more than approved without permission.",
    "help": "These are called cost-plus contracts.",
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
    "text": "The federal government should require defense and infrastructure contractors to provide all repair diagrams and software for finding equipment problems. This should let others service the equipment without depending on the original supplier’s private tools or information.",
    "help": "Infrastructure includes public systems such as roads and bridges.",
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
    "text": "Employers unfairly limit free-market competition for workers when they make wage-paid workers, other than executives, agree not to take competing jobs or start competing businesses.",
    "help": "This kind of job restriction is called a non-compete agreement.",
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
    "text": "Companies that get federal grants for regional development should publicly report the ratio of executive pay and benefits to those of the middle-paid employee.",
    "help": "A ratio compares two amounts. The median employee amount is the middle amount when employee pay and benefits are ordered from lowest to highest.",
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
