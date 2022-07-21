import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({type}) =>{
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Última Transação</h3>
      <table className="widgetLgtable">
        <tr className="widgetLgtr">
          <th className="widgetLgTh">Cliente</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Quantidade</th>
          <th className="widgetLgTh">Estado</th>
        </tr>
        <tr className="widgetLgtr">
          <td className="widgetLgUser">
            <img src="https://avatars.githubusercontent.com/u/86491173?s=96&v=4" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Rosa Jõao</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmout">$122.00</td>
          <td className="widgetLgStatus"><Button type="Aprovado"/></td>
        </tr>
        <tr className="widgetLgtr">
          <td className="widgetLgUser">
            <img src="https://avatars.githubusercontent.com/u/86491173?s=96&v=4" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Rosa Jõao</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmout">$122.00</td>
          <td className="widgetLgStatus"><Button type="Recusou"/></td>
        </tr>
        <tr className="widgetLgtr">
          <td className="widgetLgUser">
            <img src="https://avatars.githubusercontent.com/u/86491173?s=96&v=4" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Rosa Jõao</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmout">$122.00</td>
          <td className="widgetLgStatus"><Button type="Pendente"/></td>
        </tr>
        <tr className="widgetLgtr">
          <td className="widgetLgUser">
            <img src="https://avatars.githubusercontent.com/u/86491173?s=96&v=4" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Rosa Jõao</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmout">$122.00</td>
          <td className="widgetLgStatus"><Button type="Aprovado"/></td>
        </tr>
        
      </table>
    </div>
  )
}