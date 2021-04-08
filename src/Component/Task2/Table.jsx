import React, { Component } from 'react'
import data from './constans.js'
import '../style.css';

class Table extends Component {
  spawnTable = () => {
    return data.map((item) => {
      return (
          <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.lastName}</td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <table>
          <tbody>
            <tr>
                <th>Name</th>
                <th>LastName</th>
            </tr>
            {this.spawnTable()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table