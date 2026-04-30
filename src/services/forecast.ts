import { ForecastServiceClient } from '@/generated/client/worldmonitor/forecast/v1/service_client';
import type { Forecast } from '@/generated/client/worldmonitor/forecast/v1/service_client';
import { getRpcBaseUrl } from '@/services/rpc-client';
import { getLocalFallbackForecasts, getLocalFallbackSimulationOutcome, shouldUseLocalSeedFallbacks } from '@/services/local-fallbacks';

export type { Forecast };

export { escapeHtml } from '@/utils/sanitize';

let _client: ForecastServiceClient | null = null;

function getClient(): ForecastServiceClient {
  if (!_client) {
    _client = new ForecastServiceClient(getRpcBaseUrl(), {
      fetch: (...args: Parameters<typeof fetch>) => globalThis.fetch(...args),
    });
  }
  return _client;
}

export async function fetchForecasts(domain?: string, region?: string): Promise<Forecast[]> {
  const resp = await getClient().getForecasts({ domain: domain || '', region: region || '' });
  if (resp.forecasts?.length) return resp.forecasts;
  if (shouldUseLocalSeedFallbacks()) {
    const forecasts = getLocalFallbackForecasts();
    return forecasts.filter((item) =>
      (!domain || item.domain === domain) &&
      (!region || item.region.toLowerCase().includes(region.toLowerCase()))
    );
  }
  return [];
}

export async function fetchSimulationOutcome(): Promise<string> {
  const resp = await getClient().getSimulationOutcome({ runId: '' });
  if (resp.found && resp.theaterSummariesJson) return resp.theaterSummariesJson;
  return shouldUseLocalSeedFallbacks() ? getLocalFallbackSimulationOutcome() : '';
}
