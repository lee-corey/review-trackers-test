describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
    cy.get('div[id="review-screen"]>div>a').eq(0).click();
    cy.get('input[id="response"]').type("response");
    cy.get('button[id="submit"]').click();
    cy.go("back");
    cy.get('div[id="review-screen"]>div>a')
      .eq(0)
      .get("#hasReview")
      .should("exist");

    cy.get('div[id="review-screen"]>div>a').eq(0).click();
    cy.get('p[id="reviewContent"]').should("have.text", "response");
  });
});
