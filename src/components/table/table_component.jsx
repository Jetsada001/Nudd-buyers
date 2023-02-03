import React, { useState, useEffect } from 'react'
import { mockdata } from './datamock'
import SwitchComponent from '../toggleSwitch/switch_component'
import { Help, MoreVert, SwapVert } from '@mui/icons-material'
import './table_component.scss'
import { IconButton } from '@mui/material'

export const TableComponent = ({ setTextDescription, textDescription }) => {
  const [data, setData] = useState(mockdata)
  const [order, setOrder] = useState('ASC')
  const [openDetail, setOpenDetail] = useState(false)
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    console.log(order)
    console.log(openDetail)
  }, [openDetail , order])

  const sorting = (col) => {
    if (order === 'ASC') {
      const sorted = [...data].sort((a, b) => (a[col] > b[col] ? 1 : -1))
      setData(sorted)
      setOrder('DSC')
    }
    if (order === 'DSC') {
      const sorted = [...data].sort((a, b) => (a[col] < b[col] ? 1 : -1))
      setData(sorted)
      setOrder('ASC')
    }
  }
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th scope="col" onClick={() => sorting('package_name')}>
              <p>
                {' '}
                ชื่อแพ็กเกจ <SwapVert />
              </p>
            </th>
            <th scope="col" onClick={() => sorting('package_type')}>
              <p>
                ประเภท
                <SwapVert />{' '}
              </p>
            </th>
            <th scope="col" onClick={() => sorting('package_year')}>
              <p>
                {' '}
                ปี
                <SwapVert />{' '}
              </p>
            </th>
            <th scope="col" onClick={() => sorting('package_month')}>
              <p>
                เดือน
                <SwapVert />{' '}
              </p>
            </th>
            <th scope="col" onClick={() => sorting('package_date')}>
              <p>
                วัน
                <SwapVert />{' '}
              </p>
            </th>
            <th scope="col" onClick={() => sorting('package_class')}>
              <p>
                {' '}
                รุ่น
                <SwapVert />{' '}
              </p>
            </th>
            <th scope="col" onClick={() => sorting('package_price')}>
              <p>
                ราคา
                <SwapVert />{' '}
              </p>
            </th>
            <th scope="col" onClick={() => sorting('package_all')}>
              <p>
                ทั้งหมด
                <SwapVert />{' '}
              </p>
            </th>
            <th scope="col" onClick={() => sorting('package_status')}>
              <p>
                เปิดขาย
                <Help />
              </p>
            </th>
            <th scope="col" onClick={() => sorting('package_status_view')}>
              <p>
                การมองเห็น
                <Help />
              </p>
            </th>
            <th scope="col">{''}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <>
                <tr>
                  <td>{item.package_name}</td>
                  <td>{item.package_type}</td>
                  <td>{item.package_year}</td>
                  <td>{item.package_month}</td>
                  <td>{item.package_date}</td>
                  <td>{item.package_class}</td>
                  <td>{item.package_price}</td>
                  <td>{item.package_all}</td>
                  <td>
                    {item.package_status} <SwitchComponent />
                  </td>
                  <td>
                    {item.package_status_view} <SwitchComponent />{' '}
                  </td>
                  <td>
                    <div className="open_detail_container">
                      <IconButton
                        onClick={() => {
                          setOpenDetail(!openDetail)
                          setActiveIndex(item.id)
                        }}
                      >
                        {' '}
                        {<MoreVert />}
                      </IconButton>
                      {activeIndex === item.id && openDetail && (
                        <div className="open_detail">
                          <div >View Detail</div>
                          <div>Delete</div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
