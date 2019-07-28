<template>
    <div>
        
        <div
            v-on:click.stop="close"
            v-show="visible"
            v-bind:id="modalId"
            class="modal__overlay">
        </div>
        <div
            v-bind:is="content"
            v-bind="params"
            v-show="visible"
            v-on:close="close"

            class="modal__content">
        >
        </div>

    </div>
	
        

	
</template>

<script>
export default {
    props: { 
            id: Number,
            params: Object,
            visible: Boolean,
            content: Object
            },

    computed: {
        modalId() {
            return "modal" + this.id;
        }
    },

    methods: {
        close() {
            this.$emit('close');
        }
    },

    mounted() {
        this.params.visible = this.visible;
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
