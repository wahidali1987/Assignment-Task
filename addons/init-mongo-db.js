function seed(dbName, user, password) {
  db = db.getSiblingDB(dbName);
  db.createUser({
    user: user,
    pwd: password,
    roles: [{ role: 'readWrite', db: dbName }],
  });
  db.createCollection('places');
  db.places.createIndex({ location: '2dsphere' });
}
seed('task', 'root', 'root');
