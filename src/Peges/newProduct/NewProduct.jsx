import "./newProduct.css"
import { Settings} from '@material-ui/icons'


export default function NewProduct() {
  return (
    <div className="newProduct">
     <h1 className="addProductTitle">New Product</h1>
     <form className="addProductForm">
       <div className="addProductitem">
         <label>Image</label>
         <input type="file" id="file"/>
       </div>
       <div className="addProductitem">
         <label>Name</label>
         <input type="Text" placeholder="Apple Airpods"/>
       </div>
       <div className="addProductitem">
         <label>stock</label>
         <input type="text" placeholder="123"/>
       </div>
       <div className="addProductitem">
         <label>Active</label>
         <select name="active" id="active">
           <option value="yes">Yes</option>
           <option value="no">No</option>
         </select>
       </div>
       <Settings className="addproductIcon"/>
     </form>
    </div>
  )
}
