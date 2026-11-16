# Managing your project collection

1. Open `/admin` using the Admin link in the footer and sign in with the portfolio-owner account or an account with the admin role.
2. Select **Projects bucket**, then **Add project**.
3. Enter a project name, technologies and a description explaining the problem and your contribution.
4. Paste the full GitHub repository and live-demo URLs. Either link may be left blank for private or unpublished work.
5. Optionally enter a screenshot URL or a site image path such as `/img/my-project.png`.
6. Select **Save projects**. A success message confirms persistence. Open **View portfolio projects** to see the public cards.

Use **Remove**, then confirm removal and save to delete a project from the public collection. Additions, edits and removals are published together when saved. Failed saves keep edits on screen. Refreshing or closing a tab with unsaved edits triggers the browser warning; switching admin tabs can discard unsaved edits, so save first.

Existing projects from the earlier store remain visible until the first successful database save, which imports the collection being edited. Clearing all projects and saving keeps the public collection empty. Older placeholder `#` links are cleared in the editor; replace these with real links or leave them empty. No legacy records are deleted from the old store.

The database schema migration is generated in `netlify/database/migrations` and applies automatically during deployment. End-to-end database persistence must be verified after that migration deploys. No migrations were applied manually during development.

## Owner sign-in

Open `/admin` directly and choose **Continue with Google** using the portfolio owner's account. After sign-in, the footer displays **Admin** while the website session remains active. Other accounts cannot see the editing dashboard or write portfolio data, including skills, certifications and seed data. Logging into Google in the browser alone does not sign you into this website.

Google must be enabled under the site's Netlify Identity external providers before the sign-in button can work. Use the provider configuration shown in the Netlify dashboard. No password is embedded in the website.
