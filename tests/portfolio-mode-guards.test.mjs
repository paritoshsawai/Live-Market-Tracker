import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

function read(path) {
  return readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
}

test('country drawer composition is portfolio-gated', () => {
  const source = read('src/components/CountryDeepDivePanel.ts');
  assert.match(source, /if \(!shouldHidePremiumUi\(\)\) \{\s*this\.resilienceWidget = new ResilienceWidget\(code\);/s);
  assert.match(source, /const includePremiumSections = !shouldHidePremiumUi\(\);/);
  assert.match(source, /if \(!shouldHidePremiumUi\(\)\) \{\s*const isPro = hasPremiumAccess\(getAuthState\(\)\);/s);
});

test('shared locked states suppress auth and billing CTAs in portfolio mode', () => {
  const source = read('src/components/Panel.ts');
  assert.match(source, /shouldHidePremiumUi\(\)\s*\?\s*'This research feature is hidden in the public portfolio build\.'/);
  assert.match(source, /if \(!shouldHidePremiumUi\(\)\) \{/);
});

test('settings and runtime links use portfolio destination', () => {
  const settingsSource = read('src/settings-main.ts');
  const runtimeSource = read('src/components/RuntimeConfigPanel.ts');
  assert.match(settingsSource, /PORTFOLIO_GITHUB_URL/);
  assert.match(runtimeSource, /PORTFOLIO_GITHUB_URL/);
});

test('full portfolio variant uses curated dense starter panels instead of enabling everything', () => {
  const source = read('src/config/panels.ts');
  assert.match(source, /const PORTFOLIO_FULL_DEFAULT_PANEL_KEYS = \[/);
  assert.match(source, /'map'/);
  assert.match(source, /'live-news'/);
  assert.match(source, /'strategic-posture'/);
  assert.match(source, /'gdelt-intel'/);
  assert.match(source, /'cross-source-signals'/);
  assert.match(source, /'fear-greed'/);
  assert.match(source, /'airline-intel'/);
  assert.match(source, /const INITIAL_VARIANT_DEFAULTS: Record<string, string\[]> = \{\s*\.\.\.VARIANT_DEFAULTS,\s*full: \[\.\.\.PORTFOLIO_FULL_DEFAULT_PANEL_KEYS\],/s);
  assert.match(source, /export function getInitialDefaultPanelKeys\(variant = SITE_VARIANT\): string\[]/);
});
