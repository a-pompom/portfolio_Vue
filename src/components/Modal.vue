<template>
<!-- 
    ・モーダルコンポーネント
    - モーダル要素の表示・非表示をコントロールします。
    - 以下の手順で利用します。
        ・モーダルコンポーネントをimportした後、利用したいコンポーネントのcomponentsプロパティへ設定
            ・params {Object}...描画対象のモーダル要素へ渡す引数をオブジェクト形式で設定
            ・visible {Boolean}...モーダルの可視/不可視をコントロールするプロパティを設定
            ・content {String}...親要素でimportしたモーダル要素を設定 is属性で動的に描画
        ・closeイベントを設定
            →終了イベントがモーダルコンポーネントから親コンポーネントへ伝播されるので、終了処理を親コンポーネントへ記述
 -->
    <div v-show="visible">
        <!-- オーバーレイ要素 要素クリックでモーダルを閉じる -->
        <div
            v-on:click.stop="close"
            class="modal__overlay">
        </div>

        <!-- モーダル要素本体 表示されて初めて幅・高さが決定されるので
            位置を指定する場合は、nextTickを利用した方がよい
            - content: モーダル本体のコンポーネント
            - params: 本体コンポーネントへ渡すprops
            - visible: modal要素の可視
            - closeイベント: 閉じる処理は親要素へ伝播させる  -->
        <div
            v-bind:is="content"
            v-bind="params"
            v-on:close="close"

            class="modal__content">
        </div>

    </div>
    
</template>

<script>
export default {
    /**
     * - params: モーダル要素のコンポーネントへ渡す引数
     * - visible: モーダル要素の可視
     * - content: モーダルコンポーネント本体 is属性で動的に描画させる
     */
    props: { 
            params: Object,
            visible: Boolean,
            content: Object
            },

    methods: {
        // 親コンポーネントへモーダルを閉じるイベントを発火
        close() {
            this.$emit('close');
        }
    }

}
</script>

<style lang="scss" scoped>
    
    // モーダルのオーバーレイ
	.modal__overlay {
		z-index: 999;
		position: fixed;
		top:0;
		left:0;
		width:100%;
		height:120%;
		background-color:rgba(0,0,0,0.7);
	}

    // モーダル本体
	.modal__content {
		z-index: 9999;
		position: fixed;
	}
	
</style>
