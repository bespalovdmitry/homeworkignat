
type InitStateType = {
    theme: string
}
const initState = {
    theme: 'some'
};

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeACType): InitStateType => {
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {...state, theme: action.payload.theme};
        }
        default: return state;
    }
};

type ChangeThemeACType = ReturnType<typeof changeThemeAC>
export const changeThemeAC = (theme: string) => {
    return {
        type: 'CHANGE-THEME',
        payload: {theme}
    } as const
};