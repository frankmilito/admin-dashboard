import React from 'react'
import './userlist.css'
import {DataGrid} from '@mui/x-data-grid'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import {rows} from '../../dummydata'
import {Link} from 'react-router-dom'

function UserList() {
  const [data, setData] = React.useState(rows)

  const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: params => {
        return (
          <div className='userListUser'>
            <img className='userListUserImg ' src={params.row.avatar} alt='' /> 
            {params.row.username}
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
      field: 'transaction',
      headerName: 'Transaction Volume',
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
            {console.log(params.row.id)}
            <Link to={`/user/${params.row.id}`}>
              <div className='userEditBtn'>Edit</div>
            </Link>
            <DeleteOutlineIcon
              className='userListDelete'
              onClick={() => onDeleteHandler(params.row.id)}
            />
          </>
        )
      },
    },
  ]

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

  return (
    <div className='userlist'>
      {' '}
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

export default UserList
