<template>
    
    <div class="item-mask">
        <h2 class="item-mask--text">
            Read More...
        </h2>
	</div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

    // フォーカスでオーバーレイ要素で「Read More」テキストを表示
	.item{
		// width: 100%;
		// height: 100%;
		// margin: 0;

		// position: relative;
  		// overflow: hidden;

		//各要素に覆いかぶさるオーバーレイ要素
		&-mask {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 99;

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


</style>
