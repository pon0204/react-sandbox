import { useQuery, gql } from '@apollo/client'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'
import { countersState } from '../atom'
export const useCountersQuery = () => {
  const setCounters = useSetRecoilState(countersState)

  const GET_COUNTERS = gql`
    query {
      counter {
        id
        name
        count
        isDeleted
      }
    }
  `
  const { loading, error, data } = useQuery(GET_COUNTERS)

  // メモ: RecoilのcountersStateに保存するためにuseEffectを使用しているが、ほかにいい方法ありそう。
  useEffect(() => {
    if (!data) return
    setCounters(data?.counter)
  }, [data])

  return { loading, error, data }
}
