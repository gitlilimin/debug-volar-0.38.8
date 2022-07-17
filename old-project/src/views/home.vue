<script setup lang="ts">
import HelloWorldVue from '@/components/hello-world.vue'
import XButton from '@/components/x-components/x-button/x-button.vue'
import TestComponent from '@/components/test-component.vue'
import XComponent from '@/components/x-components/x-component.vue'
import Component from '@/components/component.vue'
import Subfile from '@/components/subfile/subfile.vue'

</script>

<template>
	<div class="my-10 text-center">
		<HelloWorldVue/>
		<XButton>Button</XButton>
		<TestComponent/>
		<XButton2/>
		<Component/>
		<Subfile/>
	</div>
</template>
