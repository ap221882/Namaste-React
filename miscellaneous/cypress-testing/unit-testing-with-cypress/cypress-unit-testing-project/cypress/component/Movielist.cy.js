import MovieList from "./components/MovieList";

describe("MovieList", () => {
  beforeEach(() => {
    cy.mount(<Movielist />);
  });

  it("The List of movies appends", () => {
    cy.get("[data-cy=empty]").contains("No movies here");
    const formInput = cy.get("form input");
    formInput.should("have.value", "");
    formInput.type("Monster Inc.").should("have.value", "Monster Inc.");
    cy.get("form button").click();
    formInput.clear();
    formInput.type("Circle of eight").should("have.value", "Circle of eight");
    cy.get("form button").click();
    cy.get("[data-cy=movie-list]").children().should("have.length", 2);
  });

  it("uncheck movie", () => {
    const lastListitem = cy.get(
      "[data-cy=movie-list]:nth-child(1) li:last-child"
    );
    lastListitem.click();
    lastListitem.should("have.class", "strike");
    cy.get("[data-cy=clear-movie]").click();
    cy.get("[data-cy=movie-list]").children().should("have.length", 1);
    cy.get("[data-cy=clear-movie]").click();
    cy.get("[data-cy=movie-list]").children().should("have.length", 1);
  });
});
