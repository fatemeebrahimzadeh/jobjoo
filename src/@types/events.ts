// navbar buttons
export const REDIRECT_TO_HOME = 'REDIRECT_TO_HOME'
export const REDIRECT_TO_ENGINEERING = 'REDIRECT_TO_ENGINEERING'
export const EDIT_BUTTON_CLICKED = 'EDIT_BUTTON_CLICKED'
export const REDIRECT_PAGE = "REDIRECT_PAGE"

export interface IRedirectPageRouteConfig {
  path: string
  state?: any
}
export const getPageRedirectConfig = (state: IRedirectPageRouteConfig) => {
  return {
    path: REDIRECT_PAGE,
    state
  }
}


export const SOCKET_CONNCECTED = 'SOCKET_CONNCECTED'
export const SOCKET_DISCONNCECTED = 'SOCKET_DISCONNCECTED'



export const UPDATE_DATABASE = 'UPDATE_DATABASE'
export type update_database_entities = 'connections' | 'devices' | 'tags'

export const FORM_VALIDATION = 'FORM_VALIDATION'

export const SHOW_TOAST = 'SHOW_TOAST'
export const CLEAR_ALL_TOAST = 'CLEAR_ALL_TOAST'

export const MOUNT_KEYBOARD = 'UNMOUNT_KEYBOARD'

export const CHANGE_PAGE = 'CHANGE_PAGE'