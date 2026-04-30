import type { Forecast } from '@/generated/client/worldmonitor/forecast/v1/service_client';
import type { GetTheaterPostureResponse } from '@/generated/client/worldmonitor/military/v1/service_client';
import type { GdeltArticle, GdeltTimelinePoint } from '@/generated/client/worldmonitor/intelligence/v1/service_client';

function isLocalHostname(hostname: string): boolean {
  return hostname === 'localhost' || hostname === '127.0.0.1';
}

export function shouldUseLocalSeedFallbacks(): boolean {
  if (typeof window === 'undefined') return false;
  return import.meta.env.DEV || isLocalHostname(window.location.hostname);
}

function hoursAgoMs(hours: number): number {
  return Date.now() - hours * 60 * 60 * 1000;
}

function hoursAgoIso(hours: number): string {
  return new Date(hoursAgoMs(hours)).toISOString();
}

export function getLocalFallbackForecasts(): Forecast[] {
  return [
    {
      id: 'forecast-iran-shipping',
      domain: 'conflict',
      region: 'Middle East',
      title: 'Hormuz disruption risk remains elevated',
      scenario: 'Shipping and insurance costs stay under pressure while rhetoric outpaces direct closure action.',
      feedSummary: 'Missile exchange risk, tanker rerouting, and sanctions headlines are keeping the regional risk premium elevated.',
      probability: 0.64,
      confidence: 0.74,
      timeHorizon: '7d',
      signals: [
        { type: 'shipping', value: 'Insurers are repricing Gulf transit risk.', weight: 0.77 },
        { type: 'military', value: 'Regional force posture remains elevated around key waterways.', weight: 0.73 },
        { type: 'energy', value: 'Crude sensitivity remains high to chokepoint headlines.', weight: 0.7 },
      ],
      cascades: [
        { domain: 'market', effect: 'Energy volatility remains bid.', probability: 0.66 },
        { domain: 'supply_chain', effect: 'Container and tanker routing times increase.', probability: 0.53 },
      ],
      trend: 'rising',
      priorProbability: 0.57,
      createdAt: hoursAgoMs(8),
      updatedAt: hoursAgoMs(2),
      simulationAdjustment: 0.06,
      simPathConfidence: 0.72,
      demotedBySimulation: false,
      perspectives: {
        strategic: 'Deterrence is holding, but the market is pricing fragility rather than resolution.',
        regional: 'Iran, Gulf states, and external navies are all signaling readiness without committing to a decisive shift.',
        contrarian: 'If diplomatic channels cool rhetoric quickly, the current premium can unwind faster than expected.',
      },
      caseFile: {
        supportingEvidence: [
          { type: 'headline', summary: 'Repeated shipping-security headlines are keeping traders on alert.', weight: 0.72 },
          { type: 'markets', summary: 'Oil and shipping rates react quickly to chokepoint risk.', weight: 0.68 },
        ],
        counterEvidence: [
          { type: 'diplomacy', summary: 'Regional actors still have incentives to avoid a sustained closure.', weight: 0.44 },
        ],
        triggers: [
          'Confirmed vessel seizures or corridor closures',
          'New naval escort deployments in the Gulf',
          'Rapid move in front-month crude and tanker day rates',
        ],
        actorLenses: ['Iran signaling', 'US naval deterrence', 'Gulf producer continuity'],
        baseCase: 'Intermittent disruption risk persists without a full shutdown.',
        escalatoryCase: 'A kinetic incident pushes shipping into visible rerouting and insurance repricing.',
        contrarianCase: 'Backchannel de-escalation cools the risk premium within days.',
        changeSummary: 'The market has shifted from watching rhetoric to pricing operational friction.',
        changeItems: [
          'Shipping and insurance sensitivity has increased.',
          'Energy traders are reacting faster to geopolitical headlines.',
        ],
        actors: [
          {
            id: 'iran',
            name: 'Iran',
            category: 'state',
            role: 'Primary escalatory actor around the strait',
            objectives: ['Preserve leverage without inviting a full-scale response'],
            constraints: ['Economic pressure and military deterrence'],
            likelyActions: ['Signal capability while avoiding sustained closure'],
            influenceScore: 0.82,
          },
        ],
        worldState: {
          summary: 'Markets are balancing war-risk pricing against the still-open flow of energy supply.',
          activePressures: ['Shipping insecurity', 'Energy price sensitivity'],
          stabilizers: ['Producer incentives to keep exports flowing'],
          keyUnknowns: ['Whether an isolated incident turns into a sustained campaign'],
        },
        branches: [
          {
            kind: 'base',
            title: 'Managed pressure',
            summary: 'Rhetoric and isolated incidents keep pressure on shipping without full closure.',
            outcome: 'Risk premium stays firm but contained.',
            projectedProbability: 0.64,
            rounds: [
              { round: 1, focus: 'Shipping', developments: ['Escort and routing chatter rises'], actorMoves: ['Naval presence remains visible'], probabilityShift: 0.04 },
            ],
          },
        ],
      },
    },
    {
      id: 'forecast-fed-risk',
      domain: 'market',
      region: 'North America',
      title: 'US macro surprise risk keeps rates-sensitive assets unstable',
      scenario: 'Rates, growth, and inflation expectations stay choppy as traders reprice the next policy window.',
      feedSummary: 'Macro releases are likely to keep equities and bond yields moving in opposite directions intraday.',
      probability: 0.58,
      confidence: 0.69,
      timeHorizon: '7d',
      signals: [
        { type: 'macro', value: 'Rates-sensitive sectors remain reactive to incoming data.', weight: 0.7 },
        { type: 'liquidity', value: 'Positioning remains vulnerable to rapid repricing.', weight: 0.64 },
      ],
      cascades: [
        { domain: 'market', effect: 'Bond-equity correlation remains unstable.', probability: 0.55 },
      ],
      trend: 'stable',
      priorProbability: 0.56,
      createdAt: hoursAgoMs(10),
      updatedAt: hoursAgoMs(3),
      simulationAdjustment: -0.03,
      simPathConfidence: 0.6,
      demotedBySimulation: false,
      perspectives: {
        strategic: 'The macro path is more about sequencing than direction.',
        regional: 'US releases still dominate cross-asset tone for the week.',
        contrarian: 'A clean data print could calm rates pressure faster than positioning implies.',
      },
      caseFile: {
        supportingEvidence: [
          { type: 'macro', summary: 'Rate-sensitive assets are showing outsized reaction to data beats and misses.', weight: 0.66 },
        ],
        counterEvidence: [
          { type: 'positioning', summary: 'Crowded defensive positioning can unwind positively on benign data.', weight: 0.41 },
        ],
        triggers: ['CPI or jobs surprise', 'Yield-curve move beyond recent range'],
        actorLenses: ['Federal Reserve', 'Rates traders', 'Mega-cap equity desks'],
        baseCase: 'Markets remain volatile but within the current macro range.',
        escalatoryCase: 'A hot print forces a sharp repricing of the policy path.',
        contrarianCase: 'Soft data allows a relief rally in duration and growth equities.',
        changeSummary: 'Expectations are compressed enough that even modest surprises matter.',
        changeItems: ['Cross-asset sensitivity to macro releases has risen.'],
        actors: [],
        branches: [],
      },
    },
    {
      id: 'forecast-asia-supply',
      domain: 'supply_chain',
      region: 'East Asia',
      title: 'Asia supply routes absorb strain but stay vulnerable to localized disruption',
      scenario: 'Manufacturing and shipping remain resilient overall, but key nodes are still sensitive to weather, security, and policy shocks.',
      feedSummary: 'The base case remains continuity with pockets of congestion rather than systemic failure.',
      probability: 0.52,
      confidence: 0.63,
      timeHorizon: '30d',
      signals: [
        { type: 'shipping', value: 'Transit bottlenecks remain concentrated rather than global.', weight: 0.61 },
        { type: 'policy', value: 'Export-control headlines continue to shape tech supply sentiment.', weight: 0.58 },
      ],
      cascades: [
        { domain: 'technology', effect: 'Semiconductor and electronics names stay headline-sensitive.', probability: 0.49 },
      ],
      trend: 'stable',
      priorProbability: 0.5,
      createdAt: hoursAgoMs(14),
      updatedAt: hoursAgoMs(4),
      simulationAdjustment: 0,
      simPathConfidence: 0,
      demotedBySimulation: false,
      perspectives: {
        strategic: 'Continuity is still the base case, but fragility remains clustered around a few nodes.',
        regional: 'The issue is concentration risk, not generalized collapse.',
        contrarian: 'A policy détente could quickly normalize some of the current risk premium.',
      },
      caseFile: {
        supportingEvidence: [
          { type: 'supply', summary: 'Routes are functioning, but contingency planning remains active.', weight: 0.6 },
        ],
        counterEvidence: [],
        triggers: ['Port congestion spikes', 'Export-control expansion', 'Weather-driven route delays'],
        actorLenses: ['Regional exporters', 'Port operators', 'Logistics buyers'],
        baseCase: 'Localized stress remains manageable.',
        escalatoryCase: 'A security or policy shock creates a broader rerouting event.',
        contrarianCase: 'Improved throughput reduces congestion risk quickly.',
        changeSummary: 'The system remains operational, but not comfortably so.',
        changeItems: ['Congestion risk is concentrated in a few strategic hubs.'],
        actors: [],
        branches: [],
      },
    },
  ];
}

