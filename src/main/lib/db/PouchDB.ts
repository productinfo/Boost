import PouchDBCore from 'pouchdb-core'
import PouchDBIDBAdapter from 'pouchdb-adapter-idb'
import PouchDBMemoryAdapter from 'pouchdb-adapter-memory'
import PouchDBMapReduce from 'pouchdb-mapreduce'
import PouchDBHttpAdapter from 'pouchdb-adapter-http'
import PouchDBReplication from 'pouchdb-replication'

const PouchDB = PouchDBCore.plugin(PouchDBIDBAdapter)
  .plugin(PouchDBMemoryAdapter)
  .plugin(PouchDBHttpAdapter)
  .plugin(PouchDBMapReduce)
  .plugin(PouchDBReplication)

export default PouchDB
