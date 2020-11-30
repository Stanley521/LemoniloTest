import { getData } from "./REST"

export const getSecurityQuestions = (cb) => {
  getData(`/api/staticData/securityQuestions`).then(function (response) {
    cb(response)
  })
    .catch(function (error) {
      __DEV__ && console.log(error)
    })
}

export const getSalutations = (cb) => {
  getData(`/api/staticData/doctorSalutations`).then(function (response) {
    cb(response)
  })
    .catch(function (error) {
      __DEV__ && console.log(error)
    })
}

export const getLanguages = (cb) => {
  getData(`/api/staticData/languages`).then(function (response) {
    cb(response)
  })
    .catch(function (error) {
      __DEV__ && console.log(error)
    })
}

export const getGenders = (cb) => {
  getData(`/api/staticData/genders`).then(function (response) {
    cb(response)
  })
    .catch(function (error) {
      __DEV__ && console.log(error)
    })
}

export const getFloorLevels = (cb) => {
  getData(`/api/staticData/floorLevels`).then(function (response) {
    cb(response)
  })
    .catch(function (error) {
      __DEV__ && console.log(error)
    })
}

export const getCountries = (input, cb) => {
  getData(`/api/staticData/countries?row=${input.row}&page=${input.page}`, input).then(function (response) {
    cb(response)
  })
    .catch(function (error) {
      __DEV__ && console.log(error)
    })
}

export const getClinicTypes = (cb) => {
  getData(`/api/staticData/clinicTypes`).then(function (response) {
    cb(response)
  })
    .catch(function (error) {
      __DEV__ && console.log(error)
    })
}

export const getDeclarations = (cb) => {
  getData(`/api/staticData/declarations`).then(function (response) {
    cb(response)
  })
    .catch(function (error) {
      __DEV__ && console.log(error)
    })
}

export const getVisitTypes = (cb) => {
  getData(`/api/CTGeneral/GetByParams?type=VISIT_TYPE`).then(function (response) {
    cb(response)
  })
    .catch(function (error) {
      __DEV__ && console.log(error)
    })
}

export const getCallCodeList = (cb) => {
  getData(`/api/Country?page=0&row=10000000`).then(function (response) {
    cb(response)
  })
    .catch(function (error) {
      __DEV__ && console.log(error)
    })
}

export const getRaces = (cb) => {
  getData(`/api/CTGeneral/GetByParams?type=race`).then(function (response) {
    cb(response)
  })
    .catch(function (error) {
      __DEV__ && console.log(error)
    })
}

export const getPublicHoliday = (input, cb) => {
  getData(`/api/publicHoliday?countryId=${input.country}`, input).then(function (response) {
    cb(response)
  })
    .catch(function (error) {
      __DEV__ && console.log(error)
    })
}