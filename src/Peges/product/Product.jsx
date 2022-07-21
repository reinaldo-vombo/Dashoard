import "./product.css"
import {Publish, Settings} from '@material-ui/icons'
import {Link} from 'react-router-dom'
import Chart from '../../components/chart/Chart'
import {productData} from "../../dummyData"


export default function Product() {
  return (
    <div className="product">
     <div className="productTitleCont">
       <h1 className="productTitle">Produto</h1>
       <Link to="/newproduct">
        <Settings className="productAddButton"/>
       </Link>
     </div>
     <div className="productTop">
     <div className="productTopLeft">
       <Chart data={productData} dataKey="Vendas" title="Desempenho das vendas"/>
     </div>
     <div className="productTopRight">
       <div className="productInfoTop">
         <img src="https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBhaXJwb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="productTopImg" />
         <span className="productName">Apple Airpods</span>
       </div>
     <div className="productInfoBottom">
       <div className="productInfoItem">
         <span className="productInfoKey">id:</span>
         <span className="productInfoValue">123</span>
       </div>
       <div className="productInfoItem">
         <span className="productInfoKey">Vendas</span>
         <span className="productInfoValue">5123</span>
       </div>
       <div className="productInfoItem">
         <span className="productInfoKey">ativo:</span>
         <span className="productInfoValue">Sim</span>
       </div>
       <div className="productInfoItem">
         <span className="productInfoKey">em estoque:</span>
         <span className="productInfoValue">Não</span>
       </div>
       </div>
       </div>
     </div>
     <div className="produtBottom">
       <form action="" className="productForm">
         <div className="productFormLeft">
           <label>Nome do produto</label>
           <label type="text" placeholder="Apple AirPod"></label>
           <label>In Stock</label>
           <select name="inStock" id="idStock">
             <option value="yes">Sim</option>
             <option value="no">Não</option>
           </select>
           <label>active</label>
           <select name="Active" id="active">
             <option value="yes">Sim</option>
             <option value="no">Não</option>
           </select>
         </div>
         <div className="productFromRight">
           <div className="productUpload">
             <img src="https://images.unsplash.com/photo-1610438235354-a6ae5528385c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBhaXJwb2RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="productUploadImg" />
             <label for="file">
               <Publish/>
             </label>
             <input type="file" id="file" style={{display:"none"}} />
           </div>
           <Settings className="productIcon"/>
         </div>
       </form>
     </div>
    </div>
  )
}
