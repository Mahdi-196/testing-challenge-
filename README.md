# 🔪 tested-tech-trivia — Cypress Test Suite

A full-stack MERN application where users can take a 10-question tech quiz and see their score at the end. This version adds **comprehensive Cypress testing** — including both **end-to-end (E2E)** and **component tests** — to ensure every part of the app works as expected.

---

## 🎥 Walkthrough Video

📺 **Watch it here:**  
[🔗 Link to Walkthrough Video](<https://drive.google.com/file/d/1SRHZfgMUW7cVw__fNAKVmJTWkbOhwlit/view?usp=sharing>)

This video shows:
- App running
- Cypress E2E test (`quiz.cy.js`) passing
- Cypress component test (`Quiz.cy.jsx`) passing

---

## 💪 Tech Stack

- **Frontend:** React (with Vite)
- **Backend:** Node.js / Express
- **Database:** MongoDB
- **Testing:** Cypress (E2E + Component)

---

## 📁 Folder Structure

```
.
├── client/                      # React frontend
│   └── src/components/Quiz.tsx
├── server/                      # Express backend
├── cypress/
│   ├── component/Quiz.cy.jsx    # Component tests
│   ├── e2e/quiz.cy.js           # End-to-end tests
│   ├── fixtures/questions.json  # Mock data
│   └── support/component-index.html
├── cypress.config.ts            # Cypress config
├── vite.config.ts               # Vite config for frontend + tests
└── README.md
```

---

## 🧪 How to Run Tests

### 1. Install dependencies

```bash
npm install
cd client && npm install
```

### 2. Start the app

```bash
# In one terminal
npm run start  # starts backend

# In another terminal
cd client
npm run dev    # starts frontend
```

---

### 3. Run E2E Test (End-to-End)

```bash
npx cypress run
```

This runs the full user flow using mocked API data.

---

### 4. Run Component Test

```bash
npx cypress open
```

Then:
- Choose **Component Testing**
- Select Chrome or Electron
- Click on `Quiz.cy.jsx`

---

## ✅ Features Tested

- Quiz start and navigation
- Question/answer rendering
- Score display at end
- Quiz restart flow
- Component behavior in isolation
- API responses mocked using fixtures

---

## 📌 Requirements Met

- ✅ Cypress installed/configured
- ✅ Component test created (`Quiz.cy.jsx`)
- ✅ E2E test created (`quiz.cy.js`)
- ✅ Fixture used (`questions.json`)
- ✅ All tests passing in video
- ✅ Clean file structure + commits
- ✅ Video linked in README

---

## 📄 License

MIT — do whatever you want.

---

## ✍️ Author

**Mahdi**  
