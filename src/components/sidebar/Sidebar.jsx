import "./sidebar.css"
import {
LineStyle,
 Timeline,
 TrendingUp,
 BarChart,
 DynamicFeed,
 WorkOutline,
 Report,
 PermIdentity,
 Storefront,
 ChatBubbleOutline,
 MailOutline

} from "@material-ui/icons"
import {Link} from "react-router-dom"


export default function Sidebar() {
  return (
    <div className="saidebar">
     <div className="sidebarWrapper">
       <div className="sidebarMenu">
         <h3 className="sidebarTitle">Painel</h3>
         <ul className="sidebarList">
            <Link to="/" className="link">
           <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Home
           </li>
            </Link>
           <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/>
              Analytics
           </li>
           <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Vendas
           </li>
         </ul>
       </div>
       <div className="sidebarMenu">
         <h3 className="sidebarTitle">Menu Rápido</h3>
         <ul className="sidebarList">
           <Link to="/UserList" className="link">
           <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon"/>
              User
           </li>
           </Link>
           <Link to="/product" className="link">
           <li className="sidebarListItem">
              <Storefront className="sidebarIcon"/>
              Produtos
           </li>
           </Link>
           <li className="sidebarListItem">
              <BarChart className="sidebarIcon"/>
              Transação
           </li>
           <li className="sidebarListItem">
              <Report className="sidebarIcon"/>
              Relatórios
           </li>
         </ul>
       </div>
       <div className="sidebarMenu">
         <h3 className="sidebarTitle">Notificações</h3>
         <ul className="sidebarList">
           <li className="sidebarListItem">
              <MailOutline className="sidebarIcon"/>
              Mail
           </li>
           <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon"/>
              Feedback
           </li>
           <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon"/>
              Mensagens
           </li>
         </ul>
       </div>
       <div className="sidebarMenu">
         <h3 className="sidebarTitle">funcionários</h3>
         <ul className="sidebarList">
           <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon"/>
              Gerir
           </li>
           <li className="sidebarListItem">
              <Timeline className="sidebarIcon"/>
              Analytics
           </li>
           <li className="sidebarListItem">
              <Report className="sidebarIcon"/>
              Relatórios
           </li>
         </ul>
       </div>
     </div>
    </div>
  )
}
