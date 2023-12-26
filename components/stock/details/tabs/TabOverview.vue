<script setup lang="ts">
import TabOverviewTableItem from "~/components/stock/details/TabOverviewTableItem.vue";
import {stockInfo, stockBasicFinance} from "~/composables/stock/stockDetails";
import {formatPrice} from "~/utils/formatPrice";


const capitalization = computed(() => stockInfo ? formatPrice(stockInfo.value.marketCapitalization) : '')
const eps = computed(() => stockBasicFinance.value?.metric?.epsExclExtraItemsTTM.toFixed(2))
</script>

<template>
  <div class="flex gap-4">
    <div>
      <tab-overview-table-item :header="'Market Cap'">
        {{ capitalization }}
      </tab-overview-table-item>
      <tab-overview-table-item :header="'Country'">
        {{ stockInfo?.country }}
      </tab-overview-table-item>
      <tab-overview-table-item :header="'EPS'">
        {{ eps }}
      </tab-overview-table-item>
    </div>
    <div>
      <tab-overview-table-item :header="'52-Week Range'">
        {{ stockBasicFinance?.metric['52WeekLow'] }} - {{ stockBasicFinance?.metric['52WeekHigh'] }}
      </tab-overview-table-item>
      <tab-overview-table-item :header="'Beta'">
        {{ stockBasicFinance?.metric?.beta.toFixed(2) }}
      </tab-overview-table-item>
      <tab-overview-table-item :header="'PE ttm'">
        {{ stockBasicFinance?.metric?.peTTM.toFixed(2) }}
      </tab-overview-table-item>
    </div>
  </div>
</template>
