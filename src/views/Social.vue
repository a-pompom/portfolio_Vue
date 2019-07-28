<template>
	<div class="social">
		
		<div class="social__title">
			<h1>活動場所</h1>
		</div>
		
		<div class="social__content">
			
			<ul class="social__content-list">
				
				<!-- 各活動場所 要素クリックで当該箇所へ遷移 -->
				<li class="social__content-list__item">
				
					<a href="https://github.com/a-pompom">
						<div class="item__header">
							<img src="../../public/external/github.svg">
							<h3>GitHub</h3>
						</div>
						<p>
							色々と作ったものを置いてます。まだまだ数が少ないからもっと頑張りたい。
						</p>
					</a>
					
				</li>
				
				<li class="social__content-list__item">
				
					<a href="https://qiita.com/a-pompom">
						<div class="item__header">
							<img src="../../public/external/qiita.svg">
							<h3>Qiita</h3>
						</div>
						<p>
							たまーにきまぐれで投稿しています。もう少し投稿増やしたい。
						</p>
					</a>
					
				</li>
				
				<li class="social__content-list__item">
				
					<a href="https://twitter.com/a_pompomP">
						<div class="item__header">
							<img src="../../public/external/twitter.svg">
							<h3>Twitter</h3>
						</div>
						<p>
							技術的なこととか呟いたり呟かなかったり。
						</p>
					</a>
					
				</li>
				
			</ul>
			
		</div>
	
	</div>
</template>



<style lang="scss" scoped>
	
	.social {
		
		width: 100%;
		height: 100%;
		
		&__title {
			text-align: center;
			
			margin-top: 20px;
			margin-bottom: 10px;
			
			border-bottom: 1px solid #000;
		}
		
		&__content {
			
			width: 80%;
			margin: 20px auto;
			
			&-list {
				
				&__item {
					font-size: 1.2rem;
					border: 1px solid #000;
					border-radius: 5%;
					text-align: center;
					margin-top: 10px;
					
					&:hover {
						opacity: 0.7;
						cursor: pointer;
					}
				}
				
			}
		}
		
	}
	
	.item__header {
		& img {
			width: 150px;
		}
	}
</style>
