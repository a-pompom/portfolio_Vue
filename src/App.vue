<template>
	<div id="app">

		<div id="nav" class="header">
		
			<!-- ナビゲーションメニュー -->
			<ul class="header--nav-list">
				<li class="header--nav-list__item">
					<router-link to="/">Home</router-link>
				</li>
				<li class="header--nav-list__item">
					<router-link to="/profile">Profile</router-link>
				</li>
				<li class="header--nav-list__item">
					<router-link to="/works">Works</router-link>
				</li>
				<li class="header--nav-list__item">
					<router-link to="/social">Social</router-link>
				</li>
			</ul>
	
		</div>
		
		<router-view/>
	</div>
</template>

<style lang="scss">
	
	.header {
		
		width: 80%;
		margin: 5px auto;
		
		&--nav-list {
			width: 90%;

			// 縦長では2つずつ、横長では全体を横並びで表示
			@include for-landscape() {
				@include flex-between;
			}
			@include for-portrait() {
				@include flex-table;
			}
			
			&__item {
				// 縦長のときは2つずつかつ文字を中央寄せになるようレイアウト調整
				@include for-portrait() {
					width: 45%;
					font-size: 2.3rem;
					text-align: center;
				}
				
				font-size: 2.6rem;
				border-bottom: 1px solid #4d464f;
				
				&:hover {
					background-color: #f8f8f8;
				}
			}
		}
		
	}
	
</style>
