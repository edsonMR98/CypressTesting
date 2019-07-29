import faker from "faker"

// Creamos variables aleatorias con Faker
var emailFake = faker.internet.email();
var firstName = faker.name.firstName();
var lastName = faker.name.lastName();
var pwdFake = faker.internet.password();
var companyFake = faker.company.companyName();
var addressFake = faker.address.streetAddress();
var addressTwoFake = faker.address.secondaryAddress();
var cityFake = faker.address.city();
var cpFake = faker.address.zipCode();
var phoneFake = faker.phone.phoneNumberFormat();
var information = faker.lorem.words();


describe("Test with Faker", function(){
    it("Test Case", function(){
        cy.visit("http://automationpractice.com/index.php?controller=authentication")
        cy.get("#email_create").type(emailFake)
        cy.get("#SubmitCreate").click()
        // Validamos que entre a la siguiente pagina
        .url().should("eq", "http://automationpractice.com/index.php?controller=authentication#account-creation")
        .wait(1500)
        .get("#id_gender1").check()
        .get("#id_gender2").check()
        .get("#id_gender1").check()
        .get("#customer_firstname").type(firstName)
        .get("#customer_lastname").type(lastName)

        // Validamos que el input tenga un BG especifico
        .get('#customer_firstname').should('have.css', 'background-color', 'rgb(221, 249, 225)')
        // Validamos que el input tenga un BC especifico
        .get('#customer_firstname').should('have.css', 'border-color', 'rgb(70, 167, 78)')
        // Validamos que el input tenga un color especifico
        .get('#customer_firstname').should('have.css', 'color', 'rgb(53, 179, 63)')
        .get("#passwd").type(pwdFake)
        .get("#days").select("4")
        .get("#months").select("10")
        .get("#years").select("1990")
        .get("#newsletter").click()
        .get("#optin").click()
        .get("#newsletter").click()
        .get("#optin").click()
        //.get("#firstname").type(firstName)
        //.get("#lastname").type(lastName)
        .get("#company").type(companyFake)
        .get("#address1").type(addressFake)
        .get("#address2").type(addressTwoFake)
        .get("#city").type(cityFake)
        .get("#id_state").select("Arizona")
        .get("#postcode").type(cpFake)
        .get("#other").type(information)
        .get("#phone").type(phoneFake)
        .get("#phone_mobile").type(phoneFake)
        .get("#alias").clear()
        .get("#alias").type("My address")
        .get("#submitAccount").click()
        // Validamos que entre a la siguiente pagina, y que el usuario se ha creado
        .url().should("eq", "http://automationpractice.com/index.php?controller=my-account")
    })
})
