import React from 'react'
import './widgetLg.css'
const WidgetLg = () => {
  const Button = ({type}) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
      <h2 className='widgetLgTitle'>Latest Transactions </h2>
      <table className='widgetLgTable'>
        <tr className='widgetLgTr'>
          <th className='widgetLgTh'>Customer</th>
          <th className='widgetLgTh'>Date</th>
          <th className='widgetLgTh'>Amount</th>
          <th className='widgetLgTh'>Status</th>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
              className='widgetLgImg'
              alt='user'
            />
            <span className='widgetLgName'>Obi Amaka</span>
          </td>
          <td className='widgetLgDate'>2 Feb 2022</td>
          <td className='widgetLgDate'>$125</td>
          <td className='widgetLgStatus'>
            <Button type='Approved' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
              className='widgetLgImg'
              alt='user'
            />
            <span className='widgetLgName'>Jane Frances</span>
          </td>
          <td className='widgetLgDate'>2 June 2021</td>
          <td className='widgetLgDate'>$453</td>
          <td className='widgetLgStatus'>
            <Button type='Declined' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
              alt='user'
              className='widgetLgImg'
            />
            <span className='widgetLgName'>MC Blaze</span>
          </td>
          <td className='widgetLgDate'>4 Dec 2022</td>
          <td className='widgetLgDate'>$689</td>
          <td className='widgetLgStatus'>
            <Button type='Pending' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
              alt='user'
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Bright Stan</span>
          </td>
          <td className='widgetLgDate'>4 Dec 2022</td>
          <td className='widgetLgDate'>$499</td>
          <td className='widgetLgStatus'>
            <Button type='Pending' />
          </td>
        </tr>
        <tr className='widgetLgTr'>
          <td className='widgetLgUser'>
            <img
              src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFsZSUyMHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
              alt='user'
              className='widgetLgImg'
            />
            <span className='widgetLgName'>Jeff Malone</span>
          </td>
          <td className='widgetLgDate'>4 Dec 2022</td>
          <td className='widgetLgDate'>$1000</td>
          <td className='widgetLgStatus'>
            <Button type='Pending' />
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
