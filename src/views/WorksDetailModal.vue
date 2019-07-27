<template>

	<div class="works__detail">
		<div v-show="isModalVisible" class="works__modal-overlay"></div>
		<!-- モーダルは中心に表示して背景を暗くする コメント,GitHubリンクなんかを載せていきたい -->
		<div 
			v-show="isModalVisible"
			v-bind:id="modalId"
			class="works__modal">	
			<p>{{ workDetail.gitHubLink }}</p>
		</div>
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
		},

		computed: {
			// 各モーダルを識別するためのID
			modalId() {
				return "modal" + this.index;
			},

			// モーダルの表示・非表示を管理
			isModalVisible() {
				return this.currentModalIndex === this.index;
			}

		},

		watch: {

			// モーダル要素の幅・高さは描画されて初めて決定されるので、
			// 描画後に位置を設定
			isModalVisible() {
				if (this.isModalVisible) {
					this.setModalPosition();
				}
			}
		},

		methods: {
			/**
			 * 描画後に得られるモーダル要素の高さ・幅から
			 * モーダルを中心に配置するための位置スタイルを設定
			 */
			setModalPosition() {
				this.$nextTick(() => {
					//画面
					let windowWidth = window.innerWidth;
					let windowHeight = window.innerHeight;

					//モーダル要素
					let modalDOM = document.getElementById(this.modalId);
					let modalHeight = modalDOM.offsetHeight;
					let modalWidth = modalDOM.offsetWidth;

					// モーダル要素の絶対位置を画面・モーダルの幅・高さをもとに算出し、更新
					modalDOM.style.top = (windowHeight - modalHeight) / 2 + "px";
					modalDOM.style.left = (windowWidth - modalWidth) / 2 + "px";
					
				});
				
			}
		}
		
	}
</script>


<style lang="scss" scoped>
	
	.works__modal-overlay {
		z-index:1;
		position:fixed;
		top:0;
		left:0;
		width:100%;
		height:120%;
		background-color:rgba(0,0,0,0.75);
	}

	.works__modal {
		z-index:9999;
		position: fixed;
		// 位置はvueで算出した後に設定
		width:50%;
		height: 50%;
		margin:1.5em auto 0;
		padding:10px 20px;
		border:2px solid #aaa;
		background:#fff;
		
	}

</style>