import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from '@material-ui/icons'
import {Settings} from '@material-ui/icons'
import {productRows} from '../../dummyData'
import { Link } from "react-router-dom";
import {useState} from "react"

export default function ProductList() {
  const [data,setData] = useState(productRows)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }
    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'product', headerName: 'produto', width: 200, renderCell: (params)=>{
        return(
          <div className="productList-2" >
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        )
      } },
      { field: 'stock', headerName: 'Stock', width: 200 },
      {
        field: 'price',
        headerName: 'Preço',
        width: 120,
      },
      {
        field: 'transaction',
        headerName: 'Volume de transação',
        width: 160,
      },
      {
        field:"action",
        headerName:"Ação",
        width: 150,
        renderCell: (params)=>{
          return(
            <>
            <DeleteOutline 
             className="userListDelete" onClick={() =>handleDelete(params.row.id)} />
             
            <Link to={"/product/"+params.row.id}>
            <Settings className="productListDeletet"/>
            </Link>
            </>
          )
        } 
      }
    ];
  return (
    <div className="ProductList">
       <DataGrid
        rows={data} disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
  }

