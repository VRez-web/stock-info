<script setup lang="ts">
import {stockInfo} from "~/composables/stock/stockDetails";

</script>

<template>
  <div>
    <table>
      <tbody>
      <tr class="border-bottom-1 border-red-300">
        <td>Country</td>
        <td>{{ stockInfo?.country }}</td>
      </tr>
      <tr class="border-bottom-1 border-red-100">
        <td>Market Cap</td>
        <td>{{ stockInfo?.marketCapitalization }}</td>
      </tr>
      <tr class="border-bottom-1 border-red-100">
        <td>IPO</td>
        <td>{{ stockInfo?.ipo }}</td>
      </tr>
      <tr class="border-bottom-1 border-red-100">
        <td>Industry</td>
        <td>{{ stockInfo?.finnhubIndustry }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
