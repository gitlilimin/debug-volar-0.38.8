<script setup lang="ts">
import { ref, reactive } from 'vue'

const props = defineProps({
	textColor: {
		type: String,
		default: '#fe2104',
	},
})
</script>

<template>
	<div class="rounded border-red-400 border inline-flex px-2 border-solid cursor-pointer hover:scale-110">
		<slot></slot>
	</div>
</template>
