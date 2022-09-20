import { makeAutoObservable } from "mobx"

class FavoriteCountries {
  countries = ['Finland', 'Uruguay'];
  favorite = ['South Korea']
  notVisited = ['Kyrgyzstan']

  constructor() {
    makeAutoObservable(this)
  }

  addFavoriteCountry(country) {
    if (!this.countries.includes(country) && !this.favorite.includes(country) && !this.notVisited.includes(country)) {
      this.countries.push(country)
    }
  }

  addWantVIsitedCountry(country) {
    if (!this.countries.includes(country) && !this.favorite.includes(country) && !this.notVisited.includes(country)) {
      this.favorite.push(country)
    }
  }

  addNotVIsitedCountry(country) {
    if (!this.countries.includes(country) && !this.favorite.includes(country) && !this.notVisited.includes(country)) {
      this.notVisited.push(country)
    }
  }

  removeFavoriteCountry(country) {
    this.countries = this.countries.filter(c => c !== country)
  }

  removeVisitedCountry(country) {
    this.favorite = this.favorite.filter(c => c !== country)
  }

  removeNotWantCountry(country) {
    this.notVisited = this.notVisited.filter(c => c !== country)
  }
}

export default new FavoriteCountries;