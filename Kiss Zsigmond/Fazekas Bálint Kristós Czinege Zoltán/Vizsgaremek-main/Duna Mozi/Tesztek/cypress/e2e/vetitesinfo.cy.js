/// <reference types="cypress"/>
describe('template spec', () => {
  beforeEach('Belépés a login oldalra', () => {
    cy.visit('http://127.0.0.1:5500/Duna%20Mozi/Frontend/HTML/bejel.html')
  })
  const joAdminEmail = 'havlagb1@gmail.com'
  const joAdminjelszo = "Admin"

  const tesztdátum='2024-10-15'
  const rossztesztdátum='2023-10-15'
  const tesztido='10:00'
  const tesztido2='11:00'
  const tesztterem='4'
  const rossztesztterem='6'
  const tesztvetitettfilm='Gyalog galopp'
  it('Vetités regisztráció teszt jó adatokkal', () => {
    cy.get('input[type=email]').type(joAdminEmail)
    cy.get('input[type=password]').type(joAdminjelszo)
    cy.get('button').contains('Bejelentkezés').click()
    cy.wait(2000)
    cy.get('button').contains('Új vetítés').click()
    cy.wait(2000)
    cy.get('input[type=date]').type(tesztdátum)
    cy.get('input[type=time]').type(tesztido)
    cy.get('input[type=number]').type(tesztterem)
    cy.get('select').select(tesztvetitettfilm)
    cy.wait(1000)
    cy.get('button').contains('Vetités regisztrálása').click()
    cy.wait(1000)
    cy.on('window:alert', (str) => { expect(str).to.equal('Sikeres vetites regisztrálása') })
  })
  it('Vetités modósítása teszt jó adatokkal', () => {
    cy.wait(5000)
    cy.get('input[type=email]').type(joAdminEmail)
    cy.get('input[type=password]').type(joAdminjelszo)
    cy.get('button').contains('Bejelentkezés').click()
    cy.wait(2000)
    cy.get('button').contains('Vetítés módosítása').click()
    cy.get('select').eq(0).select(tesztvetitettfilm)
    cy.get('input[type=date]').type(tesztdátum)
    cy.get('input[type=time]').type(tesztido2)
    cy.get('select').eq(1).select(tesztvetitettfilm)
    cy.get('button').contains('Vetités módosítása').click()
    cy.on('window:alert', (str) => { expect(str).to.equal('Sikeres vetités modósítás') })
  })
  it('Vetités regisztráció teszt hiányos adatokkal (nincs terem)', () => {
    cy.get('input[type=email]').type(joAdminEmail)
    cy.get('input[type=password]').type(joAdminjelszo)
    cy.get('button').contains('Bejelentkezés').click()
    cy.wait(2000)
    cy.get('button').contains('Új vetítés').click()
    cy.get('input[type=date]').type(tesztdátum)
    cy.get('input[type=time]').type(tesztido)
    cy.get('select').select(tesztvetitettfilm)
    cy.get('button').contains('Vetités regisztrálása').click()
    cy.on('window:alert', (str) => { expect(str).to.equal('Töltsön ki minden mezőt!') })
  })
  it('Vetités regisztráció teszt rossz dátum', () => {
    cy.wait(5000)
    cy.get('input[type=email]').type(joAdminEmail)
    cy.get('input[type=password]').type(joAdminjelszo)
    cy.get('button').contains('Bejelentkezés').click()
    cy.wait(2000)
    cy.get('button').contains('Új vetítés').click()
    cy.get('input[type=date]').type(rossztesztdátum)
    cy.get('input[type=time]').type(tesztido)
    cy.get('input[type=number]').type(tesztterem)
    cy.get('select').select(tesztvetitettfilm)
    cy.get('button').contains('Vetités regisztrálása').click()
    cy.on('window:alert', (str) => { expect(str).to.equal('Nem jövőbeli dátumot adott meg!') })
  })
  it('Vetítés modósítása teszt rossz dátum', () => {
    cy.wait(5000)
    cy.get('input[type=email]').type(joAdminEmail)
    cy.get('input[type=password]').type(joAdminjelszo)
    cy.get('button').contains('Bejelentkezés').click()
    cy.wait(2000)
    cy.get('button').contains('Vetítés módosítása').click()
    cy.get('select').eq(0).select(tesztvetitettfilm)
    cy.get('input[type=date]').type(rossztesztdátum)
    cy.get('input[type=time]').type(tesztido)
    cy.get('select').eq(1).select(tesztvetitettfilm)
    cy.get('button').contains('Vetités módosítása').click()
    cy.on('window:alert', (str) => { expect(str).to.equal('Nem jövőbeli dátumot adott meg!') })
  })
  it('Vetítés regisztráció teszt rossz terem', () => {
    cy.wait(5000)
    cy.get('input[type=email]').type(joAdminEmail)
    cy.get('input[type=password]').type(joAdminjelszo)
    cy.get('button').contains('Bejelentkezés').click()
    cy.wait(2000)
    cy.get('button').contains('Új vetítés').click()
    cy.get('input[type=date]').type(tesztdátum)
    cy.get('input[type=time]').type(tesztido)
    cy.get('input[type=number]').type(rossztesztterem)
    cy.get('select').select(tesztvetitettfilm)
    cy.wait(2000)
    cy.get('button').contains('Vetités regisztrálása').click()
    cy.on('window:alert', (str) => { expect(str).to.equal('Nem létező terem!') })
  })
  it('Vetités törlése teszt jó adatokkal', () => {
    cy.wait(5000)
    cy.get('input[type=email]').type(joAdminEmail);
    cy.get('input[type=password]').type(joAdminjelszo);
    cy.get('button').contains('Bejelentkezés').click();
    cy.wait(2000)
    cy.get('button').contains('Vetítés módosítása').click()
    cy.get('select').eq(0).select(tesztvetitettfilm)
    cy.get('button').contains('Vetités törlése').click();
    cy.on('window:alert', (str) => { expect(str).to.equal('Sikeres vetités törlése') })
  })
})