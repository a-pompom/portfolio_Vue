<template>

	<!-- モーダル要素 -->
	<div class="works__detail">

		<!-- オーバーレイ要素 クリックでモーダルを閉じる -->
		<div 
			v-show="isModalVisible"
			v-on:click.stop="close"
			class="works__modal-overlay">
		</div>

		<!-- モーダルの中身 -->
		<div
			v-show="isModalVisible"
			v-bind:id="modalId"
			class="works__modal">	

			<!-- ヘッダ タイトルと×(閉じる)ボタン -->
			<div class="modal__header">
				<h3>
					{{ workSummary.appName }}
				</h3>

				<h2 v-on:click.stop="close" class="modal__header__close">×</h2>
			</div>
			
			<!-- コンテンツ -->
			<div class="modal__content">

				<!-- キャプション + GitHubへのリンク -->
				<div class="modal__content--figure">

					<img v-bind:src="workSummary.appImageSource" class="figure-capture">
					
					<a v-bind:href="workDetail.gitHubLink" class="figure-git-hub">
						<img src="../../public/external/github.svg">
					</a>
					
				</div>
				
				<!-- テキスト要素 文字列の配列をpタグのリストへ展開して表示 -->
				<div class="modal__content--info" v-html="detailComment">
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
				<div class="modal__footer">
					<button
						v-on:click.stop="close"
						class="button--close"
						>
						Close
					</button>
				</div>

			</div>

		</div> <!-- /モーダルの中身 -->
	</div> <!-- /モーダル -->
	
</template>

<script>
	export default {
		/**
		 * - 現在モーダル表示対象となっているインデックス
		 * - 各モーダルコンポーネントのID currentModalIndexと一致したらモーダル表示
		 * - 概要要素を格納したJSON
		 * - 詳細表示要素を格納したJSON
		 */
		props: {
			currentModalIndex: Number,
			index: Number,
			workSummary: Object,
			workDetail: Object
		},

		computed: {
			// 各モーダルを識別するためのID
			modalId() {
				return "modal" + this.index;
			},

			// モーダルの表示・非表示を管理
			isModalVisible() {
				console.log(this.currentModalIndex + ' : ' + this.index);
				return this.currentModalIndex === this.index;
			},

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
				
			},

			/**
			 * モーダルを閉じるためのイベントが購読されたときに発火
			 * 親要素へ非表示にするためのイベントを伝播
			 */
			close() {
				if (!this.isModalVisible) {
					return;
				}
				this.$emit("modalClose");
			}

		}
		
	}
</script>


<style lang="scss" scoped>
	
	// モーダルのオーバーレイ, 本体
	.works__modal-overlay {
		z-index: 999;
		position: fixed;
		top:0;
		left:0;
		width:100%;
		height:120%;
		background-color:rgba(0,0,0,0.7);
	}

	.works__modal {
		z-index: 9999;
		position: fixed;
		// 位置はvueで算出した後に設定
		width:75%;
		height: 80%;
		padding: 20px;
		border:2px solid #aaa;
		background:#fff;
		
	}

	//モーダルの各要素
	//ヘッダ
	.modal__header {
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
	.modal__content {
		width: 100%;
		height: 90%;
		margin: 10px auto;
		position: relative;

		&--figure {
			width: 100%;
			max-height: 50%;
			
			@include flex-between;
		}

		// 縦長のときは文字サイズを小さめにして左寄せにした方が見映えがよかった
		@include for-landscape() {
			&--info {
				font-size: 1.3rem;
				
			}
		}
		@include for-portrait() {
			&--info {
				font-size: 1.1rem;
				line-height: 140%;
				text-align: left;
				margin-top: 10%;
			}
		}
	}

	// フッタ
	.modal__footer {
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