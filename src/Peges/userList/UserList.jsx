import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@material-ui/icons'
import {Settings} from '@material-ui/icons'
import {userRows} from '../../dummyData'
import { Link } from "react-router-dom";
import {useState} from "react"


export default function UserList() {
  const[data, setData] = useState(userRows)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
      return(
        <div className="userList-2" >
          <img className="userImg" src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
    } },
    { field: 'email', headerName: 'email', width: 200 },
    {
      field: 'status',
      headerName: 'Estado',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Volume de transação',
      width: 160,
    },
    {
      field:"action",
      headerName:"Action",
      width: 150,
      renderCell: (params)=>{
        return(
          <>
          <DeleteOutline 
           className="userListDelete" onClick={()=>handleDelete(params.row.id)} />
           
          <Link to={"/user/"+params.row.id}>
          <Settings className="userListDeletet"/>
          </Link>
          </>
        )
      } 
    }
  ];
  
  
  return (
    
    <div className="userList">
     <DataGrid
        rows={data} disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      
    </div>
  )
}
