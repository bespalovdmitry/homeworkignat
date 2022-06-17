import {UserType} from '../HW8';

type HomeWorkReducerType = SortType | CheckType
export const homeWorkReducer = (state: Array<UserType>, action: HomeWorkReducerType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'SORT': {
            return action.payload.sorted === 'up' ?
                [...state.sort((x, y) => x.name.localeCompare(y.name))] :
                [...state.sort((x, y) => x.name.localeCompare(y.name)).reverse()]
        }
        case 'CHECK': {
            return state.filter(el => el.age >= action.payload.age).sort((x, y) => x.age - y.age)
        }
        default: return state
    }
}

type SortType = ReturnType<typeof sortAC>
export const sortAC = (sorted: string) => {
  return {
      type: 'SORT',
      payload: {
          sorted
      }
  } as const
}

type CheckType = ReturnType<typeof checkAC>
export const checkAC = (age: number) => {
    return {
        type: 'CHECK',
        payload: {age}
    } as const
}