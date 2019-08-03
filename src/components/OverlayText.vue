<template>
    <!-- 
        オーバーレイテキストコンポーネント 要素にフォーカスで薄黒のマスクをかけてテキストを表示します
        以下の手順で利用します。
        - オーバーレイテキストを設定したい要素を当該コンポーネントのslot要素として記述します
        - propsとして「textContent」をStringで渡します
        - デフォルトのトランジションとして、ホバー時に1.1sで表示するようにしています
     -->
     <div
        v-on:mouseover="visible = true"
        v-on:mouseleave="visible = false" 
        class="item">
        
        <!-- オーバーレイが覆いかぶさる要素 -->
        <slot></slot>

        <!-- オーバーレイ要素 フォーカス時に表示し、フォーカスが外れると非表示となる -->
        <transition name="overlay">
            <div
               v-show="visible"

               class="item-mask">
                   <h2 class="item-mask--text">
                       {{ textContent }}
                   </h2>
            </div>
        </transition>
         
     </div>
    

</template>

<script>
export default {

    props: {
        textContent: String
    },

    data() {
        return {
            visible: false
        }
    }


}
</script>

<style lang="scss" scoped>

    // オーバーレイが覆いかぶさる要素
	.item{
		width: 100%;
		height: 100%;
		margin: 0;

		position: relative;
  		overflow: hidden;

		// オーバーレイ要素 薄黒のマスクをかける
		&-mask {
			position: absolute;
			top: 0;
			left: 0;
			z-index: 99;

			width: 100%;
			height: 100%;
			background: rgba(0,0,0,.6);

            // フォーカスで表示されるテキスト
			&--text {
                padding-top: 25%;
				width: 100%;
				height: 100%;
				color: #fff;
				margin: 0;

            }
		}
    }

    // アニメーション
     .overlay-enter, .overlay-leave-to {
        opacity: 0;
    }
    .overlay-enter-active, .overlay-leave-active {
        transition: opacity 1.1s;
           
    }

</style>
