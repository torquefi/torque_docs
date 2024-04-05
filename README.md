# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Notes

1. [not using blog](https://docusaurus.io/docs/installation#project-structure-rundown) - we have deleted the `blog` directory & disabled the blog plugin
2. we are using typescript, which has some [uniqueness within docusaurus](https://docusaurus.io/docs/typescript-support)
3. ~~Embedding dynamic content? We use [MDX-Embed](https://www.mdx-embed.com/?path=/docs/introduction--page)~~
    * ~~docs/intro.mdx shows an example with youtube~~
    * Don't use mdx. It breaks the CMS.

## How to Edit these docs

- Full Editing functionality is possible by following `Installation`, `Local Development` and `Build` steps below.
- CMS based editing is possible via Netlify CMS, though there are some functionality gaps / tradeoffs. See `Partial Editing with Netlify CMS` below.

### Full Editing

#### Installation

```sh
yarn
```

#### Local Development

```sh
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

#### Build

Builds are automatic via CI/CD pipeline using fleek.

#### Deployment

PRs are automatically deployed on fleek.

### Partial Editing with Netlify CMS

- Netlify CMS is available at [https://admin-docs.olympusdao.finance/](https://admin-docs.olympusdao.finance/).
- Netlify CMS is served from the `netlify-cms` branch. All changes to Netlify CMS config happen in `static/admin`. If you make a change here you need to push that change first to `main` and then merge that change down to `netlify-cms` branch.
- it requires login with github credentials
- all changes will read/write against the `main` branch
- all submitted changes will be submitted as pull requests
- Netlify CMS ONLY READS and WRITES DATA to/from github... it does not read/write any local changes you might have on your local machine
- Netlify CMS does not parse mdx files, so none of the mdx files appear
- Netlify CMS parses each docs directory separately, so a new directory would require updates to config.yml
