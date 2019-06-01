import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material'

import { Observable } from 'rxjs'
import { withLatestFrom, map, tap, delay } from 'rxjs/operators'
import { Actions, Effect, ofType } from '@ngrx/effects'
import { Action, select, Store } from '@ngrx/store'

import { AddBookToCart, AttemptToAddBookToCart, CartActionTypes } from '../actions/cart.actions'
import { selectCartStatusBookIds } from '../selectors/cart-status.selectors'
import { selectBooksCacheEntities } from 'src/app/books/books-data/selectors/books-cache.selectors';
import { AnimateLayoutHeaderShoppingCartIcon, LayoutActionTypes, AnimateOffLayoutHeaderShoppingCartIcon } from 'src/app/layout/layout-data/actions/layout.actions';


@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private store: Store<any>,
  ) {}

  @Effect({
    dispatch: false
  })
  addBookToCart$: Observable<Action> = this.actions$
    .pipe(
      ofType<AttemptToAddBookToCart>(CartActionTypes.AttemptToAddBookToCart),
      // tap(() => console.log('[CartEffects] addBookToCart$')),
      withLatestFrom(this.store.pipe(select(selectCartStatusBookIds))),
      map(([action, bookIds]) => {
        let bookId = bookIds.find(bookId => bookId === action.payload.bookId)

        // Our business logic: Users can only add 1 copy of each Book to their Cart
        // It's a library, not a Store ;)
        if (!bookId) {
          this.store.dispatch(new AddBookToCart({bookId: action.payload.bookId}))
        }

        return action
      })
    )
}
