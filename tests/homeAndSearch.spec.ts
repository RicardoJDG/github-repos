import { test, expect } from '@playwright/test'
import { MOCKED_SUGGESTIONS } from './mocks/suggestionsMock'

export const API_URL = 'https://api.github.com'
export const SUGGESTIONS_ENDPOINT = '/search/users'
export const USER_ENDPOINT = '/users'

test('starts the suite', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Github /)
})

test('mocks suggestions api and checks that it displays suggestions', async ({ page }) => {
  await page.route(`${API_URL}${SUGGESTIONS_ENDPOINT}`, async route => {
    route.fulfill({ json: MOCKED_SUGGESTIONS })
  })

})