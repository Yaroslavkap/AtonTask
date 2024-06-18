import React, {useState} from 'react'
import { data } from '../data'
import "./My.css"

const My = ({login}) => {
    const [clientsData, setClientsData] = useState([...data.clients])
    const [usersData, setusersData] = useState([...data.users])

    const findUser = (login, users) => {
        return users.find((user) => user.login === login);
      };
    
      const findClients = (name, clients) => {
        return clients.filter((client) => client.responsiblePerson === name);
      };
    const user = findUser(login, usersData)
    
    
    const clients = findClients(user.fullName, clientsData)
    //console.log(clients)

    const changeStatus = (value, id) => {
        console.log(value, id)
        const newClData = [...clientsData]
        const index = newClData.findIndex((client) => client.accountNumber === id)
        newClData[index].status = value
        console.log(newClData)
        setClientsData([...newClData])
    }
  return (
    <div className='my'>
        <h1>База клиентов пользователя:{user.fullName}</h1>
        
        <table>
            <thead>
                <tr>
                <th>Номер счета</th>
                <th>Фамилия</th>
                <th>Имя</th>
                <th>Отчество</th>
                <th>Дата рождения</th>
                <th>ИНН</th>
                <th>ФИО ответственного</th>
                <th>Статус</th>
                </tr>
            </thead>
            <tbody>
                {clients[0].accountNumber && clients.map((client, index) => (
                <tr key={client.accountNumber}>
                    <td>{client.accountNumber}</td>
                    <td>{client.surname}</td>
                    <td>{client.name}</td>
                    <td>{client.patronymic}</td>
                    <td>{client.dateOfBirth}</td>
                    <td>{client.inn}</td>
                    <td>{client.responsiblePerson}</td>
                    {/* <td>{client.status}</td> */}
                    <td>
                        {/* <input list = "status"/>
                        <datalist id="status">
                            <option>Не в работе</option>
                            <option>В работе</option>
                            <option>Отказ</option>
                            <option>Сделка закрыта</option>
                        </datalist>  */}
                        <select onChange={(e) => changeStatus(e.target.value, client.accountNumber)}>
                            <option>Не в работе</option>
                            <option>В работе</option>
                            <option>Отказ</option>
                            <option>Сделка закрыта</option>
                        </select>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default My