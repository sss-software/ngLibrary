import { CartIconActions, CartIconActionTypes } from '../actions/cart-icon.actions'

/**
 * @description   This is the state of the Shopping Cart Icon found in the Header UI
 */
export interface State {
  animating: boolean,
  dropDownIsVisible: boolean
}

export const initialState: State = {
  animating: false,
  dropDownIsVisible: false
}

export function reducer(state: State = initialState, action: CartIconActions): State {
  switch (action.type) {
    case CartIconActionTypes.AnimateLayoutHeaderShoppingCartIcon: {     
      return {
        ...state,
        animating: true
      }
    }
    case CartIconActionTypes.AnimateOffLayoutHeaderShoppingCartIcon: {
      return {
        ...state,
        animating: false
      }
    }
    case CartIconActionTypes.ShowCartIconDropDown: {
      return {
        ...state,
        dropDownIsVisible: true
      }
    }
    case CartIconActionTypes.HideCartIconDropDown: {
      return {
        ...state,
        dropDownIsVisible: false
      }
    }
    default: {
      return state
    }
  }
}