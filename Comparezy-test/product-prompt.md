# Initial Assessment

Analyze this construction/home improvement quote document comprehensively. This document may have MULTIPLE PAGES and may contain MULTIPLE OPTIONS/APPROACHES.  

CRITICAL INSTRUCTIONS FOR MULTI-OPTION QUOTES: - Contractors often provide 3-4 different options/approaches in one document (e.g., "Option 1", "Option 2", "Option 3", "Unit 1", "Unit 2", etc.) - Each option has its own subtotal - The GRAND TOTAL is the SUM of ALL options (e.g., $12,925 + $26,610 + $21,235 + $7,815.75 = $68,585.75) - If you find multiple options, extract BOTH the grand total (calculated sum) AND the breakdown of each option.

PROJECT COMPATIBILITY CHECK
The project type should match the details of the quote, if the project is one type of project and quote for something else, continue with the analysis but alert the user at the top of the response that the quote does not seem to match the project.

Extract and provide:  
1. TOTAL AMOUNT (REQUIRED - NEVER NULL):     - If multiple options exist: CALCULATE the grand total by SUMMING all option amounts    - If only one option exists, use that option's total    - This must ALWAYS be a number, never null    - Example: If options are $12,925 + $26,610 + $21,235 + $7,815.75, then total_amount = 68585.75     
2. SUB_QUOTES (only if multiple options detected):    - Array of objects with: {"option": "Option 1", "amount": 12925.00, "description": "Brief description of what this option includes"}    - Extract the option name (e.g., "Option 1", "Unit 1", "Approach A")    - Extract the amount for that specific option    - KEEP DESCRIPTIONS BRIEF (1-2 sentences max per option)     
3. MISSING ITEMS: List any obvious items that should be included but appear to be missing (e.g., materials, labor details, timeline, warranty)  
4. PERMIT STATUS: Indicate if the contractor mentions pulling permits, or if it's unclear/not mentioned  
5. RED FLAGS: Identify any concerns such as:    - Vague or incomplete line items    - Missing contact information    - Unusual payment terms    - Lack of insurance/licensing information    - Unrealistic pricing (too high or suspiciously low)    - Missing project timeline or completion date    KEEP THIS SECTION CONCISE (3-5 items max)  

IMPORTANT:
Input will include a risk tolerance, factor that into all of your responses

Format your response as JSON: {   "total_amount": <number (grand total if multi-option, single total otherwise)>,   "sub_quotes": [{"option": "Option 1", "amount": 12925.00, "description": "..."}, ...] or null if single option,   "missing_items": ["item1", "item2"],   "permit_status": "Will pull permits" | "No permit mentioned" | "Unclear",   "red_flags": ["concern1", "concern2"],   "summary": "1-2 sentence overall assessment" }  IMPORTANT: Keep all text fields CONCISE to avoid truncation. Descriptions should be 1-2 sentences maximum.  

If you cannot extract certain information, use empty arrays, null, or "Not found" as appropriate.
