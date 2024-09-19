import { test, expect } from '@playwright/test';

test('Signup View - Test page elements', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Sign Up');

    // Test the hero section
    await expect(page.locator('h1')).toHaveText('Learn to code by watching others');
    await expect(page.locator('p')).toHaveText(
        'See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.'
    );
    await expect(page.locator('span').first()).toHaveText('Try it free 7 days');
    await expect(page.locator('span').nth(1)).toHaveText('then $20/mo. thereafter');

    // Test the form
    await expect(page.locator('form')).toBeVisible();
    await expect(page.getByText(' By clicking this button, you are agreeing to our Terms and Services')).toBeVisible();
});

test('Signup View - Test form with valid entries', async ({ page }) => {
    await page.goto('/');

    // Fill the form
    await expect(page.getByPlaceholder('First Name')).toBeVisible();
    await expect(page.getByPlaceholder('Last Name')).toBeVisible();
    await expect(page.getByPlaceholder('Email Address')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();

    await page.fill('input[name=firstName]', 'First');
    await page.fill('input[name=lastName]', 'Last');
    await page.fill('input[name=email]', 'test@example.com');
    await page.fill('input[name=password]', 'password');

    await expect(page.locator('cannot be empty')).not.toBeVisible();
    await expect(page.getByPlaceholder('Email Address')).toHaveCSS('border-color', 'rgb(209, 213, 219)');
});

test('Signup View - Test form with invalid entries', async ({ page }) => {
    await page.goto('/');

    // Submit the form with no values
    await page.locator('button:text("Claim your free trial")').click();
    await expect(page.getByText('First Name cannot be empty')).toBeVisible();
    await expect(page.getByText('Last Name cannot be empty')).toBeVisible();
    await expect(page.getByText('Email Address cannot be empty')).toBeVisible();
    await expect(page.getByText('Password cannot be empty')).toBeVisible();

    // Submit the form with an invalid email
    await page.fill('input[name=firstName]', 'First');
    await page.fill('input[name=lastName]', 'Last');
    await page.fill('input[name=email]', 'test@example/com');
    await page.fill('input[name=password]', 'password');

    await expect(page.locator('cannot be empty')).not.toBeVisible();
    await expect(page.getByText('Looks like this is not an email')).toBeVisible();
});
