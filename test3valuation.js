describe("Test 3 Evaluation - Chevrolet", function(){
    it("Buy an item", function(){
        // Ingresamos al sitio
        cy.visit("https://chevrorefacciones.mx/")

        // Iniciamos sesión para poder comprar
        .get("a").contains("Ingresa").click()
        .url().should("eq", "https://chevrorefacciones.mx/ingresar")    // Acceso a la página para Ingresar
        .get('[href="/auth/google?redirect=/"]').click()
        .get("div.UXurCe").click()
        .get("#identifierId").type("edsonmorenoruiz@gmail.com")
        .get("input[type=password]").type("Nosdemore1")
        //.get(":nth-child(2) > .form-control").type("lechuga")
        //.get(":nth-child(3) > .form-control").type("user123")
        .get("button").contains("Iniciar Sesión").click()
        .url().should("eq", "https://chevrorefacciones.mx/")    // Logeo exitoso

        // Buscamos el producto
        .get(".inputSearch").type("ventana")
        .get("#btnBus").click()
        .get('.item').should('exist') // Validamos de que hayan resultados del producto que buscamos

        // Seleccionamos el producto
        .get(":nth-child(2) > .item > :nth-child(1) > .item-image > img").click()

        // Añadimos al carrito
        .get("button").contains("Añadir producto").click()
        .get("a.header-cart > i.fa-shopping-bag").click()
        .wait(2000)

        // Observamos el carrito
        .get("a").contains("Ver carrito").click()
        .url().should("eq", "https://chevrorefacciones.mx/compra/carrito")
        .get("a").contains("Pagar").click()

        // Entramos a PayPal
    })
})