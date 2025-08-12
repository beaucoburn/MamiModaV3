import { test as base } from '@playwright/test'

import { CartPage } from './cart-page'
import { CategoryPage } from './category-page'
import { OrderPage } from './order-page'
import { ProductPage } from './product-page'
import { StorePage } from './store-page'

export const fixtures = base.extend<{
  cartPage: CartPage
  categoryPage: CategoryPage
  orderPage: OrderPage
  productPage: ProductPage
  storePage: StorePage
}>({
  page: async ({ page }, use) => {
    await page.goto('/')
    use(page)
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page)
    await use(cartPage)
  },
  categoryPage: async ({ page }, use) => {
    const categoryPage = new CategoryPage(page)
    await use(categoryPage)
  },
  orderPage: async ({ page }, use) => {
    const orderPage = new OrderPage(page)
    await use(orderPage)
  },
  productPage: async ({ page }, use) => {
    const productPage = new ProductPage(page)
    await use(productPage)
  },
  storePage: async ({ page }, use) => {
    const storePage = new StorePage(page)
    await use(storePage)
  },
})
