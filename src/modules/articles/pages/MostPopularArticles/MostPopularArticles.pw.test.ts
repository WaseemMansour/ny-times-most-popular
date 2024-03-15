import { expect, test } from '@playwright/experimental-ct-react';

test('should navigate to article details and back', async ({ page }) => {
  
  // Visit the main page
  await page.goto('http://localhost:5173'); 
  await page.waitForLoadState('networkidle');

  // Click the first article
  await page.click('[data-testid="articles-list"] a');

  // Check that we're on an article details page
  expect(page.url()).toContain('/articles/'); 

  // Click the back button
  
  await page.click('[data-testid="back-to-articles-list"] a');

  // Check that we're back on the main page
  expect(page.url()).toBe('http://localhost:5173/'); 
});