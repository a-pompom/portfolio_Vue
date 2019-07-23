<template>
	<div v-show="currentModalIndex === index" class="works__modal">	
		<p>{{ workDetail.gitHubLink }}</p>
	</div>
</template>


<script>
	
	export default {
		props: {
			currentModalIndex: Number,
			index: Number,
			workDetail: Object
		}
		
		
		
		
	}
</script>