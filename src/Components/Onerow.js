import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Onerow() {
    const [isLoading, setLoading] = useState(true);
    const [show, setShow] = useState(null);

    const handleClose = () => setShow(null);
    const handleShow = (id) => {
        console.log("here");
        setShow(id);
        console.log("show=>",show);
    };

    //for api
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/subscribers')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
            setLoading(false);
         })
         .catch((err) => {
            console.log(err.message);
         });
    },[]);


    if(isLoading){
        return (
        <div className="oneRow" data-aos="zoom-in-down">
            loading..
        </div>
        )
    }
    return (
    <div className="oneRow" data-aos="zoom-in-down">
        {posts.map( (elem) => (
            <div className="card text-center my-5" style={{width: "18rem"}}>
            <img src={elem.imageUrl} className="card-img-top" alt="..." />
            <div className="card-body my-5">
                <h5 className="card-title">{elem.diseaseName}</h5>
                <hr />
                <p className="card-text my-3">
                {elem.description}
                </p>
                <Button
                variant="primary" 
                onClick={() => handleShow(elem._id)}
                > 
                Read more
                </Button>
            </div>
            </div>
        ))}
        {posts.map( (elem) => (
            <Modal show={show == elem._id} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{elem.diseaseName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Symptoms</h3>
                        <ul>
                            {elem.symptoms.split(",").map(temp => (
                                <li>{temp}</li>
                            ))}
                        </ul>
                        <hr/>
                    <h3>Remedies</h3>
                        <ul>
                            {elem.remedies.split(",").map(temp => (
                                    <li>{temp}</li>
                                ))}
                        </ul>    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
            </Modal.Footer>
            </Modal>
        ))}
    </div>
  )
}
