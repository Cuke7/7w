<template>
  <div class="h-screen flex flex-col overflow-auto bg-slate-900">
    <div class="p-8 text-white">
      <slot></slot>
    </div>
  </div>
</template>

<style>
/* html {
background-image: linear-gradient(
    to bottom,
    #0a244a,
    #1f1935,
    #1f1121,
    #170811,
    #000000
  ); 
}*/

/* body {
  background-color: black;
  background-image: radial-gradient(gray 1px, transparent 0);
  background-size: 40px 40px;
  background-position: -19px -19px;
} */
</style>
