import "./newUser.css"
import {Settings} from '@material-ui/icons'

export default function NewUser() {
  return (
    <div className="newUser">
     <h1 className="newUserTitle">Novo Usuário</h1>
     <form className="newUserform">
       <div className="newUserItem">
         <label>Nome do usuário</label>
         <input type="text" placeholder="Rosa" />
       </div>
       <div className="newUserItem">
         <label>Nome completo</label>
         <input type="text" placeholder="Rosa Jõao" />
       </div>
       <div className="newUserItem">
         <label>Email</label>
         <input type="email" placeholder="rosajoao@outlook.com" />
       </div>
       <div className="newUserItem">
         <label>Senha</label>
         <input type="password" placeholder="password" />
       </div>
       <div className="newUserItem">
         <label>Telefone</label>
         <input type="text" placeholder="+224 927 603 115" />
       </div>
       <div className="newUserItem">
         <label>Endereço</label>
         <input type="text" placeholder="Luanda | Angola" />
       </div>
       <div className="newUserItem">
       <div className="newUserGender">
         <label>Gênero</label>
         <input type="radio" name="gender" id="male" value="Male" />
         <label for="male">Macho</label>
         <input type="radio" name="gender" id="female" value="Female" />
         <label for="female">Fêmea</label>
         <input type="radio" name="gender" id="other" value="Other" />
         <label for="other">Outros</label>
         </div>
         </div>
         <div className="newUserItem">
           <label>Ativo</label>
           <select className="newUserSelect" name="active" id="active">
             <option value="yes">Sim</option>
             <option value="no">Não</option>
           </select>
         </div>
     </form>
     <Settings className="newUserIcon" />
    </div>
  )
}
