<template>
  <div class="text-center text-4xl font-mono mb-8 font-bold">7 wonders app</div>

  <div class="flex items-center gap-4 mt-8 mb-4">
    <hr class="flex-1 border-primary" />
    <UIcon name="i-heroicons-cog-6-tooth" class="w-8 h-8 text-pink-400"></UIcon>
    <h1 class="text-2xl font-mono">Extensions</h1>
    <hr class="flex-1 border-primary" />
  </div>

  <div class="gap-4 flex flex-col">
    <label v-for="extension in extensions" class="flex justify-between">
      <span>{{ extension.name }}</span>
      <UToggle
        on-icon="i-heroicons-check-20-solid"
        off-icon="i-heroicons-x-mark-20-solid"
        v-model="extension.isSelected"
      />
    </label>
  </div>

  <div class="flex items-center gap-4 mt-8 mb-4">
    <hr class="flex-1 border-primary" />
    <UIcon name="i-heroicons-user" class="w-8 h-8 text-pink-400"></UIcon>
    <h1 class="text-2xl font-mono">Joueurs</h1>
    <hr class="flex-1 border-primary" />
  </div>

  <PlayerPicker v-model="playersList" />

  <div class="flex items-center gap-4 mt-8 mb-4">
    <hr class="flex-1 border-primary" />
    <UIcon name="i-heroicons-user" class="w-8 h-8 text-pink-400"></UIcon>
    <h1 class="text-2xl font-mono">Distribution</h1>
    <hr class="flex-1 border-primary" />
  </div>

  <UTable
    :columns="tableColumns"
    :rows="players"
    class="border-gray-600 border-[1px] rounded-t-md"
  >
    <template #name-header="{ column }">
      <span class="text-primary">{{ column.label }}</span>
    </template>
    <template #id-header="{ column }">
      <span class="text-primary">{{ column.label }}</span>
    </template>
    <template #wonder-header="{ column }">
      <span class="text-primary">{{ column.label }}</span>
    </template>
    <template #name-data="{ row }">
      <span class="text-white">{{ row.name }}</span>
    </template>
    <template #wonder-data="{ row }">
      <span class="text-white">{{ row.wonder }}</span>
    </template>
  </UTable>
</template>

<script lang="ts" setup>
import {
  extensions,
  totalWonders,
  tableColumns,
  playersList,
  players,
} from "../gameData";
</script>

<style>
* {
  -webkit-tap-highlight-color: transparent;
}
</style>
