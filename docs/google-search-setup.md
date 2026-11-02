# Google Search Console setup for Marcus Neo Rangel

Production website: **https://neorangel.vercel.app/**

Google controls indexing and ranking. Completing these steps makes the site discoverable and gives you a way to measure results; it does not guarantee a particular position.

## 1. Confirm that the SEO update is live

The connected Vercel project should use `npm run build` and publish `dist`. This command builds the browser assets, renders the portfolio to HTML, and includes its metadata and crawler files. The temporary `dist-ssr` directory is only used during the build.

After the GitHub changes deploy successfully, open:

- https://neorangel.vercel.app/
- https://neorangel.vercel.app/robots.txt
- https://neorangel.vercel.app/sitemap.xml

The homepage's browser-tab title should be **Marcus Neo Rangel | Full Stack Developer**. The sitemap should list **https://neorangel.vercel.app/** once. A 404 means the latest build has not reached that deployment; fix that before submitting the sitemap.

## 2. Add the correct Search Console property

1. Open [Google Search Console](https://search.google.com/search-console/) and sign in with the Google account you want to manage the portfolio.
2. If a site is already selected, open the property selector at the top left and choose **Add property**.
3. Select **URL prefix**.
4. Enter exactly:

   ```text
   https://neorangel.vercel.app/
   ```

5. Click **Continue**.

URL-prefix properties support HTML-file verification. Domain properties require DNS verification; use the URL-prefix option for this Vercel-hosted address. [Google's property documentation](https://support.google.com/webmasters/answer/34592)

## 3. Publish Google's ownership-verification file

1. In the ownership-verification dialog, select **HTML file**.
2. Download the file Google provides. Its filename will look like `google1234567890abcdef.html`; that is only an example, so use your actual downloaded filename.
3. Copy the file, unchanged, into this project's **public** folder:

   ```text
   D:\Languages\reactJS\project_portfolio\public\YOUR_GOOGLE_FILENAME.html
   ```

4. Commit and push that file to the connected GitHub repository, then wait for Vercel's production deployment to finish. You can also ask Codex to publish the actual downloaded file.
5. Open the exact verification URL Google specifies. For the example filename above, it would be:

   ```text
   https://neorangel.vercel.app/google1234567890abcdef.html
   ```

6. Confirm that it displays Google's verification text without requiring a login. Use a private/incognito window if needed.
7. Return to Search Console and click **Verify**. After success, choose **Go to property**.

Do not rename or edit the file, and keep it deployed after verification. Google periodically checks it. The account-specific file must come from your Search Console account; this repository does not include a fabricated verification file. [Google's verification instructions](https://support.google.com/webmasters/answer/9008080)

## 4. Submit the sitemap

1. In the selected portfolio property, open **Sitemaps** under **Indexing**.
2. In **Add a new sitemap**, enter `sitemap.xml` if the website prefix is already shown. If the field expects a complete address, enter:

   ```text
   https://neorangel.vercel.app/sitemap.xml
   ```

3. Click **Submit**.
4. Look for **Success**. If Google cannot fetch it, check that the public sitemap URL opens and is not returning the homepage or a 404.

A successful sitemap submission confirms that Google can read the sitemap; it does not mean the homepage has already been indexed. [Google's sitemap instructions](https://support.google.com/webmasters/answer/7451001)

## 5. Inspect the homepage and request indexing

1. Paste `https://neorangel.vercel.app/` into Search Console's inspection bar at the top.
2. Open its **URL Inspection** result.
3. Click **Test live URL**.
4. Confirm that the page can be fetched and indexing is allowed. The production homepage must not have `noindex`.
5. Use **View tested page** to inspect the HTML or screenshot. Your full name and portfolio content should be present.
6. Click **Request indexing** if available.

New sites may initially show **URL is not on Google**. Check the reason in the indexing report and request indexing after the live test succeeds. Repeated requests do not guarantee indexing or speed it up. [Google's URL Inspection instructions](https://support.google.com/webmasters/answer/9012289)

## 6. Link your public profiles to the portfolio

- On your GitHub profile, set the website to `https://neorangel.vercel.app/`.
- On the `shirokuuun/project_portfolio` repository, use the gear beside **About** to replace the outdated website address with the current URL.
- Add the portfolio to the website/contact or featured section of your LinkedIn profile.
- Use **Marcus Neo Rangel** consistently, with **Neo Rangel** as your alternate/public name.

The portfolio's structured profile data already references your existing GitHub and LinkedIn addresses.

## 7. Monitor name searches

1. After data begins appearing, open **Performance → Search results**.
2. Enable **Total clicks**, **Total impressions**, **Average CTR**, and **Average position**.
3. Add a **Query** filter for `Marcus Neo Rangel`. Check `Neo Rangel` separately.
4. Use the **Pages** tab to confirm that the homepage is the result receiving impressions.
5. Review weekly over the following weeks. If there are no impressions, first check **URL Inspection** and **Page indexing**.

Search Console's average position is an aggregate, not a guaranteed position for every person searching. Do not expect the same result immediately in every location or account.

## Future edits

- `src/data/site.js` is the source for the production URL, names, title, description, portrait address, and public-profile links.
- `public/profile.jpg` is the portrait used on the page and in social/profile metadata.
- Every production build generates `robots.txt`, `sitemap.xml`, structured data, and pre-rendered content.
- Vercel preview builds receive a `noindex` meta tag. Production builds remain indexable.
- After significant content changes, deploy normally and use URL Inspection to check the live page. Keep the ownership-verification file in `public`.
