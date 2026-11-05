# GitHub Pages + Namecheap

Target: public repository **charleslaw/iamclaw.dev**, main branch, root folder. Custom domain: **iamclaw.dev**.

## Launch order

1. Push the `main` branch to GitHub.
2. In repository Settings → Pages, select **Deploy from a branch**, **main**, **/ (root)**.
3. Set the custom domain to **iamclaw.dev** in Pages settings before changing DNS. `CNAME` already contains `iamclaw.dev`.
4. Set the records below in Namecheap and save each record.
5. Wait for GitHub’s DNS check and certificate, then enable **Enforce HTTPS**.

## Namecheap DNS

In **Domain List → iamclaw.dev → Manage → Advanced DNS → Host Records**, add these A records. Use Automatic TTL.

| Type | Host | Value |
| --- | --- | --- |
| A Record | @ | 185.199.108.153 |
| A Record | @ | 185.199.109.153 |
| A Record | @ | 185.199.110.153 |
| A Record | @ | 185.199.111.153 |
| CNAME Record | www | charleslaw.github.io |

Remove the default **URL Redirect Record** for `@` and the default **CNAME Record** for `www` pointing to `parkingpage.namecheap.com`, if present. Replace other conflicting website records for `@` or `www` as needed. Preserve MX, SPF, DKIM, DMARC, and other email/verification records. If the domain uses custom nameservers, make these changes at its actual authoritative DNS provider instead of Namecheap’s Advanced DNS.

Optional IPv6 support, alongside the A records:

| Type | Host | Value |
| --- | --- | --- |
| AAAA Record | @ | 2606:50c0:8000::153 |
| AAAA Record | @ | 2606:50c0:8001::153 |
| AAAA Record | @ | 2606:50c0:8002::153 |
| AAAA Record | @ | 2606:50c0:8003::153 |

Configure `iamclaw.dev` as the custom domain, so GitHub redirects `www` to the apex after DNS and HTTPS are ready. GitHub notes that DNS propagation and HTTPS availability can take up to 24 hours.

## Email

The contact page displays a hint for `claw@iamclaw.dev`; the website does not provision an inbox. Configure a mailbox or email forwarding separately with Namecheap or your preferred email provider. DNS for the website does not require changes to existing mail records.

## Optional domain verification

GitHub account Settings → Pages → Add a domain provides a unique TXT verification record. Copy the exact account-provided value into DNS; it cannot be determined from the domain name alone.

## Sources

- [GitHub: managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub: configuring a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Namecheap: setting up a domain with GitHub Pages](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/)
