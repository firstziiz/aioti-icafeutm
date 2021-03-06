const admin = require('firebase-admin')
const serviceAccount = process.env.FIREBASE_PRIVATE_KEY
  ? JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
  : require('./.private-key.json') 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://icafe-utm.firebaseio.com'
})

const db = admin.database()
const orderRef = db.ref('orders')
const foodRef = db.ref('foods')
const tableRef = db.ref('tables')

module.exports = {
  orderRef,
  foodRef,
  tableRef
}