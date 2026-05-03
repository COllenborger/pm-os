---
name: support-case-triage
description: Analyze and categorize Comparezy support cases from a CSV export. Reads comparezy_support_cases.csv from Google Drive, classifies each case as a customer misunderstanding, system bug, or feature enhancement, creates a Google Doc with the breakdown organized by category, generates JIRA user story descriptions for bugs and enhancements, and sends a Slack DM when complete. Use this skill whenever you need to triage support cases, identify patterns in customer issues, or extract actionable bugs and feature requests from raw support feedback. Trigger on phrases like "triage support cases", "analyze my support tickets", "categorize support issues", or "process support cases".
---

## Overview

This skill automates the triage of Comparezy support cases. Given a CSV export of support tickets from Google Drive, it:

1. **Analyzes each case** by reading the customer message
2. **Categorizes** into three buckets:
   - **Understanding Issues**: Customer misunderstand how the product works
   - **Bugs**: System not behaving as designed
   - **Enhancements**: Feature requests or missing functionality
3. **Creates a Google Doc** with:
   - Understanding issues + recommended responses to educate the customer
   - Enhancement requests + suggested enhancements
   - Bugs + suggested fixes
   - JIRA user story format for bugs and enhancements at the bottom
4. **Sends a Slack DM** with a link to the completed doc

## Prerequisites

- Google Drive API authenticated (one-time setup)
- Slack API authenticated (one-time setup) for sending DMs
- The support cases CSV must be named `comparezy_support_cases.csv` and present in your Google Drive

## How to Trigger

Ask Claude to "triage my support cases" or "analyze support cases from Google Drive". The skill will:
- Search Google Drive for `comparezy_support_cases.csv`
- Read the file
- Analyze each row using the customer message
- Create the output doc
- DM you the link

## Analysis Logic

### Understanding Issues
Customer doesn't grasp how the product works, misinterprets a feature, or has unrealistic expectations about functionality. Examples:
- "Which quote is best?" (product requires user decision)
- "Why can't I use with one quote?" (doesn't understand minimum quote requirement)
- "What does missing scope mean?" (doesn't understand the terminology)

**Output**: Short recommended response explaining the concept or pointing them to docs.

### Bugs
System is not behaving as designed. The functionality exists but something is broken. Examples:
- "Uploaded PDF and it says '0 quotes found'" (OCR failure)
- "Quote is $18,500 but app says $185,000" (parsing/calculation error)
- "Paid and comparison disappeared" (state management bug)

**Output**: Description of the suspected fix or root cause.

### Enhancements
Feature doesn't exist yet but customer is requesting it. Examples:
- "Can I share results with my husband?" (missing export/sharing feature)
- "Can I paste email quotes?" (currently only PDF support)
- "Why can't I use with one quote?" (product design constraint, but could be enhanced)

**Output**: Description of what should be built.

## JIRA User Story Format

At the bottom of the document, write user stories **only for bugs and enhancements** (not understanding issues):

```
Bug: [Title]
As a [user persona], I need [capability] so that I can [outcome]

Enhancement: [Title]
As a [user persona], I need [capability] so that I can [outcome]
```

Example:
```
Bug: OCR fails on multi-page PDFs
As a homeowner, I need the OCR parser to handle multi-page PDF uploads without failing so that I can compare all my contractor quotes

Enhancement: Share comparison report
As a homeowner, I need to export or share my comparison report with my spouse so that we can make the decision together
```

## Document Structure

The Google Doc output should follow this structure:

```
# Comparezy Support Case Triage — [Date]

## Understanding Issues (X cases)
[Case by case with recommended response]

## Enhancement Requests (X cases)
[Case by case with suggested enhancement]

## Bugs (X cases)
[Case by case with suggested fix]

## JIRA User Stories

### Bugs
[User story format, one per bug]

### Enhancements
[User story format, one per enhancement]
```

## Notes

- Ignore cases marked as "Closed" or "Investigating" unless they provide new insight
- Product Area field is provided for context but rely on the Customer Message for analysis
- If a case is ambiguous (could be multiple categories), err on the side of the category that's most actionable
- For understanding issues with hints of a real bug (e.g., "I don't understand X" but the explanation suggests the system failed), flag it as a bug
