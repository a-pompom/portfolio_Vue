<template>
	<div id="app">
		<div id="nav" class="header">
		
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
			
			@include flex-between;
			
			&__item {
				
				font-size: 2.6rem;
				border-bottom: 1px solid #4d464f;
				
				&:hover {
					background-color: #f8f8f8;
				}
			}
		}
		
	}
	
</style>