export function getLocalFallbackSimulationOutcome(): string {
  return JSON.stringify([
    {
      theaterId: 'middle-east-energy',
      theaterLabel: 'Middle East Energy Corridor',
      stateKind: 'energy_price_shock',
      topPaths: [
        {
          pathId: 'market_cascade',
          label: 'Insurance repricing spreads into tanker routes',
          summary: 'Energy traders stay reactive while insurers and shippers widen buffers.',
          confidence: 0.72,
          keyActors: ['Iran', 'US Navy', 'Gulf producers'],
        },
      ],
      dominantReactions: ['Higher tanker risk premia', 'Short-dated crude volatility'],
      stabilizers: ['Producer export incentives', 'Naval deterrence'],
      invalidators: ['Verified de-escalation accord', 'Fast insurance repricing reversal'],
    },
    {
      theaterId: 'us-macro',
      theaterLabel: 'US Macro Regime',
      stateKind: 'market_cascade',
      topPaths: [
        {
          pathId: 'containment',
          label: 'Range-bound repricing after macro release',
          summary: 'Markets absorb macro surprises without breaking the broader range.',
          confidence: 0.61,
          keyActors: ['Federal Reserve', 'Rates desks'],
        },
      ],
      dominantReactions: ['Rates volatility', 'Sector rotation'],
      stabilizers: ['Stable labor data', 'Contained inflation trend'],
      invalidators: ['Hot inflation surprise'],
    },
  ]);
}

