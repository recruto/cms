import firebase from '../plugins/firebase'

const db = firebase.firestore()
const reducer = (accumulator, currentValue) => {
  accumulator[currentValue.id] = currentValue.data()
  return accumulator
}

export async function getCompanies() {
  const { docs } = await db.collection('companies').get()
  return docs.reduce(reducer, {})
}

export async function getPositionsByCompany(companyId) {
  const { docs } = await db
    .collection('companies')
    .doc(companyId)
    .collection('positions')
    .get()

  return docs.reduce(reducer, {})
}
