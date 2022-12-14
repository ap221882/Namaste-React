##### EMPTY TEST PASSES

##### Callback in test function is executed to find out whether test is passed or not

---

#### TYPES OF TESTS

1.  UNIT TESTS - tests one piece/module in isolation
2.  INTEGRATION TESTS - tests group of modules
3.  FUNCTIONAL TESTS - tests behaviour
4.  ACCEPTANCE/E2E TESTS - in real environment/ using selenium, cypress etc. and using browser

---

#### FUNCTIONAL TESTS VS UNIT TESTS

1.  UT- further from user interactivity, easy to findout point of failure, likely to break with refactoring
2.  FT- close to user interactivity, not easy debugging bcoz code may be different each time, less chance for breaking when refactoring

---

#### TEST DRIVEN DEVELOPMENT vs BEHAVIOUR DRIVEN DEVELOPMENT

- BDD is related when QAs, developers etc collaborate to test the product/feature
- TDD is related to developers only. We do TDD only but we test behaviour.
- Note: testing behaviour != BDD

---

#### WHICH QUERY TO USE?

- https://testing-library.com/docs/queries/about/#priority

-PRIORITY

1.  ACCESSIBLE QUERIES - getByRole > getByLabelText(forms) > getByPlaceholderText(inputs) > getByText(for non accessible elements, first choice, CRA App.test.js uses it) > getByDisplayValue(for filled in forms)
2.  SEMANTIC QUERIES - getByAltText(images) > getByTitle
3.  TEST IDS: getByTestId

---

#### ROLES

- https://www.w3.org/TR/wai-aria/#role_definitions -- 5.4
- We can Add role by role = "thisRole", or some elements have built in role
- - In App.test.js example we have getByRole(thisRole,{<options here>})
- - Ex: a has link, button has button

#### HOW TO CHECK WHAT PROPERTY FOR WHICH ASSERTION IN CASE OF DOM ELEMENTS?

https://github.com/testing-library/jest-dom
