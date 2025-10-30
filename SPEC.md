# Money Distribution Calculator - Specification

## Overview
A minimalist financial planning tool that helps users distribute money across multiple accounts based on configurable percentages and fixed allocations.

## Core Features

### Visual Theme
- Dark mode interface throughout the application
- Minimalist design with clear visual hierarchy
- Accessible color contrast for readability
- Clean, distraction-free layout

### User Education
- Clear explanation of how the distribution works
- Step-by-step guidance on using the calculator
- Visual flow showing money movement from total to accounts
- Inline help text explaining each input purpose

### User Inputs
- User can input total amount of money to distribute
- User can specify fixed amount to transfer to personal savings
- User can set maintaining balance that stays in primary account
- User can configure percentage distribution across three categories
- All percentage inputs must total exactly 100%

### Distribution Accounts
- Personal: User's own personal savings account with fixed transfer amount
- SeaBank Needs: Essential expenses account with percentage-based allocation
- SeaBank Wants: Discretionary spending account with percentage-based allocation
- CIMB Savings: Long-term savings account with percentage-based allocation
- Maintaining Balance: Amount that remains in primary account (not transferred)

### Calculation Logic
- Deduct personal savings transfer from total first
- Deduct maintaining balance for primary account
- Distribute remaining amount across percentage-based accounts
- Validate that all money is accounted for with zero difference

### Display Results
- Show starting total amount
- Display individual allocations for each account
- Present total distributed amount
- Highlight any calculation discrepancies
- Format all amounts in Philippine Peso currency
- Visual indicators to show calculation flow

### Default Values
- Total amount defaults to 40000
- Personal transfer defaults to 20000
- Maintaining balance defaults to 1000
- Distribution percentages default to 50% needs, 30% wants, 20% savings

### UX Improvements
- Minimalist interface with no unnecessary elements
- Clear labeling and consistent terminology
- Logical grouping of related inputs
- Real-time calculation updates
- Visual feedback for validation states
- Helpful tooltips and descriptions where needed
