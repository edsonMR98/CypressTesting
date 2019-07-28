describe('Practica Login', function() {
    it('Test case: Invalid email is expected', function(){
        cy.visit("http://automationpractice.com/index.php?controller=authentication")   // Abrimos el Sitio Web
        .get("#email").type("hola")
        .get("#passwd").type("hola")
        .get("#SubmitLogin").click()
        .get(".alert-danger").should("contain", "Invalid email address")
        .wait(2000)
    })
    it('Test case: Invalid password is expected', function(){
        cy.visit("http://automationpractice.com/index.php?controller=authentication")   // Abrimos el Sitio Web
        .get("#email").type("edsonraf@hotmail.com")
        .get("#passwd").type("fail")
        .get("#SubmitLogin").click()
        .get(".alert-danger").should("contain", "Invalid password")
        .wait(2000)
    })
    it('Test case: Acces is expected', function(){
        cy.visit("http://automationpractice.com/index.php?controller=authentication")   // Abrimos el Sitio Web
        .get("#email").type("edsonraf@hotmail.com")
        .get("#passwd").type("edson")
        .get("#SubmitLogin").click()
        .url().should("eq", "http://automationpractice.com/index.php?controller=my-account")
        .wait(2000)
    })
    it('Test case: Email required is expected', function(){
        cy.visit("http://automationpractice.com/index.php?controller=authentication")   // Abrimos el Sitio Web
        .get("#email").invoke("val", "")
        .get("#passwd").type("hola")
        .get("#SubmitLogin").click()
        .get(".alert-danger").should("contain", "An email address required")
        .wait(2000)
    })
    it('Test case: Password required is expected', function(){
        cy.visit("http://automationpractice.com/index.php?controller=authentication")   // Abrimos el Sitio Web
        .get("#email").type("edsonraf@hotmail.com")
        .get("#passwd").invoke("val", "")
        .get("#SubmitLogin").click()
        .get(".alert-danger").should("contain", "Password is required")
    })
})