export function getLocalFallbackTheaterPostureResponse(): GetTheaterPostureResponse {
  const assessedAt = hoursAgoMs(1);
  return {
    theaters: [
      { theater: 'iran-theater', postureLevel: 'critical', activeFlights: 17, trackedVessels: 11, activeOperations: ['strike_capable', 'escort'], assessedAt },
      { theater: 'taiwan-theater', postureLevel: 'elevated', activeFlights: 11, trackedVessels: 7, activeOperations: ['maritime_presence'], assessedAt },
      { theater: 'east-med-theater', postureLevel: 'elevated', activeFlights: 8, trackedVessels: 6, activeOperations: ['air_patrol'], assessedAt },
      { theater: 'blacksea-theater', postureLevel: 'normal', activeFlights: 4, trackedVessels: 3, activeOperations: ['surveillance'], assessedAt },
    ],
  };
}

type LocalTopicId = 'military' | 'cyber' | 'nuclear' | 'sanctions' | 'intelligence' | 'maritime';

function article(title: string, source: string, hoursAgo: number, tone: number, urlSuffix: string): GdeltArticle {
  return {
    title,
    source,
    date: hoursAgoIso(hoursAgo),
    image: '',
    language: 'eng',
    tone,
    url: `https://example.com/${urlSuffix}`,
  };
}

