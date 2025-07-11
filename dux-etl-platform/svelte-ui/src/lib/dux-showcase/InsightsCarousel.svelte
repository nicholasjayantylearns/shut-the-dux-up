<script>
  import { onMount } from 'svelte';
  import { Carousel } from 'svelte-carousel';
  import ProblemCard from './cards/ProblemCard.svelte';
  import BehaviorCard from './cards/BehaviorCard.svelte';
  import ResultCard from './cards/ResultCard.svelte';
  import { getInsightChains } from './data-service.js';

  // State
  let insightChains = [];
  let loading = true;
  let error = null;
  let useLiveData = false;

  onMount(async () => {
    await loadInsightChains();
  });

  async function loadInsightChains() {
    try {
      loading = true;
      const chains = await getInsightChains(useLiveData);
      insightChains = chains;
    } catch (err) {
      error = err instanceof Error ? err.message : 'Failed to load insight chains';
    } finally {
      loading = false;
    }
  }

  async function toggleDataSource() {
    useLiveData = !useLiveData;
    await loadInsightChains();
  }
</script>

{#if loading}
  <div class="min-h-screen p-4 sm:p-8 text-white bg-black flex items-center justify-center">
    <div class="text-center">
      <div class="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500 mx-auto mb-4"></div>
      <p class="text-gray-400">Loading insight chains...</p>
    </div>
  </div>
{:else if error}
  <div class="min-h-screen p-4 sm:p-8 text-white bg-black flex items-center justify-center">
    <div class="text-center">
      <p class="text-red-400 mb-4">Error: {error}</p>
      <button 
        on:click={() => window.location.reload()} 
        class="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
      >
        Retry
      </button>
    </div>
  </div>
{:else}
  <div class="min-h-screen p-4 sm:p-8 text-white bg-black">
    <div class="max-w-6xl mx-auto">
      <div class="mb-12 text-center">
        <h1 class="text-5xl font-bold font-barlow mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400">
          The Evidence Tunnel
        </h1>
        <p class="text-gray-400 font-sansBody max-w-2xl mx-auto">
          An evidence-first synthesizer. Each key finding acts as a magnet, pulling you through a chain of related
          insights.
        </p>
        <!-- Development helper: Data source toggle -->
        <div class="mt-4">
          <button
            on:click={toggleDataSource}
            class="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 text-sm"
          >
            {useLiveData ? 'Switch to Mock Data' : 'Switch to Live Data'}
          </button>
          <p class="text-xs text-gray-500 mt-2">
            Current: {useLiveData ? 'Live API' : 'Mock Data'}
          </p>
        </div>
      </div>

      <Carousel
        options={{
          align: "start",
          loop: true,
        }}
        class="w-full"
      >
        {#each insightChains as chain (chain.insight.id)}
          <div class="p-1">
            <div class="bg-gray-800/50 p-8 rounded-xl border border-gray-700 space-y-8">
              <!-- Evidence "magnet" -->
              <div class="bg-black/50 border-2 border-pink-500/80 rounded-lg p-8 text-center shadow-[0_0_20px_theme(colors.pink.500),_inset_0_0_15px_theme(colors.pink.500/50)]">
                <blockquote class="font-barlow text-3xl font-bold text-white leading-tight">&quot;{chain.evidenceQuote}&quot;</blockquote>
                <cite class="block font-monospace text-sm text-pink-300/80 mt-4 not-italic tracking-wider">- {chain.evidenceCitation}</cite>
              </div>

              <!-- Monospace mini-cards -->
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ProblemCard
                  data={chain.problem}
                  variant="mini"
                  concept="monospace"
                  className="border-2 border-cyan-400/50 bg-black/30 shadow-[0_0_15px_theme(colors.cyan.500/50)] text-white"
                />
                <BehaviorCard
                  data={chain.behavior}
                  variant="mini"
                  concept="monospace"
                  className="border-2 border-cyan-400/50 bg-black/30 shadow-[0_0_15px_theme(colors.cyan.500/50)] text-white"
                />
                <ResultCard
                  data={chain.result}
                  variant="mini"
                  concept="monospace"
                  className="border-2 border-cyan-400/50 bg-black/30 shadow-[0_0_15px_theme(colors.cyan.500/50)] text-white"
                />
              </div>
            </div>
          </div>
        {/each}
      </Carousel>
    </div>
  </div>
{/if}

<style>
  :global(.font-barlow) {
    font-family: 'Barlow', sans-serif;
  }
  
  :global(.font-sansBody) {
    font-family: 'Inter', sans-serif;
  }
  
  :global(.font-monospace) {
    font-family: 'JetBrains Mono', monospace;
  }
</style> 