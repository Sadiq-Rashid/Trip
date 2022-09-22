import React, {Component} from "react";
import axios from 'axios';
import DB from './db';


export class Trips extends Component
{
    constructor(props)
    {
        super(props);
       
        this.state = {
            trips:[],
            loading: true,
            db: new DB()
        }
    }

    componentDidMount(){
        this.populateTripsData();
        this.state.db.sync();
    }

    // populateTripsData()
    // {
        
    //     axios.get("https://localhost:7041/api/Trip/GetTrips").then(result => {
    //         const response  = result.data;
    //         console.log(response);
    //         this.setState({trips:response, loading:false})
    //       })
   
    // }


    // async  populateTripsData() {
    //     const response = await fetch('https://localhost:7041/api/Trip/GetTrips');
    //     const data = await response.json();
    //     console.log(data);
    //     this.setState({ trips: data, loading: false });

    //   }

    async populateTripsData()
    {
        const trip = await this.state.db.getAllTrips();
       
        const res = Object.values(trip);
        console.log(res);
       // const res = JSON.stringify(trip);
        this.setState(
            {
                trips:res,
                loading: false
            });

           
    }

    renderAllStateTable(trips)
    {
        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Descrition</th>
                        <th>Date Started</th>
                        <th>Date Completed</th>
                        <th>Action</th>


                    </tr>
                </thead>
                <tbody>
                  {trips.map((trip) =>
                        <tr key = {trip.id}>
                            <td>{trip.name}</td>
                            <td>{trip.description}</td>
                            <td>{new Date(trip.dateStarted).toLocaleDateString()}</td>
                            <td>{trip.dateCompleted ? new Date(trip.dateCompleted).toLocaleDateString():  '-' }</td>
                            <td><button>View</button><button>Edit</button><button>Delete</button></td>
                        </tr>  
                    )}  
                  
                    
                </tbody>
            </table>
        )
    }
    render(){
        let content = this.state.loading ? (
            <p>
                <em>Loading ...</em>
            </p>
        ):
        (
            this.renderAllStateTable(this.state.trips)
        )
    return(
        <div>
            <h1>All Trips</h1>
            <p>Here you can see all trips</p>
            {content}
        </div>
       
    );
   }

   
}