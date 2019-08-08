<template>

	<div class="works">
		
		<div class="works__title">
			<h1>つくったもの</h1>
		</div>
		
		<div class="works__content">
			
			<ul class="works__content-list">
				<!-- 各要素へフォーカス + クリックで
					 詳細をモーダルで表示
				 -->
				<li 
					v-for="(workSummary, summaryIndex) in worksSummary"
					v-bind:key="workSummary.id"

					v-on:click="clickWork(summaryIndex)"
					class="works__content-list__item">
					
					<!-- 概要(キャプチャ,  アプリ名) -->
					<overlay-text
						v-bind:textContent="'Read More...'"
					>
						<img v-bind:src="workSummary.appImageSource" class="item-image">
						<h3>{{ workSummary.appName }}</h3>
					</overlay-text>

					<!-- モーダルコンポーネント
						- 表示対象のインデックス
						- ループインデックス 配列で表示フラグを管理するとwatchイベントでelementの変更を検知できないのでcurrentIndexと
						  ループインデックスで表示・非表示を管理
						- 概要要素を格納したJSON
						- 詳細要素を格納したJSON
					 -->
					<modal-component
						v-bind:params="getModalParams(summaryIndex)"
						v-bind:visible="currentModalIndex === summaryIndex"
						v-bind:content="worksDetailContent"

						v-on:close="closeModal"
					>
					</modal-component>					

					 
					

				</li>
			</ul>
			
		</div> <!-- /content -->
		
	</div>
</template>

<script>
	import worksSummary from "../assets/works_data/works.json";
	import worksDetail from "../assets/works_data/worksDetail.json";
	import worksDetailModal from "./WorksDetailModal.vue";

	import overlayText from '../components/OverlayText.vue';
	import modalComponent from '../components/Modal.vue';
	
	export default {
		
		/**
		 * 表示要素, モーダル表示インデックスを管理
		 */
		data() {
			return {
				worksSummary: worksSummary,
				worksDetail: worksDetail,

				currentModalIndex: -1, //-1のときはモーダル非表示
				overlayVisible: false,

				worksDetailContent: worksDetailModal
			};
		},
		
		/**
		 * - オーバーレイテキスト
		 * - モーダルコンポーネント
		 */
		components: {
			overlayText: overlayText,
			modalComponent: modalComponent
		},
		
		methods: {
			
			/**
			 * 各「つくったもの」要素がクリックされたときに発火
			 * モーダル用インデックスを変更することで表示対象を切り替え
			 * 
			 * @param {Number} index: 対象のインデックス
			 */
			clickWork(index) {
				this.currentModalIndex = index;
			},

			/**
			 * モーダル要素へ渡す引数オブジェクトを生成する
			 */
			getModalParams(summaryIndex) {
				return {
					"currentModalIndex": this.currentModalIndex,
					"index": summaryIndex,
					"workSummary": this.worksSummary[summaryIndex],
					"workDetail": worksDetail[summaryIndex]
				};
			},

			/**
			 * モーダル終了イベントがモーダルから発火されたときに呼ばれる処理
			 * currentModalIndexを初期値に戻してモーダルを閉じる
			 */
			closeModal() {
				this.currentModalIndex = -1;
			}
		}
		
	}	
</script>


<style lang="scss" scoped>
	
	.works {
		
		width: 100%;
		height: 100%;
		
		// ページヘッダ部分
		&__title {
			text-align: center;
			
			margin-top: 20px;
			margin-bottom: 10px;
			
			border-bottom: 1px solid #000;
		}
		
		// コンテンツ 各要素を枠で囲ってリスト形式で表示させる
		&__content {
			
			width: 95%;
			margin: 20px auto;
			
			// 縦長ディスプレイでは一つずつ、横長ディスプレイでは横並びで表示
			&-list {
				
				@include for-landscape() {
					@include flex-table;
				}

				&__item {
					@include for-landscape() {
						width: 40%;
						max-height: 350px;
					}
					@include for-portrait() {
						width: 70%;
						max-height: 650px;
					}		
					
					font-size: 1.2rem;
					border: 1px solid #4d464f;
					border-radius: 1%;
					text-align: center;
					margin: 20px auto;
					
				}
				
			}
		}
		
	}
	
	// オーバーレイの親となる要素 アプリのキャプチャ + タイトル
	.item-image{
		max-width: 400px;
		max-height: 180px;

		
	}
	
	

</style>
