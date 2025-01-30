import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface meAuthStates {
    meAuthGet: boolean
    meAuthSet: (value: boolean) => void
}

const useMeAuthVar = create<meAuthStates>()(
    devtools(
        persist(
            (set) => ({
                meAuthGet: false,
                meAuthSet: (value: boolean) => set({meAuthGet: value}),
            }),
            {
                name: 'meAuth-storage',
            },
        ),
    ),
)

export default useMeAuthVar