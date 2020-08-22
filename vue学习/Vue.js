

let vm = new Vue({
    el: '#app',
    data:{
        num1: 33.141,
        num2: 45.687,
        num3: 31    
    },
    show(){
        console.log($data);
        console.log($el);
    },
    //过滤器
    // filters:{
    //     toFloat(value){
    //         return parseFloat(value);
    //     }
    // },
    //计算属性
    computed:{
        add(){
            var n = this.num2 + 1;
            return n;
        }
    },
    //方法
    methods:{
        plus(){
            return this.num2++;
        }
    },
    //观察
    watch:{
        num3(){
            console.log('有变化了，最新值：');
            console.log(this.num3);
        }
    }
});