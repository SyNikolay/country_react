import { makeAutoObservable } from "mobx"

class FavoriteCountries {
  countries = ['Finland', 'Uruguay'];
  visited = []

  constructor() {
    makeAutoObservable(this)
  }

  addFavoriteCountry(country) {
    if (!this.countries.includes(country)) {
      this.countries.push(country)
    }
  }

  removeFavoriteCountry(country) {
    console.log(1)
    this.countries = this.countries.filter(c => c !== country)
  }

  addVisitedCountry(country) {
    if (!this.countries.includes(country)) {
      this.countries.push(country)
    }
  }
  
}

export default new FavoriteCountries;