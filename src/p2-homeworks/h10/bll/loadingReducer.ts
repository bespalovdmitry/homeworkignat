export type RootStateType = {
    isLoading: boolean
}

const initState: RootStateType = {
    isLoading: false
}

export const loadingReducer = (state: RootStateType = initState, action: LoadingACType): RootStateType => {
    switch (action.type) {
        case 'LOADING':
            return {...state, isLoading: action.loading}
        default: return state
    }
}

export type LoadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (loading: boolean) => {
    return {
        type: 'LOADING',
        loading
    } as const
}