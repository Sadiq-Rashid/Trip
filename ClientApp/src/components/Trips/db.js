import PouchDb from 'pouchdb';


export default class DB{
    constructor(name)
    {
        this.db = new PouchDb('tripDb');
       
    }


    
     sync() {

        var remoteCouch = 'http://admin:admin@localhost:5984/sync-note';
        //syncDom.setAttribute('data-sync-state', 'syncing');
        var opts = {live: true};
        this.db.replicate.to(remoteCouch, opts, this.syncError);
        this.db.replicate.from(remoteCouch, opts,this.syncError);
      }
    

      syncError()
      {
        return('no error');
      }
     



    async getAllTrips()
    {
        let allTrips =  await this.db.allDocs({include_docs:true});
        let trips = {};

        allTrips.rows.forEach(n=>trips[n.id]=n.doc);

        return trips;
    }

    async createTrip(tripObject)
    {
        tripObject.Id= Math.floor(Math.random()*1000);
        // trip.name =this.state.name;
        // trip.description =this.state.description;
        // trip.dateStarted = this.state.dateStarted;
        // trip.dateCompleted =this.state.dateCompleted;

        const res = await this.db.post({...tripObject});

        return res;
    }
  
    
}