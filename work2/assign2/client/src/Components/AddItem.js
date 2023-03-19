import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'

function AddItem() {
  
  const [productInfo, setProductInfo] = useState({
    productName: '',
    quantity: null,
    image: ''
  })

  // to display 2 different messages
  const [disp, setDisp] = useState();

  // to show dialog box
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    window.location.reload();
  }
  const handleShow = () => setShow(true);
  // To display image upload preview
  
  function previewAndConvert(event) {
    // previewing the image  
    const frame =  document.getElementById('frame')
    frame.src = URL.createObjectURL(event.target.files[0]);

    // converting to base64 encoding to store the file in the form of string
    var reader  = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      setProductInfo({...productInfo,image:reader.result})
      console.log(reader.result)
    }
    reader.onerror = err => {
      console.log("Error: ", err)
    }
  };

  async function createNewProduct(e){
    e.preventDefault()
    console.log(productInfo)
      // adding product
      const postData = productInfo
      try {
        const res = await axios.post('http://localhost:5000/api/addProduct', postData)
        console.log(res.data)
        if(res.data === 0) await setDisp(0)
        if(res.data === 1) await setDisp(1)
        if(res) handleShow()
      } catch (e) {
        alert(e)
      }
  }

  return (
    <div className="container my-5 col-7">
      <form onSubmit={createNewProduct}>
        <h1 className= "my-5 display-1 text-center" >Add New Product</h1>
        <div className="col float-start mx-3">
          <img src="" id='frame' className="rounded border" width={200} height={200} alt='' />
        </div>
        <div className='col'>
          <div className="row g-3">
            <div className="col">
              <input type="text" className="form-control" placeholder="Product Name" aria-label="Product Name" 
                value={productInfo.productName} onChange={e => setProductInfo({...productInfo,productName:e.target.value})} required/>
            </div>
            <div className="col">
              <input type="number" className="form-control" placeholder="Quantity" aria-label="Quantity" 
                value={productInfo.quantity} onChange={e => setProductInfo({...productInfo,quantity:e.target.value})} required/>
            </div>
          </div>
          <div className="row my-5">
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupFile01">Upload</label>
              <input type="file" className="form-control" id="inputGroupFile01" onChange={previewAndConvert}/>
            </div>
          </div>
        </div>
          <div align='center'>
            <button type="submit" value="submit" className="btn btn-info">Add Product</button>
          </div>
      </form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{disp?`Your Product Created Successfully`:`You have Updated the Product!`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{disp?`There was no product with this name so we created new entry`:`We found the product with the same name so updated that product`}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddItem