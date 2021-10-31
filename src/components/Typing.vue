<template>
    <div id="typing" class="container">
        <div class="title">
            <h1>Typing Game</h1>
            <div class="marker"></div>
        </div>
        <b-button v-if="startFlg!=true" class="mb-20" @click="gameStart">START</b-button>
        <!-- <button v-if="startFlg!=true" class="startButton mb-20" @click="gameStart">START</button> -->
        <div v-if="startFlg">
            <div class="question mb-20">{{ current_question}}</div>
            <div v-if="current_questions_counts == questions_counts" class="clear">CLEAR!</div>
            <div class="typeFormWrapper mb-20">
                <input id="typeForm" v-model="typeBox" type="text" class="typeForm">
            </div>
            <div class="gaugeWrapper">
                <div v-bind:style="styleObject" class="gauge"></div>
            </div>
            <div>{{current_questions_counts}}/{{questions_counts}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                startFlg:"",
                current_question:"",
                questions:[
                    'apple',
                    'banana',
                    'chocolate',
                    'donut',
                    'espresso',
                ],
                typeBox:"",
                current_questions_counts:0,
                questions_counts:0
            }
        },
        computed: {
            styleObject(){
                let width = 20 * this.current_questions_counts + "%";
                let color = "";
                if(this.current_questions_counts == 5) {
                    color = "#03a9f4";
                }else{
                    color = "orange";
                }
                return{
                    'width':width,
                    'background-color':color
                }
            }
        },
        methods:{
            gameStart(){
                this.startFlg = true;
                this.$nextTick(function(){
                    document.getElementById('typeForm'),forcus()
                })
            }
        },
        mounted(){
            this.current_question = this.questions[0]
            this.questions_counts = this.questions.length
        },
        watch:{
            typeBox(e){
                if(e == this.current_question) {
                    this.questions.splice(0,1)
                    this.current_question = this.questions[0]
                    this.typeBox = ""
                    this.current_questions_counts = this.current_questions_counts + 1

                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    *{
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    }

    body{
        font-size: 32px;
        .mb-20{
            margin-bottom: 20px;
        }
        .container{
            width: 400px;
            margin: 0 auto;
            text-align: center;
        }
        .title{
            position: relative;
            font-size: 48px;
        }
        .marker{
            width: 100%;
            height: 35%;
            background-color: #a2a2a270;
            position: absolute;
            bottom: 5%;
            z-index: -1;
        }
        .startButton{
            background-color: #333;
            color: #fff;
            padding: 4px 60px;
            border: none;
            outline: none;
            border-radius: 8px;
            cursor: pointer;
            &:hover{
                opacity: 0.7;
            }
        }
        .question{
            color: gray;
        }
        .clear{
            color: aqua;
        }
        .typeForm{
            outline: none;
            border: none;
        }
        .typeFormWrapper{
            border-bottom: solid 1px gray;
        }
        .gauge{
            height: 12px;
            transition: all .3s ease;
        }
        .gaugeWrapper{
            border: 1px solid;
        }
    }
</style>