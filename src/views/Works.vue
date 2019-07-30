<template>

	<div class="works">
		
		<div class="works__title">
			<h1>つくったもの</h1>
		</div>

		<div class="works__category">
			<ul class="works__category-list">
				<!-- カテゴリ要素 -->
				<li 
					v-for="category in worksCategoryArray"
					v-bind:key="category.id"
					v-on:click="selectedCategory = category.name"

					class="works__category-list__item">

					<!-- アイコンが無い場合は代替テキストを表示 -->
					<h4 v-if="category.imageSource === '' ">
						{{ category.name }}
					</h4>
					<img v-else v-bind:src="category.imageSource">

					<p>{{ category.name }}</p>

				</li>

				<!-- 全カテゴリ表示 -->
				<li 
					v-on:click="selectedCategory = ''"
					class="works__category-list__item">
					<h4>ALL</h4>
					
				</li>
			</ul>	
		</div>
		
		<div class="works__content">
			
			<!-- 一覧要素 フィルタリングをアニメーションさせるため、ulをtransition-groupで表現 -->
			<transition-group tag="ul" name="filter" class="works__content-list">
				<!-- 各要素へフォーカス + クリックで
					 詳細をモーダルで表示
				 -->
				<li 
					v-for="(workSummary, summaryIndex) in filteredWorksSummary"
					v-bind:key="workSummary.id"

					v-on:click="clickWork(summaryIndex)"
					class="works__content-list__item">
					
					<!-- 概要(キャプチャ,  アプリ名) -->
					<figure class="item">
						<img v-bind:src="workSummary.appImageSource">
						<h3>{{ workSummary.appName }}</h3>

						<figcaption class="item-mask">
							<h2 class="item-mask--text">
								Read More...
							</h2>
						</figcaption>

					</figure>

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
			</transition-group>
			
		</div> <!-- /content -->
		
	</div>
</template>

<script>
	import worksSummary from "../assets/works_data/works.json";
	import worksDetail from "../assets/works_data/worksDetail.json";
	import worksDetailModal from "./WorksDetailModal.vue";

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
				worksDetailContent: worksDetailModal, //モーダル要素として渡すコンポーネント 引数として渡される

				selectedCategory: "",
			};
		},

		computed: {
			// カテゴリー一覧
			worksCategoryArray() {
				return this.getCategoryFromTags();
			},

			// カテゴリ選択で絞り込まれたアプリ一覧
			filteredWorksSummary() {
				// 未フィルタリングの場合は全件描画
				if (this.selectedCategory === "") {
					return this.worksSummary;
				}

				let filteredResult = [];
				
				// 各アプリについて、選択されたカテゴリが含まれるか検証し、含むもののみをフィルタ結果に追加
				// カテゴリ選択は頻繁に呼び出されるものでもなく、副次的な要素なので、
				// dataプロパティを無闇に増やすのではなく、アプリ一覧から動的に生成するよう処理
				this.worksSummary.forEach((workSummary) => {
					let targetCategoryArray = this.getTagListFromApp(workSummary.id);

					if (targetCategoryArray.includes(this.selectedCategory)) {
						filteredResult.push(workSummary);
					}
				});

				return filteredResult;

			}
		},
		
		/**
		 * - モーダルコンポーネント
		 */
		components: {
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
			},

			/**
			 * アプリのタグ一覧をもとに
			 * カテゴリリストを生成する
			 */
			getCategoryFromTags() {

				let categoryArray = [];
				// 重複除外のため、登録済みのカテゴリ名を管理
				let categoryNameArray = [];

				// アプリのappIconListプロパティにカテゴリ情報が含まれているので、ループで取得
				this.worksSummary.forEach((workSummary) => {

					workSummary.appIconList.forEach((category) => {

						// 既に登録済みでない場合、id, カテゴリ名, 画像ソースを登録
						if (!categoryNameArray.includes(category.tagName)) {

							categoryArray.push({
								id: categoryNameArray.length, // ループの度にカテゴリの要素数は更新されるのでユニーク要素として利用
								name: category.tagName,
								imageSource: category.imgSource
							});

							//登録したら重複除外用のリストへタグ名を登録
							categoryNameArray.push(category.tagName);

						}
						
					});

				});

				return categoryArray;
			},

			/**
			 * アプリに設定されたタグの一覧を配列形式で取得する
			 */
			getTagListFromApp(appId) {
				let appCategoryArray = [];
				worksSummary[appId].appIconList.forEach((element) => {
					appCategoryArray.push(element.tagName);
				});

				return appCategoryArray;
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

		// カテゴリ一覧
		&__category {
			width: 50%;
			height: 64px;
			margin: 20px auto;

			&-list {
				@include flex-between;
				&__item {
					cursor: pointer;

					& img {
						width: 48px;
					}
					& h4 {
						height: 30px;
					}
					
				}
			}

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
	
	// フォーカスでオーバーレイ要素で「Read More」テキストを表示
	.item{
		width: 100%;
		height: 100%;
		margin: 0;

		position: relative;
  		overflow: hidden;

		& img {
			max-width: 400px;
			max-height: 180px;
		}

		//各要素に覆いかぶさるオーバーレイ要素
		&-mask {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 2;

			width: 100%;
			height: 100%;
			background: rgba(0,0,0,.6);

			transition: .3s;
			opacity: 0;
			
			//「Read More」テキスト
			&--text {
				width: 100%;
				height: 100%;
				color: #fff;
				margin: 0;
				

			}
		}

		&:hover &-mask {
			opacity: 1.0;
			padding-top: 25%;
		}
	}

	// カテゴリフィルタリング
	.filter-enter-active, .filter-leave-actice, .filter-move {
		transition: opacity 0.5s, transform 1.2s;
	}
	.filter-enter, .filter-leave-to {
		opacity: 0;
	}
	
	
</style>
