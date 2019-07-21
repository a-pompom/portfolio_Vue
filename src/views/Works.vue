<template>
	<div class="works">
		
		<div class="works__title">
			<h1>つくったもの</h1>
		</div>
		
		<div class="works__content">
			
			<ul class="works__content-list">
			
				<li class="works__content-list__item">
				
					<a href="https://github.com/a-pompom/spring-boot-twitter_clone_practice">
						<div class="item__header">
							<img src="../assets/app_capture/tweet_app.png">
							<h3>Twitterクローンアプリ</h3>
						</div>
						
						<ul class="item__icon-list">
							<li class="item__icon-list__image">
								<h2>Spring</h2>		
							</li>
							<li class="item__icon-list__image">
								<img src="../assets/external/java.svg">
								<p>Java</p>
							</li>
							<li class="item__icon-list__image">
								<img src="../assets/external/javascript.svg">
								<p>JavaScript</p>
							</li>
							<li class="item__icon-list__image">
								<img src="../assets/external/vue-dot-js.svg">
								<p>Vue.js</p>
							</li>
						</ul>
						
					</a>
					
				</li>
				
				<li class="works__content-list__item">
				
					<a href="https://github.com/a-pompom/vue-markdown-editor">
						<div class="item__header">
							<img src="../assets/app_capture/markdown_app.png">
							<h3>Markdownエディタっぽいやつ</h3>
						</div>
						
						<ul class="item__icon-list">
							<li class="item__icon-list__image">
								<img src="../assets/external/javascript.svg">
								<p>JavaScript</p>
							</li>
							<li class="item__icon-list__image">
								<img src="../assets/external/vue-dot-js.svg">
								<p>Vue.js</p>
							</li>
						</ul>
						
					</a>
					
				</li>
				
				<li class="works__content-list__item">
				
					<a href="https://github.com/a-pompom/wg/tree/master/kintone_report">
						<div class="item__header">
							<img src="../assets/app_capture/kintone_report_app.png">
							<h3>kintoneを利用して日報っぽい文章を作成するエディタ</h3>
						</div>
						
						<ul class="item__icon-list">
							<li class="item__icon-list__image">
								<h4>Kintone</h4>
							</li>
							<li class="item__icon-list__image">
								<img src="../assets/external/javascript.svg">
								<p>JavaScript</p>
							</li>
							<li class="item__icon-list__image">
								<img src="../assets/external/vue-dot-js.svg">
								<p>Vue.js</p>
							</li>
						</ul>
						
						
					</a>
					
				</li>
				
				<li class="works__content-list__item">
				
					<a href="https://github.com/a-pompom/spring-boot-login_app_demo">
						<div class="item__header">
							<img src="../assets/app_capture/springboot-security.png">
							<h3>SpringBoot + SpringSecurityでログイン機能の作成</h3>
						</div>
						
						<ul class="item__icon-list">
							<li class="item__icon-list__image">
								<h2>Spring</h2>		
							</li>
							<li class="item__icon-list__image">
								<img src="../assets/external/java.svg">
								<p>Java</p>
							</li>
						</ul>
					</a>
					
				</li>
				
				
				
				
			</ul>
			
		</div>
	
	</div>
</template>

<script>
	
	import worksSummary from "../assets/works_data/works.json";
	
	export default {
		
		data() {
			worksSummary: worksSummary
		}
		
	}
	
</script>


<style lang="scss" scoped>
	
	.works {
		
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
					margin-top: 30px;
					
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
