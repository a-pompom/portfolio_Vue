<template>
	<div class="profile">
	
		<div class="profile__title">
			<h1>プロフィール</h1>
		</div>
		
		<div class="profile__content">
			
			<!-- アイコン -->
			<div class="profile__content--image">
			
				<img src="../assets/profile.jpg">
				<p>よく使うアイコン</p>
				
				<img src="../assets/profile_2.png">
				<p>ノリと勢いで描いたアイコン</p>
			</div>
			
			<!-- 自己紹介テキスト -->
			<div class="profile__content--text">
				<h3>名前: &nbsp; a-pompom</h3>
				<p>pompomは隣の黄色い彼からきています。</p>
				<h3>好きな言語: &nbsp; JavaScript</h3>
				<p>もう少し仲良くなりたい</p>
				
				<hr>
				
				<h3>趣味:</h3>
				<h5>読書</h5>
				<p>技術書から小説まで何でも読みます。脳内ファンタジア。</p>
				<h5>英語</h5>
				<p>学生時代にもっと頑張っておけばよかった人生。</p>
				<p>Podcastが通勤のおともです。</p>
				<h5>お絵描き</h5>
				<p>同人誌を出せば在庫の達人になる程度。</p>
				<p>もっと頑張りたい。</p>
			</div>
			
		</div>	
	</div>
</template>


<style lang="scss" scoped>
	
	.profile {
		
		&__title {
			
			text-align: center;
			
		}
		
		&__content {
			
			@include flex-center;
			
			&--image {
				
				text-align: center;
				margin-right: 5%;
				
				& img {
					width: 300px;
					border-radius: 50%;
				}
				
				
			}
			
			&--text {
				font-size: 1.3rem;
			}
		}
	}
	
</style>