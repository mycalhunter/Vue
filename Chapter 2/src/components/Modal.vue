<template>
    <!-- click event on self to fire closeModal function -->
    <div class="backdrop" @click.self="closeModal">

        <!-- add 'sale' class if theme on App.vue = sale -->
        <div class="modal" :class="{ sale: theme === 'newfwef'}">

            <!-- slot content from <Modal> CONTENT </Modal> -->
            <slot>
                <!-- fall back if no default content in App.vue -->
                default content
            </slot>
            
            <div class="actions">

                <!-- calling named slot from App.vue -->
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['theme'],
        methods: {
            closeModal() {
                this.$emit('close')
                // send 'close' event to App.vue to listen for
            }
        }
    }
</script>

<style>
    .modal {
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }
    .backdrop {
        top: 0;
        position: fixed;
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
    }
    .modal h1 {
        color: #03cb4a;
        border: none;
        padding: 0;
    }
    .modal p {
        font-style: normal;
    }
    .modal.sale {
        background: crimson;
        color: white;
    }
    .modal.sale h1 {
        color: white;
    }
    .modal .actions {
        text-align: center;
        margin: 30px 0 10px 0;
    }
    .modal .actions a {
        color: #333;
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }
    .modal.sale .actions {
        color: white;
    }
    .modal.sale .actions a {
        color: white;
    }
</style>