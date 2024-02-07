import { Delete } from '@/assets/icons/Delete'
import { Eddit } from '@/assets/icons/Eddit'
import { Play } from '@/assets/icons/Play'
import { Star } from '@/assets/icons/Star'

import s from './tables.module.scss'
export const Tables = () => {
  //TODO maped data from server for table
  return (
    <div>
      <table className={s.table}>
        <tr>
          <th className={s.th}>Name</th>
          <th className={s.th}>Name sort</th>
          <th className={s.th}>date create</th>
          <th className={s.th}>date update</th>
          <th className={s.th}>Stars</th>
          <th className={s.th}>PlaEddDel</th>
        </tr>
        <tr className={s.tr}>
          <td className={s.td}>picture with name</td>
          <td className={s.td}>name arrow</td>
          <td className={s.td}>name</td>
          <td className={s.td}>second name</td>
          <td className={s.td}>
            <Star size={1} />
          </td>
          <td className={s.td}>
            <Play size={1} /> <Eddit size={1} /> <Delete size={1} />
          </td>
        </tr>
      </table>
    </div>
  )
}
