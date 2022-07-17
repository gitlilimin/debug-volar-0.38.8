<script setup lang="ts">
const props = defineProps({
	msg:String
})
</script>

<template>
	<div class="text-2xl">this is hello world component. {{msg}}</div>
</template>