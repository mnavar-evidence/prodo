import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import vm from 'node:vm';

const base = dirname(fileURLToPath(import.meta.url));
const context = vm.createContext({ window: {} });
vm.runInContext(readFileSync(join(base, 'site-config.js'), 'utf8'), context, { timeout: 1000 });
const email = context.window.PRODO_CONFIG?.email?.trim() || '';
const valid = /^[^\s@<>"?&#]+@[^\s@<>"?&#]+\.[^\s@<>"?&#]+$/.test(email);
if (!valid || /@(example\.(com|org|net)|test\.invalid)$/i.test(email)) {
  console.error('Launch blocked: add your real public email in site-config.js. No credentials are needed.');
  process.exitCode = 1;
} else {
  console.log('Contact configuration present. Ready for static deployment.');
}