const LOCAL_GDELT_ARTICLES: Record<LocalTopicId, GdeltArticle[]> = {
  military: [
    article('Regional air-defense units increase readiness near Gulf transit lanes', 'Defense Journal', 2, -1.8, 'military-1'),
    article('Naval escort activity rises around key energy shipping routes', 'Maritime Brief', 4, -0.9, 'military-2'),
    article('Force posture remains elevated as partners expand joint patrols', 'Strategic Watch', 7, -0.5, 'military-3'),
  ],
  cyber: [
    article('Critical infrastructure operators review contingency playbooks after new intrusion reports', 'Cyber Monitor', 3, -1.4, 'cyber-1'),
    article('Regional banks harden access controls amid phishing surge', 'Security Ledger', 8, -0.8, 'cyber-2'),
  ],
  nuclear: [
    article('IAEA commentary keeps nuclear compliance risks in focus', 'Global Affairs Wire', 5, -1.1, 'nuclear-1'),
    article('Analysts watch enrichment rhetoric for signs of negotiation drift', 'Policy Review', 10, -0.6, 'nuclear-2'),
  ],
  sanctions: [
    article('Sanctions discussions widen pressure on shipping, energy, and finance channels', 'Trade Policy Daily', 2, -0.7, 'sanctions-1'),
    article('Export-control talk adds uncertainty for industrial suppliers', 'Market Structure', 9, -0.4, 'sanctions-2'),
  ],
  intelligence: [
    article('Open-source tracking intensifies around covert logistics and sanctions evasion claims', 'Intel Review', 4, -1.0, 'intelligence-1'),
    article('Counterintelligence warnings sharpen amid espionage-related arrests', 'Security Review', 11, -1.3, 'intelligence-2'),
  ],
  maritime: [
    article('Tanker routing shifts highlight chokepoint sensitivity in the Gulf and Red Sea', 'Shipping Watch', 1, -1.2, 'maritime-1'),
    article('Maritime insurers widen risk assumptions after latest corridor incidents', 'Lloyds Brief', 6, -0.9, 'maritime-2'),
    article('Container and energy lanes remain open but are operating with higher buffers', 'Port Intel', 12, -0.3, 'maritime-3'),
  ],
};

function buildTimeline(values: number[]): GdeltTimelinePoint[] {
  const now = Date.now();
  return values.map((value, index) => ({
    date: new Date(now - (values.length - 1 - index) * 4 * 60 * 60 * 1000).toISOString(),
    value,
  }));
}

const LOCAL_GDELT_TIMELINES: Record<LocalTopicId, { tone: GdeltTimelinePoint[]; vol: GdeltTimelinePoint[] }> = {
  military: { tone: buildTimeline([-0.6, -0.9, -1.2, -1.8]), vol: buildTimeline([22, 28, 31, 36]) },
  cyber: { tone: buildTimeline([-0.3, -0.5, -0.8, -1.1]), vol: buildTimeline([10, 14, 16, 19]) },
  nuclear: { tone: buildTimeline([-0.4, -0.6, -0.7, -1.0]), vol: buildTimeline([8, 9, 12, 13]) },
  sanctions: { tone: buildTimeline([-0.2, -0.3, -0.5, -0.7]), vol: buildTimeline([7, 11, 13, 15]) },
  intelligence: { tone: buildTimeline([-0.4, -0.7, -0.9, -1.2]), vol: buildTimeline([6, 10, 11, 14]) },
  maritime: { tone: buildTimeline([-0.4, -0.6, -0.8, -1.1]), vol: buildTimeline([15, 18, 23, 26]) },
};

export function getLocalFallbackTopicArticles(topicId: string): GdeltArticle[] {
  return LOCAL_GDELT_ARTICLES[topicId as LocalTopicId] ?? [];
}

export function getLocalFallbackTopicTimeline(topicId: string): { tone: GdeltTimelinePoint[]; vol: GdeltTimelinePoint[]; fetchedAt: string } | null {
  const timeline = LOCAL_GDELT_TIMELINES[topicId as LocalTopicId];
  if (!timeline) return null;
  return {
    ...timeline,
    fetchedAt: new Date().toISOString(),
  };
}

export function getLocalFallbackArticlesForQuery(query: string): GdeltArticle[] {
  const lower = query.toLowerCase();
  if (lower.includes('military')) return getLocalFallbackTopicArticles('military');
  if (lower.includes('cyber')) return getLocalFallbackTopicArticles('cyber');
  if (lower.includes('nuclear')) return getLocalFallbackTopicArticles('nuclear');
  if (lower.includes('sanctions') || lower.includes('tariff')) return getLocalFallbackTopicArticles('sanctions');
  if (lower.includes('intelligence') || lower.includes('espionage')) return getLocalFallbackTopicArticles('intelligence');
  if (lower.includes('maritime') || lower.includes('hormuz') || lower.includes('warship')) return getLocalFallbackTopicArticles('maritime');
  return [];
}
