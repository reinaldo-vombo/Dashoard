import "./user.css"
import {Settings} from '@material-ui/icons'
import {PermIdentity} from '@material-ui/icons'
import {PhoneAndroid} from '@material-ui/icons'
import {MailOutline} from '@material-ui/icons'
import {CalendarToday} from '@material-ui/icons'
import {LocationSearching} from '@material-ui/icons'
import {Publish} from '@material-ui/icons'
import {Link} from 'react-router-dom'


export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar usuário</h1>
        <Link to="/newUser">
        <Settings className="useraddIcon"/>
        </Link>
       
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://avatars.githubusercontent.com/u/86491173?s=96&v=4" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsserName">Reinaldo Alvaro</span>
              <span className="userShowUsserTitle">Engenheiro de software</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Detalhes da Conta</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon"/>
            <span className="userShowInfoTitle">renaldoalvaro99</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon"/>
            <span className="userShowInfoTitle">26.03.1998</span>
            </div>
            <span className="userShowTitle">Detalhes de Contato</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon"/>
            <span className="userShowInfoTitle">+224 927 603 115</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon"/>
            <span className="userShowInfoTitle">reinalvaro@outlook.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon"/>
            <span className="userShowInfoTitle">Luanda | Angola</span>
            </div>

          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Editar</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Nome completo</label>
                <input type="text" placeholder="Reinaldo Alvaro" className="userUpdateInput" />
              </div>
            
            
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder="reinalvaro@outlook.com" className="userUpdateInput" />
              </div>
            
              <div className="userUpdateItem">
                <label>Telefone</label>
                <input type="text" placeholder="+224 927 603 115" className="userUpdateInput" />
              </div>
            
              <div className="userUpdateItem">
                <label>Endereço</label>
                <input type="text" placeholder="Luanda | Angola" className="userUpdateInput" />
              </div>
              </div>
            <div className="userUpdateRight">
              <div className="userUploadeUploade">
                <img src="https://avatars.githubusercontent.com/u/86491173?s=96&v=4" alt="" className="userUpdateImg" />
                <label htmlFor="file"><Publish classes="userUpdateIcon"/></label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <Settings className="userUploadeRightIcon"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
