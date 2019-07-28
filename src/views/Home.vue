<template>
	<div class="top">
	
		<div class="top__title">
			<h1>(ポム) * (ポム)</h1>
		</div>

		<div class="top__image">
			<img src="../assets/home.png">
		</div>
		
		<!-- TwitterとGitHubリンク -->
		<div class="top__icon-list">
			<a href="https://twitter.com/a_pompomP">
				<img src="../../public/external/twitter.svg">
			</a>
			
			<a href="https://github.com/a-pompom">
				<img src="../../public/external/github.svg">
			</a>
			
		</div>
		
	</div>
	
</template>

<script>
export default {
  name: 'home'
  
}
</script>



<style lang="scss">
	
	.top {
		width: 100%;
		height: 100%;
		margin: 20px auto;		
		
		&__title {
			font-size: 1.7rem;
			font-weight: bold;
			text-align: center;
			margin-right: 3%;
		}
		
		&__image img{
			display: block;
			max-width: 80%;
			
			margin: 10px auto;
		}
		
		//アイコン
		&__icon-list {
			@include flex-center;
			
			margin-right: 3%;
			
			& a:hover {
				opacity: 0.7;
			}
			
			& img {
				display: block;
				width: 120px;
				margin: 5px auto;
			}
			
		}	
		
	}
	
</style>
