import React from 'react'

function Home() {
  return (
    <div align='center' className="container my-3">
        <h1 className="display-3">
          Info
        </h1>
        

        <h5>This is the simple inventory management system.</h5>
        <br/>
        On the <b>Store </b> page, I am demonstrating the usage of 3rd party API to show the available stocks of the product in the market to buy in the form of graph. 
        <br/>
        There are 2 pages available on the dropdown menu of <b>Inventory</b> from where we can do inventory management work.
        <br/>
        From <b>Add New</b> page, we can add the entry for the product and same name product won't create multiple entry, it will simply update it.
        <br/>
        From <b>Product Listing</b>, we can see the list of the products stored in our database and simply we can also update them.
    </div>
  )
}

export default Home