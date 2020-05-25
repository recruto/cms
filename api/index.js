import firebase from '../plugins/firebase'

const db = firebase.firestore()
const reducer = (accumulator, currentValue) => {
  accumulator[currentValue.id] = currentValue.data()
  return accumulator
}

async function getAllDocumentsInACollection(collection) {
  const { docs } = await db.collection(collection).get()
  return docs.reduce(reducer, {})
}

export async function getCompanies() {
  return await getAllDocumentsInACollection('companies')
}
