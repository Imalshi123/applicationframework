import React, { Component } from 'react';
import axios from 'axios';
import { MDBCard, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";

class Conferences extends Component {
    constructor(props) {
        super(props);

        this.state = {

            options: [],
            Presentation_Type: '',
            Title: '',
            Date_To_Be_held: ''
        };
    }
    componentDidMount() {
        console.log("test")
        axios.get('https://afwe3.herokuapp.com/events/get_approved_presentations')
            .then(response => {
                this.setState({ options: response.data });
                console.log(response.data)
                console.log("test11")
            })
    }



    navigateSubjectPage(e, ID) {
        window.location = `/manage_presenations1/${ID}`
    }

    render() {
        return (


            <div className="container">
                <br></br>
                <center> <h3 className="mainclass">Ongoing Presentations</h3></center>
                <MDBContainer>
                    <MDBCard className="card-body" style={{ width: "70rem", marginTop: "1rem" }}>

                        <MDBCardText>
                            {this.state.options.length > 0 && this.state.options.map((item, index) => (


                                <div key={index} className="card mb-3">
                                    <div className="p-3" >

                                        <h4> Presenter Name : {item.Name}</h4>
                                        <h4> Presentation Title : {item.Title}</h4>
                                        <h4> Presentation Type : {item.Presentation_Type}</h4>

                                        <div className="form-group">
                                            <input type="submit" onClick={e => this.navigateSubjectPage(e, item._id)} value="View Presntation Details" className="btn btn-primary" />
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </MDBCardText>

                    </MDBCard>
                </MDBContainer>

            </div>
        )
    }
}

export default Conferences;