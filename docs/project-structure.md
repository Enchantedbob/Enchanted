# Enchanted Logic Website Structure

## Global Page Elements

### Common Components
- Two Action Buttons
  - Email Button (Bottom)
  - Chatbot Button (Bottom Right)
- Banner with Agency Art
- Hit Counter (Lower Left)
- Favicon (Left of Menu)
- Navigation Menu
  - Blog
  - What We Do
  - About Us
  - Pricing
- Footer Menu (Same as top + Remove Me link)

## Pages

### 1. Home Page
- Hero Section
- General Information Below Banner

### 2. Remove Me Page
- Email Address Field
- Phone Number Field

### 3. Informational Page
Slideshow with 6 Elements:
1. B2B Lead Generation
2. Custom Chatbot
3. Auto Blog/Newsletter/Social Media Generator
4. Client/Employee Onboarding
5. Office Process Automation
6. What Will Help You

### 4. Testimonials
Slideshow with 3 Elements:
1. Abacus
2. Chef Pedro
3. Clean Cut Lawn
4. Your Business Here (Benefits)

### 5. About Us
Two-Element Slideshow:
1. Robert Croley
2. Now Hiring

### 6. Pricing
Three Elements:
1. Hourly Billing
2. Contract Development
3. Maintenance Plans

### 7. Employee CRM Access
- Login System
- CRM Interface
  - View CRM Info
  - Add New Client
  - Modify Information
  - Communication History

## Database Structure

### Security Table (Superuser Only)
- First Name
- Last 4 SSN
- Username
- Password
- 2FA Connection

### Employee/Contractor Information (Superuser Only)
- First Name
- Last Name
- Title/Role
- Contact Information (3 Phone Numbers)
- Address Details
- Project Information
  - Performance
  - Amount Paid
  - Amount Billed

### CRM Table
- Business Information
  - Name
  - Customer Number
  - Business Connections
  - Description
  - NAICS Code
- Contact Details
  - Name
  - Title
  - Phone Numbers
  - Address
- Lead Information
  - Source
  - Status
- Service Details
  - Type
  - Description
- Financial Information
  - Total Value
  - Recurring Billing
- Communication Preferences
  - Preferred Methods
  - Do Not Contact Flags

### Invoicing Table
- Business Details
- Contact Information
- Billing Information
  - Frequency
  - Amount
  - Total
  - Overdue Status

### Task Management
- Task Details
  - Name
  - Dates (Start/Due)
  - Priority
  - Progress
  - Details
  - Assigned Personnel
- Task Lists
  - Daily View
  - Weekly View
  - Meeting Preparation Tasks

### Calendar Integration
- Outlook Calendar Integration
- Calendar Link System