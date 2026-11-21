import { defineCloudflareConfig } from '@opennextjs/cloudflare'

// All pages are statically generated, so the default (no incremental cache) is enough.
export default defineCloudflareConfig()
