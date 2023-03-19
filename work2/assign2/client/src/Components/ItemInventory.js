import React, {useState, useEffect} from 'react'
import { Modal, Button, Form, Image} from "react-bootstrap";
import axios from 'axios';


function ProductCard(props){
  
  return(
    <div className="col-md-3">
      <div className="card my-4" style={{width: '18rem'}}>
        <img src={props.data.image} className="card-img-top" height={300} width={300} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.data.productName}</h5>
          <p className="card-text">Quantity: {props.data.quantity}</p>

          <button value={props.data._id} className="btn btn-primary" onClick={props.handleShow}>Update</button> 
        </div>
      </div>
    </div>
  )
}
function ItemInventory() {
 
  const [selectedProduct, setSelectedProduct] = useState({})
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async (e) => {
    setShow(true);
    console.log(e.target.value)
    setSelectedProduct(data.find(prod => prod._id === e.target.value));
  }

  const [data, setData] = useState([])
    
  useEffect(() => {
    axios.get('http://localhost:5000/api/getProducts')
    .then(res => {
      console.log('tester bester')
      const products = res.data
      setData( products );
    })
    
  }, [show])
  
  // Update Product 
  async function updateProduct(e){
    console.log('wohoo')
    e.preventDefault()
    console.log(selectedProduct)
      // adding product
      const postData = selectedProduct
      try {
        const res = await axios.post('http://localhost:5000/api/updateByID', postData)
        console.log(res.data)
        handleClose()
      } catch (e) {
        alert(e)
      }
  }
  
  
  return (
    <>
    <div className="container my-3">
      {/* Display Products */}
        <div className="row">
          {
            data.map(data => <ProductCard key={data._id} data={data} handleShow={handleShow}/>)
          }
        </div>

        {/* Show Popup Form for Update */}
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title >Update the Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image className='rounded mx-auto d-block' src={selectedProduct.image} width={300} height={300}/>
            <Form onSubmit={updateProduct}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={selectedProduct.productName}
                  type="text"
                  placeholder={selectedProduct.productName}
                  onChange={e => setSelectedProduct({...selectedProduct,productName:e.target.value})}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Quantity</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder={selectedProduct.quantity} 
                    onChange={e => setSelectedProduct({...selectedProduct,quantity:e.target.value})}
                    autoFocus
                />
                 
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Button type="submit" value="submit" variant="primary">
                Save Changes
                </Button>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
           
          </Modal.Footer>
        </Modal>
    </div>
    </>
  )
}

export default ItemInventory