<template>

	<div class="works">
		
		<div class="works__title">
			<h1>つくったもの</h1>
		</div>
		
		<div class="works__content">
			
			<ul class="works__content-list">
				<!-- 各要素へフォーカスすると
					 詳細をモーダルで表示
				 -->
				<li 
					v-for="(workSummary, summaryIndex) in worksSummary"
					v-bind:key="workSummary.id"
					v-on:click="focusWork(summaryIndex)"
					class="works__content-list__item">
					
					<!-- 概要(キャプチャ,  アプリ名) -->
					<div class="item__header">
						<img v-bind:src="workSummary.appImageSource">
						<h3>{{ workSummary.appName }}</h3>
					</div>
					
					<!-- 使用した技術 -->
					<ul class="item__icon-list">
					
						<li 
							v-for="(itemIcon) in workSummary.appIconList"
							v-bind:key="itemIcon.id"
							class="item__icon-list__image">
							
							<h2 v-if="itemIcon.imgSource === '' ">{{ itemIcon.tagName }}</h2>
							<img v-else v-bind:src="itemIcon.imgSource">
							
							<p>{{ itemIcon.tagName }}</p>
							
						</li>
						
					</ul>

					<!-- モーダルコンポーネント
						- 表示対象のインデックス
						- ループインデックス 配列で表示フラグを管理するとwatchイベントでelementの変更を検知できないのでcurrentIndexと
						  ループインデックスで表示・非表示を管理
						- 詳細要素を格納したJSON
					 -->
					<works-detail-modal
						v-bind:currentModalIndex="currentModalIndex"
						v-bind:index="summaryIndex"
						v-bind:workDetail="worksDetail[summaryIndex]"
						v-on:modalClose="closeModal"
						>
					</works-detail-modal>

				</li>
			</ul>
			
		</div>
		
	</div>
</template>

<script>
	
	import worksSummary from "../assets/works_data/works.json";
	import worksDetail from "../assets/works_data/worksDetail.json";
	import worksDetailModal from "./WorksDetailModal.vue";
	
	export default {
		
		/**
		 * 表示要素, モーダル表示インデックスを管理
		 */
		data() {
			return {
				worksSummary: worksSummary,
				worksDetail: worksDetail,
				currentModalIndex: -1,
			};
		},
		
		/**
		 * - モーダルコンポーネント
		 */
		components: {
			worksDetailModal: worksDetailModal
		},
		
		methods: {
			
			/**
			 * 各「つくったもの」要素へフォーカスされたときに発火
			 * モーダル用インデックスを変更することで表示対象を切り替え
			 * 
			 * @param {Number} index: フォーカス対象のインデックス
			 */
			focusWork(index) {
				
				this.currentModalIndex = index;
			},

			closeModal() {
				this.currentModalIndex = -1;
				console.log('closed');
				
			}
		},
		
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
			
			width: 80%;
			margin: 20px auto;
			
			&-list {
				
				&__item {
					font-size: 1.2rem;
					border: 1px solid #000;
					border-radius: 5%;
					text-align: center;
					margin-top: 30px;
					
				}
				
			}
		}
		
	}
	
	//アイコンのスタイル
	.item__header {
		& img {
			width: 500px;
		}
	}
	
	.item__icon-list {
		@include flex-right;
		margin-right: 10%;
		
		&__image {
			
			margin-right: 5%;
			
			& img {
				width: 64px;
			}
			
		}
	}
</style>
