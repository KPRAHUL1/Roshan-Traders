# Login System

This folder contains the login system for the Roshan Traders application, supporting two different authentication methods:

## Structure

```
Login/
├── LoginPage.jsx              # Main login page with type selector
├── components/
│   ├── SuperAdminLogin.jsx    # Gmail/Email authentication for Super Admin
│   └── UserLogin.jsx          # Mobile OTP authentication for Users
└── index.js                   # Export file
```

## Authentication Methods

### 1. Super Admin Login (`SuperAdminLogin.jsx`)
- **Method**: Gmail/Email authentication
- **Users**: Super Administrators
- **Features**:
  - Email and password login
  - Google OAuth integration (simulated)
  - Admin email validation
  - Professional UI with Google branding

### 2. User Login (`UserLogin.jsx`)
- **Method**: Mobile OTP authentication
- **Users**: Agents, Manufacturers, Contractors
- **Features**:
  - User type selection (Agent/Manufacturer/Contractor)
  - Mobile number input with +91 prefix
  - OTP verification system
  - Resend OTP functionality
  - Phone number and OTP validation

## Usage

The main `LoginPage.jsx` provides a tabbed interface where users can choose between:
- **Agents, Manufacturers & Contractors** (Mobile OTP)
- **Super Admin** (Gmail/Email)

## Authentication Flow

1. User selects login type
2. Appropriate form is rendered
3. User enters credentials
4. Authentication is handled by `lib/auth.js`
5. On success, user is redirected to dashboard
6. User data is stored in localStorage

## Mock Credentials

### Super Admin
- **Email**: `admin@roshantraders.com` or any `@gmail.com` email
- **Password**: Any password (for demo)

### Users
- **Mobile**: Any 10-digit number
- **OTP**: Any 6-digit number (for demo)

## Integration

The login system integrates with:
- `lib/auth.js` - Authentication logic
- `routes/AppRoutes.jsx` - Routing configuration
- `components/ui/Button.jsx` - UI components
