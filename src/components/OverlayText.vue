<template>
    <!-- 
        オーバーレイテキストコンポーネント 要素にフォーカスで薄黒のマスクをかけてテキストを表示します
        以下の手順で利用します。
        - オーバーレイテキストを表示させたいクラスの子要素として当該コンポーネントを設定
        - propsとして「textContent」をStringで渡します
        ex) <overlay-text
                v-bind:textContent="'Read More...'"
            >
            </overlay-text>
     -->
    <div class="item-mask">
        <h2 class="item-mask--text">
            {{ textContent }}
        </h2>
	</div>

</template>

<script>
export default {

    props: {
        textContent: String
    }

}
</script>

<style lang="scss" scoped>

    // itemクラスの中身はオーバーレイコンポーネントを子に持つクラスで定義が必要
	.item{
		// width: 100%;
		// height: 100%;
		// margin: 0;

		// position: relative;
  		// overflow: hidden;

		// オーバーレイ要素 薄黒のマスクをかける
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

            // フォーカスで表示されるテキスト
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
