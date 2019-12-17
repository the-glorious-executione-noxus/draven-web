<template>
  <div>
    <h1>{{ msg }}</h1>
    <span v-once>这个将不会改变: {{ msg }}</span>

    <p>Using mustaches: {{ rawHtml }}
    <p>Using v-html directive: <span v-html="rawHtml"> rawHtml </span></p>

    <div v-bind:id="dynamicId"></div>


    <button v-bind:disabled="isButtonDisabled">Button</button>

    <a v-bind:href="url">百度</a>
    <a :href="url">百度</a>

    <p></p>
    {{ number + 1 }}

    {{ message.split('').reverse().join('') }}
    {{ ok ? 'YES' : 'NO' }}
    <!--{{ var a = 1 }}-->
    <!--{{ if (ok) { return message } }}-->


    <p v-if="seen">现在你看到我了</p>

    <a v-on:click="doSomething">button</a>

    <a v-bind:[attributeName]="url"> ... </a>

    <!--<a v-bind:['foo' + bar]="value"> ... </a>-->

    <form v-on:submit.prevent="onSubmit">...</form>
  </div>
</template>
<script>
  export default {
    name: '哇哈哈',
    data() {
      return {
        msg: 'msg',
        rawHtml:'<h1>哇哈哈</h1>',
        isButtonDisabled:true,
        url:'http://www.baidu.com',
        number:1,
        message:'hello',
        ok:'',
        seen:true
      }
    }
  }
</script>

