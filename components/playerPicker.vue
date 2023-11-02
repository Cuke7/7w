<template>
  <div class="grid grid-cols-4 gap-4">
    <div v-for="player in players">
      <div
        @click="toggle(player)"
        class="flex items-center justify-center relative"
      >
        <img
          :src="`/pictures/${player.imgSrc}.jpg`"
          class="rounded-full w-14 h-14 object-cover"
        />
        <Transition>
          <div
            class="bg-white bg-opacity-30 rounded-full w-14 h-14 absolute flex"
            v-show="player.isPicked"
          >
            <UIcon
              name="i-heroicons-check"
              class="bg-primary w-3/4 h-3/4 m-auto"
            />
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { type Player } from "../gameData";

const props = defineProps<{
  modelValue: Player[];
}>();

const emit = defineEmits(["update:modelValue"]);

const players = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});

function toggle(player: Player) {
  player.isPicked = !player.isPicked;
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
