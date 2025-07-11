<script>
  export let data;
  export let variant = "default";
  export let concept = "default";
  export let className = "";

  $: cardClasses = `rounded-lg p-4 border ${className}`;
  $: isMini = variant === "mini";
  $: isMonospace = concept === "monospace";
</script>

<div class={cardClasses}>
  {#if isMini}
    <div class="space-y-2">
      <h3 class="font-bold text-sm {isMonospace ? 'font-mono' : ''}">{data.title}</h3>
      <p class="text-xs opacity-80 {isMonospace ? 'font-mono' : ''}">{data.description}</p>
      {#if data.severity}
        <div class="flex items-center gap-2">
          <span class="text-xs px-2 py-1 rounded bg-red-500/20 text-red-300">Severity: {data.severity}</span>
        </div>
      {/if}
    </div>
  {:else}
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-bold {isMonospace ? 'font-mono' : ''}">{data.title}</h3>
        {#if data.severity}
          <span class="px-3 py-1 rounded-full text-sm bg-red-500/20 text-red-300">
            {data.severity}
          </span>
        {/if}
      </div>
      <p class="text-sm opacity-90 {isMonospace ? 'font-mono' : ''}">{data.description}</p>
      {#if data.id}
        <div class="text-xs opacity-60 font-mono">ID: {data.id}</div>
      {/if}
    </div>
  {/if}
</div> 