import { Counter } from '../features/counters/conponents/Counter'
import { useRecoilState } from 'recoil'
import { countersState } from '../features/counters/atom'
import { useState } from 'react'
import { useCountersQuery } from '../features/counters/hooks/useCountersQuery'
import { gql, useMutation } from '@apollo/client'

export const Index = () => {
  const [counters, setCounters] = useRecoilState(countersState)
  const [counterId, setCounterId] = useState(1)
  const { loading, error } = useCountersQuery()

  const CREATE_COUNTERS = gql`
    mutation ($counter: counter_insert_input!) {
      insert_counter(
        objects: [$counter]
        on_conflict: { constraint: counter_pkey, update_columns: [name, count, isDeleted] }
      ) {
        returning {
          id
          name
          count
          isDeleted
        }
      }
    }
  `

  const [createCounter, { loading: saveLoading }] = useMutation(CREATE_COUNTERS)

  function addCounter() {
    setCounters([...counters, { id: counterId + 1, name: 'new', count: 0 }])
    setCounterId(counterId + 1)
  }

  async function handleClick() {
    await Promise.all(
      counters.map(async (counter) => {
        await createCounter({
          variables: {
            counter: {
              id: counter.id,
              name: counter.name,
              count: counter.count,
              isDeleted: false,
            },
          },
        })
      }),
    )
  }

  // TODO: suspenseの仕組みを調べてコード改善
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <div className='w-[30rem] mx-auto text-center'>
      {counters.map((counter) => (
        <Counter key={counter.id} counter={counter} />
      ))}
      <button className=' bg-green-400 mt-4 text-white p-1 w-full' onClick={addCounter}>
        new counter
      </button>
      <button className=' bg-blue-400 mt-4 text-white p-1 w-full' onClick={handleClick}>
        save counter
      </button>
      {<p>title list: {counters.map((counter) => counter.name).join(',')}</p>}
      {<p>sum of count: {counters.reduce((current, counter) => current + counter.count, 0)}</p>}
    </div>
  )
}
