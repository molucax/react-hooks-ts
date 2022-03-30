import { useContext, useState } from 'react'
import UserContext, { UserState } from "../../store";

function ConsumerComponent() {
  const user = useContext<UserState>(UserContext);
  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  )
}

export default function UseContext() {
  const [user, setUser] = useState<UserState>({
    first: "Hermione",
    last: "Granger"
  })
  return (
    <div>
      <UserContext.Provider value={user}>
        <ConsumerComponent />
        <button
          onClick={() => setUser({
            first: "Ron",
            last: "Weasley"
          })}
        >
          Change context
        </button>
      </UserContext.Provider>
    </div>
  )
}
