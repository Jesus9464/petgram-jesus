/*global describe, it,cy*/
describe("Petgram", () => {
  it("Para ver si la app funciona", function () {
    cy.visit("/");
  });

  it("navegamos a una categoria y vemos fotos", function () {
    cy.visit("/pet/1");
    cy.get("article");
  });
});
