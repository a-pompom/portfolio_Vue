<template>
	<div v-show="visible" class="works__modal">	
		<p>{{ workDetail.gitHubLink }}</p>
	</div>
</template>


<script>
	
	
	export default {
		props: {
			visible: Boolean,
			index: Number,
			workDetail: Object,
			test: String
			
		},
		
		watch: {
			
			visible(o, n) {
				console.log('changed');
			}
	}
		
		
		
		
	}
</script>