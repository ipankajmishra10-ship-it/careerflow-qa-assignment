
# Careerflow QA Automation Assignment

This project contains UI automation testing using Playwright with JavaScript and Page Object Model (POM) architecture.

## Tech Stack

- Playwright
- JavaScript
- Node.js
- GitHub Actions

---

# Automated Flow

The automated end-to-end flow includes:

1. User Login
2. Add Product to Cart
3. Checkout Completion

The flow validates critical business functionality with meaningful assertions at every step.

---

# Project Structure

```bash
careerflow-playwright-js/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── tests/
│   └── purchase-flow.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

# Installation

Run the following commands:

```bash
npm install
npx playwright install
npx playwright test
```

---

# Run Tests

```bash
npx playwright test
```

---

# Run Tests in Headed Mode

```bash
npx playwright test --headed
```

---

# Generate HTML Report

```bash
npx playwright show-report
```

---

# GitHub Actions

This project includes a GitHub Actions CI pipeline that automatically runs Playwright tests on:
- Push
- Pull Request

Workflow file:

```bash
.github/workflows/playwright.yml
```

---

# Assumptions

- Public demo application used for stability
- Internet connection required
- Static test credentials available

---

# Author

QA Automation Assignment Submission