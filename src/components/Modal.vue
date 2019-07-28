<template>
	<div
        v-on:click="close"
        v-show="visible"
        class="modal__overlay">

        <modal-content 
            v-bind:params="params"
            v-show="visible"
            v-on:close="close"

            class="modal__content">
        </modal-content>

	</div>
</template>

<script>
export default {
    props: { 
            params: Object,
            visible: Boolean,
            content: Object
            },

    components: {
        modalContent: this.content
    },

    methods: {
        close() {
            this.$emit('closeEmit');
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
