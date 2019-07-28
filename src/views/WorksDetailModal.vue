<template>

	<!-- モーダル要素 -->
	<div class="works-detail">
		<!-- ヘッダ タイトルと×(閉じる)ボタン -->
		<div class="works-detai__header">
			<h3>
				{{ workSummary.appName }}
			</h3>

			<h2 v-on:click.stop="close" class="works-detail__header__close">×</h2>
		</div>
		
		<!-- コンテンツ -->
		<div class="works-detail__content">

			<!-- キャプション + GitHubへのリンク -->
			<div class="works-detail__content--figure">

				<img v-bind:src="workSummary.appImageSource" class="figure-capture">
				
				<a v-bind:href="workDetail.gitHubLink" class="figure-git-hub">
					<img src="../../public/external/github.svg">
				</a>
				
			</div>
			
			<!-- テキスト要素 文字列の配列をpタグのリストへ展開して表示 -->
			<div class="works-detail__content--info" v-html="detailComment">
			</div>

			<!-- 使用した技術 -->
			<ul class="item__icon-list">
			
				<li 
					v-for="(itemIcon) in workSummary.appIconList"
					v-bind:key="itemIcon.id"
					class="item__icon-list__image">
					
					<!-- アイコンが無い場合は代替テキストを表示 -->
					<h4 v-if="itemIcon.imgSource === '' " class="item__icon-list__alt-text">{{ itemIcon.tagName }}</h4>
					<img v-else v-bind:src="itemIcon.imgSource">
					
					<p>{{ itemIcon.tagName }}</p>
					
				</li>
				
			</ul>

			<!-- フッタ 閉じるボタン -->
			<div class="works-detail__footer">
				<button
					v-on:click.stop="close"
					class="button--close"
					>
					Close
				</button>
			</div>
		</div>
			
	</div> <!-- /モーダル -->
	
</template>

<script>
	export default {
		/**
		 * - 現在モーダル表示対象となっているインデックス
		 * - 各モーダルコンポーネントのID currentworks-detailIndexと一致したらモーダル表示
		 * - 概要要素を格納したJSON
		 * - 詳細表示要素を格納したJSON
		 */
		props: {
			currentModalIndex: Number,
			index: Number,
			workSummary: Object,
			workDetail: Object,
			visible: Boolean
		},

		computed: {

			// Stringの配列をpタグへ展開
			detailComment() {
				let result = "";

				this.workDetail.commentArray.forEach((element) => {
					result += "<p>";
					result += element;
					result += "</p>";
				})

				return result;
			}

		},

		watch: {

			// モーダル要素の幅・高さは描画されて初めて決定されるので、
			// 描画後に位置を設定
			visible() {
				if (this.visible) {
					this.setWorksDetailPosition();
				}
			}
		},

		methods: {
			/**
			 * 描画後に得られるモーダル要素の高さ・幅から
			 * モーダルを中心に配置するための位置スタイルを設定
			 */
			setWorksDetailPosition() {
				this.$nextTick(() => {
					//画面
					let windowWidth = window.innerWidth;
					let windowHeight = window.innerHeight;

					//モーダル要素
					let worksDetailDOM = document.getElementById(this.works-detailId);
					let worksDetailHeight = works-detailDOM.offsetHeight;
					let worksDetailWidth = works-detailDOM.offsetWidth;

					// モーダル要素の絶対位置を画面・モーダルの幅・高さをもとに算出し、更新
					worksDetailDOM.style.top = (windowHeight - works-detailHeight) / 2 + "px";
					worksDetailDOM.style.left = (windowWidth - works-detailWidth) / 2 + "px";
					console.log(windowHeight);
					console.log(worksDetailHeight);
				});
				
			},

			/**
			 * モーダルを閉じるためのイベントが購読されたときに発火
			 * 親要素へ非表示にするためのイベントを伝播
			 */
			close() {
				if (!this.visible) {
					return;
				}
				this.$emit("close");
			}

		}
		
	}
</script>


<style lang="scss" scoped>
	
	
	.works-detail {
		// 位置はvueで算出した後に設定
		width:75%;
		height: 80%;
		padding: 20px;
		border:2px solid #aaa;
		background:#fff;
		
	}

	//モーダルの各要素
	//ヘッダ
	.works-detail__header {
		width: 100%;
		height: 7%;
		margin: 0;
		border-bottom: 2px solid #f5f5f5;

		// 縦長のときはタイトルが長くなるから改行した方がよさげ
		@include for-portrait() {
			height: 11%;
			font-size: 1.2rem;
			text-align: center;
			margin-top: 20px;
		}

		&__close {
			position: absolute;
			right: 20px;
			top: 0;
			border-radius: 50%;

			&:hover, &:active{
				cursor: pointer;
				background-color: #f5f5f5;
			}
		}
	}

	// コンテンツ
	.works-detail__content {
		width: 100%;
		height: 90%;
		margin: 10px auto;
		position: relative;

		&--figure {
			width: 100%;
			max-height: 50%;
			@include for-landscape() {
				max-height: 65%;
			}
			@include flex-between;
		}

		&--info {
			font-size: 1.1rem;
			line-height: 140%;
			text-align: left;

			border-top: 2px solid #f5f5f5;
			margin-top: 10px;
			@include for-portrait() {
				margin-top: 10%;
			}
		}
	}

	// フッタ
	.works-detail__footer {
		position: absolute;
		bottom: 32px;
		left: 20px;
	}


	// キャプション
	// 縦長の場合はGitHubアイコンを小さめに
	@include for-landscape() {
		.figure-capture {
			max-width: 75%;
		}
		.figure-git-hub {
			width: 200px;
			max-width: 20%;
		}	
	}
	@include for-portrait() {
		.figure-capture {
			max-width: 85%;
		}
		.figure-git-hub {
			width: 200px;
			max-width: 10%;
		}	
	}
	

	// タグ
	.item__icon-list {
		position: absolute;
		bottom: 20px;
		right: 20px;
		@include flex-right;
		margin-right: 2%;
		
		&__image {
			
			margin-right: 5%;
			
			& img {
				width: 32px;
			}
			
		}

		&__alt-text {
			height: 32px;
			margin-top: 0;
		}
	}

	//閉じるボタン
	.button--close {
		width: 100px;
		background-color: #adadad;
		color: #fff;
		//文字のスタイル
		text-decoration: none;
		text-align: center;
		font-size: 1.3rem;
		line-height: 1.5;
		
		//ボタンの枠のスタイル
		border-radius: 5px;
		
		//ボタンの配置のスタイル
		display: inline-block;
		margin-right: 20px;
		margin-top: 5px;
		cursor: pointer;
		
		&:hover, &:active{
			opacity: 0.8;
		}

	}

</style>