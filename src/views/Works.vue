<template>
	<div class="works">
		
		<div class="works__title">
			<h1>つくったもの</h1>
		</div>
		
		<div class="works__content">
			
			<ul class="works__content-list">
				<li 
					v-for="(workSummary, index) in worksSummary"
					v-bind:key="workSummary.id"
					v-on:mouseover="focusWork(index)"
					class="works__content-list__item">
					
					<div class="item__header">
						<img v-bind:src="workSummary.appImageSource">
						<h3>{{ workSummary.appName }}</h3>
					</div>
					<works-detail-modal
						v-bind:visible="modalVisibleArray[index]"
						v-bind:index="index"
						v-bind:workDetail="worksDetail[index]">
					</works-detail-modal>
					<ul class="item__icon-list">
					
						<li 
							v-for="(itemIcon, index) in workSummary.appIconList"
							v-bind:key="itemIcon.id"
							class="item__icon-list__image">
							
							<h2 v-if="itemIcon.imgSource === '' ">{{ itemIcon.tagName }}</h2>
							<img v-else v-bind:src="itemIcon.imgSource">
							
							<p>{{ itemIcon.tagName }}</p>
							
						</li>
						
					</ul>
				</li>
			</ul>
			
		</div>
		
		
	
	</div>
</template>

<script>
	
	import worksSummary from "../assets/works_data/works.json";
	import worksDetailModal from "./WorksDetailModal.vue";
	import worksDetail from "../assets/works_data/worksDetail.json";
	
	export default {
		
		data() {
			return {
				worksSummary: worksSummary,
				worksDetail: worksDetail,
				modalVisibleArray: []
			};
		},
		
		components: {
			worksDetailModal: worksDetailModal
		},
		
		methods: {
			
			focusWork(index) {
				
				if (this.isModalVisible) {
					return;
				}
				
				console.log("called by " + index);
				this.modalVisibleArray[index] = false;
				console.log(this.modalVisibleArray);
			}
		},
		
		mounted() {
			for (let i= 0; i < this.worksSummary.length; i++) {
				this.modalVisibleArray.push(true);
			}
			console.log(this.modalVisibleArray);
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
