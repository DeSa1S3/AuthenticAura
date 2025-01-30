import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface UserIdVar {
    userId: number
    userIdSet: (value: number) => void
}

const useUserIdVar = create<UserIdVar>()(
    devtools(
        persist(
            (set) => ({
                userId: -1,
                userIdSet: (value: number) => set({userId: value}),
            }),
            {
                name: 'userId-storage',
            },
        ),
    ),
)

export default useUserIdVar