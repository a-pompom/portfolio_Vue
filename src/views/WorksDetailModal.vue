<template>
	<!-- モーダルは中心に表示して背景を暗くする コメント,GitHubリンクなんかを載せていきたい -->
	<div v-show="currentModalIndex === index" class="works__modal">	
		<p>{{ workDetail.gitHubLink }}</p>
	</div>
</template>


<script>
	
	export default {
		/**
		 * - 現在モーダル表示対象となっているインデックス
		 * - 各モーダルコンポーネントのID currentModalIndexと一致したらモーダル表示
		 * - 詳細表示要素を格納したJSON
		 */
		props: {
			currentModalIndex: Number,
			index: Number,
			workDetail: Object
		}
		
	}
</script>