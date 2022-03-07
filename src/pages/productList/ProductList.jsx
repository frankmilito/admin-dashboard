import React from 'react'
import './productList.css'
import {DataGrid} from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import {productData} from '../../dummydata'
import {Link} from 'react-router-dom'

const ProductList = () => {
    const [data, setData] =React.useState(productData)
    const onDeleteHandler = id => {
    let newArr = []
    data.map(item => {
      if (item.id !== id) {
        newArr.push(item)
      }
    })
    setData(newArr)
    // setData(filteredData)
  }
    const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: params => {
        return (
          <div className='productListUser'>
            <img className='productListUserImg ' src={params.row.avatar} alt='' />
            {params.row.name}
          </div>
        )
      },
    },
    {field: 'email', headerName: ' Email', width: 200},
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'amount',
      headerName: 'Price',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: params => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <div className='productEditBtn'>Edit</div>
            </Link>
            <DeleteOutlineIcon
              className='productListDelete'
              onClick={() => onDeleteHandler(params.row.id)}
            />
          </>
        )
      },
    },
  ]
  return (
    <div className="productList">
         <DataGrid
            disableSelectionOnClick
            rows={data}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  )
}

export default ProductList